import { getNotes, createNote, removeNote, updateNote } from './notes'
import {getFilters,setFilters} from './filters'

// console.log(getNotes())
// updateNote('dbaa5d57-c68f-46cb-9451-93b291d7161d',{
//     'title':'new body',
//     body:'nothing was the same'
// })
// console.log(getNotes())
console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())