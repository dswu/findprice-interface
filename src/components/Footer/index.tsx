import {Layout} from "antd";
import React from "react";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
    return <Layout.Footer className={styles.footerNav}>
        <div style={{textAlign: "center"}}>
            This page is open source in <a rel="noreferrer"
                                           href="https://github.com/find-price/interface"
                                           target="_blank" style={{color: "#625FF6"}}>GitHub</a>.
        </div>
        <div style={{textAlign: 'center', marginTop: 10, marginBottom: 10}}>
            <a href="https://www.netlify.com">
                <img src="/assets/netlify_logo.svg" alt="Deploys by Netlify" style={{width: 100}} />
            </a>
        </div>
    </Layout.Footer>
}

export default Footer;