let gitHubApi

(() => {

     function call(path) {
        return fetch(`${url.baseUrl}/${path}`)
        .then(res => res.json())
        .catch(err => err.message)
        
    }

    const url = {

        baseUrl : 'https://api.github.com',

        searchUser: query => call(`users/${query}`),

        searchRepos: query => call(`users/${query}/repos`)
    }

gitHubApi = url

})()