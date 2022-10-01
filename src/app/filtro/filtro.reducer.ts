import { createReducer, on } from '@ngrx/store';
import { setFilter, filtrosValidos, filter } from './filtro.actions';


export const estadoInicial:filtrosValidos = {filter:filter.TODOS};

export const filtroReducer = createReducer(estadoInicial,
    on(setFilter, (state,{ filtro }) => filtro));