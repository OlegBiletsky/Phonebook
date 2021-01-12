import React, { Component } from "react";
import { Layout } from 'antd';
const { Content } = Layout;
class Contacts extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h1> Contacts</h1>
                        <h2>123</h2>
                    </div>
                </Content>
            </div>
        );
    }
};
export default Contacts;