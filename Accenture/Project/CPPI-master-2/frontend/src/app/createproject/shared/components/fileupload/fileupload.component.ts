import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TdFileService, IUploadOptions } from '@covalent/core';
import { Observable } from "rxjs/Rx";

import { UploadContainer } from "../../models/index";

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
  providers: [TdFileService]
})
export class FileuploadComponent implements OnInit {
  selectedFiles: File | FileList;
  selectedFileList: Array<any> = [];
  @Input() containerName:string;
  @Output() onFileUpload = new EventEmitter<UploadContainer>();
  @Output() onFileSelect = new EventEmitter<UploadContainer>();
  constructor(private fileUploadService: TdFileService) { }

  ngOnInit() {
  }

  convertFileListToArray(fileList: FileList) {
    let fileArray = [];
    for (var index = 0; index < fileList.length; index++) {
      fileArray.push(fileList[index]);
    }
    return fileArray;
  }

  selectEvent(files: FileList | File): void {
    console.log(files instanceof FileList);
    console.log(files);
    //If selected file  is a single file then push that file in the list of files
    if (files instanceof FileList) {
      this.setSelectedFileList(this.convertFileListToArray(files));
    } else {
      this.setSelectedFileList([files]);
    }
    console.log(this.selectedFileList);
  }

  cancelEvent(): void {
    this.setSelectedFileList([]);
  }
  

  private setSelectedFileList(files) {
    this.selectedFileList = files;
    this.onFileSelect.emit(new UploadContainer(this.selectedFileList, this.fileUploadService, this.containerName));
  }


  uploadEventPart1(files: FileList | File): void {
    // save a new project
    let upc = new UploadContainer(files, this.fileUploadService,this.containerName);
    this.onFileUpload.emit(upc);
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
    // this.loading = true;
    // this.projectApi.destroyByIdRelProjectUploads(this.localStoreProject.id, fileUpload.id).subscribe((res) => {
    //   this.projectService.deleteProjectUpload(fileUpload);
    //   this.loading = false;
    // });
  }
}
