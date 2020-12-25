import React from 'react';
import { Input,Avatar } from 'antd';
import Logo from '../../assets/img/logo_zotsu.png';
import AvatarSrc from '../../assets/img/avatar.png';
import { CaretDownOutlined} from '@ant-design/icons';
import {menuToggleContext} from '../../context/mainContext';
const { Search} = Input;

const Header = () =>{
    const { toggleStatus} = menuToggleContext();
    return (
        <header className="headerMenu">
            <div className="imgWrap">
                <img src={Logo} alt="logo"/>
            </div>
            {/* <p>header</p> */}
            <div className="searchWrap">
                    <Search 
                      placeholder="input search text"
                      size="large" 
                      style={{ width: 320,height:48 }} />
            </div>
            <div className="avatarIcon" onClick={toggleStatus}>
                <Avatar src={AvatarSrc} />
                <CaretDownOutlined style={{fontSize:12,color:'#BFBFBF',marginLeft:8}} />
            </div>
        </header>
    )
}

export default Header;