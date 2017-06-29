"use strict"

import {studentData} from '../localData/students';

//MODAL REDUCERS
export const studentReducer = (state = {students: studentData}, action) => {
	switch(action.type){
		
		case "GET_STUDENTS":
			return {...state, students: [...state.students]}

		default:
			return state;

	}

	return state;

}