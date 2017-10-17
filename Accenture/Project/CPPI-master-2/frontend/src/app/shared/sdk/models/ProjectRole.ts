/* tslint:disable */
import {
  Project,
  Role,
  ProjectResource
} from '../index';

declare var Object: any;
export interface ProjectRoleInterface {
  "requiredUserCount": number;
  "roleName": string;
  "jobPostedDate"?: Date;
  "applicantCount"?: number;
  "jobDescription"?: string;
  "jobTitle"?: string;
  "marketplaces"?: any;
  "requiredSkills"?: any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "projectId"?: any;
  relProject?: Project;
  relRole?: Role;
  relProjectResources?: ProjectResource[];
}

export class ProjectRole implements ProjectRoleInterface {
  "requiredUserCount": number;
  "roleName": string;
  "jobPostedDate": Date;
  "applicantCount": number;
  "jobDescription": string;
  "jobTitle": string;
  "marketplaces": any;
  "requiredSkills": any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "projectId": any;
  relProject: Project;
  relRole: Role;
  relProjectResources: ProjectResource[];
  constructor(data?: ProjectRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectRole`.
   */
  public static getModelName() {
    return "ProjectRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectRole for dynamic purposes.
  **/
  public static factory(data: ProjectRoleInterface): ProjectRole{
    return new ProjectRole(data);
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
      name: 'ProjectRole',
      plural: 'ProjectRoles',
      path: 'ProjectRoles',
      properties: {
        "requiredUserCount": {
          name: 'requiredUserCount',
          type: 'number'
        },
        "roleName": {
          name: 'roleName',
          type: 'string'
        },
        "jobPostedDate": {
          name: 'jobPostedDate',
          type: 'Date'
        },
        "applicantCount": {
          name: 'applicantCount',
          type: 'number'
        },
        "jobDescription": {
          name: 'jobDescription',
          type: 'string'
        },
        "jobTitle": {
          name: 'jobTitle',
          type: 'string'
        },
        "marketplaces": {
          name: 'marketplaces',
          type: 'any'
        },
        "requiredSkills": {
          name: 'requiredSkills',
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
        relRole: {
          name: 'relRole',
          type: 'Role',
          model: 'Role'
        },
        relProjectResources: {
          name: 'relProjectResources',
          type: 'ProjectResource[]',
          model: 'ProjectResource'
        },
      }
    }
  }
}
