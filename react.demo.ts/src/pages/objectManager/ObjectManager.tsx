import * as React from 'react';
import { Table, Layout } from 'antd';
import './ObjectManager.scss';

const { Content } = Layout;

const data = [
    {
        key:'1',
        modelTag:'Opportunity',
        apiName:'Opportunity',
        description:'',
        latestUpdateTime:'',
        deploymentStatus:'',
        others:''
    },
    {
        key:'2',
        modelTag:'Case',
        apiName:'Case',
        description:'',
        latestUpdateTime:'',
        deploymentStatus:'',
        others:''
    },
    {
        key:'3',
        modelTag:'Product',
        apiName:'Product',
        description:'',
        latestUpdateTime:'',
        deploymentStatus:'',
        others:''
    },
    {
        key:'4',
        modelTag:'Task',
        apiName:'Task',
        description:'',
        latestUpdateTime:'',
        deploymentStatus:'',
        others:''
    },
    {
        key:'5',
        modelTag:'Contract',
        apiName:'Contract',
        description:'',
        latestUpdateTime:'',
        deploymentStatus:'',
        others:''
    },
];

const columns = [
    {
        title:'Model Tag',
        dataIndex:'modelTag',
        key:'modelTag'
    },
    {
        title:'API Name',
        dataIndex:'apiName',
        key:'apiName'
    },
    {
        title:'Description',
        dataIndex:'description',
        key:'description'
    },
    {
        title:'Latest Updated Time',
        dataIndex:'latestUpdateTime',
        key:'latestUpdateTime'
    },
    {
        title:'Deployment Status',
        dataIndex:'deploymentStatus',
        key:'deploymentStatus'
    },
    {
        title:'Others',
        dataIndex:'others',
        key:'others'
    }
];

export default class ObjectManager extends React.Component {
    public render() {
        return <Layout className="object-manager" style={{ backgroundColor: '#fff', height: '100%' }}>
            <Content>
                <Table columns={columns} dataSource={data} />
            </Content>
        </Layout>
    }
}