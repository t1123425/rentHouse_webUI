import React, { useState } from 'react';
import {Row, Button, Menu, Dropdown,Col,Space} from 'antd';
import Header from '../../component/header';
import Map from '../../component/map';
import HousePrev from '../../assets/img/houseDemo.jpeg'
import { CaretDownOutlined} from '@ant-design/icons';

interface houseData {
  price?:Number,
  info?:String,
  img:String
}
const mockHouseList:houseData[] = [
 {
   price:99999,
   info:'迪化商圈歸綏街3+1房 (入籍.家具可談)',
   img:''
 },
 {
   price:99999,
   info:'北車捷運京站地下街便利舒適電梯全新大套房',
   img:''
 },
 {
   price:99999,
   info:'台北車站【五星飯店式】獨棟電梯~獨立套房',
   img:''
 },
 {
   price:99999,
   info:'近台北車站捷運免費電視網路',
   img:''
 },
 {
   price:99999,
   info:'近台北車站四房免費含電視網路家具家電冷氣',
   img:''
 },
 {
   price:99999,
   info:'大橋頭超站捷運宅',
   img:''
 },
 {
   price:99999,
   info:'近北車、捷運大空間質感溫馨2房',
   img:''
 },
 {
   price:99999,
   info:'京站時尚廣場B6，24小時警衛，近火車站',
   img:''
 }
]


const handleDropDown = (e:any,type:String) => {
  console.log('e',e);
  console.log('type',type);
}

const dropDownList = (list:String[],type:String) => {
    return (
      <Menu onClick={(e)=>{handleDropDown(e,type)}}>
         {
           list.map((e,i)=>{
             return (
               <Menu.Item key={i}>
                 {e}
               </Menu.Item>
             )
           })
         }
      </Menu>
    )
}


function Home() {
    // console.log(process.env.PUBLIC_URL);
  const [location, setLocation] = useState({
    city:'台北市',
    area:'大同區'
  });
  
  return (
    <div className="Home">
      < Header />
      <div className="mainContent">
           <Row>
             <Col span={12} className="houseListWrap">
                <div className="filterContent textLeft">
                  <Space className="locationFilter">
                      <Dropdown overlay={dropDownList(['台北市','新北市'],'city')}>
                          <h1>
                            {location.city}
                            <CaretDownOutlined style={{fontSize:16,marginLeft:8}} />
                          </h1>
                      </Dropdown>
                      <Dropdown overlay={dropDownList(['大同區','信義區'],'area')}>
                          <h1>
                          {location.area}
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
                      {
                         mockHouseList.map((e,i)=>{
                           return (
                            <Col span={8} key={i}>
                              <div className="houseInfoBox">
                                <div className="prevImg">
                                  <img src={HousePrev}  alt="prev"/>
                                </div>
                                <div className="houseInfo">
                                  <p>{e.info}</p>
                                  <div className="priceBox">
                                      <span>{e.price}</span>
                                      <span>元/月</span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                           )
                         })
                      }
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
