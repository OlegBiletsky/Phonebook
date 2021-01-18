import React, { Component } from "react";
import { Layout } from 'antd';
const { Content } = Layout;
class About extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h1 className="About-title"> About </h1>
                        <h2>bla bla</h2>
                    </div>
                </Content>
            </div>
        );
    }
};
export default About;