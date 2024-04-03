import { Component, OnInit } from '@angular/core';
import { fBooks, FantasyBooks } from './fantasyBook';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-fantasy-book',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './fantasy-book.component.html',
  styleUrl: './fantasy-book.component.css'
})
export class FantasyBookComponent implements OnInit{

  fBooks: FantasyBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fBooks = fBooks; 
  }

  buyBook(book: FantasyBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }
}
