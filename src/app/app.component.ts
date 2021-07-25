import { Component, ViewChild } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements = [{type:'server',name:'TestName',content:'Just a test'}];
@ViewChild('home',{static :false}) home:CockpitComponent
onServerAdded(serverData:{serverName:string,serverContent:string}) {

  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintadded(blueprintData:{serverName:string,serverContent:string}) {
  console.log(this.home.no)
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
}
}


