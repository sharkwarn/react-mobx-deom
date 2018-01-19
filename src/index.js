import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import Routes from './routes'
import stores from './store'
import { useStrict } from 'mobx'

useStrict(true)

class App extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <Provider {...stores}>
                <Routes/>
            </Provider>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root') )

