import { observable, action } from 'mobx'
import { setTimeout } from 'timers';

class CommonState {
    @observable count = 1

    @observable loading = false

    @observable list = []

    @action async getData () {
        const res = await new Promsie((resolve, reject) => {
            setTimeout(()=> {
                resolve(Math.floor(Math.random()*10000))
            }, 1000)
        })
        this.list.push(res)
    }

    @action add = () => {
        this.count++ 
    }
    
    @action reduce = () => {
        this.count--
    }
}

export default new CommonState()