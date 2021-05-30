function urlHandler(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
    .than((res)=>console.log(res.length))
}