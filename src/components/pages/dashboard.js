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
import ScrollViewApp from './scrollView';
import ReactMotion01 from './reactMotion01';

import StudentList from './studentList';
import StudentDetail from './studentDetail';
import Graph from './graph';

import ReactFileReader from 'react-file-reader';

//ACTIONS
import { getBooks } from '../../actions/bookActions';

import {Grid, Col, Row, Button, Well} from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
var FontAwesome = require('react-fontawesome');

function runTest(data){
	console.log('RUNTEST:::', data);
};

//===========================================




// STYLED COMPONENTS
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;

	@media (min-width: 700px) {
		color: lightBlue;
	}
`;


const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate360} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;

const DivRotate = styled.div`
	height: 100px;
	width: 100px;
	animation: ${rotate360} 2s linear infinte;
	display: inline-block;
	animation: ${rotate360} 2s linear infinite;
`;

//===========================================



class Dashboard extends Component{

	componentDidMount() {
		this.props.getBooks();
	}

	renderStudentDetail(){

	}

	parseFileResults(data){
		console.log('PARSE METHOD');
		console.log('PARSE FILE RESULTS:::', data);
	}

	handleFiles = files => {
	    var reader = new FileReader();
	    reader.onloadstart = function(e){
	    	console.log('started reading file');
	    }
	    reader.onload = function(e) {
	    	// Use reader.result
	    	runTest(reader.result);
	    	//run as a promise
	    		// parse csv to objects

	    		//map the array of objects

	    		//store in state?

	    	//DB mongo or firebase
	    }
	    reader.onloadend = function(e) {
	    	console.log('FILE CONTENTS FINISHED:::', e);
	    }
	  	var result = reader.readAsText(files[0]);
	  	console.log('READER RESULT:::', result);
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
		});

		return (
			<Grid>
				<Row style={bookListStyles.toprow}>
					<Col >
						<AnimationTest />

					</Col>
				</Row>
				<Well>
					<Row>
						<Col>
							<ScrollViewApp />
						</Col>
					</Row>
				</Well>
				<Well>
					<Row>
						<Col>
							<ReactMotion01 />
						</Col>
					</Row>
				</Well>
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

							<Title>Hello World, first Styled Component</Title>
							<DivRotate>
								<FontAwesome
							        className='super-crazy-colors'
							        name='rocket'
							        size='4x'
							        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: 'lightBlue' }}
							      />
							</DivRotate>
							<ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
							    <button className='btn'>Upload</button>
							</ReactFileReader>
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
							<Graph />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);