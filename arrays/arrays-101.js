// arrays are a list of iems
const notes = ['Note 1', 'Note 2', 'Note 3']


// // length of the array

// console.log(notes.length)

// // accesing array items
// // indexing
// console.log(notes[0])

// // manipulating arrays
// // adding items 
// notes.push('Notes 4')
// // push adds items to the end of the array

// // remove items from an array
// // pop --> removes the last item in the array
// notes.pop()
// console.log(notes)

// // shift --> removes first item from the array
// notes.shift()
// console.log(notes)

// unshift --> adds item to the beginning of the array
notes.unshift('alarm')

// splice Removes elements from an array and, 
// if necessary, inserts new elements in their place,
//  returning the deleted elements.


notes.splice(1, 1)

// splice (index, number of items to delete, update)

notes.splice(1, 1, 'bruuh')
notes[2] = 'This is the new note 3'
// console.log(notes)


// looping over 
// forEach --> argument is a function

notes.forEach(function () {
    // console.log('kkkkkkkkkkkkkkkkkkk')
})

notes.forEach(function (item,index) {
    // console.log(item)
    // console.log(index)
})
//  callback function called by another function 

//////////////////////
//                  //
//   The For Loop   //
//                  //  
//////////////////////


// for loop takes the initialzer, limiting condition and the action

for (let count = 0; count<10; count++)
{
    // console.log(count)
};

for (let count=0; count < notes.length;count ++){
//    console.log(notes[count])
}
//reverse

for (let count=notes.length-1; count >=0 ;count --){
    console.log(notes[count])
 }