"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { Well, Row, Col, Button } from 'react-bootstrap';

class StudentItem extends Component {

	render(){
		let {name, grade, age} = this.props;

		return (
			<Well style={{backgroundColor: 'white'}}>
				<Row >
					<Col xs={12} md={6}>
						<h4>{name}</h4>
					</Col>
					<Col xs={12} md={6}>
						<Button style={{width: '100%'}} onClick={this.handleAddToCart} bsStyle="info">View Data</Button>
					</Col>
				</Row>
			</Well>
		);
	}

}

function mapStateToProps(state){
	return {
		students: state.students.students
	}
}

export default connect(mapStateToProps)(StudentItem);