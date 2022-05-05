import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.css']
})
export class ButtonCreateComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
