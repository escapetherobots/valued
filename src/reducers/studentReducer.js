"use strict"

import {studentData} from '../../studentData/students';

//MODAL REDUCERS
export const studentReducer = (state = {students: studentData, selectedStudent: {}}, action) => {
	switch(action.type){
		
		case "GET_STUDENTS":
			return {...state, students: [...state.students]};

		case "SHOW_IN_DETAIL_VIEW":

			const studentResult = state.students.filter( (item) => {
				return item._id === action.payload;
			})
			console.warn('REDUCER DETAIL VIEW:::', studentResult);
			return {
				...state,
				selectedStudent: studentResult
			};

		default:
			return state;

	}

	return state;

}