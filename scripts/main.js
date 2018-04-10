let form = document.getElementById('form')
let query = document.getElementById('query')
let userBio = document.getElementById('bio')
let userRepos = document.getElementById('repos')
let repositories = document.getElementById('repositories')
let error = document.getElementById('error')

userBio.style.display = 'none'
userRepos.style.display = 'none'
error.style.display = 'none'


form.addEventListener('submit', mySubmit = (e) => {
    e.preventDefault()
    const data = query.value;


    gitHubApi.searchUser(data)
        .then(res => {
            res.message === 'Not Found' ?  showError() : showBio(res)
            
        })

    gitHubApi.searchRepos(data)
        .then(res => {
            res.message === 'Not Found' ? showError() : showRepos(res)
        })


    showBio = (user) => {

        userBio.style.display = 'flex';

        let bio = user.bio ? user.bio : 'This username has no Bio'

        userBio.innerHTML = `<div class="info" id="info">

        <img src="${user.avatar_url}" alt="">
            </div>
        <div class="name">
            <ul>
                <li>
                    <small>
                        <i>@${user.login}</i>
                    </li>
                    </small>
                    </li>
            <li>
                <h1>${user.name}</h1>
            </li>
            <li>
                <small>${bio}</small>
            </li>
                </ul>
    </div>`
    }

    showRepos = (repos) => {

        userRepos.style.display = 'flex';

        repositories.innerHTML = repos.map(repo => {
            return ` <li>${repo.name}
                            <div class="icons">
                                <img src="images/star.svg" alt="star">
                                <small>${repo.stargazers_count}</small>
                                <img src="images/repo-forked.svg" alt="fork">
                                <small>${repo.forks_count}</small>
                            </div>
                            </li>`
        }).join('')

    }

    showError = () => {

        error.style.display = 'block';
        userBio.style.display = 'none';
        userRepos.style.display = 'none';

    }


})