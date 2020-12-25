import React from 'react';
import {Avatar,Rate,Row, Col} from 'antd';
import AvatarSrc from '../../assets/img/avatar.png';
import HousePrev from '../../assets/img/houseDemo.jpeg';
import {menuToggleContext} from '../../context/mainContext';
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
    const {status} = menuToggleContext();
    return (
        <aside className={'userInfoBar '+ (status?'active':'')}>
            {/* <p>{num}</p> */}
            <div className="userInfo">
                <Avatar size={160} src={AvatarSrc} />
                <h1 className="name">Red</h1>
                <h2 className="rare">87 個評分</h2>
            </div>
            <ul className="houseInfoList">
                <li>
                    <Row justify="space-between" align="middle">
                        <Col span={5}>
                          <img src={HousePrev} className="prevImg" alt="prevImg" />
                        </Col>
                        <Col span={18} className="textLeft infoWrap">
                           <h2 className="info">
                                迪化商圈歸綏街3+1房(入籍.家具可談) 第二行的標題如果有的話
                           </h2>
                           <p className="price">$99,999</p>
                        </Col>
                    </Row>
                    <Row className="textLeft rareContent" justify="space-between" align="middle">
                        <Col span={6}>
                            <p>環境噪音</p>
                            <Rate allowHalf defaultValue={2.5} style={{ fontSize: 12 }} />
                        </Col>
                        <Col span={6}>
                            <p>交通便利</p>
                            <Rate allowHalf defaultValue={2.5} style={{ fontSize: 12 }} />
                        </Col>
                        <Col span={6}>
                            <p>房屋狀況</p>
                            <Rate allowHalf defaultValue={2.5} style={{ fontSize: 12 }} />
                        </Col>
                        <Col span={6}>
                            <p>房東評價</p>
                            <Rate allowHalf defaultValue={2.5} style={{ fontSize: 12 }} />
                        </Col>
                    </Row>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar