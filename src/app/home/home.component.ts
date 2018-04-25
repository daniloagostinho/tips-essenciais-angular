import { User } from './../models/user.model';
import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public user: User;

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
    console.log(this.dataService.alteraMensagem);
    this.dataService.mensagensAtuais.subscribe(novasMensagens => this.user = novasMensagens);
    console.log(this.user);
  }


}
