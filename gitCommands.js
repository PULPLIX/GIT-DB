const util = require('util');
const exec = util.promisify(require('child_process').exec);

const execCommand = async (command, directory) => {
    try {
        const { stdout, stderr } = await exec(command, { cwd: directory });
        console.log('stdout:', stdout);
        if (stderr) {
            console.log('stderr:', stderr);
        }
    } catch (e) {
        console.error(e); // should contain code (exit code) and signal (that caused the termination).
    }
}

const gitCommit = async (wikiId, directory, user) => {
    //1. GIT ADD
    const addCommand = `git add ${wikiId}.md`
    //2.GIT COMMIT
    let commitComment = createGitComment(wikiId, user);
    const comitCommand = `git commit -m "${commitComment}"`
    //3. GIT PUSH
    const pushCommand = "git push origin master"

    await execCommand(addCommand, directory) //1
    await execCommand(comitCommand, directory)//2
    await execCommand(pushCommand, directory)//3
    console.log("COMMIT SUCCESSFUL");
}

function createGitComment(wikiId, user) {
    const date = new Date();
    let commitComment = `WIKI ID: ${wikiId} USER: ${user} date: ${date.getDay()}/${date.getMonth()} - ${date.getHours()}h : ${date.getMinutes()}m"`
    return commitComment;
}

const getWikiGitHistory = async (wikiId) => {
    const directory = __dirname + '/../wikis'
    //4. READ THE DATA THAT WAS STORED IN THE LASTCOMMIT 
    const lastCommitInfoDirectory = directory + `/${wikiId}lastCommitInfo.txt`
    //3. EXECUTES THE COMMAND TO LOG THE LAST COMMIT INFO IN A TXT FILE
    const lastCommitInfoCommand = `git log -p -1 1.md > ${wikiId}lastCommitInfo.txt`;
    await execCommand(lastCommitInfoCommand, directory)
    readFile(lastCommitInfoDirectory)
}

const getLastCommitId = async (wikiId) => {
    const directory = __dirname + '/../wikis'
    const lastCommitIdCommand = `git log -1 --pretty=format:"%H" ${wikiId}.md`;
    const { stdout, stderr } = await exec(lastCommitIdCommand, { cwd: directory });
    if (stderr) {
        console.log(stderr);
        return
    }
    return stdout;
}

const getCommitInfoByID = async (commitID, pathFile) => {
    const directory = __dirname + '/../wikis'
    const commitInfoByIdCommand = `git show ${commitID} ${pathFile} | findstr "^\\+"`;
    const { stdout, stderr } = await exec(commitInfoByIdCommand, { cwd: directory });
    if (stderr) {
        console.log(stderr);
        return
    }
    let result = stdout.replace(/^[^\n]+\n/, '')
    result = result.replace(/^\+/, '')
    return result;
}


exports.gitCommit = gitCommit
exports.getWikiGitHistory = getWikiGitHistory
exports.getLastCommitId = getLastCommitId
exports.getCommitInfoByID = getCommitInfoByID

