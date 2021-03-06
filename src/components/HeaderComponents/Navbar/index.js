import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'antd';/* Menu from Ant Design */
import {FaHome} from "react-icons/fa"; /*Icons from react-icons library - cool library!*/
import {RiContactsBook2Fill} from "react-icons/ri";
import {BsFillInfoCircleFill} from "react-icons/bs";

class Navbar extends Component {
    render() {
        return (
            <div>
                {/* dark theme for menu, horizontal, and selected tab after download will be the first - 1 */} 
                {/*Using Navlink for routing tabs, also using react-icons */}
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"> 
                        <NavLink to="/home" className="navbar-item">  
                            <FaHome className="navbar-item__icon"/>Home  
                        </NavLink> 
                    </Menu.Item> 
                    <Menu.Item key="2"> 
                        <NavLink to="/contacts" className="navbar-item">  
                            <RiContactsBook2Fill className="navbar-item__icon"/>Contacts  
                        </NavLink> 
                    </Menu.Item>
                    <Menu.Item key="3"> 
                        <NavLink to="/about" className="navbar-item">  
                            <BsFillInfoCircleFill className="navbar-item__icon"/>About  
                        </NavLink> 
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
};
export default Navbar;