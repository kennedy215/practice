import { Component, Inject,OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ConfirmDeleteComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  

}
