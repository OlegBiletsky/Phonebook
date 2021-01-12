import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../styles/App.css';
import { Layout } from 'antd';
import Navbar from "./Navbar";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import About from "./About";

const { Header, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">

                    <Header>
                        <div className="logo" />
                        <Navbar/>
                    </Header>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/about" component={About} />
                    </Switch>

                    <Footer style={{ textAlign: 'center' }}>
                        Phonebook | Ant Design © 2021 Created by <a href="https://github.com/OlegBiletsky/Phonebook" target="blank">Oleg Biletsky</a>
                    </Footer>

                </Layout>
            </div>
        );
    }
};
export default App;