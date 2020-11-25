import React from 'react';
import {Row, Col} from 'antd';
// import './App.css';
import 'antd/dist/antd.css';
import './assets/style/custom.scss';
import Header from './component/header';
import Map from './component/map';

function App() {
  return (
    <div className="App">
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

export default App;
