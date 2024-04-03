import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RomanceBooks , rBooks} from './romanceBooks';

@Component({
  selector: 'app-romance-book',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './romance-book.component.html',
  styleUrl: './romance-book.component.css'
})
export class RomanceBookComponent implements OnInit{
  rBooks: RomanceBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rBooks = rBooks; 
  }

  buyBook(book: RomanceBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }
}
