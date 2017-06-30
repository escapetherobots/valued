"use strict"

import React, { Component } from 'react';
import { chartData } from '../../localData/chartData';
import ChartJS from 'chart.js';
import { CardStack, Card } from 'react-cardstack'; 



class StudentDetail extends Component{
	constructor(props) {
	    super(props);
	  }

	  componentDidMount(){
	  	const ctx = this.refs['chart'].getContext('2d');
	  	let {type, data, options} = chartData;

	  	this.chart = new ChartJS(ctx, {type, data, options});

	  }

	  render() {
	  	console.log(chartData);
	    return (
	    	<div style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
	      		<h1>Playing With React and ChartJS</h1>
	      		<canvas ref="chart">
	      			
	      		</canvas>
	      		
	      
	    	</div>
	    );
	  }

}

export default StudentDetail;