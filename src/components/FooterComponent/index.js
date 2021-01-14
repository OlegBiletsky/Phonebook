import React, { Component } from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <Footer style={{ textAlign: 'center' }}>
                        Phonebook | Ant Design © 2021 Developed by <a href="https://github.com/OlegBiletsky/Phonebook" target="blank">Oleg Biletsky</a>
                </Footer>
            </div>
        );
    }
};
export default FooterComponent;