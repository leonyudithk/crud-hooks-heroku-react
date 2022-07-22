import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react';
import { Layout, Menu,  } from 'antd';


const {Header} = Layout;

const navigate = useNavigate()
const location = useLocation()

const NavBar = () => {
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