const socialMedias = {
  youtube: 'UCrI_HCsCh6jvhBbnQf-7pEA',
  instagram: 'barbosa_fel',
  facebook: 'Kamrad.Fel',
  twitter: 'Amici_Noctis_',
  github: 'AmiciNoctis'
}

function chageUserSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${socialMedias[social]}`
  }
}

chageUserSocialMedia()

function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${socialMedias.github}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    gitLink.href = data.html_url
    avatar.children[1].src = data.avatar_url
  })
}

getGitHubProfileInfos();