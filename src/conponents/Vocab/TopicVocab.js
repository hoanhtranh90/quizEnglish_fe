import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
export default function TopicVocab() {
    const [value,setValue] = useState('')
    const [data,setData] = useState([])
	useEffect(() => {
        axios.get('https://quiz-demo-eng.herokuapp.com/vocab')
        .then((res)=>{
            setData(res.data)
        })
    },[])
    console.log(data)
    const renderTableData = () => {
        return data.map((item, index) => {
            const { id, eng, vni, loaitu, phienAm,dongnghia,topicVoc } = item
            return (
              <tr key={id}> 
                <td>{eng}</td>
                <td>{phienAm}</td>
                <td dangerouslySetInnerHTML={{__html:vni}}></td>
                <td>{loaitu}</td>
                <td dangerouslySetInnerHTML={{__html:dongnghia}}></td>
                <td>{topicVoc.topic}</td>
                {/* <td>{phienam}</td> */}
              </tr>
            )
          })
    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        let url ="https://quiz-demo-eng.herokuapp.com/vocab"+e.target.value;
        axios.get(url)
        .then((res) => setData(res.data))
    }
    return (
        <div className='app'>
            
            <div>
                <select onChange={handleChange} class="form-control" style={{width:200,background:'black',color:'white'}}>
                <option>TOPIC</option>
                <option value="1">TOPIC 1</option>
                <option value="2">TOPIC 2</option>
                <option value="3">TOPIC 3</option>
                <option value="4">TOPIC 4</option>
                <option value="5">TOPIC 5</option>
                <option value="6">TOPIC 6</option>
                <option value="7">TOPIC 7</option>
                </select>

            <Table striped bordered hover size="lg" id='vocabulary'>
            <thead>
                <tr>
                <th>TỪ VỰNG</th>
                <th>PHIÊN ÂM</th>
                <th>DỊCH NGHĨA</th>
                <th>LOẠI TỪ</th>
                <th>ĐỒNG NGHĨA</th>
                <th>TOPIC</th>
                </tr>
            </thead>
            <tbody>
            {renderTableData()}
                </tbody>
            </Table>
            </div>

        </div>
    )
}