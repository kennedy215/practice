import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<CongratulationComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
