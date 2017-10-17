import { Observable } from "rxjs/Rx";

import { TdFileService, IUploadOptions } from '@covalent/core';

export class UploadContainer {
    private files: File | FileList;
    private container: string;
    constructor(files, private fileUploadService: TdFileService,containerName:string) {
        this.container = containerName;
        this.files = files;
    }

    private uploadFile(file: File, containerName, currentProjectId): Observable<any> {
        let formData: FormData = new FormData();
        formData.append('uploadResource', file);
        let uploadUrl = "http://cppi-crowdteamingkit.c9users.io:8081/api/ProjectUploads/upload/" + currentProjectId + "/" + containerName;
        const options: IUploadOptions = {
            url: uploadUrl,
            method: 'post',
            formData: formData
        };

        return this.fileUploadService.upload(options)
            .finally(() => {
                //to do
            });
    }

    uploadProjectDocuments(currentProjectId: number): Observable<any> {
        if (this.files instanceof FileList || Array.isArray(this.files)) {
            let observ = [];
            for (var index = 0; index < this.files.length; index++) {
                let obs;
                if (this.files instanceof FileList) {
                    obs = this.uploadFile(this.files.item(index), this.container, currentProjectId);
                } else {
                    obs = this.uploadFile(this.files[index], this.container, currentProjectId);
                }
                observ.push(obs);
            }
            return Observable.forkJoin(observ);
        } else {
            //Upload single file
            return this.uploadFile(this.files, this.container, currentProjectId);
        }
    }
}
