import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Detail from './Detail'
import IndexPage from './IndexPage'

// 注意一个Router只能含有一个children Element

// exact 还不肯定，但是目前看到的结果如果匹配到后就不在向下匹配
///
export default function  Routes () {
    return (
        <Router>
            <div>
                <Link to="/">首页</Link>
                <Link to="/Detail">详情页面</Link>
                <Route exact  path="/" component={IndexPage}/>
                <Route path="/Home/:id" component={IndexPage}/>
                <Route path="/Detail" component={Detail}/>
            </div>
        </Router>
    )
} 