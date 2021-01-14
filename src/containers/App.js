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
            
                <Layout className="layout">

                   
                    <HeaderComponent />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/about" component={About} />
                    </Switch>
                    
                  
                    <FooterComponent /> 

                </Layout>
            </div>
        );
    }
};
export default App;