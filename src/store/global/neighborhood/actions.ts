import {ActionCreator} from 'redux';
import {ThunkResult, ExtraArguments} from '../../types';
import {NeighborhoodsActions} from './types';
import {ThunkDispatch} from 'redux-thunk';
import {actionTypes} from './actionTypes';

export const getNeighborhoodsSucess: ActionCreator<NeighborhoodsActions> = (
  resultGetNeighborhoods: any,
) => ({
  type: actionTypes.GET_NEIGHBORHOODS_SUCCESS,
  payload: {
    resultGetNeighborhoods,
  },
});

export const getNeighborhoodsFailure: ActionCreator<NeighborhoodsActions> = () => ({
  type: actionTypes.GET_NEIGHBORHOODS_FAILURE,
});

export const createAccount: ActionCreator<ThunkResult<
  any,
  ExtraArguments,
  NeighborhoodsActions
>> = () => {
  return async (
    dispatch: ThunkDispatch<any, ExtraArguments, any>,
    _,
    {neighborhoodController},
  ) => {
    try {
      const resultGetNeighborhoods = await neighborhoodController.getNeighborhoods();
      dispatch(getNeighborhoodsSucess(resultGetNeighborhoods));
    } catch (error) {
      console.warn('error', error);
      dispatch(getNeighborhoodsFailure());
    }
  };
};
