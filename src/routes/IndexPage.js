import React from 'react'
import {
    Route,
    Link
  } from 'react-router-dom'
import Nav from './Nav'
import List from '../components/List'

export default function IndexPage(props){
    console.log(props)
    return (
        <div>
            <div>首页</div>
            <Link to="/Home/nav"> 去导航 </Link>
            <Route path='/Home/nav' component={Nav} />
            <List/>
        </div>
    )
}