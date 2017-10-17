/* tslint:disable */
import {
  PresentationType
} from '../index';

declare var Object: any;
export interface ProjectDeliverableInterface {
  "fileName": string;
  "fileUrl": string;
  "uploadedBy"?: string;
  "uploadedOn"?: Date;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "presentationTypeId"?: any;
  "projectId"?: any;
  relProject?: PresentationType;
}

export class ProjectDeliverable implements ProjectDeliverableInterface {
  "fileName": string;
  "fileUrl": string;
  "uploadedBy": string;
  "uploadedOn": Date;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "presentationTypeId": any;
  "projectId": any;
  relProject: PresentationType;
  constructor(data?: ProjectDeliverableInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectDeliverable`.
   */
  public static getModelName() {
    return "ProjectDeliverable";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectDeliverable for dynamic purposes.
  **/
  public static factory(data: ProjectDeliverableInterface): ProjectDeliverable{
    return new ProjectDeliverable(data);
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
      name: 'ProjectDeliverable',
      plural: 'ProjectDeliverables',
      path: 'ProjectDeliverables',
      properties: {
        "fileName": {
          name: 'fileName',
          type: 'string'
        },
        "fileUrl": {
          name: 'fileUrl',
          type: 'string'
        },
        "uploadedBy": {
          name: 'uploadedBy',
          type: 'string'
        },
        "uploadedOn": {
          name: 'uploadedOn',
          type: 'Date'
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
        "presentationTypeId": {
          name: 'presentationTypeId',
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
          type: 'PresentationType',
          model: 'PresentationType'
        },
      }
    }
  }
}
