import React from 'react'
import ReactDom from 'react-dom'

// let Error = () => {
//     <div>
//         <h2>
//             404PAGE
//         </h2>
//     </div> 
// }

// export default Error

// 定义一个组件

export default class error extends React.Component{
    render(){
        return (
            <div>
                <h2>
                    404PAGE
                </h2>
            </div> 
        )
    }
}