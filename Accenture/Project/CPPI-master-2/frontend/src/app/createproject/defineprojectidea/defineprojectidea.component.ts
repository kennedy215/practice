import {
  Component, OnInit, HostBinding, trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { PresentationTypeWeightageApi, PresentationTypeApi, ProjectApi, ProjectUploadApi } from '../../shared/sdk/services/index';
import { Project, ProjectType, PresentationTypeWeightageInterface, PresentationTypeInterface } from '../../shared/sdk/models/index';
import { Observable } from "rxjs/Rx";
import { StepState } from "@covalent/core";
import { slideInDownAnimation } from '../../app.animations';
import { TdLoadingService, TdFileService, IUploadOptions } from '@covalent/core';
import { LoopBackFilter } from '../../shared/sdk/models';
import { BASE_URL, API_VERSION } from '../../shared/base.url';
import { LoopBackConfig } from '../../shared/sdk/index';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UploadContainer } from "../shared/index";

@Component({
  selector: 'app-defineprojectidea',
  templateUrl: './defineprojectidea.component.html',
  styleUrls: ['./defineprojectidea.component.css'],
  animations: [slideInDownAnimation,
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-10%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])],
  providers: [TdFileService]//
})
export class DefineProjectIdeaComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  loading: boolean = false;
  loadingStepTwo: boolean = false;
  private commonPresentations: Observable<any[]>;
  private otherPresentations: Observable<any[]>;
  private imageList: string[] = new Array<string>();
  private projectId: string = '';
  private isRedirectFromDel: boolean;
  private isRedirectFromGoal: boolean;
  currentProject: Project;
  activateStep1: boolean;
  activateStep2: boolean;
  activateStep3: boolean;
  selectedFileContainer1: UploadContainer;
  selectedFileContainer2: UploadContainer;
  selectedFileContainer3: UploadContainer;
  selectedFileContainer4: UploadContainer;
  constructor(private projectService: ProjectService,
    private _loadingService: TdLoadingService,
    private _presentationTypeWeightageApi: PresentationTypeWeightageApi,
    private _presentationTypeApi: PresentationTypeApi,
    private _projectApi: ProjectApi,
    private _projectUploadApi: ProjectUploadApi,
    private route: ActivatedRoute,
    private fileUploadService: TdFileService,
    private router: Router) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    this._loadingService.register('loading');
    this._loadingService.register('loadingStepTwo');

    this.route.queryParams.subscribe((param) => {
      if (param.goal) {
        console.log("Redirected from goal");
        this.activateStep1 = true;
        this.isRedirectFromGoal = true;
      } else if (param.deliverables) {
        console.log("Redirected from Deleverables");
        this.stateStep1 = StepState.Complete;
        this.activateStep2 = true;
        this.isRedirectFromDel = true;
      }
    });

    this.route.parent.params
      .switchMap((params) => {
        return this.projectService.getProject(params['id'])
      })
      .subscribe((project) => {
        this.currentProject = project;
        if (this.currentProject.selectedPresentationTypes) {
          this.stateStep2 = this.currentProject.selectedPresentationTypes.length > 0 ? StepState.Complete : StepState.None;
        }
        this.loading = false;
      });
  }
  onSelectPotentialTarget(potentialTarget: any): void {
    this.currentProject.target = potentialTarget.title;
  }
  onSelectPotentialMotivation(potentialMotivation: any): void {
    this.currentProject.motivation = potentialMotivation.title;
  }

  stateStep1: StepState = StepState.None;
  stateStep2: StepState = StepState.None;
  stateStep3: StepState = StepState.None;


  eRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);

    if (this.stateStep3 === StepState.Complete) {
      if (this.currentProject.id) {
        this.loading = true;
        this._projectApi.upsertWithWhere({ id: this.currentProject.id }, this.currentProject).subscribe((resp: Project) => {
          console.log("submitted");
          this.loading = false;
          //Set selected presenation types in local project
          this.projectService.setSelectedPresentationTypes(resp.selectedPresentationTypes);
          this.navigateToIdeaParameters();
        });

      } else {
        //Create a project and redirect to the url
        this.currentProject.projectPhase = "start";
        this.currentProject.lastUpdatedBy = "vsoni";
        this.currentProject.createdBy = "vsoni";
        this.currentProject.lastUpdatedOn = new Date();
        this.currentProject.createdOn = new Date();
        this.loading = true;
        this._projectApi.create(this.currentProject).subscribe((project: Project) => {
          //this.projectService.setProject(project);
          this.loading = false;
          this.currentProject = project;
          this.projectService.setProjectId(project.id);
          if (this.selectedFileContainer1 || this.selectedFileContainer2 || this.selectedFileContainer3 || this.selectedFileContainer4) {
            this.loading = true;
            let observ = [];
            if (this.selectedFileContainer1) {
              observ.push(this.selectedFileContainer1.uploadProjectDocuments(project.id));
            }
            if (this.selectedFileContainer2) {
              observ.push(this.selectedFileContainer2.uploadProjectDocuments(project.id));
            }
            if (this.selectedFileContainer3) {
              observ.push(this.selectedFileContainer3.uploadProjectDocuments(project.id));
            }
            if (this.selectedFileContainer4) {
              observ.push(this.selectedFileContainer4.uploadProjectDocuments(project.id));
            }
            Observable.forkJoin(observ).subscribe((respArr) => {
              respArr.forEach((resp: any) => {
                this.projectService.addProjectUploads(resp);
              });
              this.loading = false;
              this.navigateToIdeaParameters();
            });
          } else {
            this.navigateToIdeaParameters();
          }
        });
      }
    }
  }

  navigateToIdeaParameters() {
    this.router.navigateByUrl(`createproject/${this.currentProject.id}/ideaparameters`);

  }

  activeStep1Event(): void {
    this.stateStep1 = StepState.None;
  }

  activeStep2Event(): void {
    this.loadingStepTwo = true;
    this._presentationTypeWeightageApi.getPresentationTypesForTarget(this.currentProject.target).subscribe((presentationTypes) => {
      this.commonPresentations = Observable.of(presentationTypes["commonPresentations"]).share();
      this.otherPresentations = Observable.of(presentationTypes["otherPresentations"]).share();
      this.loadingStepTwo = false;

      if (this.isRedirectFromDel || this.isRedirectFromGoal) {
        this.imageList = [];
        Observable.forkJoin([this.commonPresentations, this.otherPresentations]).subscribe((presentations: Array<Array<any>>) => {
          presentations.forEach((presentation) => {
            presentation.forEach((pres) => {
              let isPresentationSelected = this.currentProject.selectedPresentationTypes.find((spt: string) => {
                return spt === pres.presentationTypeId;
              });
              if (isPresentationSelected) {
                this.imageList = this.imageList.concat(pres.samples);
              }
            });
          });
        });
      }

    }, err => {
      console.log(err);
    });
  }

  checkPresentationSelected(presentation): boolean {
    if (this.currentProject.selectedPresentationTypes === undefined) this.currentProject.selectedPresentationTypes = new Array<string>();
    return this.currentProject.selectedPresentationTypes.includes(presentation.presentationTypeId, 0);
  }

  onSelectPresentation(presentation): void {
    if (this.checkPresentationSelected(presentation)) {
      this.manageImageSamplesList(presentation, true);
      var index = this.currentProject.selectedPresentationTypes.indexOf(presentation.presentationTypeId, 0);
      this.currentProject.selectedPresentationTypes.splice(index, 1);
    } else {
      this.manageImageSamplesList(presentation, false);
      this.currentProject.selectedPresentationTypes.push(presentation.presentationTypeId);
    }
    this.stateStep2 = this.currentProject.selectedPresentationTypes.length > 0 ? StepState.Complete : StepState.None;
  }

  manageImageSamplesList(presentation: any, needToDelete: boolean): void {
    presentation.samples.forEach(url => {
      if (!needToDelete) {
        this.imageList.unshift(url);
      } else {
        var index = this.imageList.indexOf(url, 0);
        if (index !== -1) this.imageList.splice(index, 1);
      }
    });
  }
  deactiveStep1Event(): void {
    if (!this.currentProject.title || !this.currentProject.target || !this.currentProject.motivation) {
      this.stateStep1 = StepState.Required;
    } else {
      this.stateStep1 = StepState.Complete;
    }
  }

  uploadProjectPart1(event: UploadContainer) {
    //delete (this.currentProject.relProjectType);
    if (!this.currentProject.id) {
      this.currentProject.projectPhase = "start";
      this.currentProject.lastUpdatedBy = "vsoni";
      this.currentProject.createdBy = "vsoni";
      this.currentProject.lastUpdatedOn = new Date();
      this.currentProject.createdOn = new Date();
      console.log("There is no project, creating new project");
      this.loading = true;
      this._projectApi.create(this.currentProject).subscribe((project: Project) => {
        console.log("project created successfully");
        this.loading = false;
        //this.projectService.setProject(project);
        this.currentProject = project;
        this.projectService.setProjectId(project.id);
        console.log("uploading project documents");
        this.loading = true;
        event.uploadProjectDocuments(this.currentProject.id).subscribe((resp) => {
          this.projectService.addProjectUploads(resp);
          this.loading = false;
          console.log("documents uploaded successfully");
        });

      });
    } else {
      this.loading = true;
      event.uploadProjectDocuments(this.currentProject.id).subscribe((resp) => {
        this.projectService.addProjectUploads(resp);
        this.loading = false;
      });
    }
  }

  uploadEventPart2(files: FileList | File): void {
    // save a new project
    if (!this.currentProject.id) {

    }

    if (files instanceof FileList) {

    } else {

    }
  }

  isStepTwoDisabled(): boolean {
    let isStep1Completed = (this.currentProject.title !== undefined && this.currentProject.target !== undefined && this.currentProject.motivation !== undefined);
    return !isStep1Completed!
  }

  isStepThreeDisabled(): boolean {
    return this.isStepTwoDisabled();
  }

  setFileContainer1(uploadContainer: UploadContainer) {
    this.selectedFileContainer1 = uploadContainer;
  }
  setFileContainer2(uploadContainer: UploadContainer) {
    this.selectedFileContainer2 = uploadContainer;
  }
  setFileContainer3(uploadContainer: UploadContainer) {
    this.selectedFileContainer3 = uploadContainer;
  }
  setFileContainer4(uploadContainer: UploadContainer) {
    this.selectedFileContainer4 = uploadContainer;
  }
}