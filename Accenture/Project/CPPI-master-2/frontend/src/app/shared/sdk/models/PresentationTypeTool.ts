/* tslint:disable */
import {
  Tool,
  PresentationType
} from '../index';

declare var Object: any;
export interface PresentationTypeToolInterface {
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "toolId"?: any;
  "presentationTypeId"?: any;
  relTool?: Tool;
  relPresentationType?: PresentationType;
  presentationType?: PresentationType;
  tool?: Tool;
}

export class PresentationTypeTool implements PresentationTypeToolInterface {
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "toolId": any;
  "presentationTypeId": any;
  relTool: Tool;
  relPresentationType: PresentationType;
  presentationType: PresentationType;
  tool: Tool;
  constructor(data?: PresentationTypeToolInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PresentationTypeTool`.
   */
  public static getModelName() {
    return "PresentationTypeTool";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PresentationTypeTool for dynamic purposes.
  **/
  public static factory(data: PresentationTypeToolInterface): PresentationTypeTool{
    return new PresentationTypeTool(data);
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
      name: 'PresentationTypeTool',
      plural: 'PresentationTypeTools',
      path: 'PresentationTypeTools',
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
        "toolId": {
          name: 'toolId',
          type: 'any'
        },
        "presentationTypeId": {
          name: 'presentationTypeId',
          type: 'any'
        },
      },
      relations: {
        relTool: {
          name: 'relTool',
          type: 'Tool',
          model: 'Tool'
        },
        relPresentationType: {
          name: 'relPresentationType',
          type: 'PresentationType',
          model: 'PresentationType'
        },
        presentationType: {
          name: 'presentationType',
          type: 'PresentationType',
          model: 'PresentationType'
        },
        tool: {
          name: 'tool',
          type: 'Tool',
          model: 'Tool'
        },
      }
    }
  }
}
