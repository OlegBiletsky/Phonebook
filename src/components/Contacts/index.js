import React, { Component } from "react";
import { Layout } from 'antd';
import ContactsList from "./ContactsList";
const { Content } = Layout;

class Contacts extends Component {
    render() {
        return (
            <div>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <h1 className="Contacts-title"> Contacts</h1>
                        

                        <ContactsList/>


                    </div>
                </Content>
            </div>
        );
    }
};
export default Contacts;