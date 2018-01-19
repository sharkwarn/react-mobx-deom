import React from 'react'
import { inject, observer } from 'mobx-react';


@inject('common')
@observer
class List extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <button onClick={() => this.props.common.add()}>+</button>
                <span>{this.props.common.count}</span>
                <button onClick={() => this.props.common.reduce()}>-</button>
            </div>
        )
    }
}

export default List