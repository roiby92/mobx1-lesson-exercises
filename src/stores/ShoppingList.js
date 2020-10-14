import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        this.list.push(new Item(name))
    }
    @action editItem = (itemName, newLocation) => {
        const item = this.list.find(i=>i.name === itemName)
        item.location = newLocation
    }

    deleteItem = (itemame) => {
       const itemIndex= this.list.findIndex(i=>i.name===itemame)
       this.list.splice(itemIndex,1)
    } 
}

