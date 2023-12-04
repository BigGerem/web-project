import React, { useState } from 'react';
import { Button } from 'antd';
import { CSSTransition } from 'react-transition-group';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import styles from '../styles/style.module.css';
import '../styles/login-transition.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalVisible: false,
        };
    }
    handleLogin = () => {
        console.log('Авторизовано!');
        this.setState({ loginModalVisible: false });
    };
    render() {
        const { loginModalVisible } = this.state;
        return (
            <div className={styles.menu}>
                <SearchComponent />
                <Link className={styles.menuLink} to="/categories">Категорії</Link>
                <Link className={styles.menuLink} to="/cart">Кошик</Link>
                <Link className={styles.menuLink} to="/contacts">Наші контакти</Link>
                <Button className={styles.menuLink} type="link" onClick={() => this.setState({ loginModalVisible: true })}>Увійти</Button>
                <CSSTransition
                    in={loginModalVisible}
                    timeout={300}
                    classNames="login-transition"
                    unmountOnExit
                >
                    <LoginForm
                        visible={loginModalVisible}
                        onCancel={() => this.setState({ loginModalVisible: false })}
                        onLogin={this.handleLogin}
                    />
                </CSSTransition>
            </div>
        );
    }
}
export default Menu;
