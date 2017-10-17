import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectProjectTypeComponent } from './selectprojecttype/selectprojecttype.component';
import { CreateProjectComponent } from './createproject/createproject.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DefineProjectIdeaComponent } from './createproject/defineprojectidea/defineprojectidea.component';
import { DefineRolesAndSkillsComponent,SkillDialog } from './createproject/definerolesandskills/definerolesandskills.component';
import { SDKBrowserModule } from './shared/sdk/index';
//import { Ng2DragDropModule } from 'ng2-drag-drop';
import {
  CovalentLayoutModule, CovalentExpansionPanelModule, CovalentNotificationsModule, CovalentMenuModule,
  CovalentMediaModule, CovalentLoadingModule, CovalentStepsModule, CovalentFileModule
} from '@covalent/core';
import { MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdCoreModule, MdMenuModule, MdInputModule, MdDialogModule,MaterialModule,MdDatepickerModule,MdNativeDateModule  } from '@angular/material';
import { DefineIdeaParameterComponent } from './createproject/defineideaparameter/defineideaparameter.component';
import { ToollistComponent } from './createproject/defineideaparameter/toollist/toollist.component';
import { PostToMarketplaceComponent } from './createproject/posttomarketplace/posttomarketplace.component';
import { CongratulationComponent } from './createproject/posttomarketplace/congratulation/congratulation.component';
import { FileuploadComponent } from './createproject/shared/components/fileupload/fileupload.component';
import { AddFilesComponent } from './createproject/posttomarketplace/add-files/add-files.component';
import { FileListComponent } from './createproject/posttomarketplace/file-list/file-list.component';
import { ConfirmDeleteComponent } from './createproject/posttomarketplace/file-list/confirm-delete/confirm-delete.component';
import { ConfirmRedirectComponent } from './createproject/posttomarketplace/confirm-redirect/confirm-redirect.component';
import { CanActivateGuardService } from './createproject/posttomarketplace/can-activate-guard.service';
import { DragDropDirectiveModule} from "angular4-drag-drop";
@NgModule({
  declarations: [
    AppComponent,
    SelectProjectTypeComponent,
    CreateProjectComponent,
    LandingpageComponent,
    DefineProjectIdeaComponent,
    DefineRolesAndSkillsComponent,
    SkillDialog,
    DefineIdeaParameterComponent,
    ToollistComponent,
    PostToMarketplaceComponent,
    CongratulationComponent,
    FileuploadComponent,
    AddFilesComponent,
    FileListComponent,
    ConfirmDeleteComponent,
    ConfirmRedirectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CovalentLayoutModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdCoreModule,
    MdDatepickerModule,
    MdMenuModule,
    MdNativeDateModule,
    MdInputModule,
    MdDialogModule,
    MaterialModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    CovalentFileModule,
    DragDropDirectiveModule,
  //  Ng2DragDropModule,
    SDKBrowserModule.forRoot()
  ],
  entryComponents: [SkillDialog, CongratulationComponent, AddFilesComponent, ConfirmDeleteComponent, ConfirmRedirectComponent],
  providers: [Title, CanActivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }