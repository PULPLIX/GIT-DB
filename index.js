const fileManager = require('./fileWikiManager');
const git = require('./gitCommands');

//DECLARE CONSTANTS
const directory = __dirname + '/../wikis'
const wikiId = 1;

// git.gitCommit(wikiId, directory, "daguilar@mobilize.net")

//0. SAVE THE CONTENT OF THE WIKI IN A TXT FILE
// const bodyContent = "Otro de manera asyncrona con js para probar el push # ESTO es otro asdasd contenido ARCHIVO asdasd CUALQUIERA eep in mind that some characters can not be included literally so one has to use escape sequences (they begin with a backslash) e.g. to print a literal backslash one has to write \\.\n";

// fileManager.saveContentBody(bodyContent, 1);
fileManager.readContendBody(wikiId)
    .then((fileContent) => {
        let data = fileContent;
        console.log(data)
    })

git.getLastCommitId(wikiId)
    .then((gitID) => {
        console.log(gitID)
        git.getCommitInfoByID("94ea3ae5c072bfb699162559a9ec6709fc9e9a78","1.md")
            .then((bodyWikiContent) => {
                console.log(bodyWikiContent)
            })
    });






