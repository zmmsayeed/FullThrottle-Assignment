import React, { Component } from 'react'

// importing antd components
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys="mail" mode="horizontal">
                    <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                        List
                    </Menu.Item>
                    <Menu.Item key="app" icon={<MailOutlined />}>
                        Contact Us
                    </Menu.Item>
                    
                    <Menu.Item key="alipay" icon={<SettingOutlined />}>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            Settings
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
