import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = []
    @observable length

    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (item) => {
        let food = new Item(`${item}`)
        this.list.push(food)
    }
    @action editItem = (itemName , newLocation ) => {
        let item = this.list.find( i => i.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (delName) => {
        let index = this.list.findIndex( i => i.name === delName)
        this.list.splice(index , 1)
    }
}
//sadksadlksad



