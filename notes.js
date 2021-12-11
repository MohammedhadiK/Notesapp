const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return ('Your notes are...')
}

// we are going to create const addnote

const addNote = (title,body) =>{
    const notes = loadNotes()
    // above is an API 
    //load notes
    // if only load notes, if no notes.js it fails right ?

    // now let's check for if title is already in place.

    // const duplicateNotes = notes.filter((note) => 
    // note.title ==title)

    const duplicateNote = notes.find( (note) => 
    note.title == title)
        

    if (duplicateNote == undefined){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
        
    } else{
        console.log('Title already in place')
    }
}
    
    

    saveNotes =(notes) => {
        const dataJSON= JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
}
    


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (e) { 
        return []
    }

}

const removeNote = (title,body) =>{
    // console.log("the title to remove is", title,'!')
    //we have a title
    //we can have a duplicate array where only one element
    //is removed. 

    const notes = loadNotes()
   
    //now that we have loaded our notes.

    const notestoKeep = notes.filter ((note)=>
        note.title!=title

        
)

    saveNotes(notestoKeep)

    if (notes.length > notestoKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        
    } else {
        console.log(chalk.red.inverse('No note found!'))        
    }
}

const listNotes = function() {
    const notes = loadNotes()
    

    // for (i=0;i <notes.length;i++) {
    //     console.log(i+1 + '.' +notes[i].title)
    // }

    notes.forEach((note) => {
        console.log(note.title)
    });


}

const readNotes = function(title) {

    const notes = loadNotes()
    
    

    const notetoRead = notes.find((note) => note.title === title)
    // console.log('you are here')

    // console.log(notetoRead)

    if (notetoRead==undefined) {
        console.log('Error')

        
    } else {
        console.log(chalk.inverse(notetoRead.title)),
        console.log(notetoRead.body)
        
        }}
// }

   
// notice how multiple things 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}