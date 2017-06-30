"use strict"

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

//COMPONENTS
import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';
import AnimationTest from './animationTest';
import Modal from './modal';

import StudentList from './studentList';
import StudentDetail from './studentDetail';

//ACTIONS
import { getBooks } from '../../actions/bookActions';

import {Grid, Col, Row, Button, Well} from 'react-bootstrap';



class BooksList extends Component {

	componentDidMount() {
		this.props.getBooks();
	}

	render(){
		const bookListStyles = {
			test: {
				color: 'blue',
		  		// backgroundImage: 'url(' + imgUrl + ')',
			},
			row: {
				marginTop: '15px',
			},
			toprow: {
				textAlign: 'center',
			}

		  
		}


		const booksList = this.props.books.map( (item) => {
			return (
				<div key={item._id}>
					<BookItem 
						_id={item._id}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				</div>
			);
		})

		return (
			<Grid>
				<Row style={bookListStyles.toprow}>
					<Col >
						<AnimationTest />
					</Col>
				</Row>
				<Row style={bookListStyles.row}>
					<Col >
						<Cart />
					</Col>
				</Row>
				<Row style={bookListStyles.row}>
					<Col xs={12} sm={6}>
						<BooksForm />
					</Col>
					<Col xs={12} sm={6} >
						{booksList}
					</Col>
				</Row>
				<Well>
					<Row>
						<Col>
							<StudentList />
						</Col>
					</Row>
				</Well>
				<Well>
					<Row>
						<Col>
							<StudentDetail />
						</Col>
					</Row>
				</Well>
				<Row>
					<Modal />
				</Row>
				
			</Grid>
		);
	}
}


function mapStateToProps(state){
	return {
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks: getBooks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);