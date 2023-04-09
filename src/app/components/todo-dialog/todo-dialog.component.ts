import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { ToDo } from '../../models/todo.models';



interface InputData {
  todo: ToDo;
}


interface OutputData {
  rta: boolean;
}


@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent {


  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;



  todo: ToDo;

  constructor(private dialogRef: DialogRef<OutputData>, @Inject(DIALOG_DATA) private data: InputData) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close();
  }

  //pasar la información
  closeWidthrta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
