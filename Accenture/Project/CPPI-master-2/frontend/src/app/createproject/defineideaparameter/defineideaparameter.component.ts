import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';

import { ProjectService } from '../../Services/project.service';
import { Project } from '../../shared/sdk/models/index';
import { LoopBackConfig, ToolApi, ProjectApi } from '../../shared/sdk/index';
import { BASE_URL, API_VERSION } from '../../shared/base.url';

@Component({
  selector: 'app-defineideaparameter',
  templateUrl: './defineideaparameter.component.html',
  styleUrls: ['./defineideaparameter.component.css']
})
export class DefineIdeaParameterComponent implements OnInit {
  loading: boolean = false;
  private projectId: string = '';
  currentProject: Project;
  minDate: Date = new Date();
  tool: any;
  selectedIndex: number;
  presentationTools:any;
  constructor(private _loadingService: TdLoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private toolApi: ToolApi,
    private projectApi: ProjectApi) {

    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    this.projectService.setNavigationHeader('Define Idea Parameters');
    this.route.parent.params
      .switchMap((params) => {
        console.log(params);
        this.loading = true;
        return this.projectService.getProject(params['id'])
      })
      .subscribe((project) => {
        this.currentProject = project;
        //this.projectService.setProject(project);
        this.currentProject.size = this.currentProject.size || 'small';
        this.loading = false;
        //Get presentation type by id
        let selectedPT = this.currentProject.selectedPresentationTypes;
        if (selectedPT) {
          this.loading = true;
          this.toolApi.getToolsForPresentationTypes(selectedPT).subscribe((tools) => {
            this.loading = false;
            this.presentationTools = tools;
            console.log(this.presentationTools.Communication);
            console.log(tools);
            let defaultTools = [];
            for (let primaryTool of tools.Primary) {
              if (primaryTool.isDefault) defaultTools.push(primaryTool);
            }
            for (let communicationTool of tools.Communication) {
              if (communicationTool.isDefault) defaultTools.push(communicationTool);
            }
            for (let repositoryTool of tools.Repository) {
              if (repositoryTool.isDefault) defaultTools.push(repositoryTool);
            }
            console.log(defaultTools);
            this.currentProject.selectedTools = this.currentProject.selectedTools || defaultTools;
          })
        }
      });
  }

  onSelectDesignSize(size: string) {
    this.currentProject.size = size;
  }

  onStartDateSelectionChange(startDate) {
    this.currentProject.startDate = startDate;
    this.currentProject.endDate = null;
  }

  onEndDateSelectionChange(endDate) {
    this.currentProject.endDate = endDate;
    this.currentProject.startDate = null;
  }
  addChosenTool(item) {
    this.currentProject.selectedTools.push(item);
  }

  removeChosenTool(tool) {
    var index = this.currentProject.selectedTools.indexOf(tool);
    this.currentProject.selectedTools.splice(index, 1);
  }

  saveIdeaParaMeters(currentProject) {
    if (currentProject.endDate || currentProject.startDate) {
      this.loading = true;
      this.projectApi.upsertWithWhere({ id: currentProject.id }, currentProject).subscribe((resp: Project) => {
        console.log("submitted");
        this.loading = false;
        this.projectService.setIdeaParameters(resp);
        //update selected tools in the project
        this.router.navigateByUrl(`createproject/${this.currentProject.id}/rolesandskills`);
      });
    }
  }

  saveAndGoToDefineProjectIdea(currentProject) {
    this.loading = true;
    this.projectApi.upsertWithWhere({ id: currentProject.id }, currentProject).subscribe((resp: Project) => {
      console.log("submitted");
      this.loading = false;
      this.projectService.setIdeaParameters(resp);
      //update selected tools in the project
      this.router.navigateByUrl(`createproject/${this.currentProject.id}`);
    });
  }
}
