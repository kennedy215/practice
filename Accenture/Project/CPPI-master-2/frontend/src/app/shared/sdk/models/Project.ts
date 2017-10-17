/* tslint:disable */
import {
  ProjectType,
  User,
  ProjectAgenda,
  ProjectDeliverable,
  ProjectRole,
  ProjectUpload
} from '../index';

declare var Object: any;
export interface ProjectInterface {
  "title": string;
  "description": string;
  "target": string;
  "motivation": string;
  "size"?: string;
  "startDate"?: Date;
  "endDate"?: Date;
  "projectPhase": string;
  "selectedPresentationTypes"?: any;
  "selectedTools"?: any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "projectTypeId"?: any;
  relProjectType?: ProjectType;
  relInitiator?: User;
  relProjectAgendas?: ProjectAgenda[];
  relProjectDeliverables?: ProjectDeliverable[];
  relProjectRoles?: ProjectRole[];
  relProjectUploads?: ProjectUpload[];
}

export class Project implements ProjectInterface {
  "title": string;
  "description": string;
  "target": string;
  "motivation": string;
  "size": string;
  "startDate": Date;
  "endDate": Date;
  "projectPhase": string;
  "selectedPresentationTypes": any;
  "selectedTools": any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "projectTypeId": any;
  relProjectType: ProjectType;
  relInitiator: User;
  relProjectAgendas: ProjectAgenda[];
  relProjectDeliverables: ProjectDeliverable[];
  relProjectRoles: ProjectRole[];
  relProjectUploads: ProjectUpload[];
  constructor(data?: ProjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Project`.
   */
  public static getModelName() {
    return "Project";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Project for dynamic purposes.
  **/
  public static factory(data: ProjectInterface): Project{
    return new Project(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Project',
      plural: 'Projects',
      path: 'Projects',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "target": {
          name: 'target',
          type: 'string'
        },
        "motivation": {
          name: 'motivation',
          type: 'string'
        },
        "size": {
          name: 'size',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "projectPhase": {
          name: 'projectPhase',
          type: 'string'
        },
        "selectedPresentationTypes": {
          name: 'selectedPresentationTypes',
          type: 'any'
        },
        "selectedTools": {
          name: 'selectedTools',
          type: 'any'
        },
        "lastUpdatedBy": {
          name: 'lastUpdatedBy',
          type: 'string'
        },
        "lastUpdatedOn": {
          name: 'lastUpdatedOn',
          type: 'Date'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "createdOn": {
          name: 'createdOn',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "projectTypeId": {
          name: 'projectTypeId',
          type: 'any'
        },
      },
      relations: {
        relProjectType: {
          name: 'relProjectType',
          type: 'ProjectType',
          model: 'ProjectType'
        },
        relInitiator: {
          name: 'relInitiator',
          type: 'User',
          model: 'User'
        },
        relProjectAgendas: {
          name: 'relProjectAgendas',
          type: 'ProjectAgenda[]',
          model: 'ProjectAgenda'
        },
        relProjectDeliverables: {
          name: 'relProjectDeliverables',
          type: 'ProjectDeliverable[]',
          model: 'ProjectDeliverable'
        },
        relProjectRoles: {
          name: 'relProjectRoles',
          type: 'ProjectRole[]',
          model: 'ProjectRole'
        },
        relProjectUploads: {
          name: 'relProjectUploads',
          type: 'ProjectUpload[]',
          model: 'ProjectUpload'
        },
      }
    }
  }
}
