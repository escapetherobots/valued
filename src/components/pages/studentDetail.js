"use strict"

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartJS from 'chart.js';
import { CardStack, Card } from 'react-cardstack';
import {Row, Col} from 'react-bootstrap';
import { allStudents } from '../../../studentData/allStudentsAndGrades';


const chartData = {
      type: "bar",
      data: {
        labels: ['math', 'la'],
        datasets: [
          {
            label: 'sage-scores',
            data: [3.8, 2.5],
            backgroundColor: 'lightblue',
            borderWidth: '1',
            borderColor: '#cccccc'
          }
        ]
      },
      options: {
        tooltips: {
          mode: 'point'
        },
        responsive: true,
        scales: {
          yAxes : [{
              ticks : {
                  max : 4,    
                  min : 0
              }
          }]
        }
      }
    }

const chartData2 = {
      type: "bar",
      data: {
        labels: ['math', 'language arts'],
        datasets: [
          {
            label: 'star scores',
            data: [768, 641],
            backgroundColor: 'lightgreen',
            borderWidth: '1',
            borderColor: '#cccccc'
          }
        ]
      },
      options: {
        tooltips: {
          mode: 'point'
        },
        responsive: true,
      }
    }


class StudentDetail extends Component{
	constructor(props) {
	    super(props);

	    this.handleClick = this.handleClick.bind(this);
	    this.renderStudentDetail = this.renderStudentDetail.bind(this);
	  }

	  handleClick(e){
	  	var zzz = this.chart.getElementAtEvent(e);
	  	var result;
	  	if(zzz.length > 0){
	  		console.log('EVENT:::', zzz[0]._index, sage);
	  		result = sage.filter( (student, index) => {
	  			return index === zzz[0]._index;
	  		});

	  		alert(result[0].firstName + ' ' + result[0].lastName);
	  	}
	  	
	  }

	  renderStudentDetail(){
	  	let student = this.props.selectedStudent;
	  	if(student.length > 0){
	  		return (
	  			<div>
	  				<h3>{`${student[0].firstName} ${student[0].lastName}: (${student[0].age})`}</h3>
	  				<h4>Grade: {student[0].grade}</h4>
	  				<p>Math Teacher: {student[0].mathTeacher}</p>
	  				<p>Language Arts Teacher: {student[0].languageArtsTeacher}</p>
	  				<Row style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
	  					<Col xs={12} md={6} style={{border: '1px solid grey'}}>
	  						<canvas  ref="studentDetailChart"></canvas>
	  						<h2>{student[0].sage.languageArts.proficiency}</h2>
	  					</Col>
	  					<Col xs={12} md={6} style={{border: '1px solid grey'}}>
	  						<canvas  ref="studentDetailChart2"></canvas>
	  					</Col>
	  					
	  				</Row>
	  			</div>
	  		);
	  		
	  	} else {
	  		return (
	  			<div>
	  				Select a student
	  			</div>
	  		)
	  	}
	  }

	  buildGraph(chartRef,passedData){
	  	let {type, data, options} = passedData;
	  	const ctx = chartRef.getContext('2d');
		return new ChartJS(ctx, {type, data, options});
	  }


	  componentDidUpdate(prevProps, prevState) {
	  	//get canvas ref
	  		const studentDetailChart = this.refs['studentDetailChart'];
	  		const studentDetailChart2 = this.refs['studentDetailChart2'];

	  		if(typeof studentDetailChart !== 'undefined'){	
				this.studentDetail = this.buildGraph(studentDetailChart, chartData);
	  		}

	  		if(typeof studentDetailChart2 !== 'undefined'){
	  			this.studentDetail2 = this.buildGraph(studentDetailChart2, chartData2)
	  		}
	  }

	  render() {
	    return (
	    	<div >
	      		<h1>Student Detail</h1>
	      		{this.renderStudentDetail()}
	      		
	      
	    	</div>
	    );
	  }

}

function mapStateToProps(state){
	return {
		selectedStudent: state.students.selectedStudent
	}
}

export default connect(mapStateToProps)(StudentDetail);