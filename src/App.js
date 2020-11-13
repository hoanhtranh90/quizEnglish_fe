import React from 'react';
import Ques from './conponents/Ques'
import CreateQues from './conponents/CreateQues'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

export default function App() {
	return(
		<Router>
		<div>
		  <Switch>
			<Route path="/CreateQues">
			  <CreateQues/>
			</Route>
			<Route path="/">
			  <Ques />
			</Route>
		  </Switch>
		</div>
	  </Router>
	)
}
