import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  pendientes:number = 0;
  filtroActual:actions.filter = actions.filter.TODOS;
  filtros:actions.filtrosValidos[] = [
    {
      filter: actions.filter.TODOS
    },
    {
      filter:actions.filter.PENDIENTES
    },
    {
      filter:actions.filter.COMPLETADOS
    }
    
  ];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => {
    //   this.filtroActual = filtro.filter;
    // });
    this.store.subscribe(state => {
      this.filtroActual = state.filtro.filter;
      this.pendientes = state.todos.filter(x => !x.finalizado).length;
    });
  }

  limpiar(){
    this.store.dispatch(borrarCompletados());
  }

  cambiarFiltro(filtro:actions.filtrosValidos){
    this.store.dispatch(actions.setFilter({filtro}));
  }

}
