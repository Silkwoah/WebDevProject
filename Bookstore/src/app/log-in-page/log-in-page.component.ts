import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent {

  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  onSubmit(): void {
    // Add authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  onLoginClick(): void {
    //alert('hello');
    this.router.navigate(['/home']);
  }
}
