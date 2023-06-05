import {Component} from '@angular/core';
import {QrRedirectService} from "./shared/service/qr-redirect.service";
import {FormBuilder, Validators, } from "@angular/forms";
import {NgxFileDropEntry} from "ngx-file-drop";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Response} from "./shared/interfaces/qr-redirect-info";

@Component({
  selector: 'app-qr-redirect',
  templateUrl: './qr-redirect.component.html',
  styleUrls: ['./qr-redirect.component.scss'],
  providers: [QrRedirectService]
})
export class QrRedirectComponent{
  dataResponse: Response;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  files: NgxFileDropEntry[] = [];

  constructor(private _formBuilder: FormBuilder, private service: QrRedirectService, private _snackBar: MatSnackBar) {
    this.dataResponse = { predictedLabelValue:"NONE" } as Response;
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public trainModel(){
    const category = this.firstFormGroup.get('firstCtrl')?.value;
    const formData = new FormData();
    for (const file of this.files) {
      if (file.fileEntry.isFile) {
        const fileEntry = file.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          formData.append('images', file, file.name);
        });
      }
    }
    formData.append('category', category ?? '');
    this.service.apiTrainModel(formData).subscribe(response => {
      this.openSnackBar("Modelo de procesamiento de imagenes entrado con exito", "Exito");
    });
  }

  public sorterImage(){
    const formData = new FormData();
    for (const file of this.files) {
      if (file.fileEntry.isFile) {
        const fileEntry = file.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          formData.append('image', file, file.name);
        });
      }
    }
    this.service.sorterImage(formData).subscribe(response => {
      this.openSnackBar("Clasificacion Obtenida", "Exito");
      this.dataResponse = response;
    });
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
