import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';
import {FaHome} from "react-icons/fa";
import {RiContactsBook2Fill} from "react-icons/ri";
import {BsFillInfoCircleFill} from "react-icons/bs";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"> <NavLink to="/home">  <FaHome/>Home </NavLink> </Menu.Item>
                    <Menu.Item key="2"> <NavLink to="/contacts"> <RiContactsBook2Fill/>Contacts</NavLink> </Menu.Item>
                    <Menu.Item key="3"> <NavLink to="/about">  <BsFillInfoCircleFill/>About </NavLink> </Menu.Item>
                </Menu>
            </div>
        );
    }
};
export default Navbar;