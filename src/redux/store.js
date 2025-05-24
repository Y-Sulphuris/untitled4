import {createStore} from 'redux';
import {productReducer} from './productSlice';

export const store = createStore(productReducer);
