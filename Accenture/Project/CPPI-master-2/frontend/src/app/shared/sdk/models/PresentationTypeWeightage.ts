/* tslint:disable */
import {
  PresentationType
} from '../index';

declare var Object: any;
export interface PresentationTypeWeightageInterface {
  "projectTarget": string;
  "weightage"?: number;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "presentationTypeId"?: any;
  relPresentationType?: PresentationType;
}

export class PresentationTypeWeightage implements PresentationTypeWeightageInterface {
  "projectTarget": string;
  "weightage": number;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "presentationTypeId": any;
  relPresentationType: PresentationType;
  constructor(data?: PresentationTypeWeightageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PresentationTypeWeightage`.
   */
  public static getModelName() {
    return "PresentationTypeWeightage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PresentationTypeWeightage for dynamic purposes.
  **/
  public static factory(data: PresentationTypeWeightageInterface): PresentationTypeWeightage{
    return new PresentationTypeWeightage(data);
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
      name: 'PresentationTypeWeightage',
      plural: 'PresentationTypeWeightages',
      path: 'PresentationTypeWeightages',
      properties: {
        "projectTarget": {
          name: 'projectTarget',
          type: 'string'
        },
        "weightage": {
          name: 'weightage',
          type: 'number'
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
      },
      relations: {
        relPresentationType: {
          name: 'relPresentationType',
          type: 'PresentationType',
          model: 'PresentationType'
        },
      }
    }
  }
}
