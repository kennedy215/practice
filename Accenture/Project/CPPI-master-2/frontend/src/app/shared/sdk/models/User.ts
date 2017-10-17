/* tslint:disable */

declare var Object: any;
export interface UserInterface {
  "firstName": string;
  "lastName": string;
  "userId": any;
  "password": string;
  "registrationDate": Date;
  "lastLoggedIn": Date;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id"?: any;
}

export class User implements UserInterface {
  "firstName": string;
  "lastName": string;
  "userId": any;
  "password": string;
  "registrationDate": Date;
  "lastLoggedIn": Date;
  "lastUpdatedBy": string;
  "lastUpdatedOn": Date;
  "createdBy": string;
  "createdOn": Date;
  "id": any;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'Users',
      path: 'Users',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "registrationDate": {
          name: 'registrationDate',
          type: 'Date'
        },
        "lastLoggedIn": {
          name: 'lastLoggedIn',
          type: 'Date'
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
