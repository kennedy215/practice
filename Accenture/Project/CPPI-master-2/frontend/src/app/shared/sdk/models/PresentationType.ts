/* tslint:disable */
import {
  PresentationTypeWeightage,
  SupportingFile,
  Tool,
  Role
} from '../index';

declare var Object: any;
export interface PresentationTypeInterface {
  "title": string;
  "description"?: string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  relPresentationTypeWeightages?: PresentationTypeWeightage[];
  relFiles?: SupportingFile[];
  relTools?: Tool[];
  relRoles?: Role[];
}

export class PresentationType implements PresentationTypeInterface {
  "title": string;
  "description": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  relPresentationTypeWeightages: PresentationTypeWeightage[];
  relFiles: SupportingFile[];
  relTools: Tool[];
  relRoles: Role[];
  constructor(data?: PresentationTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PresentationType`.
   */
  public static getModelName() {
    return "PresentationType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PresentationType for dynamic purposes.
  **/
  public static factory(data: PresentationTypeInterface): PresentationType{
    return new PresentationType(data);
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
      name: 'PresentationType',
      plural: 'PresentationTypes',
      path: 'PresentationTypes',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
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
      },
      relations: {
        relPresentationTypeWeightages: {
          name: 'relPresentationTypeWeightages',
          type: 'PresentationTypeWeightage[]',
          model: 'PresentationTypeWeightage'
        },
        relFiles: {
          name: 'relFiles',
          type: 'SupportingFile[]',
          model: 'SupportingFile'
        },
        relTools: {
          name: 'relTools',
          type: 'Tool[]',
          model: 'Tool'
        },
        relRoles: {
          name: 'relRoles',
          type: 'Role[]',
          model: 'Role'
        },
      }
    }
  }
}
