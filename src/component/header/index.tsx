import React from 'react';
import { Input } from 'antd';
import Logo from '../../assets/img/zotsuLogo.png';
const { Search } = Input;
const Header = () =>{
    return (
        <header className="headerMenu">
            <div className="imgWrap">
                <img src={Logo} alt="logo"/>
            </div>
            {/* <p>header</p> */}
            <div className="searchWrap">
                    <Search placeholder="input search text" style={{ width: 200 }} />
            </div>
        </header>
    )
}

export default Header;