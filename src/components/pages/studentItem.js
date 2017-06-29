"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { Well, Row, Col, Button } from 'react-bootstrap';

class StudentItem extends Component {

	render(){
		let {name, grade, age} = this.props;

		return (
			<Well>
				<Row>
					<Col xs={12}>
						<h3>{name}</h3>
						<p>{grade}</p>
						<p>{age}</p>
						<Button onClick={this.handleAddToCart} bsStyle="primary">View Data</Button>
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