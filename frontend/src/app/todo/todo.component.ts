import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
  ],
  styleUrls: ['./todo.component.css'],
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Partial<Todo> = {
    name: '',
    class: '',
    due_date: '',
    completed: false,
  };

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    await this.fetchTodos();
  }

  async fetchTodos() {
    try {
      this.todos = await this.todoService.getTodos();
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  async addTodo() {
    if (this.newTodo.name?.trim() && this.newTodo.class?.trim() && this.newTodo.due_date) {
      try {
        const todo = await this.todoService.createTodo(this.newTodo);
        this.todos.push(todo);
        this.newTodo = { name: '', class: '', due_date: '', completed: false };
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  }
}
