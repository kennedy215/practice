/* tslint:disable */
import {
  Project
} from '../index';

declare var Object: any;
export interface ProjectTypeInterface {
  "title": string;
  "description": string;
  "additionalInfo"?: string;
  "potentialMotivations"?: any;
  "potentialTargets"?: any;
  "outcomes"?: any;
  "fontAwesomeIcon"?: string;
  "category"?: string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
  relProjects?: Project[];
}

export class ProjectType implements ProjectTypeInterface {
  "title": string;
  "description": string;
  "additionalInfo": string;
  "potentialMotivations": any;
  "potentialTargets": any;
  "outcomes": any;
  "fontAwesomeIcon": string;
  "category": string;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  relProjects: Project[];
  constructor(data?: ProjectTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjectType`.
   */
  public static getModelName() {
    return "ProjectType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjectType for dynamic purposes.
  **/
  public static factory(data: ProjectTypeInterface): ProjectType{
    return new ProjectType(data);
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
      name: 'ProjectType',
      plural: 'ProjectTypes',
      path: 'ProjectTypes',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "additionalInfo": {
          name: 'additionalInfo',
          type: 'string'
        },
        "potentialMotivations": {
          name: 'potentialMotivations',
          type: 'any'
        },
        "potentialTargets": {
          name: 'potentialTargets',
          type: 'any'
        },
        "outcomes": {
          name: 'outcomes',
          type: 'any'
        },
        "fontAwesomeIcon": {
          name: 'fontAwesomeIcon',
          type: 'string'
        },
        "category": {
          name: 'category',
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
        relProjects: {
          name: 'relProjects',
          type: 'Project[]',
          model: 'Project'
        },
      }
    }
  }
}
