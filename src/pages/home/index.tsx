import React from 'react';
import {Row, Button, Col} from 'antd';
import Header from '../../component/header';
import Map from '../../component/map';
function Home() {
    // console.log(process.env.PUBLIC_URL);
  return (
    <div className="Home">
      < Header />
      <div className="mainContent">
           <Row>
             <Col span={12}>
                <div className="filterContent">
                   <div className="locationFilter">

                   </div>
                   <div className="priceAndEvaluate">
                    <Button shape="round" size={'large'}>
                      價格
                    </Button>
                    <Button shape="round" size={'large'}>
                      區域評價
                    </Button>
                   </div>
                </div>
                <div className="houseListContent">
                    <h2>
                      共找到 678 間房屋
                    </h2>
                    <ul className="houseList">

                    </ul>
                </div>
             </Col>
             <Col span={12}>
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
