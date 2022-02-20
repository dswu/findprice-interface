import {Layout, Space} from 'antd'
import Logo from "./Logo";
import NavLanguageSelector from "./NavLanguageSelector";
import styles from "../../styles/Navbar.module.scss"

const Navbar = () => {
    return <Layout.Header className={styles.topNav}>
        <Space className={styles.topLeftNav} size="large">
            <a href="/" style={{ display: 'inline-block' }}>
                {<Logo />}
            </a>
        </Space>

        <Space className={styles.topRightNav} size="middle">
            <NavLanguageSelector />
        </Space>
    </Layout.Header>
}

export default Navbar;