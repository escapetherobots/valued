"use strict"

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStudents } from '../../actions/studentActions';

import StudentItem from './studentItem';

import { Grid, Row, Col, Well } from 'react-bootstrap';

class StudentList extends Component {

	componentDidMount() {
		this.props.getStudents();
	}

	render(){
		
		const studentList = this.props.students.map( (item) => {
			return (
				<div key={item._id}>
					<StudentItem
						name={`${item.firstName} ${item.lastName}`}
						grade={`some grade`}
						age={item.age}
					/>
				</div>
			);
		})

		return (
			<Grid>
				<Well>
				<Row>
					<Col >
						{studentList}
					</Col>
				</Row>
				</Well>

				<Well>
				<Row>
					<Col >
						StudentList
					</Col>
				</Row>
				</Well>
			</Grid>
		);
	}
}

function mapStateToProps(state){
	return {
		students: state.students.students
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getStudents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);