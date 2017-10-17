import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate,CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { PostToMarketplaceComponent } from "./posttomarketplace.component";
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import {ConfirmRedirectComponent} from "./confirm-redirect/confirm-redirect.component";

@Injectable()
export class CanActivateGuardService implements CanDeactivate<PostToMarketplaceComponent> {
  redirectDailogRef: MdDialogRef<ConfirmRedirectComponent>;
  redirectDlgConfig: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',

  }
  constructor(public dialog: MdDialog){

  }
  canDeactivate(
    component: PostToMarketplaceComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    // Get the Crisis Center ID

    // Get the current URL
    console.log(state.url);
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return new Promise<boolean>((resolve, reject) => {
      if (nextState.url.indexOf("goal")>-1){
        this.redirectDailogRef = this.dialog.open(ConfirmRedirectComponent, this.redirectDlgConfig);
        this.redirectDailogRef.componentInstance.title ="Edit the goal";
        this.redirectDailogRef.componentInstance.description ="You may have to reconfigure many parameters of the project. Do you want to continue to edit the project goal?";
      } else if (nextState.url.indexOf("deliverables") > -1){
        this.redirectDailogRef = this.dialog.open(ConfirmRedirectComponent, this.redirectDlgConfig);
        this.redirectDailogRef.componentInstance.title = "Edit the anticipated deliverables";
        this.redirectDailogRef.componentInstance.description = "You may have to reconfigure many parameters of the project. Do you want to continue to edit the anticipated deliverables?";
      }
      this.redirectDailogRef.afterClosed().subscribe((res) => {
        resolve(res === 'Edit');
      });
    });
  }

}
