import { Component, AfterViewInit, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from '../Services/project.service';
import { Project, ProjectType } from '../shared/sdk/models/index';
import { fadeAnimation } from '../app.animations';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css'],
  animations: [fadeAnimation]
})
export class CreateProjectComponent implements AfterViewInit, OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  private projectId: string = '';
  constructor(public media: TdMediaService,
    private location: Location,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private router: Router) { }

  public currentProject: Project;
  public selectedNavigationHeader: () => string;
  ngOnInit(): void {
    this.projectService.setNavigationHeader('Define Project Idea');
    this.selectedNavigationHeader = () => {
      return this.projectService.getNavigationHeader();
    }
    this.route.params
      .switchMap((params) => {
        console.log(params);
        return this.projectService.getProject(params['id'])
      })
      .subscribe((project) => {
        console.log("getting project in create project component");
        this.currentProject = project;
        console.log(this.currentProject);
      });
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }

  goBack(): void {
    this.location.back();
  }

  navigationClick(headerText): void {
    this.projectService.setNavigationHeader(headerText);
  }

  getProjectIdeaCheck(){
    return this.projectService.getProjectIdeaCheck();
  }

  getIdeaParameterCheck(){
    return this.projectService.getIdeaParameterCheck();
  }

  getRolesCheck(){
    return this.projectService.getRolesCheck();
  }
}