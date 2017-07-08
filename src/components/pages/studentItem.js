"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { showInDetailView } from '../../actions/studentActions';

import { Well, Row, Col, Button } from 'react-bootstrap';

class StudentItem extends Component {

	constructor(props){
		super(props)

		this.handleViewDetail = this.handleViewDetail.bind(this);
	}

	handleViewDetail(e){
		e.preventDefault();
		let _id = this.props.id;
		console.log('STUDENT DETAIL ID::::::',e,_id);
		this.props.showInDetailView(_id);
	}

	render(){
		let {name, grade, age, _id} = this.props;

		return (
			<div>
				<Well style={{backgroundColor: 'white'}}>
					<Row >
						<Col xs={12} md={6}>
							<h4 style={{margin: '0'}}>{name}</h4>
						</Col>
						<Col xs={12} md={6}>
							<Button style={{width: '100%'}} onClick={this.handleViewDetail} bsStyle="info">View Data</Button>
						</Col>
					</Row>
				</Well>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		students: state.students.students
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		showInDetailView: showInDetailView
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentItem);