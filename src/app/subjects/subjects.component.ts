import { Component, OnInit } from '@angular/core';
import { MenssageService } from './../services/menssage.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [MenssageService]
})
export class SubjectsComponent implements OnInit {
  mensagem;
  constructor(private messageService: MenssageService) { }

  ngOnInit() {
    this.messageService.mensagem.subscribe(mensagemRecebida => this.mensagem = mensagemRecebida)
  }

  setMessage(event) {
    console.log(event.value);
    this.messageService.setMenssage(event.value);
  }
}
