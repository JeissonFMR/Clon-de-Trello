import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo.models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {


  todos: ToDo[] = [
    {
      id: '1',
      title: 'Make dishes'
    },
    {
      id: '2',
      title: 'Buy a unicorn'
    },
    {
      id: '3',
      title: 'Watch Angular Path in Platzi'
    }
  ]


  doing: ToDo[] = [
    {
      id: '3',
      title: 'Watch Angular Path in Platzi'
    }
  ]
  done: ToDo[] = [
    {
      id: '3',
      title: 'Play video games'
    }
  ]

  drop($event: CdkDragDrop<ToDo[]>) {
    console.log($event);

    // si el drag and drop es en la misma columna
    if ($event.previousContainer === $event.container) {

      // moveItemInArray mover en la misma columna o array
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex)

    } else {
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex)
    }
  }
}
