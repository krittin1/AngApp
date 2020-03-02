import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teety!';
  isLoading = true;

  todoList: number[] = [];

  imageURL = 'https://placeimg.com/300/300/animals'

  isActive = true;

  email: string;

  amount = 123456.78999999;
  
  today = new Date();


  user = {
    name: 'John Snow',
    age: 20,
    isadmin: false,
  };


  constructor(
    private todoService: TodoService
) {
  this.todoList = this.todoService.getTodoList();
}


onClickokButton(event){
  console.log(event);
}

onClickChangeColorButton(event){
  if(this.isActive){
    this.isActive = false;
  }
  else{
    this.isActive = true;
  }
  

}


search(email: string){
  console.log('search', email);
}
}




   
