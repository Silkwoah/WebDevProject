import { Component, OnInit } from '@angular/core';
import { ThrillerBooks,tBooks } from './thrillerBooks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thriller-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thriller-book.component.html',
  styleUrl: './thriller-book.component.css'
})
export class ThrillerBookComponent implements OnInit{
  tBooks: ThrillerBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tBooks = tBooks; 
  }

  buyBook(book: ThrillerBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }
}
