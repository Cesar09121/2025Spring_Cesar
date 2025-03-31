/*  B"H
*/

const data = require('../data/products.json')

async function getAll() {
    return data
}

async function get(id){
    return data.item.find((item) => item.id == id)
}

async function create(item){
    const newItem = {
        id: data.length + 1,
        ...item
    }
    data.push(newItem)
    return newItem
}

async function update(id, item){
    const index = data.item.findIndex((item) => item.id == id)
    if (index === -1) {
        return null
    }
    const updatedItem = {
        ...data[index],
        ...item
    }
    data[index] = updatedItem
    return updatedItem

}

async function remove(id){
    const index = data.item.findIndex((item) => item.id == id)
    if (index === -1) {
        return null
    }
    const deletedItem = data[index]
    data.splice(index, 1)
    return deletedItem
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}