import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import '../../css/vocab/vocab.css'
export default function FastVocab() {
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

    return (
        <div className='app'>
            {data.length>0 ? 
            <div>
                {/* {data.map(item => <div>
                    {item.eng} : <span>{item.vni}</span>
                    </div>)} */}
                {/* {data.map(item => <div>{item.vni}</div>)} */}
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
            </div> : null}

        </div>
    )
}