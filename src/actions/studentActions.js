"use strict"

export const getStudents = () => {
	return {
		type: "GET_STUDENTS"
	}
}

export const showInDetailView = (/*id*/id) => {
	console.warn('ACTION SHOW DETAIL:::',id);
	return {
		type: "SHOW_IN_DETAIL_VIEW",
		payload: id
	}
}


export const addStudents = (/*Arr[]*/studentArr) => {
	return {
		type: "ADD_STUDENTS",
		payload: studentArr
	}
}

export const deleteStudents = (/*Arr[]*/id) => {
	return {
		type: "DELETE_STUDENT",
		payload: id
	}
}

export const updateStudent = (/*Arr[]*/id) => {
	return {
		type: "UPDATE_STUDENT",
		payload: id
	}
}


