import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import '../styles/App.scss';
import { Layout } from 'antd';
import HeaderComponent from "../components/HeaderComponents";
import Home from "../components/Home";
import Contacts from "../components/Contacts";
import About from "../components/About";
import FooterComponent from '../components/FooterComponent';

class App extends Component {
    render() {
        return (
            <div>
                {/*Layout from Ant Design*/}
                <Layout className="layout">

                    {/*Logo and Navbar Menu with 3 tabs*/}
                    <HeaderComponent />

                    {/*Main section with Route-Switch: Home, Contacts or About*/}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/about" component={About} />
                    </Switch>
                    
                    {/*Footer with name, design creators, copyright and my LinkedIn*/}
                    <FooterComponent /> 

                </Layout>
            </div>
        );
    }
};
export default App;