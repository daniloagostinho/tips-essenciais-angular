import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  usandoOperadorElvis: any = {
    responsavel: null,
    email:'carlota@gmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
