import * as React from 'react';
import { Layout } from 'antd';
import NavBar from 'src/components/navBar/NavBar';
import { SETUPHOMEMENUCONFIG } from 'src/utils/constants';

const { Sider } = Layout;

export default class SiderMenu extends React.Component {
    public render() {
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <NavBar config={SETUPHOMEMENUCONFIG} menuProps={{
                    mode: 'inline',
                    style: { height: '100%', borderRight: 0 }
                }} />
            </Sider>
        </Layout>
    }
}