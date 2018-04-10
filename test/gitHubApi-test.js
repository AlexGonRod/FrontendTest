describe('Git Hub api test with Jasmine', () => {

    let result = gitHubApi

    describe('Search', () => {
        let bio 

        beforeEach(done => {
            result.searchUser('alexgonrod')
            .then(_bio => {
                bio = _bio
               
                done()
            })
            .catch(done)

        })

        it('Should results Bio', () => {
            expect(bio).not.toBeUndefined()

            expect(bio.login === 'AlexGonRod').toBeTruthy()
        })
    })

    describe('Repos', () => {
        let repo 

        beforeEach(done => {
            result.searchRepos('alexgonrod')
            .then(_repo => {
                repo = _repo
                
                done()
            })
            .catch(done)
        })

        it('Should results repos', () => {
            expect(repo).not.toBeUndefined()
            expect(repo.length > 0).toBeTruthy()
        })
    })

})