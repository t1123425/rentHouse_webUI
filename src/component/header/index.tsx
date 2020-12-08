import React from 'react';
import { Input,Avatar } from 'antd';
import Logo from '../../assets/img/zotsuLogo.png';
import AvatarSrc from '../../assets/img/avatar.png';
import { CaretDownOutlined} from '@ant-design/icons';
const { Search} = Input;

const Header = () =>{
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
            <div className="avatarIcon">
                <Avatar src={AvatarSrc} />
                <CaretDownOutlined style={{fontSize:12,color:'#BFBFBF',marginLeft:8}} />
            </div>
        </header>
    )
}

export default Header;