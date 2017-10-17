/* tslint:disable */

declare var Object: any;
export interface SupportingFileInterface {
  "fileId"?: string;
  "fileType"?: string;
  "fileName": string;
  "fileUrl"?: string;
  "keyWords"?: any;
  "category"?: string;
  "template"?: boolean;
  "training"?: boolean;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  "presentationTypeId"?: any;
  "toolId"?: any;
}

export class SupportingFile implements SupportingFileInterface {
  "fileId": string;
  "fileType": string;
  "fileName": string;
  "fileUrl": string;
  "keyWords": any;
  "category": string;
  "template": boolean;
  "training": boolean;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  "presentationTypeId": any;
  "toolId": any;
  constructor(data?: SupportingFileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SupportingFile`.
   */
  public static getModelName() {
    return "SupportingFile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SupportingFile for dynamic purposes.
  **/
  public static factory(data: SupportingFileInterface): SupportingFile{
    return new SupportingFile(data);
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
      name: 'SupportingFile',
      plural: 'SupportingFiles',
      path: 'SupportingFiles',
      properties: {
        "fileId": {
          name: 'fileId',
          type: 'string'
        },
        "fileType": {
          name: 'fileType',
          type: 'string'
        },
        "fileName": {
          name: 'fileName',
          type: 'string'
        },
        "fileUrl": {
          name: 'fileUrl',
          type: 'string'
        },
        "keyWords": {
          name: 'keyWords',
          type: 'any'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "template": {
          name: 'template',
          type: 'boolean'
        },
        "training": {
          name: 'training',
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
        "presentationTypeId": {
          name: 'presentationTypeId',
          type: 'any'
        },
        "toolId": {
          name: 'toolId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
