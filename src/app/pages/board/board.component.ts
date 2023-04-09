import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { Column, ToDo } from 'src/app/models/todo.models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {


  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '3',
          title: 'Play video games'
        }
      ]
    }
  ]



  // todos: ToDo[] = [
  //   {
  //     id: '1',
  //     title: 'Make dishes'
  //   },
  //   {
  //     id: '2',
  //     title: 'Buy a unicorn'
  //   },
  //   {
  //     id: '3',
  //     title: 'Watch Angular Path in Platzi'
  //   }
  // ]


  // doing: ToDo[] = [
  //   {
  //     id: '3',
  //     title: 'Watch Angular Path in Platzi'
  //   }
  // ]
  // done: ToDo[] = [
  //   {
  //     id: '3',
  //     title: 'Play video games'
  //   }
  // ]


  constructor(private dialog: Dialog) {

  }

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

  addColumn() {
    this.columns.push({
      title: 'New columns',
      todos: []
    })
  }


  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',

      //pasar la información al componente dialog
      data: {
        todo: todo,

      }
    });

    //recibir informacion del dialogo
    dialogRef.closed.subscribe(outputAst => {
      console.log(outputAst);
    })
  }
}
