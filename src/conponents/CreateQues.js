import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function CreateQues() {
    const [nameA,setNameA] = useState('');
    const [nameB,setNameB] = useState('');
    const [nameC,setNameC] = useState('');
    const [nameD,setNameD] = useState('');
    const [correctt,setCorrectt] = useState('');
    const [questionText,setQuestionText] = useState('');
    const [answerQuiz,setAnswerQuiz] = useState('');
    // const [quizChoices,setQuizChoices] = useState([]);
    const datax = [];
    const datax1=datax.sort((a, b) => (a.answerText > b.answerText) ? 1 : -1)
    const pushdata = () => {
        datax.push({answerText:nameA,correct:0});
        datax.push({answerText:nameB,correct:0});
        datax.push({answerText:nameC,correct:0});
        datax.push({answerText:nameD,correct:0});
    }
    const handleSubmit = () => {
        pushdata();
        // setQuizChoices([datax1])
        // console.log(datax1)
        datax1[correctt-1].correct = 1;
        var data = {
            questionText: questionText,
            answerQuiz : answerQuiz,
            quizChoices: datax1
        }
        // console.log(correctt)
        // console.log(data)
        axios.post('https://quiz-demo-eng.herokuapp.com/quiz',data)
        .then(res => {
            // console.log(res)
            alert("success")
            window.location.reload();

        
        })
        
    }

    // onChange = (e) => {}
    return (
        <div className='app'>
            <form>
        <label>
            title:
            <textarea type="text" name="nameTitle" style={{color:'black',width:900}} onChange={(e) => setQuestionText(e.target.value)}   />
        </label>
        <label>
            Đáp án A:
            <input type="text" name="nameA" style={{color:'black'}} value={nameA} onChange={(e) => setNameA(e.target.value)} />
        </label>
        <br/>
        <label>
            Đáp án B:
            <input type="text" name="nameB" style={{color:'black'}} value={nameB} onChange={(e) => setNameB(e.target.value)} />
        </label>
        <br/>

        <label>
            Đáp án C:
            <input type="text" name="nameC" style={{color:'black'}} value={nameC} onChange={(e) => setNameC(e.target.value)}/>
        </label>
        <br/>

        <label>

            Đáp án D:
            <input type="text" name="nameD" style={{color:'black'}} value={nameD} onChange={(e) => setNameD(e.target.value)}/>
        </label>
        <br/>
        <label>

            Đáp án đúng(1,2,3,4):
            <input type="text" name="nameAns" style={{color:'black'}} onChange={(e) => setCorrectt(e.target.value)}/>
        </label>
        <br/>
        <label>

            Giải Thích:
            <textarea type="text" name="name" style={{color:'black',width:500}}  onChange={(e) => setAnswerQuiz(e.target.value)} />
        </label>
        <br/>

        <button type='button' onClick={() => handleSubmit()}/>
        </form>

        </div>
    )
}

