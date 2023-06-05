import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpService} from "@core/services/http.service";
import {environment} from "@env/environment";
import {Response} from "../interfaces/qr-redirect-info";


@Injectable()
export class QrRedirectService {

  constructor(protected http: HttpService) { }

  public apiTrainModel(data: any): Observable<any>{
    return this.http.doPostFile(`${environment.appUrl}ImageSorter`, data)
      .pipe(map((response: any) => response));
  }

  public sorterImage(data: any): Observable<Response>{
    return this.http.doPostFile(`${environment.appUrl}ImageSorter/ClasifyImage`, data)
      .pipe(map((response: any) => response as Response));
  }
}
