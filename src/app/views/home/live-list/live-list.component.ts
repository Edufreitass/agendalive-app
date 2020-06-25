import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  // variavel que vai receber a lista das lives que ja aconteceram
  livesPrevious: Live[];
  // obtem a listagem das próximas lives
  livesNext: Live[];

  constructor(
    // variavel que inicia a classe LiveService atraves do construtor
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesNext);
    });
  }

}
