
const SocialMedia = {   /*objeto */
 github:'DevNewCome',
 twitter:'JeffersonLira',
 facebook:'JeffersonLira',
 youtube: 'JeffersonLira',
 instagram:'JeffersonLira'

}

function changeSocialMediaLinks(){

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${SocialMedia[social]}`

  }
 } 
 
 changeSocialMediaLinks()
 
 /* Usando um for para preencher os vários Li com cada link referente ao seu descrito em SocialMedia (crases para mandar um comando especial)
  
}

changeSocialMediaLinks()

/*function changeSocialMediaLinks() {
 /* document.getElementById('userName').textContent='Jefferson Bezerra'*/
 /* 2° opção userName.textContent = 'luiz' */


function getInformationGitHub() {
  const url = `https://api.github.com/users/${SocialMedia.github}`
  
  fetch(url).then(response => response.json())
            .then(data => {
              userName.textContent = data.name
              userBio.textContent = data.bio
              userGitLink.href = data.html_url
              userPhoto.src = data.avatar_url
              userGitName.textContent = data.login
            })




    /*fetch traz as informações da url para dentro do projeto e o then response pega oque o fetch pegou, para transforma-lo em JSON através de  uma função, função ARROW Function q é uma função que não necessita de parametros, apenas o nome ex acima response.*/
}

getInformationGitHub()