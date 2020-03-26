import {Action} from 'redux';
import {actionTypes} from './actionTypes';

export interface GetNeighborhoodsFailure extends Action {
  type: actionTypes.GET_NEIGHBORHOODS_FAILURE;
}

export interface GetNeighborhoodsSuccess extends Action {
  type: actionTypes.GET_NEIGHBORHOODS_SUCCESS;
  payload: {
    resultGetNeighborhoods: any;
  };
}

export type NeighborhoodsActions =
  | GetNeighborhoodsSuccess
  | GetNeighborhoodsFailure;
