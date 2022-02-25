import { ADD_PRODUCT } from './constants';

export const addProduct: (payload: any) => { type: string; payload: any } = (
  payload: any
) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};
