import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  class: string;
  due_date: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:8080'; // Replace with your API's base URL

  constructor() {}

  // Fetch all todos
  async getTodos(): Promise<Todo[]> {
    const response = await fetch(`${this.baseUrl}/todos`);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }
    return response.json();
  }

  // Create a new todo
  async createTodo(todo: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error(`Failed to create todo: ${response.statusText}`);
    }
    return response.json();
  }

  // Update a todo
  async updateTodo(id: number, completed: boolean): Promise<Todo> {
    const response = await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
      throw new Error(`Failed to update todo: ${response.statusText}`);
    }
    return response.json();
  }

  // Delete a todo
  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }
  }
}
