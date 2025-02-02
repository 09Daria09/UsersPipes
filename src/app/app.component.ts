import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserManagementComponent } from '../app/user-management/user-management.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    UserManagementComponent,
    RouterModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'UsersPipes';
}
