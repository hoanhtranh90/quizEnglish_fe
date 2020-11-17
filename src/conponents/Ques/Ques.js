import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../../css/Ques.css';
export default function Ques() {
	const [questions,setQuestions] = useState([
		{
			questionText:'',
			answerQuiz:'',
			quizChoices:[
				{ answerText: 'test', correct: false },
			],
		},
		// {
		// 	questionText: 'What is the capital of France?',
		// 	answerQuiz:'không cần giải thích',
		// 	quizChoices: [
		// 		{ answerText: 'New York', correct: false },
		// 		{ answerText: 'London', correct: false },
		// 		{ answerText: 'Paris', correct: true },
		// 		{ answerText: 'Dublin', correct: false },
		// 	],
		// },
		// {
		// 	questionText: 'Who is CEO of Tesla?',
		// 	answerQuiz:'Elon Musk và hiện ông là người giàu thứ 3',
		// 	quizChoices: [
		// 		{ answerText: 'Jeff Bezos', correct: false },
		// 		{ answerText: 'Elon Musk', correct: true },
		// 		{ answerText: 'Bill Gates', correct: false },
		// 		{ answerText: 'Tony Stark', correct: false },
		// 	],
		// },
		// {
		// 	questionText: 'The iPhone was created by which company?',
		// 	answerQuiz:'Apple',
		// 	quizChoices: [
		// 		{ answerText: 'Apple', correct: true },
		// 		{ answerText: 'Intel', correct: false },
		// 		{ answerText: 'Amazon', correct: false },
		// 		{ answerText: 'Microsoft', correct: false },
		// 	],
		// },
		// {
		// 	questionText: 'How many Harry Potter books are there?',
		// 	answerQuiz:'Quên tên rồi',
		// 	quizChoices: [
		// 		{ answerText: '1', correct: false },
		// 		{ answerText: '4', correct: false },
		// 		{ answerText: '6', correct: false },
		// 		{ answerText: '7', correct: true },
		// 	],
		// },
		// {
		// 	questionText:"Ha noi la thu do",
		// 	answerQuiz:'viet nam',
		// 	quizChoices:
		// 	[
		// 		{ answerText:"Viet nam" , correct: 1 },
		// 		{ answerText:"helo" , correct: 0 },
		// 		{ answerText:5 , correct: 0 },
		// 		{ answerText:6 , correct: 0 }
		// 	]
		// }
	]
	)

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [active,setActive] = useState(false)
	const handleAnswerOptionClick = (correct) => {
		// setActive(true)
		if (correct) {
			setScore(score + 1);
		}
		
		// setActive(false)
		// const nextQuestion = currentQuestion + 1;
		// if (nextQuestion < questions.length) {
		// 	setCurrentQuestion(nextQuestion);
		// } else {
		// 	setShowScore(true);
		// }
		
		setActive(true)
	};
	const nextQ = () => {
		setActive(false)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	useEffect( () => {
		axios.get("https://quiz-demo-eng.herokuapp.com/quiz")
		.then( res => {
			
				// setQuestions(questions.concat(res.data)) //dung de noi data co san
				setQuestions(res.data) // get all data tu api

		})
	},[])



	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<button
							 style={{width:100,position:'absolute', left:200,background:'none'}}
							 onClick={() => nextQ()}
							 >Next</button>

							<span style={{position:'relative'}}>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text' >
							{questions[currentQuestion].questionText}
							<br/>
							<br/>
							<br/>
							{active ? (
								
							<div style={{position:"absolute",color:'white'}} dangerouslySetInnerHTML={{__html:questions[currentQuestion].answerQuiz}}></div>
						):(
							<div></div>
						)}
							</div>
						
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].quizChoices.map((answerOption) => (
							<button 
							onClick={() => handleAnswerOptionClick(answerOption.correct)}
							// className={!answerOption.correct && active ? "false":nullƯ
							className={answerOption.correct && active ? "active":null}
							>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
