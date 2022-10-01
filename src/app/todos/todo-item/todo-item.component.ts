import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';
import { borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!:ElementRef;
  chkFinalizado!:FormControl;
  txtInput!:FormControl;
  editando!:boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkFinalizado = new FormControl(this.todo.finalizado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkFinalizado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id:this.todo.id}));
    });
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();  
    }, 0);
    
  }

  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid) { return; }
    if(this.txtInput.value == this.todo.texto){ return; }

    this.store.dispatch(actions.editar({todo:{...this.todo, texto: this.txtInput.value}}));
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
