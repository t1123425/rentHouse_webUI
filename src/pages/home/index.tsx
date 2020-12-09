import React from 'react';
import {Row, Button, Menu, Dropdown,Col,Space} from 'antd';
import Header from '../../component/header';
import Map from '../../component/map';
import HousePrev from '../../assets/img/houseDemo.jpeg'
import { CaretDownOutlined} from '@ant-design/icons';
// interface stringArray{
//   array?:String[]
// }

const cityList = (
    <Menu>
      <Menu.Item>
        台北市
      </Menu.Item>
      <Menu.Item>
        新北市
      </Menu.Item>
    </Menu>
)
const districtList = (
    <Menu>
      <Menu.Item>
        大同區
      </Menu.Item>
      <Menu.Item>
        信義區
      </Menu.Item>
    </Menu>
)

function Home() {
    // console.log(process.env.PUBLIC_URL);
  return (
    <div className="Home">
      < Header />
      <div className="mainContent">
           <Row>
             <Col span={12} className="houseListWrap">
                <div className="filterContent textLeft">
                  <Space className="locationFilter">
                      <Dropdown overlay={cityList}>
                          <h1>
                            台北市
                            <CaretDownOutlined style={{fontSize:16,marginLeft:8}} />
                          </h1>
                      </Dropdown>
                      <Dropdown overlay={districtList}>
                          <h1>
                            大同區
                            <CaretDownOutlined style={{fontSize:16,marginLeft:8}} />
                          </h1>
                      </Dropdown>
                  </Space>
                   {/* <div className="locationFilter">
                   </div> */}
                   <div className="priceAndEvaluate">
                    <Button shape="round">
                      價格
                    </Button>
                    <Button shape="round" style={{marginLeft:24}}>
                      區域評價
                    </Button>
                   </div>
                </div>
                <div className="houseListContent textLeft">
                    <h2 className="title">
                      共找到 678 間房屋
                    </h2>
                    <Row gutter={[16, 16]}>
                      <Col span={8}>
                         <a href="#" className="houseInfoBox">
                           <div className="prevImg">
                              <img src={HousePrev}  alt="prev"/>
                           </div>
                           <div className="houseInfo">
                              <p>迪化商圈歸綏街3+1房 (入籍.家具可談)</p>
                              <div className="priceBox">
                                  <span>99,999</span>
                                  <span>元/月</span>
                              </div>
                           </div>
                         </a>
                      </Col>
                      <Col span={8}>
                         <a href="#" className="houseInfoBox">
                           <div className="prevImg">
                              <img src={HousePrev}  alt="prev"/>
                           </div>
                           <div className="houseInfo">
                              <p>北車捷運京站地下街便利舒適電梯全新大套房</p>
                              <div className="priceBox">
                                  <span>99,999</span>
                                  <span>元/月</span>
                              </div>
                           </div>
                         </a>
                      </Col>
                      <Col span={8}>
                         <a href="#" className="houseInfoBox">
                           <div className="prevImg">
                              <img src={HousePrev}  alt="prev"/>
                           </div>
                           <div className="houseInfo">
                              <p>迪化商圈歸綏街3+1房 (入籍.家具可談)</p>
                              <div className="priceBox">
                                  <span>99,999</span>
                                  <span>元/月</span>
                              </div>
                           </div>
                         </a>
                      </Col>
                      <Col span={8}>
                         <a href="#" className="houseInfoBox">
                           <div className="prevImg">
                              <img src={HousePrev}  alt="prev"/>
                           </div>
                           <div className="houseInfo">
                              <p>台北車站【五星飯店式】獨棟電梯~獨立套房</p>
                              <div className="priceBox">
                                  <span>99,999</span>
                                  <span>元/月</span>
                              </div>
                           </div>
                         </a>
                      </Col>
                    </Row>
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
