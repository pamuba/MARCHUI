import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,  } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        const hardcodedToken = '12121-34343-erer34';
        const reqWithAuth = req.clone({
            setHeaders:{
                Authorization:`Bearer ${hardcodedToken}`,
            }
        });
        return next.handle(req)
        .pipe(
            retry(1),

            catchError((error:HttpErrorResponse)=>{
                alert(`HTTP Error:${req.url}`);
                return throwError(error);
            }),
            //tracing
            finalize(()=>{
                const profilingMsg = `${req.method} *${req.urlWithParams}*`
                console.log(profilingMsg)
            })

        )
    }
}