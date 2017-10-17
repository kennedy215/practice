import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './createproject/createproject.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SelectProjectTypeComponent } from './selectprojecttype/selectprojecttype.component';
import { DefineProjectIdeaComponent } from './createproject/defineprojectidea/defineprojectidea.component';
import { DefineRolesAndSkillsComponent } from './createproject/definerolesandskills/definerolesandskills.component';
import { DefineIdeaParameterComponent } from './createproject/defineideaparameter/defineideaparameter.component';
import { PostToMarketplaceComponent} from './createproject/posttomarketplace/posttomarketplace.component';
import { CanActivateGuardService } from './createproject/posttomarketplace/can-activate-guard.service';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: LandingpageComponent
      },
      {
        path: 'selectproject', component: SelectProjectTypeComponent
      },
      {
        path: "createproject", component: CreateProjectComponent,
        children: [
          {
            path: '', component: DefineProjectIdeaComponent
          },
          {
            path: 'rolesandskills', component: DefineRolesAndSkillsComponent
          }
        ]
      },
      {
        path: 'createproject/:id', component: CreateProjectComponent,
        children: [
          {
            path: '', component: DefineProjectIdeaComponent
          },
          {
            path: 'ideaparameters', component: DefineIdeaParameterComponent
          },
          {
            path: 'rolesandskills', component: DefineRolesAndSkillsComponent
          },
          {
            path: 'posttomarketplace', component: PostToMarketplaceComponent,
            canDeactivate: [CanActivateGuardService]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
