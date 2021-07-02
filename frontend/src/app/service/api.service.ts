import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 引入HttpClient
import { HelloData } from '../data/hello-data'; // 引入HelloData
import { Observable } from 'rxjs';


let url = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // 注入HttpClient
  constructor(
    private http: HttpClient
  ) { }

  /** 從後端取得資料 */
  getHello(
    account:string
  ) {
    // get回傳Observable<HelloData>物件
    return this.http.get<HelloData>(url + '/hello/' + account); // 呼叫Spring Boot的DemoController.getHello()
  }


  getpost(
    id:string,
    name:string,
    accout:string
  ): Observable<any>{
    const reqobj = {
      id:id,
      name:name,
      accout:accout
    };
    {
      return this.http.post(url + '/hello', reqobj); // 呼叫Spring Boot的DemoController.getHello()
    }
  }

}
