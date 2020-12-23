import React from 'react';
import {Avatar,Rate,Row, Col} from 'antd';
import AvatarSrc from '../../assets/img/avatar.png';
import HousePrev from '../../assets/img/houseDemo.jpeg';

interface houseInfo{
    info:string,
    img:string,
    price:number,
    noiceRate:number,
    trafficRate:number,
    houseRate:number,
    landlordRate:number
}

interface userInfo{
    name:string,
    rare:number
}
const imgWrap = {}
const SideBar = () => {
    return (
        <aside className="userInfoBar">
            <div className="userInfo">
                <Avatar size={80} src={AvatarSrc} />
                <h1 className="name">Red</h1>
                <h2 className="rare">87 個評分</h2>
            </div>
            <div className="houseInfoContent">
                    <Row justify="start" align="middle">
                        <Col span={4} className="prevImg">
                          <img src={HousePrev} alt="prevImg" />
                        </Col>
                        <Col span={20} className="textLeft infoWrap">
                           <h2 className="info">
                                迪化商圈歸綏街3+1房(入籍.家具可談) 第二行的標題如果有的話
                           </h2>
                           <p className="price">$99,999</p>
                        </Col>
                    </Row>
                    <Row className="textLeft" justify="start" align="middle">
                        <Col span={6}>
                            <p>環境噪音</p>
                            <Rate allowHalf defaultValue={2.5} />
                        </Col>
                        <Col span={6}>
                            <p>交通便利</p>
                            <Rate allowHalf defaultValue={2.5} />
                        </Col>
                        <Col span={6}>
                            <p>房屋狀況</p>
                            <Rate allowHalf defaultValue={2.5} />
                        </Col>
                        <Col span={6}>
                            <p>房東評價</p>
                            <Rate allowHalf defaultValue={2.5} />
                        </Col>
                    </Row>
            </div>
        </aside>
    )
}

export default SideBar