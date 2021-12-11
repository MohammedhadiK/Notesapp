// const sum = require('./utils')

// const add = sum(9,10)

// console.log(add)

// challenge

const notes = require('./notes.js')



//import npm package

const chalk = require('chalk')
const yargs = require('yargs')
const { demandOption } = require('yargs')
const { type } = require('os')
const { getNotes, listNotes } = require('./notes.js')


// costomise yargs version 
yargs.version('1.1.0')

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption: true, 
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
}})

// create remove commaand
yargs.command({
    command:'remove',
    describe: 'remove the last note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
    notes.removeNote(argv.title)

}})

// create list command
yargs.command({
    command:'list',
    describe: 'to list the notes',
    handler(){
        console.log(chalk.gray.inverse('Your notes'))
        notes.listNotes()
    }

})

//add read command
yargs.command({
    command:'read',
    describe: 'to read the notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        console.log(chalk.yellow('Reading notes'))
        notes.readNotes(argv.title)
        
        
}})

yargs.parse()

//console.log(yargs.argv)


