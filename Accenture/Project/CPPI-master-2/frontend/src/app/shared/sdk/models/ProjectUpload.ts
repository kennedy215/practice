/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface ProjectUploadInterface {
  "physicalFileName": string;
  "physicalFileType": string;
  "group": string;
  "container": string;
  "fileUrl": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "projectId"?: any;
  relProject?: Project;
}

export class ProjectUpload implements ProjectUploadInterface {
  "physicalFileName": string;
  "physicalFileType": string;
  "group": string;
  "container": string;
  "fileUrl": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "projectId": any;
  relProject: Project;
  constructor(data?: ProjectUploadInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectUpload`.
   */
  public static getModelName() {
    return "ProjectUpload";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectUpload for dynamic purposes.
  **/
  public static factory(data: ProjectUploadInterface): ProjectUpload{
    return new ProjectUpload(data);
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
      name: 'ProjectUpload',
      plural: 'ProjectUploads',
      path: 'ProjectUploads',
      properties: {
        "physicalFileName": {
          name: 'physicalFileName',
          type: 'string'
        },
        "physicalFileType": {
          name: 'physicalFileType',
          type: 'string'
        },
        "group": {
          name: 'group',
          type: 'string'
        },
        "container": {
          name: 'container',
          type: 'string'
        },
        "fileUrl": {
          name: 'fileUrl',
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
