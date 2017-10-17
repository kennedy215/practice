import { Injectable } from '@angular/core';
import { Project, ProjectType, ProjectUpload } from '../shared/sdk/models/index';
import { ProjectApi } from '../shared/sdk/services/index';
import { StorageBrowser } from '../shared/sdk/index';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProjectService {
    public _currentProject: Project;
    private headerText: string;
    private previousRoute: any;
    private currentRoute: any;
    private isProjectIdeaDefined: boolean;
    private isIdeaParameterDefined: boolean;
    private isRolesDefined: boolean;
    constructor(private browserStorage: StorageBrowser, private projectApi: ProjectApi) { }

    createProject(projectType: ProjectType): void {
        this._currentProject = new Project();
        console.log("creating project in project service");
        this._currentProject.projectTypeId = projectType.id;
        this._currentProject.relProjectType = projectType;
        this.setBrowserStorage();
    }

    setProject(project: Project): void {
        this._currentProject = project;
        console.log("setting project in browser strorage");
        console.log(this._currentProject);
        this.setBrowserStorage();
    }
    getProject(projectId: string): Promise<any> {

        if (this._currentProject === null || this._currentProject === undefined) {
            this._currentProject = this.browserStorage.get("currentProject");
        }
        if (!projectId || (this._currentProject && this._currentProject.id === projectId)) {
            console.log("1.inside project service")
            return Promise.resolve(this._currentProject);
        } else {
            var projectApiPromise = this.projectApi.findById(projectId, {
                include: [
                    {
                        relation: 'relProjectType'
                    },
                    {
                        relation: "relProjectUploads"
                    }
                ]
            }).toPromise();
            projectApiPromise.then((project: Project) => {
                console.log("2. inside project service");
                console.log(project);
                this.setBrowserStorage();
                this._currentProject = project;
            });
            return Promise.resolve(projectApiPromise);
        }
    }

    getNavigationHeader(): string {
        return this.headerText;
    }

    setNavigationHeader(headerText): void {
        this.headerText = headerText;
    }

    // setSelectedPresentationTools(presentationTools: Array<any>) {
    //     this._currentProject.presentationTools = presentationTools;
    // }

    setSelectedPresentationTypes(presentationTypes: Array<string>) {
        this._currentProject.selectedPresentationTypes = presentationTypes;
        this.setBrowserStorage();

    }

    setIdeaParameters(currentProject: Project) {
        this._currentProject.size = currentProject.size;
        this._currentProject.startDate = currentProject.startDate;
        this._currentProject.endDate = currentProject.endDate;
        this._currentProject.selectedTools = currentProject.selectedTools;
        this.setBrowserStorage();
    }

    addProjectUploads(projectUploads: ProjectUpload[]) {
        this._currentProject.relProjectUploads = this._currentProject.relProjectUploads || [];
        this._currentProject.relProjectUploads = this._currentProject.relProjectUploads.concat(projectUploads);
        this.setBrowserStorage();
    }

    setPreviousRoute(prevRoute) {
        this.previousRoute = this.currentRoute;
        this.currentRoute = prevRoute;
    }
    getPreviousRoute() {
        return this.previousRoute;
    }

    getProjectIdeaCheck() {
        if (this._currentProject && (this._currentProject.id !== undefined)) {
            return true;
        }
    }

    getIdeaParameterCheck() {
        if ((this._currentProject) && (this._currentProject.startDate || this._currentProject.endDate)) {
            return true;
        }
    }

    setRolesDefined(status: boolean) {
        this.isRolesDefined=status;
    }

    getRolesCheck() {
         return this.isRolesDefined;
    }

    deleteProjectUpload(upload) {
        let index = this._currentProject.relProjectUploads.indexOf(upload);
        this._currentProject.relProjectUploads.splice(index, 1);
        this.setBrowserStorage();
    }

    setBrowserStorage() {
        this.browserStorage.set("currentProject", this._currentProject);
    }

    setProjectId(projectId: number) {
        this._currentProject.id = projectId;
    }
}