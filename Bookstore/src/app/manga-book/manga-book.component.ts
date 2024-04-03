import { Component, OnInit } from '@angular/core';
import { MangaBooks,mangas } from './mangaBooks';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manga-book',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './manga-book.component.html',
  styleUrl: './manga-book.component.css'
})
export class MangaBookComponent implements OnInit{

  mangas: MangaBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mangas = mangas; 
  }

  buyBook(book: MangaBooks){
    
    console.log('Buying book:', book);
    // You can add more logic here such as adding the book to a shopping cart, redirecting to a checkout page, etc.
  }
}
