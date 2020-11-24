import React from 'react';
import {Row, Col} from 'antd';
// import './App.css';
import 'antd/dist/antd.css';
import './assets/style/custom.scss';
import Header from './component/header';

function App() {
  return (
    <div className="App">
      < Header />
      <div className="mainContent">
           <Row>
             <Col span={14}>list</Col>
             <Col span={10}>map</Col> 
           </Row>
      </div>
    </div>
  );
}

// function apiTest(){
//   alert('hello');
// }

export default App;
