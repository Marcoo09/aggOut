import {Reducer} from 'redux';

const initialState: any = {};

export const NeighborhoodReducer: Reducer<any, any> = (
  state = initialState,
  action: any,
) => {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
};
