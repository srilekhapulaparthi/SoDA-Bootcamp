const GITHUB_USERNAME = "srilekhapulaparthi"
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
.then(response => response.json())
.then(repos => {
    console.log(repos)

for (const repo of repos){
const repoName= repo.name
const repoDesc= repo.description 
const repoURL= repo.html_url
const repoLang= repo.language

const cardContainer= document.createElement('div')
cardContainer.className = 'card center'

const cardImage = document.createElement('img')
cardImage.src= "./assets/generic_code_bgrnd.jpg"
cardImage.className = 'project-image'

cardContainer.appendChild(cardImage)

const projectInfoContainer = document.createElement('div')
projectInfoContainer.className ='project-info-container'

const projectTitle = document.createElement('h3')
projectTitle.textContent = repoName

const projectDesc = document.createElement('p')
projectDesc.textContent = repoDesc

const projectURL = document.createElement('a')
projectURL.href = repoURL
projectURL.target = "_blank"
projectURL.appendChild(projectTitle)

const projectLang= document.createElement('p')
projectLang.textContent = repoLang

projectInfoContainer.appendChild(projectURL)
projectInfoContainer.appendChild(projectDesc)
projectInfoContainer.appendChild(projectLang)

cardContainer.appendChild(projectInfoContainer)
 const projectsContainer = document.getElementById('project-id')
 projectsContainer.appendChild(cardContainer)
}

})
