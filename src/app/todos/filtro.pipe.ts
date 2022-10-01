import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filter, filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    console.log(filtro);
    switch (filtro.filter) {
      case filter.COMPLETADOS:
        return todos.filter(todo => todo.finalizado);
      case filter.PENDIENTES:
        return todos.filter(todo => !todo.finalizado);
      default:
        return todos;
    }
  }

}
