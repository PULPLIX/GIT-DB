const fs = require('fs').promises;

const saveContentBody = async (bodyContent, wikiId) => {
    const directory = `${__dirname}/../wikis/${wikiId}.md`;
    await fs.writeFile(directory, bodyContent)
        .then(() => {
            console.log("Document saved succesfully");
        })
        .catch((error) => {
            console.log(error);
        });
}

const readContendBody = async (wikiId) => {
    const fileDirectory = `${__dirname}/../wikis/${wikiId}.md`;
    const data = await fs.readFile(fileDirectory, "utf-8");
    return data;
}

const ensureDirectoryExistence = async () => {
    const directory = `${__dirname}/../wikis`;
    await fs.mkdir(directory).then(() => {
        return true;
    }).catch((error)=>{
        if(error.code == 'EEXIST'){
            return true;
        }
        return false;
    })
}
exports.saveContentBody = saveContentBody;
exports.readContendBody = readContendBody;
exports.ensureDirectoryExistence = ensureDirectoryExistence;

