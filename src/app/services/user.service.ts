// import {Injectable} from '@angular/core';
// import {Observable} from "rxjs";
// import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import {User} from "../models/user";
// import {ApiService} from "./api.service";

// @Injectable()
// export class UserService {

//     constructor(private api: ApiService) {

//     }


//     getUsers(filter?: string): Observable<User[]> {

//         let endPoint = '/users';
//         this.api.get(endPoint).subscribe(data => {
//             console.log(data);

//         });
//         // return this.api.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
    
//     }

//     // search(q: string): Observable<any> {
//     //     let endPoint = '/search/users?q=' + q;
//     //     return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));

//     // }

//     // getUserFollowers(user: string): Observable<any> {

//     //     let endPoint = '/users/' + user + '/followers';
//     //     return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
//     // }

// }