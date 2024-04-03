import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopFiveBooksComponent } from './top-five-books/top-five-books.component';
import { FantasyBookComponent } from './fantasy-book/fantasy-book.component';
import { RomanceBookComponent } from './romance-book/romance-book.component';
import { MangaBookComponent } from './manga-book/manga-book.component';
import { ScienceFictionBookComponent } from './science-fiction-book/science-fiction-book.component';
import { ThrillerBookComponent } from './thriller-book/thriller-book.component';
import { MysteryBookComponent } from './mystery-book/mystery-book.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


export const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'home', component:HomeComponent,title:'Book Haven'},
    {path: 'top-books', component:TopFiveBooksComponent },
    {path:'genre/Fantasy', component:FantasyBookComponent},
    {path:'genre/Romance', component:RomanceBookComponent},
    {path:'genre/Manga', component:MangaBookComponent},
    {path:'genre/Science-Fiction', component:ScienceFictionBookComponent},
    {path:'genre/Thriller', component:ThrillerBookComponent},
    {path:'genre/Mystery', component:MysteryBookComponent},
    {path:'info', component:InfoPageComponent},
    {path:'login', component:LogInPageComponent},
    {path:'cart', component:ShoppingCartComponent}
];
