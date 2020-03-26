import {combineReducers, Reducer, AnyAction} from 'redux';
import {NeighborhoodReducer} from './global/neighborhood/reducer';
import {ActionsType} from './types';

export type ActionsState = Reducer<ActionsType, AnyAction>;

export default combineReducers<ActionsState>({
  neighborhood: NeighborhoodReducer,
});
