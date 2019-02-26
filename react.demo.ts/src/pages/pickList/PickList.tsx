import * as React from 'react';
import { Layout } from 'antd';
import './ObjectManager.scss';

const { Content } = Layout;

export default class ObjectManager extends React.Component {
    public render() {
        return <Layout className="object-manager" style={{ backgroundColor: '#fff', height: '100%' }}>
            <Content>
                ObjectManager
            </Content>
        </Layout>
    }
}