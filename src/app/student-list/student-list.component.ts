import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <h2 class = "custom">
      student-list works!
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
