const SocialMedia = {
  github: 'Arthurmqz',
  youtube: 'channel/UCWJALP6mk9K_ttifGpMXtzw',
  instagram: 'arthurmqz',
  facebook: 'arthurrmqs',
  twitter: 'Arthurmarqs'
}

function changeSocialMedia() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${SocialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfod() {
  const url = `https://api.github.com/users/${SocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      UserName.textContent = data.name
      Bio.textContent = data.bio
      UserLink.href = data.html_url
      ImageUser.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfileInfod()
