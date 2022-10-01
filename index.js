const dataSource = [{
    id: 1,
    name: 'test',
}, {
    id: 2,
    name: 'test2'
}, {
    id: 3,
    name: 'test3'
}, , {
    id: 4,
    name: 'test3'
    // 10000 more rows
}]

// search in data source
const searchInDataSource = (key) => {
    return dataSource.filter(item => item.name === key )
}
console.log(searchInDataSource('test3'))

const indexes = {}

const createIndexes = () => {
    indexes.name = {}
    dataSource.forEach(item => {
        if(!indexes.name[item.name]){
            indexes.name[item.name] = []
        } 
        indexes.name[item.name].push(item)
    })
}

const searchInDataSourceUsingIndexing = (key) => {
    return indexes.name[key]
}
createIndexes()

const addNewItem = () => {
    const item = {
        id: 5,
        name: 'test5'
    }
    dataSource.push(item)
    indexes.name[item.name].push(item)
}

console.log(searchInDataSourceUsingIndexing('test3'))