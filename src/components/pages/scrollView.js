"use strict"

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

import scrollIntoView from 'scroll-into-view';
import scrollData from '../../../studentData/scrollData';

console.log('ScrollData:::',scrollData);


class ScrollView extends Component {
	static childContextTypes = {
		scroll: PropTypes.object,
	}

	elements = {

	};

	register = (name, ref) => {
		this.elements[name] = ref;
	}

	unregister = (name) => {
		delete this.elements[name];
	}

	getChildContext() {
		return {
			scroll: {
				register: this.register.bind(this),
				unregister: this.unregister.bind(this)
			}
		}
	}

	scrollTo = (name) => {
		const node = findDOMNode(this.elements[name]);
		scrollIntoView(node, {
			time: 500,
			align: {
				top: 0
			}
		})
	}

	render() {
		return (
			React.Children.only(this.props.children)
		);
	}
}

class ScrollElement extends Component{
	static contextTypes = {
		scroll: PropTypes.object,
	}

	componentDidMount() {
		this.context.scroll.register(this.props.name, this._element);
	}

	componentWillUnmount(){
		this.context.scroll.unregister(this.props.name);
	}

	render(){
		return (
			React.cloneElement(this.props.children, {
				ref: ref => this._element = ref
			})
		);
	}
}


class ScrollViewApp extends Component {
	scrollTo = (name) => {
		this._scroller.scrollTo(name);
	}

	render(){
		const renderData = scrollData.map( (item, index) => {
			return (
				<ScrollElement name={item.name}>
					<div className="item" key={item.index}>
						<img src={item.image} />
						<p>{item.name}</p>
					</div>
				</ScrollElement>
			);
		});

		return (
			<div>
				<h1>Scroll View App</h1>
				{
					scrollData.map( 
						({name}) => <button onClick={() => this.scrollTo(name)}>{name}</button>
					)
				}
				<div className='zapp'>
					<ScrollView ref={scroller => this._scroller = scroller}>
						<div className="zscroller">
							{renderData}
						</div>
					</ScrollView>
				</div>
			</div>
		);

	}
}

export default ScrollViewApp;