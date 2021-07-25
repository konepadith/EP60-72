import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpcreated') bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();;
  // newServerName = '';
  // newServerContent = '';
  no:number=5
  @ViewChild('serverContentInputhtml') serverContentInput : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
    // console.log(nameInput.value)
   this.serverCreated.emit({
     serverName:nameInput.value ,
     serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    // this.serverContentInput.nativeElement.value ='Something';
    this.bluePrintCreated.emit({
      serverName:nameInput.value ,
      serverContent:this.serverContentInput.nativeElement.value
     });
  }
}
