import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../styles/App.css';
import { Menu } from 'antd';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

                    <Menu.Item key="1"> <a href="https://google.com" target="blank">Home</a> </Menu.Item>
                    <Menu.Item key="2"> <a href="#">Contacts</a> </Menu.Item>
                    <Menu.Item key="3"> <a href="#">About</a> </Menu.Item>
                </Menu>
            </div>
        );
    }
};
export default Navbar;