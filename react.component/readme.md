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
