import {
  Component, OnInit, HostBinding, trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  Inject, TemplateRef, ViewChild
} from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { PresentationTypeWeightageApi, PresentationTypeApi, ProjectApi, ProjectUploadApi, RoleApi, ProjectRoleApi } from '../../shared/sdk/services/index';
import { Project, ProjectType, PresentationTypeWeightageInterface, PresentationTypeInterface ,Role, ProjectRole} from '../../shared/sdk/models/index';
import { Observable } from "rxjs/Rx";
import { StepState } from "@covalent/core";
import { slideInDownAnimation } from '../../app.animations';
import { TdLoadingService } from '@covalent/core';
import { LoopBackFilter } from '../../shared/sdk/models';
import { BASE_URL, API_VERSION } from '../../shared/base.url';
import { LoopBackConfig } from '../../shared/sdk/index';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DragDropDirectiveModule} from "angular4-drag-drop";

@Component({
  selector: 'app-definerolesandskills',
  templateUrl: './definerolesandskills.component.html',
  styleUrls: ['./definerolesandskills.component.css'],
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
    ])]
})
export class DefineRolesAndSkillsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
 
 dialogRef: MdDialogRef<SkillDialog>;

  config: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '40%',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      roleTitle:'',
      message: '',
      otherSkills:[],
      commonSkills: []
    }
  };

  @ViewChild(TemplateRef) template: TemplateRef<any>;
 private role1:ProjectRole= new ProjectRole();

   
  private   role2:ProjectRole= new ProjectRole();
	private itemsDropped:Array<any> = [];
  	private itemsToDrop:Array<Object> = [
		{
			roleName: 'Test Role',
			resourceCount: 'desctiption 1'
		},
		{
			roleName: 'Test Role 2',
			resourceCount: 'desctiption 2'
		},
		{
			roleName: 'Test Role 3',
			resourceCount: 'desctiption 3'
		},
	]


   
  loading: boolean = false;
  loadingStepTwo: boolean = false;
   selectedOption: string;
  private commonPresentations: Observable<any[]>;
  private otherPresentations: Observable<any[]>;
  private selectedRoles: ProjectRole[]= new Array<ProjectRole>();
    private commonRoles: Observable<any[]>;
    private defaultRoles: any[]= new Array<any>();
  private otherRoles: any[]=new Array<any>();
  private imageList: string[] = new Array<string>();
  private presentationTypeList: string[]=new Array<string>();
  private projectId: string = '';
  currentProject: Project;

  constructor(private projectService: ProjectService,
    private _loadingService: TdLoadingService,
    private _presentationTypeWeightageApi: PresentationTypeWeightageApi,
    private _presentationTypeApi: PresentationTypeApi,
    private _projectApi: ProjectApi,
    private _projectUploadApi: ProjectUploadApi,
    private _roleApi: RoleApi,
    private _projectRoleApi: ProjectRoleApi,
    private route: ActivatedRoute,
    public dialog: MdDialog,
     @Inject(DOCUMENT) doc: any, 
     private router: Router) {
       console.log('constructor called');
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    
     // Possible useful example for the open and closeAll events.
    // Adding a class to the body if a dialog opens and
    // removing it after all open dialogs are closed
   /* dialog.afterOpen.subscribe(() => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
    //  this.router.navigate(['../']);
      doc.body.classList.remove('no-scroll');
    });
    */

  //  this.openModal();
  }
  ngOnInit () {
    console.log("Init called");
    this.loading = true;
    this._loadingService.register('loading');
    this._loadingService.register('loadingStepTwo');
    this.presentationTypeList.push('59240016a1706c50a1b81250');
    this.presentationTypeList.push('592400c4a1706c50a1b81251');
    console.log("Init called");
    this.getRoles();
    this.route.parent.params
      .switchMap((params) => this.projectService.getProject(params['id']))
      .subscribe((project) => {
        this.currentProject = project;
        console.log(this.currentProject);
        this.loading = false;
      });

  }
  openSkills(roleName) {
    this.config.data.roleTitle=roleName;
    this.config.data.commonSkills.length=0;
    this.config.data.otherSkills.length=0;
    this.config.data.commonSkills.push('Microsoft Word');
    this.config.data.commonSkills.push('Microsoft Project');
    this.config.data.otherSkills.push('Microsoft Powerpoint');
    this.config.data.otherSkills.push('Trello');
    this.config.data.otherSkills.push('Microsoft Access');
    this.config.data.otherSkills.push('Microsoft Excel');
 
    this.dialogRef = this.dialog.open(SkillDialog, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.dialogRef = null;
    });
  }

  getRoles(): void {
    this._roleApi.getRolesForPresentationTypes(this.presentationTypeList).subscribe((roles) => {
      this.commonRoles = Observable.of(roles["commonRoles"]).share();
     // this.otherRoles1 = Observable.of(roles["otherRoles"]).share();
      this.defaultRoles= roles["commonRoles"];
       this.otherRoles= roles["otherRoles"];
       console.log("Other Roles");
       console.log(this.otherRoles);
      for (let entry of this.defaultRoles) {
        
        var projRole = new ProjectRole();
        projRole.roleName=entry.roleName;
        projRole.requiredUserCount= entry.resourceCount;
        projRole.createdBy= 'admin';
        projRole.lastUpdatedBy= 'admin';
        projRole.lastUpdatedOn= new Date();
        projRole.createdOn= new Date();
        this.selectedRoles.push(projRole);
      //  console.log(entry); // 1, "string", false
      }
      
      this.loadingStepTwo = false;
      console.log("printing selected roles");
      console.log(this.selectedRoles);
      }, err => {
      console.log(err);
    });
  }


  checkRoleSelected (role): boolean {
    /*if (this.currentProject.selectedPresentationTypes === undefined) this.currentProject.selectedPresentationTypes = new Array<string>();
    return this.currentProject.selectedPresentationTypes.includes(presentation.presentationTypeId, 0);*/
    return false;
  }

 /* onSelectRole (role): void {
   /* if (this.checkPresentationSelected(presentation)) {
      this.manageImageSamplesList(presentation, true);
      var index = this.currentProject.selectedPresentationTypes.indexOf(presentation.presentationTypeId, 0);
      this.currentProject.selectedPresentationTypes.splice(index, 1);
    } else {
      this.manageImageSamplesList(presentation, false);
      this.currentProject.selectedPresentationTypes.push(presentation.presentationTypeId);
    }
  }*/
  
   onSelectRole(selectedRole: string) {
     
  /*   thisRole:{};
     thisRole.roleName=selectedRole;
     thisRole.resourceCount=1;
     this.commonRoles.push(thisRole);*/
  }
  redirectToDefineIdea() {
     this.router.navigateByUrl(`createproject/${this.currentProject.id}/ideaparameters`);
       };

    saveRolesAndSkills(currentProject) {
      
    this._projectApi.deleteRelProjectRoles(this.currentProject.id, null).subscribe((project) =>{
    this._projectApi.createManyRelProjectRoles(this.currentProject.id, this.selectedRoles ).subscribe((project) => {
    this.projectService.setRolesDefined(true);
    this.router.navigateByUrl(`createproject/${this.currentProject.id}/posttomarketplace`);
    this.currentProject = project;

      });
    });
   
      
 

    
  }
  
    addDropItem(event){
 //     alert("drop item added");
 
  var projRole = new ProjectRole();
        projRole.roleName=event.roleName;
        projRole.requiredUserCount= 1;
        projRole.createdBy= 'admin';
        projRole.lastUpdatedBy= 'admin';
        projRole.lastUpdatedOn= new Date();
        projRole.createdOn= new Date();
        this.selectedRoles.push(projRole);

  }
  
  releaseDrop(event){

  	let index = this.otherRoles.indexOf(event);

  	if (index >= 0){
  		this.otherRoles.splice(index,1);
  	}
  }
  decrement(role){
    if (role.requiredUserCount==1)
    {
      let index = this.selectedRoles.indexOf(role);

    	if (index >= 0){
    		this.selectedRoles.splice(index,1);
    		let otherRole = {
            roleName: role.roleName,
            resourceCount: role.requiredUserCount
        }
    		this.otherRoles.push(otherRole);
    	}
    }
    else
    {
      role.requiredUserCount=role.requiredUserCount-1;
    }
  }
  
 /* startDrag(item){
      console.log("drag start");
  }
  
  dragEnter(event)
  { console.log("drag enter");
    }
  dragLeave()
  { console.log("drag leave");
  }*/
  
}

@Component({
  selector: 'skill-dialog',
  templateUrl: './skill-dialog.html'

})
export class SkillDialog {
  constructor(public dialogRef: MdDialogRef<SkillDialog>, @Inject(MD_DIALOG_DATA) public data: any) { }
}

