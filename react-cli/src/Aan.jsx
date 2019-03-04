import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick){
      this.props.onClick()
    }
  }

  handleClick(word, e) {
    console.log(this, word)
  }

  render() {
    const likedText = this.props.likedText || '取消'
    const unlikedText = this.props.unlikedText || '点赞'
    // const wordings = this.props.wordings || {
    //   likedText: "取消",
    //   unlikedText: "点赞"
    // }
    return ( <
      div >
      <
      button onClick = { this.handleClickOnLikeButton.bind(this) } > { this.state.isLiked ? likedText : unlikedText }👍 <
      /button> <
      button onClick = { this.handleClick.bind(this, "word") } > 点击操作 < /button> <
      /
      div >

    )
  }
}

export default LikeButton;
