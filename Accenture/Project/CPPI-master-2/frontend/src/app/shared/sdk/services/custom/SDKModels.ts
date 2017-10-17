/* tslint:disable */
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { Note } from '../../models/Note';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { ProjectType } from '../../models/ProjectType';
import { AgendaItem } from '../../models/AgendaItem';
import { PresentationType } from '../../models/PresentationType';
import { PresentationTypeWeightage } from '../../models/PresentationTypeWeightage';
import { Project } from '../../models/Project';
import { ProjectAgenda } from '../../models/ProjectAgenda';
import { ProjectDeliverable } from '../../models/ProjectDeliverable';
import { ProjectResource } from '../../models/ProjectResource';
import { ProjectRole } from '../../models/ProjectRole';
import { ProjectUpload } from '../../models/ProjectUpload';
import { Skill } from '../../models/Skill';
import { SupportingFile } from '../../models/SupportingFile';
import { Tool } from '../../models/Tool';
import { PresentationTypeTool } from '../../models/PresentationTypeTool';
import { PresentationTypeRole } from '../../models/PresentationTypeRole';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Container: Container,
    Note: Note,
    User: User,
    Role: Role,
    ProjectType: ProjectType,
    AgendaItem: AgendaItem,
    PresentationType: PresentationType,
    PresentationTypeWeightage: PresentationTypeWeightage,
    Project: Project,
    ProjectAgenda: ProjectAgenda,
    ProjectDeliverable: ProjectDeliverable,
    ProjectResource: ProjectResource,
    ProjectRole: ProjectRole,
    ProjectUpload: ProjectUpload,
    Skill: Skill,
    SupportingFile: SupportingFile,
    Tool: Tool,
    PresentationTypeTool: PresentationTypeTool,
    PresentationTypeRole: PresentationTypeRole,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
