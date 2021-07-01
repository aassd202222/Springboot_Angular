import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 引入HttpClient
import { HelloData } from '../data/hello-data'; // 引入HelloData

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // 注入HttpClient
  constructor(
    private http: HttpClient
  ) { }

  /** 從後端取得資料 */
  getHello() {
    // get回傳Observable<HelloData>物件
    let url = 'http://localhost:8080';
    return this.http.get<HelloData>(url + '/hello'); // 呼叫Spring Boot的DemoController.getHello()
  }

}
