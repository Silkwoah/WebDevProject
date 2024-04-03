import { Component, OnInit } from '@angular/core';
import { SciFicBooks,sfBooks } from './scienceFictionBooks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-science-fiction-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './science-fiction-book.component.html',
  styleUrl: './science-fiction-book.component.css'
})
export class ScienceFictionBookComponent implements OnInit{
  sfBooks: SciFicBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sfBooks = sfBooks; 
  }

  buyBook(book: SciFicBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }
}
