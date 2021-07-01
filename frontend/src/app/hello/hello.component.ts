import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service'; // 引入ApiService
import { HelloData } from '../data/hello-data'; // 引入HelloData

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  id: string ='';
  name: string ='';

  // 注入ApiService
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  /** 委託ApiService.getHello()取得內容 */
  getHello() {
    this.apiService.getHello().subscribe(
      value => this.success(value)
    );
  }

  /** API呼叫成功的處理 */
  success(value: HelloData) {
    this.id = value.id;
    this.name = value.name;
  }

  /** 清除頁面{{hello}}內容 */
  clear() {
    this.id = '';
    this.name = '';
  }

}
