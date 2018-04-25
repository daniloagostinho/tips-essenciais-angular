import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './../models/user.model';

@Injectable()
export class DataServiceService {
  public user = new User();
  public mensagens = new BehaviorSubject(this.user);
  mensagensAtuais = this.mensagens.asObservable();

  constructor() {
    this.user.Name = 'Rafaella';
  }

  alteraMensagem(user: User) {
    this.mensagens.next(user);
  }

}
