/* tslint:disable */
import {
  ProjectRole
} from '../index';

declare var Object: any;
export interface ProjectResourceInterface {
  "userName": string;
  "hiringDate"?: Date;
  "rollOffDate"?: Date;
  "handoverResource"?: string;
  "sourcingMarketplace"?: string;
  "userMarketplaceId"?: string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "projectRoleId"?: any;
  relProjectRole?: ProjectRole;
}

export class ProjectResource implements ProjectResourceInterface {
  "userName": string;
  "hiringDate": Date;
  "rollOffDate": Date;
  "handoverResource": string;
  "sourcingMarketplace": string;
  "userMarketplaceId": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "projectRoleId": any;
  relProjectRole: ProjectRole;
  constructor(data?: ProjectResourceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectResource`.
   */
  public static getModelName() {
    return "ProjectResource";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectResource for dynamic purposes.
  **/
  public static factory(data: ProjectResourceInterface): ProjectResource{
    return new ProjectResource(data);
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
      name: 'ProjectResource',
      plural: 'ProjectResources',
      path: 'ProjectResources',
      properties: {
        "userName": {
          name: 'userName',
          type: 'string'
        },
        "hiringDate": {
          name: 'hiringDate',
          type: 'Date'
        },
        "rollOffDate": {
          name: 'rollOffDate',
          type: 'Date'
        },
        "handoverResource": {
          name: 'handoverResource',
          type: 'string'
        },
        "sourcingMarketplace": {
          name: 'sourcingMarketplace',
          type: 'string'
        },
        "userMarketplaceId": {
          name: 'userMarketplaceId',
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
        "projectRoleId": {
          name: 'projectRoleId',
          type: 'any'
        },
      },
      relations: {
        relProjectRole: {
          name: 'relProjectRole',
          type: 'ProjectRole',
          model: 'ProjectRole'
        },
      }
    }
  }
}
