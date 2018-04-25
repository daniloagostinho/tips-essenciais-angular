import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public user: User;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.mensagensAtuais.subscribe(novasMensagens => this.user = novasMensagens);
  }

}
