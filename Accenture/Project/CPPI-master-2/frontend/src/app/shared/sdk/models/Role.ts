/* tslint:disable */
import {
  PresentationType
} from '../index';

declare var Object: any;
export interface RoleInterface {
  "roleName": string;
  "mandatorySkills"?: any;
  "optionalSkills"?: any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "roleId"?: any;
  relPresentationTypes?: PresentationType[];
}

export class Role implements RoleInterface {
  "roleName": string;
  "mandatorySkills": any;
  "optionalSkills": any;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "roleId": any;
  relPresentationTypes: PresentationType[];
  constructor(data?: RoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Role`.
   */
  public static getModelName() {
    return "Role";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Role for dynamic purposes.
  **/
  public static factory(data: RoleInterface): Role{
    return new Role(data);
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
      name: 'Role',
      plural: 'Roles',
      path: 'Roles',
      properties: {
        "roleName": {
          name: 'roleName',
          type: 'string'
        },
        "mandatorySkills": {
          name: 'mandatorySkills',
          type: 'any'
        },
        "optionalSkills": {
          name: 'optionalSkills',
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
        "roleId": {
          name: 'roleId',
          type: 'any'
        },
      },
      relations: {
        relPresentationTypes: {
          name: 'relPresentationTypes',
          type: 'PresentationType[]',
          model: 'PresentationType'
        },
      }
    }
  }
}
