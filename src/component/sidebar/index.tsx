import React from 'react';
import AvatarSrc from '../../assets/img/avatar.png';

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

}

const SideBar = () => {
    return (
        <aside className="userInfoBar">


        </aside>
    )
}

export default SideBar