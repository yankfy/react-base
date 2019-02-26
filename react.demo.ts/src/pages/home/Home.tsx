import * as React from 'react';
import { Layout, Icon, Input, Avatar, Divider } from 'antd';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import ObjectManager from '../objectManager/ObjectManager';
import './Home.scss';
import NavBar from 'src/components/navBar/NavBar';
import { TABBARCONFIG } from 'src/utils/constants';
import SiderMenu from 'src/components/sider/SiderMenu';
import SetupHome from '../setupHome/SetupHome';

const { Header,Sider, Content } = Layout;
const Search = Input.Search;

interface HomeProps extends RouteComponentProps<{}> { }

export default class Home extends React.Component<HomeProps> {
  public render() {
    return (
      <Layout className="home">
        <Header style={{height:40, backgroundColor: '#102442'}}/>
        <Header className="header" style={{ backgroundColor: '#fff' }}>
          <span className="logo">
            <Avatar icon="tool" />
          </span>
          <Search
            placeholder="搜索设置"
            disabled={true}
            style={{ width: 300 }}
          />
          <span className="toolbar">
            <Icon type="plus-circle" />
            <Icon type="question" />
            <Icon type="setting" />
            <Icon type="bell" />
            <Avatar icon="user" />
          </span>
        </Header>
        <Divider style={{ margin: 0 }} />
        <NavBar config={TABBARCONFIG} menuProps={{
          mode: 'horizontal'
        }} className="home-nav-bar" />
        <Divider style={{ backgroundColor: '#2A739E', margin: 0}} />
        <Layout>
          <Sider>
            <SiderMenu/>
          </Sider>
          <Layout>
            <Header>wer</Header>
            <Content style={{height: '100%' }}>
              <Route path="/home" exact={true} render={() => <Redirect to="/home/setupHome" />} />
              <Route path="/home/objectManager" component={ObjectManager} />
              <Route path="/home/setupHome" component={SetupHome} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
