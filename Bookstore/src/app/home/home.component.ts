import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';

// export interface Carousel{
//   imageSrc: string;
//   imageAlt: string;
// }



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

//   images: Carousel[] = [
//     {
//       imageSrc:
//         'https://i.pinimg.com/originals/91/bf/bc/91bfbc7da2763a44a4ed0e73ca88748f.jpg',
//       imageAlt: 'img1'
//     },
//     {
//       imageSrc:
//         'https://i.pinimg.com/originals/23/b0/e1/23b0e1304331c3cc9422112898bfb1b7.jpg',
//       imageAlt: 'img2'
//     },
//     {
//       imageSrc:
//         'https://sun9-18.userapi.com/impg/Z07FIzMT4Pb967_7oRd0fFKqv1NhV2dqVK6DwQ/KmTlS9R5N7A.jpg?size=1080x1080&quality=96&sign=6695e58ad895ed76440e97751c7381c4&c_uniq_tag=WIr8zXK6BH7mnIXpFalvyBiTzmeJzxEZ7tqoUR5ONgc&type=album',
//       imageAlt: 'img3'
//     }
//   ];

//   @Input() indicators = true;


//   selectedIndex = 0;



//    selectImage(index: number): void {
//      //this.selectedIndex = index;
     
//  }

genres: { name: string, imageUrl: string }[] = [
  { name: 'Fantasy', imageUrl: 'https://avatars.mds.yandex.net/i?id=3a44726dfe569c1d4e7362825920883b0ca4d688-12421006-images-thumbs&n=13' },
  { name: 'Science-Fiction', imageUrl: 'https://avatars.mds.yandex.net/i?id=ef0008cebced2422895b5f857d9cd09b7419b384-12421657-images-thumbs&n=13' },
  { name: 'Mystery', imageUrl: 'https://avatars.mds.yandex.net/i?id=c38b46a2eae3d8acfa4be22a3e55540260b9ee6d-7134052-images-thumbs&n=13' },
  { name: 'Romance', imageUrl: 'https://avatars.mds.yandex.net/i?id=6e943a8007083bb5e10fec08b986e9fa3b8120a3-12716737-images-thumbs&n=13' },
  { name: 'Thriller', imageUrl: 'https://avatars.mds.yandex.net/i?id=b87f9b75d047ac84a88500a43aedd0bc4c9ac9a6-9686739-images-thumbs&n=13' },
  { name: 'Manga', imageUrl: 'https://avatars.mds.yandex.net/i?id=85c5bd0af2db271ec0ff9c4f62475ed2462394ff-11914220-images-thumbs&n=13' },
  
  
];
  
constructor() { }

ngOnInit(): void {
}



}
