import React from 'react';
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import Router from "./Router";
import Footer from "./components/Footer";

function App() {
    return (
        <Layout style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: 'transparent',
        }}>
            <Navbar/>
            <Layout.Content>
                <Router/>
            </Layout.Content>
            <Footer/>
        </Layout>
    );
}

export default App;
