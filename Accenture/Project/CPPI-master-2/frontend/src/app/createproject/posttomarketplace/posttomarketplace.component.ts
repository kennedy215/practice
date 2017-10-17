import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

import { Project, ProjectUpload } from '../../shared/sdk/models/index';
import { LoopBackConfig, ProjectApi, ContainerApi } from '../../shared/sdk/index';
import { ProjectService } from '../../Services/project.service';
import { TdLoadingService } from '@covalent/core';
import { BASE_URL, API_VERSION } from '../../shared/base.url';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { AddFilesComponent } from './add-files/add-files.component';
import { UploadContainer } from "../shared/index";

@Component({
  selector: 'app-posttomarketplace',
  templateUrl: './posttomarketplace.component.html',
  styleUrls: ['./posttomarketplace.component.css']
})
export class PostToMarketplaceComponent implements OnInit {
  loading: boolean = false;
  private projectId: string = '';
  currentProject: any;
  localStoreProject: Project;
  selectedTools: string;
  dialogRef: MdDialogRef<CongratulationComponent>;
  fileDialogRef: MdDialogRef<AddFilesComponent>;

  get pocket1Uploads() {
    if (this.currentProject && this.currentProject.relProjectUploads && this.currentProject.relProjectUploads.length > 0) {
      let uploads = this.currentProject.relProjectUploads.filter((relUpload: ProjectUpload) => {
        return relUpload.container === `${this.currentProject.projectId}_upload1`;
      })
      return uploads;
    }
    return []
  }

  get pocket2Uploads() {
    if (this.currentProject && this.currentProject.relProjectUploads && this.currentProject.relProjectUploads.length > 0) {
      let uploads = this.currentProject.relProjectUploads.filter((relUpload: ProjectUpload) => {
        return relUpload.container === `${this.currentProject.projectId}_upload2`;
      })
      return uploads;
    }
    return []
  }

  get pocket3Uploads() {
    if (this.currentProject && this.currentProject.relProjectUploads && this.currentProject.relProjectUploads.length > 0) {
      let uploads = this.currentProject.relProjectUploads.filter((relUpload: ProjectUpload) => {
        return relUpload.container === `${this.currentProject.projectId}_upload3`;
      })
      return uploads;
    }
    return []
  }

  get pocket4Uploads() {
    if (this.currentProject && this.currentProject.relProjectUploads && this.currentProject.relProjectUploads.length > 0) {
      let uploads = this.currentProject.relProjectUploads.filter((relUpload: ProjectUpload) => {
        return relUpload.container === `${this.currentProject.projectId}_upload4`;
      })
      return uploads;
    }
    return []
  }

  config: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '859px',
    height: '517px',
    data: {}
  };
  fileDlgConfig: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',

  }
  constructor(private _loadingService: TdLoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectApi: ProjectApi,
    private containerApi: ContainerApi,
    public dialog: MdDialog) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }



  ngOnInit() {
    this.projectService.setNavigationHeader('Post to Marketplace');
    this.route.parent.params
      .switchMap((params) => {
        this.loading = true;
        return this.projectService.getProject(params['id'])
      }).subscribe((project) => {
        console.log("Getting project synopsis" + project.id);
        this.localStoreProject = project;
        //Get info about project that will be posted in market place
        this.loading = true;
        this.projectApi.getProjectSynopsis(project.id).subscribe(proj => {
          console.log("Project info from server is");
          console.log(proj);
          this.currentProject = proj;
          this.currentProject.relProjectUploads = project.relProjectUploads;
          console.log(this.pocket1Uploads);

          this.selectedTools = "None of the tools are selected";
          if (this.currentProject.tools[0] !== null) {
            this.selectedTools = this.currentProject.tools[0].map((st) => {
              return st.toolName;
            }).join(", ");
          }
          this.loading = false;
        });
      });


  }
  getFileClass(fileName) {
    //split the upload name
    let defaultClass = "fa fa-file";
    if (fileName) {
      let fragments = fileName.split(".");
      //get the last fragment part
      let ext = fragments[fragments.length - 1];
      switch (ext) {
        case "txt":
          return "fa fa-file-text";
        case "pdf":
          return "fa fa-file-pdf-o";
        case "doc":
          return "fa fa-file-word-o"
        default:
          return defaultClass;
      }
    } else {
      return defaultClass;
    }
  }

  downloadFile(file) {
    var link = document.createElement("a");
    link.download = file.name;
    link.href = `${BASE_URL}/${API_VERSION}/containers/${file.container} /download/${file.physicalFileName}`;
    link.click();
  }

  postProjectToMarket(project: any) {

    project.title = project.name;
    project.motivation = project.target;
    project.projectPhase = this.localStoreProject.projectPhase;
    project.lastUpdatedBy = "vsoni";
    project.lastUpdatedOn = new Date();
    project.createdBy = "vsoni";
    project.createdOn = new Date();
    this.loading = true;
    this.projectApi.upsertWithWhere({ id: this.localStoreProject.id }, project).subscribe((resp: Project) => {
      this.projectApi.postJobToMarketplace(this.localStoreProject.id).subscribe((resp) => {
        console.log("submitted");
        this.loading = false;
        //Set selected presenation types in local project
        //Open a dialog box to show congratulations
        this.dialogRef = this.dialog.open(CongratulationComponent, this.config);

        this.dialogRef.afterClosed().subscribe((result: string) => {
          this.dialogRef = null;
        });
      });
    });
  }

  openFileAddDialog() {
    this.fileDialogRef = this.dialog.open(AddFilesComponent, this.fileDlgConfig);

    this.fileDialogRef.afterClosed().subscribe((result: UploadContainer) => {
      if (result !== null) {
        this.uploadProjectPart1(result);
      }
      this.fileDialogRef = null;
    });
  }

  uploadProjectPart1(event: UploadContainer) {
    this.loading = true;
    event.uploadProjectDocuments(this.localStoreProject.id).subscribe((resp) => {
      this.projectService.addProjectUploads(resp);
      this.projectService.getProject(this.currentProject.id).then((resp: Project) => {
        this.currentProject.relProjectUploads = resp.relProjectUploads;
      });
      this.loading = false;
    });
  }

  deleteFile(fileUpload: any) {
    this.loading = true;
    this.projectApi.destroyByIdRelProjectUploads(this.localStoreProject.id, fileUpload.id).subscribe((res) => {
      this.projectService.deleteProjectUpload(fileUpload);
      this.loading = false;
    });
  }

  updateProjectUploads(projectUploads) {
  }
}

