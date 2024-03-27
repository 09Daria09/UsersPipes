import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  salary: number;
  birthday: Date;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class UserManagementComponent {
  newUser: User = {name: '', salary: 0, birthday: new Date()};
  users: User[] = [];
  editingIndex: number | null = null; 

  ngOnInit() {}

  addUser() {
    if (this.editingIndex === null) {
      this.newUser.name = this.capitalizeFirstLetter(this.newUser.name);
      this.newUser.salary = this.formatSalary(this.newUser.salary); 
      this.users.push({...this.newUser});
      this.resetForm();
    }
  }
  

  deleteUser(index: number) {
    if (this.editingIndex !== null && this.editingIndex === index) {
      this.resetForm();
    }
    this.users.splice(index, 1);
  }

  startEditing(index: number) {
    this.editingIndex = index;
    this.newUser = {...this.users[index]}; 
  }

  saveEdits() {
    if (this.editingIndex !== null) {
      this.newUser.name = this.capitalizeFirstLetter(this.newUser.name);
      this.newUser.salary = this.formatSalary(this.newUser.salary);
      this.users[this.editingIndex] = {...this.newUser};
      this.resetForm();
    }
  }
  cancelEditing() {
    this.resetForm();
  }

  formatSalary(input: number): number {
    return Math.round((input + Number.EPSILON) * 100) / 100;
  }
  
  private resetForm() {
    this.newUser = {name: '', salary: 0, birthday: new Date()};
    this.editingIndex = null;
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}
