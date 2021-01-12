import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../styles/App.css';
import { Menu } from 'antd';
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"> <NavLink to="/home">Home</NavLink> </Menu.Item>
                    <Menu.Item key="2"> <NavLink to="/contacts">Contacts</NavLink> </Menu.Item>
                    <Menu.Item key="3"> <NavLink to="/about">About</NavLink> </Menu.Item>
                </Menu>
            </div>
        );
    }
};
export default Navbar;