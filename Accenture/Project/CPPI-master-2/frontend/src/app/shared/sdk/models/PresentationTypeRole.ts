/* tslint:disable */
import {
  Role,
  PresentationType
} from '../index';

declare var Object: any;
export interface PresentationTypeRoleInterface {
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "roleId"?: any;
  "presentationTypeId"?: any;
  relRole?: Role;
  relPresentationType?: PresentationType;
  role?: Role;
  presentationType?: PresentationType;
}

export class PresentationTypeRole implements PresentationTypeRoleInterface {
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "roleId": any;
  "presentationTypeId": any;
  relRole: Role;
  relPresentationType: PresentationType;
  role: Role;
  presentationType: PresentationType;
  constructor(data?: PresentationTypeRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PresentationTypeRole`.
   */
  public static getModelName() {
    return "PresentationTypeRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PresentationTypeRole for dynamic purposes.
  **/
  public static factory(data: PresentationTypeRoleInterface): PresentationTypeRole{
    return new PresentationTypeRole(data);
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
      name: 'PresentationTypeRole',
      plural: 'PresentationTypeRoles',
      path: 'PresentationTypeRoles',
      properties: {
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
        "presentationTypeId": {
          name: 'presentationTypeId',
          type: 'any'
        },
      },
      relations: {
        relRole: {
          name: 'relRole',
          type: 'Role',
          model: 'Role'
        },
        relPresentationType: {
          name: 'relPresentationType',
          type: 'PresentationType',
          model: 'PresentationType'
        },
        role: {
          name: 'role',
          type: 'Role',
          model: 'Role'
        },
        presentationType: {
          name: 'presentationType',
          type: 'PresentationType',
          model: 'PresentationType'
        },
      }
    }
  }
}
