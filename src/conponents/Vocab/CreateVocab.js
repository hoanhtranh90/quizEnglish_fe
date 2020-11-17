import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../../css/vocab/vocab.css';
export default function CreateVocab() {
    const [eng,setEng] = useState('')
    const [vie,setVie] = useState('')
    const [loaitu,setLoaitu] = useState('')
    const [nguyenAm,setNguyenAm] = useState('')
    const [topic,setTopic]  =  useState('')
    const [dongnghia,setDongnghia]  =  useState('')

    const handleSubmit = () => {
        var data = {
            eng:eng,
            vni:vie.split('\n').join('<br />'),
            phienAm:nguyenAm, 
            loaitu:loaitu, 
            topicVoc:{
                id:topic
            },
            dongnghia:dongnghia.split('\n').join('<br />')
        }
        axios.post("https://quiz-demo-eng.herokuapp.com/vocab",data)
        .then(res => {
            console.log(res)
            alert("success")
            window.location.reload();
        })
    }
    return (
        <div className='app'>
            <form>
        <label>
            English:
            <input type="text" name="nameTitle" style={{color:'black',width:400}} onChange={(e) => setEng(e.target.value)}   />
        </label>
        <label>
            Vni
            <textarea type="text" name="nameA" style={{color:'black',width:400}} onChange={(e) => setVie(e.target.value)} />
        </label>
        <br/>
        <label>
            Loại từ
            <input type="text" name="nameB" style={{color:'black'}}  onChange={(e) => setLoaitu(e.target.value)} />
        </label>
        <br/>

        <label>
            Phát âm
            <input type="text" name="nameC" style={{color:'black'}} onChange={(e) => setNguyenAm(e.target.value)}/>
        </label>
        <br/>

        <label>

            Topic(1-7)
            <input type="text" name="nameD" style={{color:'black'}} onChange={(e) => setTopic(e.target.value)}/>
        </label>
       
        <br/>
        <label>
            Đồng nghĩa
            <textarea type="text" name="nameA" style={{color:'black'}} onChange={(e) => setDongnghia(e.target.value)} />
        </label>

        <button type='button' onClick={() => handleSubmit()}/>
        </form>

        </div>
    )
}