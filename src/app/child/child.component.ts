import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit():void{
    
  }
  Input() item=0;

  ngOnInit(): void {
  }
  //30. Send data child to parent component
  //1. Make child component
  //2. Use child component in parent component
  //3. Call function from parent component
  //4. Send function from parent component
  //5. Get data in parent component

}
