import { Component } from '@angular/core';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allQuotes: Array<any> = [];

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.dbService.getAllQuotes().then((quotes: any[]) => {
      this.allQuotes = quotes;
      console.log('all quotes are', this.allQuotes);
    });
  }
}
