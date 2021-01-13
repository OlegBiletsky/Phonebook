import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';

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