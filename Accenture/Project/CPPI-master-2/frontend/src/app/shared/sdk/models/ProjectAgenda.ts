/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface ProjectAgendaInterface {
  "agendaItem": string;
  "description"?: string;
  "category": string;
  "sequenceNumber": number;
  "duration": number;
  "status": string;
  "completedOn"?: Date;
  "completedBy"?: string;
  "startDate"?: Date;
  "actualEndDate"?: Date;
  "estimatedEndDate"?: Date;
  "keyWords"?: any;
  "parentType"?: string;
  "parentId"?: string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "projectId"?: any;
  relProject?: Project;
}

export class ProjectAgenda implements ProjectAgendaInterface {
  "agendaItem": string;
  "description": string;
  "category": string;
  "sequenceNumber": number;
  "duration": number;
  "status": string;
  "completedOn": Date;
  "completedBy": string;
  "startDate": Date;
  "actualEndDate": Date;
  "estimatedEndDate": Date;
  "keyWords": any;
  "parentType": string;
  "parentId": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "projectId": any;
  relProject: Project;
  constructor(data?: ProjectAgendaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectAgenda`.
   */
  public static getModelName() {
    return "ProjectAgenda";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectAgenda for dynamic purposes.
  **/
  public static factory(data: ProjectAgendaInterface): ProjectAgenda{
    return new ProjectAgenda(data);
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
      name: 'ProjectAgenda',
      plural: 'ProjectAgendas',
      path: 'ProjectAgendas',
      properties: {
        "agendaItem": {
          name: 'agendaItem',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "sequenceNumber": {
          name: 'sequenceNumber',
          type: 'number'
        },
        "duration": {
          name: 'duration',
          type: 'number'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "completedOn": {
          name: 'completedOn',
          type: 'Date'
        },
        "completedBy": {
          name: 'completedBy',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "actualEndDate": {
          name: 'actualEndDate',
          type: 'Date'
        },
        "estimatedEndDate": {
          name: 'estimatedEndDate',
          type: 'Date'
        },
        "keyWords": {
          name: 'keyWords',
          type: 'any'
        },
        "parentType": {
          name: 'parentType',
          type: 'string'
        },
        "parentId": {
          name: 'parentId',
          type: 'string'
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
        "projectId": {
          name: 'projectId',
          type: 'any'
        },
      },
      relations: {
        relProject: {
          name: 'relProject',
          type: 'Project',
          model: 'Project'
        },
      }
    }
  }
}
