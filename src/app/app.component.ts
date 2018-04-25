import { Component } from '@angular/core';

import { User } from './models/user.model';

import { DataServiceService } from './services/data-service.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: User;

  title = 'app';

  constructor(private dataService: DataServiceService, private router: Router) {

  }

  ngOnInit() {
    console.log(this.dataService.alteraMensagem);
    this.dataService.mensagensAtuais.subscribe(novasMensagens => this.user = novasMensagens);
    console.log(this.user);
  }

  alteraName(name) {
    this.user.Name = name;
    this.dataService.alteraMensagem(this.user);
  }

  aboutComponent() {
    this.router.navigate(['/about']);
  }

  homeComponent() {
    this.router.navigate(['/home']);
  }

}
