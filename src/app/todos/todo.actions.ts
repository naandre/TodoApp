import { createAction, props } from "@ngrx/store";
import { Todo } from './models/todo.model';

export const crear = createAction(
    '[TODO] Crea Todo',
    props<{texto: string}>());

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{id:number}>());

export const editar = createAction(
    '[TODO] Edita Todo',
    props<{todo:Todo}>());

export const borrar = createAction(
    '[TODO] Borra Todo',
    props<{id: number}>());

export const toggleAll = createAction(
    '[TODO] Toggle Todos',
    props<{finalizado:boolean}>());

export const borrarCompletados = createAction('[TODO] Borrar Completados');