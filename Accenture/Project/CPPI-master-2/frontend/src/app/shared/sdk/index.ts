/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { ContainerApi } from './services/custom/Container';
import { NoteApi } from './services/custom/Note';
import { UserApi } from './services/custom/User';
import { RoleApi } from './services/custom/Role';
import { ProjectTypeApi } from './services/custom/ProjectType';
import { AgendaItemApi } from './services/custom/AgendaItem';
import { PresentationTypeApi } from './services/custom/PresentationType';
import { PresentationTypeWeightageApi } from './services/custom/PresentationTypeWeightage';
import { ProjectApi } from './services/custom/Project';
import { ProjectAgendaApi } from './services/custom/ProjectAgenda';
import { ProjectDeliverableApi } from './services/custom/ProjectDeliverable';
import { ProjectResourceApi } from './services/custom/ProjectResource';
import { ProjectRoleApi } from './services/custom/ProjectRole';
import { ProjectUploadApi } from './services/custom/ProjectUpload';
import { SkillApi } from './services/custom/Skill';
import { SupportingFileApi } from './services/custom/SupportingFile';
import { ToolApi } from './services/custom/Tool';
import { PresentationTypeToolApi } from './services/custom/PresentationTypeTool';
import { PresentationTypeRoleApi } from './services/custom/PresentationTypeRole';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        ContainerApi,
        NoteApi,
        UserApi,
        RoleApi,
        ProjectTypeApi,
        AgendaItemApi,
        PresentationTypeApi,
        PresentationTypeWeightageApi,
        ProjectApi,
        ProjectAgendaApi,
        ProjectDeliverableApi,
        ProjectResourceApi,
        ProjectRoleApi,
        ProjectUploadApi,
        SkillApi,
        SupportingFileApi,
        ToolApi,
        PresentationTypeToolApi,
        PresentationTypeRoleApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';
