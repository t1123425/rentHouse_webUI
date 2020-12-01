import React from 'react';
import {Row, Col} from 'antd';
import Header from '../../component/header';
import Map from '../../component/map';

function Home() {
    console.log(process.env.PUBLIC_URL);
  return (
    <div className="Home">
      < Header />
      <div className="mainContent">
           <Row>
             <Col span={14}>list</Col>
             <Col span={10}>
                <Map />  
             </Col> 
           </Row>
      </div>
    </div>
  );
}

// function apiTest(){
//   alert('hello');
// }

export default Home;
