import React from 'react'
import {Prompt} from 'react-router-dom'

export default class loadb extends React.Component{
    constructor(props){
        // 了解super() 函数用法 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        super(props);
        this.state = {
            power:false
        }
        this.changePower = this.changePower.bind(this)
    }
    changePower(){
        console.log("开始启用提示效果")
        this.setState({'power':!this.state.power})
    }
    render(){
        return (
            <div>
                <Prompt message="是否残忍离开？" when={this.state.power}/>
                <p>B页面</p>
                <button onClick={this.changePower}>启用</button>
            </div>
        )
    }
}

