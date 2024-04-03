import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBooks, topBooks } from './top-books';

@Component({
  selector: 'app-top-five-books',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './top-five-books.component.html',
  styleUrl: './top-five-books.component.css'
})
export class TopFiveBooksComponent implements OnInit {
  // topBooks: any[] = [
  //   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  //   { title: '1984', author: 'George Orwell', year: 1949 },
  //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  //   { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  //   { title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', year: 1997 }
  // ];

  // constructor() { }

  // ngOnInit(): void {
    
  // }

  topBooks: TopBooks[] = [];

  constructor() { }

  ngOnInit(): void {
    this.topBooks = topBooks;
  }
}
