"use strict"

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//REDUX, MIDDLEWARE AND REDUCERS
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/';

// ACTIONS
import * as cartActions from './actions/cartActions';
import * as bookActions from './actions/bookActions';

// COMPONENTS
import BooksList from './components/pages/booksList';
import Dashboard from './components/pages/dashboard';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import StudentList from './components/pages/studentList'
import CSSGridExample from './components/pages/cssGridExample';
import Main from './main';

// SUBSCRIBE TO CHANGES IN STATE
//store.subscribe( () => console.log('current state is: ', store.getState()) );
const middleware = applyMiddleware(logger);

//
// CREATE STORE - THE INITIAL STATE
const store = createStore(reducers, middleware);

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Dashboard} />
				<Route path="/admin" component={BooksForm}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/studentList" component={StudentList}/>
				<Route path="/CSS-Grid-Example" component={CSSGridExample}/>

			</Route>
		</Router>
	</Provider>
);

//RENDER APP
render(Routes, document.getElementById('app'));

