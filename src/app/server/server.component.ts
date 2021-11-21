import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId=10;
  serverStatus="offline";
  constructor(){
    this.serverStatus=Math.random()>0.5?'online':'offline';
  }  

  GetServerStatus(){
    return this.serverStatus;
  }
  ngOnInit(): void {
  }
  getcolor(){
    return this.serverStatus==='online'?'green':'red';
  }

}
