import React , { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import axios from 'axios';
import '../../css/Ques.css';
import '../../css/Auth.css';

const Register = (props) => {
    const history = useHistory();

    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const handleSubmitClick = () => {
            // let data = new FormData();
            // data.append('username',user)
            // data.append('password',pass)
            axios.post('https://quiz-demo-eng.herokuapp.com/register',{
                username:user,
                password:pass
            },{
                headers:{
                    'Content-Type':'application/json'
                },
               
            }
            )
            .then( res => {
                alert("thanh cong! Login")
                // console.log(res.data);
                history.push("/login");
            })
    }
    return (
        <div className="app">
        
        {localStorage.getItem('id') == null ?
        (<form className="form-signin">
                <h2 className="form-signin-heading"> Register </h2>
                <label for="inputUser" className="sr-only"> Username
                </label>
                <input type="email" id="inputUser" onChange={(e) => setUser(e.target.value)} className="form-in" placeholder="Username" required />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" onChange={(e) => setPass(e.target.value)} className="form-in" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={handleSubmitClick}> Sign Up
                </button>
            </form>):(null)
        }
        </div>
    )
}
const mapStateToProps = state => {
    return {
	  data: state.login.info
	  
    };
  }
const mapDispatchToProps = dispatch => {
    return {
        info: test => {
            dispatch({
                type:"LOGIN",
                payload:test
            }
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
