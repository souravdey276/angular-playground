import { BadInput } from './../common/bad-inpur-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { Post } from '../posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private url:string = '';
  
constructor(@Inject('url') private url:string,private http:HttpClient) { }

getAll(){
  return this.http.get(this.url);
}
// createPost(post:Post){
//   return this.http
//   .post<{title?:string,id?:number}>(this.url, JSON.stringify(post))
// }
create(resource:any){
  return this.http
  .post<{title?:string,id?:number}>(this.url, JSON.stringify(resource))
  .pipe(
    // catchError((error:Response)=>{
    //   if(error.status===400){
    //     return throwError(new BadInput());
    //   }
    //   else{
    //     return throwError(new AppError(error))
    //   }
    // }
    // )
    catchError(this.handleError)
  )
}
update(resource:any){
  return this.http.put(this.url + '/' + resource.id,resource)
  
}
// deletePost(id:number){
//   return this.http.delete(this.url + '/ABC' +id)
// }
delete(id:number){
  return this.http.delete(this.url + '/ABC' + 21547)
  .pipe(
    catchError(error =>{
      console.log('Error Management Happening here.',error);
      if(error.statues === 404){
        return throwError(new NotFoundError())
      }
      else{
           return throwError(new AppError(error));
      }
      
    })
  )
}
private handleError(error:Response){
  console.log('Error management is hapening here....')
if(error.status===404){
  return throwError(new NotFoundError());
}
if(error.status===404){
  return throwError(new BadInput());
}
else
return throwError(new AppError(error));
}
}
