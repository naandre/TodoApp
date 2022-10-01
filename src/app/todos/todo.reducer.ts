import { createReducer, on } from "@ngrx/store";
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a thanos'),
    new Todo('Comprar traje de IronMan'),
    new Todo('Robar escudo de Capitán America')
];

export const todoReducer = createReducer(estadoInicial,
on(actions.crear, (state,{texto}) => [...state, new Todo(texto)]),
on(actions.toggle, (state,{id}) => {

    return state.map(todo => {
        if(todo.id === id){
            return {
                ...todo,
                finalizado : !todo.finalizado
            };
        }
        else{
            return todo;
        }
    });
}),
on(actions.editar, (state,{todo}) => {
    return state.map(objTodo => {
        if (objTodo.id === todo.id) {
            return{
                ...objTodo,
                texto: todo.texto
            };
        }
        else{
            return objTodo;
        }
    });
}),
on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
on(actions.toggleAll, (state, {finalizado}) => state.map(todo => {
        return{
            ...todo,
            finalizado: finalizado
        };
    })),
on(actions.borrarCompletados, state => state.filter(todo => !todo.finalizado))
);