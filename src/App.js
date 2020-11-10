import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Ques from './conponents/Ques'
import CreateQues from './conponents/CreateQues'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from "react-router-dom";

export default function App() {
	return(
		<Router>
		<div>
		  {/* <ul>
			<li>
			  <Link to="/">Ques</Link>
			</li>
			<li>
			  <Link to="/CreateQues">CreateQues</Link>
			</li>
		  </ul> */}
  
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
