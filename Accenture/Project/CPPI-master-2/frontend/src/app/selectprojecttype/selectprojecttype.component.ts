import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL, API_VERSION } from '../shared/base.url';
import { LoopBackConfig } from '../shared/sdk/index';
import { ProjectType } from '../shared/sdk/models/index';
import { ProjectTypeApi } from '../shared/sdk/services/index';
import { ProjectService } from '../Services/project.service';
import { Observable } from "rxjs/Rx";
import { fadeAnimation } from '../app.animations';
import { TdLoadingService } from '@covalent/core';
import '@angular/animations';

@Component({
  selector: 'app-selectprojecttype',
  templateUrl: './selectprojecttype.component.html',
  styleUrls: ['./selectprojecttype.component.css'],
  animations: [fadeAnimation]
})
export class SelectProjectTypeComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  projectTypes: Observable<ProjectType[]>;

  constructor(private router: Router, private projectTypeApi: ProjectTypeApi, private projectService: ProjectService, private _loadingService: TdLoadingService) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this._loadingService.register('overlayStarSyntax');
  }

  ngOnInit (): void {
    this.getProjectTypes();
  }

  getProjectTypes (): void {
    this.projectTypeApi.find({}).subscribe((projectTypes: ProjectType[]) =>{
    
    this.projectTypes = Observable.of(projectTypes).share()
      console.log(this.projectTypes);
    }
    , err => {
      console.log(err);
    });
  }

  onSelect (projectType: ProjectType): void {
    this.projectService.createProject(projectType);
    this.router.navigate(['createproject']);
  }
}