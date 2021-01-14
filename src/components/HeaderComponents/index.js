import React, { Component } from "react";
import Navbar from './Navbar';/* Navbar menu with 3 tabs */
import { Layout } from 'antd'; /* basic layout from AntDesign */
import { BookOutlined } from "@ant-design/icons"; /* icon from Ant Design */

const { Header } = Layout;

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Header>
                    <div className="logo">
                        <BookOutlined style={{color: "blue"}} /> {/*blue icon for Logo*/}
                        Phonebook                               {/*text for Logo*/}
                    </div>
                    <Navbar/>  {/* Navbar menu with 3 tabs */}
                </Header>      
            </div>
        );
    }
};
export default HeaderComponent;