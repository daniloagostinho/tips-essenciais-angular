import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class MenssageService {
  public mensagem = new Subject<string>();

  setMenssage(value: string) {
    this.mensagem.next(value);
  }
  constructor() { }

}
