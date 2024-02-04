import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent {

  quote = new FormControl("", [Validators.required]);
  constructor(private dbService:DbService) {}

  ngOnInit():void
  {
    
  }

  save()
  {
    console.log("quote", this.quote.value)
    if (this.quote.value !== null) {
      this.dbService.saveQuote(this.quote.value);
    }
   
  }
}
