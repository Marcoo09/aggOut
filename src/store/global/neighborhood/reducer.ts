import {Reducer} from 'redux';
import {actionTypes} from './actionTypes';

const initialState: any = {};

export const NeighborhoodReducer: Reducer<any, any> = (
  state = initialState,
  action: any,
) => {
  const {type} = action;
  switch (type) {
    case actionTypes.GET_NEIGHBORHOODS_SUCCESS:
      return {resultGetNeighborhoods: action.payload.resultGetNeighborhoods};
    default:
      return state;
  }
};
