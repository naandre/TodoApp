import { createAction, props } from '@ngrx/store';

export type filtrosValidos ={filter:filter};
export enum filter {
    TODOS = 'todos' , PENDIENTES = 'pendientes', COMPLETADOS = 'completados'};

export const setFilter = createAction(
    '[FILTER] Set Filter',
    props<{filtro:filtrosValidos}>());