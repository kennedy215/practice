/* tslint:disable */

declare var Object: any;
export interface AgendaItemInterface {
  "title": string;
  "description"?: string;
  "category": string;
  "importanceLevel"?: number;
  "duration": number;
  "keyWords"?: any;
  "parentType"?: string;
  "parentId"?: string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
}

export class AgendaItem implements AgendaItemInterface {
  "title": string;
  "description": string;
  "category": string;
  "importanceLevel": number;
  "duration": number;
  "keyWords": any;
  "parentType": string;
  "parentId": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  constructor(data?: AgendaItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AgendaItem`.
   */
  public static getModelName() {
    return "AgendaItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AgendaItem for dynamic purposes.
  **/
  public static factory(data: AgendaItemInterface): AgendaItem{
    return new AgendaItem(data);
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
      name: 'AgendaItem',
      plural: 'AgendaItems',
      path: 'AgendaItems',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "importanceLevel": {
          name: 'importanceLevel',
          type: 'number'
        },
        "duration": {
          name: 'duration',
          type: 'number'
        },
        "keyWords": {
          name: 'keyWords',
          type: 'any'
        },
        "parentType": {
          name: 'parentType',
          type: 'string'
        },
        "parentId": {
          name: 'parentId',
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
      }
    }
  }
}
