const fileManager = require('./fileWikiManager');
const git = require('./gitCommands');

//!'''''''''''''''''''''''''''''''''''''''''''''''' POC GIT COMMANDS IN NODE.JS''''''''''''''''''''''''''''''''''''''''''''''''
// //CONSTANTS DECLARATION
// const directory = __dirname + '/../wikis'
// const wikiId = 1;

// git.gitCommit(wikiId, directory, "daguilar@mobilize.net")

//0. SAVE THE CONTENT OF THE WIKI IN A TXT FILE
// const bodyContent = "Otro de manera asyncrona con js para probar el push # ESTO es otro asdasd contenido ARCHIVO asdasd CUALQUIERA eep in mind that some characters can not be included literally so one has to use escape sequences (they begin with a backslash) e.g. to print a literal backslash one has to write \\.\n";

// fileManager.saveContentBody("hola mundo", 4);


// fileManager.readContendBody(wikiId)
//     .then((fileContent) => {
//         let data = fileContent;
//         console.log(data)
//     })

// git.getLastCommitId(wikiId)
//     .then((gitID) => {
//         console.log(gitID)
//         git.getCommitInfoByID("94ea3ae5c072bfb699162559a9ec6709fc9e9a78", "1.md")
//             .then((bodyWikiContent) => {
//                 console.log(bodyWikiContent)
//             })
//     });

//!'''''''''''''''''''''''''''''''''''''''''''''''' POC OF GET NOUNS ''''''''''''''''''''''''''''''''''''''''''''''''
// var pos = require('pos');

// const getNouns =  (title) => {
//     title = title.toLowerCase()
//     var words = new pos.Lexer().lex(title);
//     var tagger = new pos.Tagger();
//     var taggedWords = tagger.tag(words);
//     let nouns = new Set()
//     taggedWords.forEach((taggedWord) => {
//         var word = taggedWord[0];
//         var tag = taggedWord[1];
//         if (tag == 'NN' || tag == 'NNP' || tag == 'NNPS' || tag == 'NNS') {
//             nouns.add(word)
//         }
//     })
//     return nouns
// }

// let nouns = getNouns('This is some sample text. This text can contain multiple sentences. How to create teams applications Edinburgh')
// for(let noun of nouns.values()){
//     console.log(noun)
// }

//!'''''''''''''''''''''''''''''''''''''''''''''''' POC OF TAGS UPDATE COUNT LOGIN ''''''''''''''''''''''''''''''''''''''''''''''''
// const incommin = ['nube', 'aws', 'amazon', 'azure','apps'] //cOMES FROM THE REQUEST
// const current = ['nube', 'aws', 'amazon', 'JS','teams'] // OBTEINED FROM THE DB 

// //All tags that comes in the incomming array and don't exist in the current tags array
// //In other words, all the tags that have been added 
// const deletedTags = current.filter(value => !incommin.includes(value));

// //All the tags that have been deleted 
// const addedTags = incommin.filter(value => !current.includes(value));

// console.log(incommin," NUEVAS->" , addedTags)
// console.log(current," ELIMINADAS->" , deletedTags)

// console.log("--------------------- TAGS AGREGADAS ---------------------")
// addedTags.forEach(addedTag => {
//     incommin.forEach(tag => {
//         if (addedTag !== tag) {
//             console.log(addedTag + ' | ' + tag + " -> + 1") //call sp_update_cant_tags
//         }
//     })
// })

// console.log("\n\n--------------------- TAGS ELIMINADAS ---------------------")
// deletedTags.forEach(deletedTag => {
//     current.forEach(tag => {
//         if (deletedTag !== tag) {
//             console.log(deletedTag + ' | ' + tag + " -> - 1") //call sp_update_cant_tags
//         }
//     })
// })

// console.log("\n\n--------------------- FIRST TIME WIKI IS ADDED ---------------------")
// //IN THE ONLY ARRAY THAT IS USED IS THE ONE THAT COMES WITH THE 
// current.forEach(deletedTag => {
//     current.forEach(tag => {
//         if (deletedTag !== tag) {
//             console.log(deletedTag + ' | ' + tag + " -> - 1") //call sp_update_cant_tags
//         }
//     })
// })