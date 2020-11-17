import React ,{useEffect} from 'react';
import Ques from './conponents/Ques/Ques'
import CreateQues from './conponents/Ques/CreateQues'
import { connect } from "react-redux";


import FastVocab from './conponents/Vocab/FastVocab'
import CreateVocab from './conponents/Vocab/CreateVocab'
import TopicVocab from './conponents/Vocab/TopicVocab'

import Navb from './conponents/Navbar'

import axios from 'axios'

import Login from './conponents/Login/Login'
import Register from './conponents/Login/Register'
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";


const App = (props) => {
	useEffect(() => {
		if(localStorage.getItem('token')!=null){
			let url = 'https://quiz-demo-eng.herokuapp.com/user/' + localStorage.getItem('id')
			axios.get(url)
			.then(res => {
				console.log(res.data)
				props.refresh(res.data)})
		}
	  });
	return (
		// <Register/>
		<BrowserRouter>
			<Navb></Navb>
			
			
				<Switch>
					<Route path="/CreateQues" component={CreateQues}/>
					<Route path="/ques" component={Ques}  />
					<Route path="/register" component ={Register} />
					<Route path="/login" component ={Login} />
					<Route path="/FastVocab" component ={FastVocab} />
					<Route path="/CreateVocab" component ={CreateVocab} />
					<Route path="/TopicVocab" component ={TopicVocab} />
				</Switch>
			
		 </BrowserRouter>
	)
}

const mapDispatchToProps = dispatch => {
    return {
        refresh: info => {
            dispatch({
                type:"AUTH_REFRESH",
                payload:info
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(App);


/*
"data": {
    "user": {
      "id": 5,
      "username": "admin1",
      "role": {
        "id": 1,
        "role": "user"
      }
    }
  },

  //data login
  "user": {
    "id": 5,
    "username": "admin1",
    "role": {
      "id": 1,
      "role": "user"
    }
  },
  */
