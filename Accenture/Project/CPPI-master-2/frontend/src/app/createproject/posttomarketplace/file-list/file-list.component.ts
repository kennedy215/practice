import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { BASE_URL, API_VERSION } from '../../../shared/base.url';

import { AddFilesComponent } from '../add-files/add-files.component';
import { UploadContainer } from "../../shared/index";
import { ConfirmDeleteComponent } from "./confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  @Input() containerName: string;
  @Input() pocketTitle: string;
  @Input() fileList: any;
  @Output() onUpload: EventEmitter<UploadContainer> = new EventEmitter<UploadContainer>();
  @Output() onDelete: EventEmitter<UploadContainer> = new EventEmitter<UploadContainer>();
  deleteFileDialogRef: MdDialogRef<ConfirmDeleteComponent>;
  fileDialogRef: MdDialogRef<AddFilesComponent>;
  fileDlgConfig: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: ''
  }
  deleteFileDialogConfig: MdDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: ''
  }
  constructor(public dialog: MdDialog) { }

  ngOnInit() {

  }

  openFileAddDialog() {

    this.fileDialogRef = this.dialog.open(AddFilesComponent, this.fileDlgConfig);
    this.fileDialogRef.componentInstance.conteinerName = this.containerName;
    this.fileDialogRef.afterClosed().subscribe((result: UploadContainer) => {
      if (result !== null) {
        this.onUpload.emit(result);
      }
      this.fileDialogRef = null;
    });
  }

  getFileClass(fileName) {
    //split the upload name
    let defaultClass = "fa fa-file";
    if (fileName) {
      let fragments = fileName.split(".");
      //get the last fragment part
      let ext = fragments[fragments.length - 1];
      switch (ext) {
        case "txt":
          return "fa fa-file-text";
        case "pdf":
          return "fa fa-file-pdf-o";
        case "doc":
          return "fa fa-file-word-o"
        default:
          return defaultClass;
      }
    } else {
      return defaultClass;
    }
  }

  deleteFile(fileUpload: any) {
    this.deleteFileDialogRef = this.dialog.open(ConfirmDeleteComponent, this.deleteFileDialogConfig);
    this.deleteFileDialogRef.afterClosed().subscribe((result) => {
      if (result === 'Delete') {
        this.onDelete.emit(fileUpload);
      }
    });
  }

  downloadFile(file) {
    var link = document.createElement("a");
    link.download = file.physicalFileName;
    link.href = `${BASE_URL}/${API_VERSION}/containers/${file.container}/download/${file.physicalFileName}`;
    link.click();
  }

}
