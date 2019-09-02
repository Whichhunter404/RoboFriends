import {CHANGE_SEARCHFIELD,REQUEST_ROBOTS_FAILED,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_PENDING} from "./constans";

export const setSearchField = (text) => ({type:CHANGE_SEARCHFIELD,payload:text})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('')
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}))
}