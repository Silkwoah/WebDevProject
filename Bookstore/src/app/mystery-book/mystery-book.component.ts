import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mBooks, MysteryBooks } from './mysteryBooks';

@Component({
  selector: 'app-mystery-book',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mystery-book.component.html',
  styleUrls: ['./mystery-book.component.css']
})
export class MysteryBookComponent implements OnInit {
  
  mBooks: MysteryBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mBooks = mBooks; 
  }

  buyBook(book: MysteryBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }

}