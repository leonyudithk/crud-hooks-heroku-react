import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react';
import { Layout, Menu,  } from 'antd';
import { Logo } from '../styles/styles';         


const {Header} = Layout;


const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();

const items = [
    {
        key: 1,
        label: 'Registro',
        pathname: '/',
        onClick: ()=> navigate("/")
    },
    {
        key: 2,
        label: 'Listar',
        pathname: '/list',
        onClick: ()=> navigate("/list")
    },
   
]
    return (
       <Header>
        <Logo src="https://academiageek.co/wp-content/uploads/2021/03/Logo-AG-2021.png" />
          <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={String((items.find(it => it.pathname === location.pathname))).key}
                items={items}
          />

          
       </Header>
    );
};

export default NavBar;