import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  serverCreationEvent="No Server is Created";
  AllowNewServer=false;
  server_created=false;
  serverName='';
  servers=['testserver1','testserver2'];
  constructor() {
    setTimeout(()=>{
      this.AllowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }
  CreateServer(){
    if(this.serverName.length>0){
      this.server_created=true;
      this.servers.push(this.serverName);
    }
    else{
      this.server_created=false;
    }
   // this.serverCreationEvent="server is created and server name is: "+this.serverName;
  }

}