import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function CreateQues() {
    const data = [];

    const [quizChoices,setQuizChoices] = useState([])

    // onChange = (e) => {}
    return (
        <div className='app'>
            <form>
        <label>
            title:
            <textarea type="text" name="nameTitle" style={{color:'black',width:900}} />
        </label>
        <label>
            Đáp án A:
            <input type="text" name="nameA" style={{color:'black'}} />
        </label>
        <br/>
        <label>
            Đáp án B:
            <input type="text" name="nameB" style={{color:'black'}} />
        </label>
        <br/>

        <label>
            Đáp án C:
            <input type="text" name="nameC" style={{color:'black'}} />
        </label>
        <br/>

        <label>

            Đáp án D:
            <input type="text" name="nameD" style={{color:'black'}} />
        </label>
        <br/>
        <label>

            Đáp án đúng(1,2,3,4):
            <input type="text" name="nameAns" style={{color:'black'}} />
        </label>
        <br/>
        <label>

            Giải Thích:
            <textarea type="text" name="name" style={{color:'black',width:500}} />
        </label>
        <br/>

        <input type="submit" value="Submit" style={{color:'black'}}/>
        </form>

        </div>
    )
}

