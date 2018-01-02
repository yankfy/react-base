import React from 'react'

export default class loadc extends React.Component{
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>C组件:参数A{this.props.match.params.paramA}，参数B：{this.props.match.params.paramA}</div>
        )
    }
}

