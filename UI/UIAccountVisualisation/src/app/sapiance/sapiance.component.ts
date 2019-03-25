import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sapiance',
  templateUrl: './sapiance.component.html',
  styleUrls: ['./sapiance.component.css']
})
export class SapianceComponent implements OnInit {
  @Output() menuTitle = new EventEmitter<String>();
  constructor() { 
    //this.menuTitle.emit("Sapiance Report");
  }

  ngOnInit() {
    
  }
  sendMenu(){
    // this.menuTitle.emit("Sapiance Report");
  }

}
