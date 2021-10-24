//links redes sociais
const linksSocialMedia = {
    github: "douglasgrodrigues",
    youtube: "UCUSiARHP8Pd_IFYC1MT-BIA",
    facebook: "DouglasGhiraldello",
    instagram: "rdouggg",
    twitter: "#"
 }

 function changeSocialMediaLinks() {
         
   for(let li of socialLinks.children) {
     const social = li.getAttribute("class")
     li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   }
 }
 
 changeSocialMediaLinks()

 //api github

 function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        /*const name = document.getElementById("userName")
        name.innerHTML = data.name */
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userLogin.textContent = data.login
        userImage.src = data.avatar_url
    })
 }

 getGitHubProfileInfos()

