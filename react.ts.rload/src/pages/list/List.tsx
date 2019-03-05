import * as React from "react";
import { Button, Table, Card } from "antd";
import api from "@/config/api/index";
const { Column } = Table;

// const columns = [
//   {
//     title: "序号",
//     dataIndex: "id",
//     key: "id",
//   },
//   {
//     title: "姓名",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "年龄",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "性别",
//     dataIndex: "sex",
//     key: "sex",
//   },
// ];

// interface ListProps {
//   dataSource: any[];
// }

class About extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  // public async componentWillMount() {
  //   await api.getMockData({ id: 1 }).then((res: any) => {
  //     const { data } = res.result;
  //     this.setState({
  //       dataSource: data,
  //     });
  //   });
  //   console.log(this.state.dataSource);
  // }

  public async getData() {
    await api.getMockData({ id: 1 }).then((res: any) => {
      const { data } = res.result;
      this.setState({
        dataSource: data,
      });
    });
    console.log(this.state.dataSource);
  }

  public render(): JSX.Element {
    return (
      // <Table
      //   dataSource={this.state.dataSource}
      //   columns={columns}
      //   rowKey={}
      // />
      <div>
        <Card bordered title="Table List" style={{ margin: "16px 16px" }}>
          <Button type="primary" icon="" onClick={this.getData.bind(this)}>
            请求数据
          </Button>
          <hr />
          <Table dataSource={this.state.dataSource} rowKey="id">
            <Column title="序号" dataIndex="id" key="id" />
            <Column title="姓名" dataIndex="name" key="name" />
            <Column title="年龄" dataIndex="age" key="age" />
            <Column title="性别" dataIndex="sex" key="sex" />
          </Table>
        </Card>
      </div>
    );
  }
}

export default About;
