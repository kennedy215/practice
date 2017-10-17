import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { UploadContainer } from "../../shared/index";
@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {
  loading: boolean;
  fileListContainer: UploadContainer;
  constructor(public dialogRef: MdDialogRef<AddFilesComponent>, @Inject(MD_DIALOG_DATA) public conteinerName: string) { }

  ngOnInit() {
  }

  uploadFiles() {
    this.closeDialog();
  }

  setFileContainer(fileContainer: UploadContainer) {
    this.fileListContainer = fileContainer;
  }

  closeDialog() {
    this.dialogRef.close(this.fileListContainer);
  }
  cancelDialog() {
    this.dialogRef.close(null);
  }
}
