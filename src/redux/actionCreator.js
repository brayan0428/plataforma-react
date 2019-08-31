import Axios from "axios";
import { GET_ALL_POST, GET_ALL_SPECIALITIES, GET_ALL_COURSES, GET_ALL_TEACHERS } from "./actions";

export const getAllPosts = () => dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/posts`).
    then(resp => {
            return dispatch({
                type: GET_ALL_POST,
                posts: resp.data
            })
        }
    )
}

export const getAllSpecialities = () => dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/especialidades`).
    then(resp => {
            return dispatch({
                type: GET_ALL_SPECIALITIES,
                specialities: resp.data
            })
        }
    )
}

export const getAllCourses = () => dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/cursos`).
    then(resp => {
            return dispatch({
                type: GET_ALL_COURSES,
                courses: resp.data
            })
        }
    )
}

export const getAllTeachers = () => dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/profesores`).
    then(resp => {
            return dispatch({
                type: GET_ALL_TEACHERS,
                teachers: resp.data
            })
        }
    )
}
