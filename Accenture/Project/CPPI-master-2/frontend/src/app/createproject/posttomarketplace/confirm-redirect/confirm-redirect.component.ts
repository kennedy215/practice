import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-redirect',
  templateUrl: './confirm-redirect.component.html',
  styleUrls: ['./confirm-redirect.component.css']
})
export class ConfirmRedirectComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ConfirmRedirectComponent>, @Inject(MD_DIALOG_DATA) public title: string, @Inject(MD_DIALOG_DATA) public description: string) { }
  ngOnInit() {
  }

}
