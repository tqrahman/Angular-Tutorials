import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
    providedIn: "root"
})
export class DataService{

    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadInput(error.json()));
        
        if (error.status === 404)
            return throwError(new NotFoundError()); 
        
        return throwError(new AppError(error));
    }
}