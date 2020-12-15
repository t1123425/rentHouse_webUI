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
                      {
                         mockHouseList.map((e)=>{
                           return (
                            <Col span={8}>
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
