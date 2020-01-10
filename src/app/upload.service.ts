import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
  ) { }
}
