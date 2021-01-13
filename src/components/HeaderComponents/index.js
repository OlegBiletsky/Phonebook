import React, { Component } from "react";
import Navbar from './Navbar';
import { Layout } from 'antd';

const { Header } = Layout;

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Header>
                    <div className="logo" />
                    <Navbar/>
                </Header>
            </div>
        );
    }
};
export default HeaderComponent;