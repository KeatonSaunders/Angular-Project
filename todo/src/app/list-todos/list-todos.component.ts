import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: String

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('keaton').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('keaton', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Update todo ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

}
