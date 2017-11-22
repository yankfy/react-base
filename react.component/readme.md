# Hello World
## React.createClass
它的作用是注册一个组件类HelloComponent,这个组件类只包含一个render函数，该函数通过调用React.createElement实现了以下HTML内容：
```html
<h1>Hello world</h1>
```
## ReactDOM.render()
ReactDOM.render是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点。

# JSX语法
## JSX中的表达式
JSX是支持表达式的，你只要使用{}括号，就可以使用表达式了。
```js
var HelloComponent =React.createClass({
    render:function(){
        return <h1>Hello {this.props.name?this.props.name:'world'}</h1>;
    }
});
 
ReactDOM.render(
    <HelloComponent name="jspang"/>,
    document.getElementById('reactContainer')
)
```
## JSX上的数组输出
```js
let arr=[
    <h1 key="1">Hello world!</h1>,
    <h2 key="2"> React is awesome</h2>
];
ReactDOM.render(
<div>{arr}</div>, document.getElementById('reactContainer') )
```
# React组件
## state成员
*程序中需要注意的点*
 
- getInitialState函数必须有返回值，可以是null,false,一个对象。
- 访问state数据的方法是”this.state.属性名”。
- 变量用{}包裹，不需要再加双引号。
## props成员
*props与state的区别*
props不能被其所在的组件修改，从父组件传递进来的属性不会在组件内部更改；state只能在所在组件内部更改，或在外部调用setState函数对状态进行间接修改。
## 生命周期
过程中涉及三个主要的动作术语：

- mounting:表示正在挂接虚拟DOM到真实DOM。
- updating:表示正在被重新渲染。
- unmounting:表示正在将虚拟DOM移除真实DOM。

每个动作术语提供两个函数：

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()
