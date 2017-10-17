/* tslint:disable */
import {
  SupportingFile,
  PresentationType
} from '../index';

declare var Object: any;
export interface ToolInterface {
  "toolName": string;
  "description"?: string;
  "cost"?: number;
  "oneClickWorkspaceAPI"?: any;
  "requiredSkills"?: any;
  "category"?: string;
  "associatedRoles"?: any;
  "logo"?: string;
  "isDefault"?: boolean;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  relFiles?: SupportingFile[];
  relPresentationTypes?: PresentationType[];
}

export class Tool implements ToolInterface {
  "toolName": string;
  "description": string;
  "cost": number;
  "oneClickWorkspaceAPI": any;
  "requiredSkills": any;
  "category": string;
  "associatedRoles": any;
  "logo": string;
  "isDefault": boolean;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  relFiles: SupportingFile[];
  relPresentationTypes: PresentationType[];
  constructor(data?: ToolInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tool`.
   */
  public static getModelName() {
    return "Tool";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tool for dynamic purposes.
  **/
  public static factory(data: ToolInterface): Tool{
    return new Tool(data);
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
      name: 'Tool',
      plural: 'Tools',
      path: 'Tools',
      properties: {
        "toolName": {
          name: 'toolName',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "cost": {
          name: 'cost',
          type: 'number'
        },
        "oneClickWorkspaceAPI": {
          name: 'oneClickWorkspaceAPI',
          type: 'any'
        },
        "requiredSkills": {
          name: 'requiredSkills',
          type: 'any'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "associatedRoles": {
          name: 'associatedRoles',
          type: 'any'
        },
        "logo": {
          name: 'logo',
          type: 'string'
        },
        "isDefault": {
          name: 'isDefault',
          type: 'boolean'
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
        relFiles: {
          name: 'relFiles',
          type: 'SupportingFile[]',
          model: 'SupportingFile'
        },
        relPresentationTypes: {
          name: 'relPresentationTypes',
          type: 'PresentationType[]',
          model: 'PresentationType'
        },
      }
    }
  }
}
