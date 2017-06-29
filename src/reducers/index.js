"use strict"

import {combineReducers} from 'redux';

import {booksReducer} from './booksReducer';
import {cartReducer} from './cartReducer';
import {modalReducer} from './modalReducer';
import {studentReducer} from './studentReducer';

export default combineReducers({
	books: booksReducer,
	cart: cartReducer,
	modal: modalReducer,
	students: studentReducer

})