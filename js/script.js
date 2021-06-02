// Constantes
const clienId = 'a12a62138a824884805c61fde334ed10'
const redirectURI = 'http://127.0.0.1:5500/javascript-spotify/'
let accessToken = null

// Sélecteurs
const addbuttons = document.querySelectorAll('#result-section button')
const ulPlaylist = document.querySelector('#playlist-section ul')
const connectBtn = document.getElementById('connect-spotify')
const searchBtn = document.getElementById('search-button')


// Ajout d'une musique
addbuttons.forEach(button => {
	button.addEventListener('click', () => {
		console.log(button.dataset)
		const li = document.createElement('li')
		const liText = document.createTextNode(`${button.dataset.song} - ${button.dataset.artist}`)
		li.append(liText)
		const deleteButton = document.createElement('button')
		// Suppression d'une musique
		deleteButton.addEventListener('click', () => {
			li.remove()
		})
		const btnText = document.createTextNode('Supprimer')
		deleteButton.append(btnText)
		li.append(deleteButton)
		ulPlaylist.append(li)
	})
})

// Connexion à spotify
connectBtn.addEventListener('click', () => {
	window.location = `https://accounts.spotify.com/authorize?client_id=${clienId}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-public`
})

// Création de la fonction qui me permet de récupérer l'accesToken

const getAccessToken = () => {
	const accessTokenMatch = window.location.hash.match(/(?<=access_token=)([^&]*)/)
	console.log(accessTokenMatch[0])
	accessToken = accessTokenMatch[0]
}

getAccessToken()

const searchSong = () => {
	const options = {
		method: "GET",
		headers: {
        		Accept: "application/json",
		"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		},
	}
	console.log(accessToken)
	fetch("https://api.spotify.com/v1/search?q=muse&type=track", options)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
}

searchBtn.addEventListener('click', searchSong)









