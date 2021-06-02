function repoHandler(repoUrl,setRepoList){
    fetch(repoUrl)
        .then((res) => res.json())
        .then(res => {setRepoList(res)})
        .catch(err =>console.log(err))
}

module.exports = repoHandler;