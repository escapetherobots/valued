"use strict"

import React, { Component } from 'react';
import ChartJS from 'chart.js';
import { chartData, studentNames, sage } from '../../../studentData/chartData';

class Graph extends Component{
	  constructor(props) {
	    super(props);

	    this.handleClick = this.handleClick.bind(this);
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

	  componentDidMount(){
	  	const chart = this.refs['chart'];
	  	

	  	const ctx = this.refs['chart'].getContext('2d');
	  	let {type, data, options} = chartData;

	  	this.chart = new ChartJS(ctx, {type, data, options});
	  	//console.log("chart>>>", this.chart.getElementAtEvent());

	  }

	render(){
		return (
			<div style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
	      		<h1>SAGE &amp; STAR ASSESSMENTS</h1>
	      		<canvas ref="chart" onClick={this.handleClick}>
	      			
	      		</canvas>
	      		
	      
	    	</div>
		)
	}

}

export default Graph;