// Constantes
const clienId = 'a12a62138a824884805c61fde334ed10'
const redirectURI = 'http://127.0.0.1:5500/javascript-spotify/'
let accessToken = null

// Sélecteurs
const addbuttons = document.querySelectorAll('#result-section button')
const ulPlaylist = document.querySelector('#playlist-section ul')
const connectBtn = document.getElementById('connect-spotify')
const searchBtn = document.getElementById('search-button')
const inputSearch = document.getElementById('search')
const deletButton = document.getElementById('delete-button')
const ulResult = document.querySelector('#result-section ul')
const btnText = document.getElementById('ajouter')


// Ajout d'une musique
  //addbuttons.forEach(button => {
	//button.addEventListener('click', () => {
		//console.log(button.dataset)
		//const li = document.createElement('li')
		//const liText = document.createTextNode(`${button.dataset.song} - ${button.dataset.artist}`)
		//li.append(liText)
		//const deleteButton = document.createElement('button')
		// Suppression d'une musique
		//deleteButton.addEventListener('click', () => {
		//li.remove()
		//})
		//const btnText = document.createTextNode('Supprimer')
		//deleteButton.append(btnText)
		//li.append(deleteButton)
		//ulPlaylist.append(li)
//	})
//})

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


// Recherche par titres/ chanson
// on creer un btn d'evenement 

  
    searchBtn.addEventListener('click',  () => {

    const options = {
    method: "GET",
		headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
		  },
    }
  
  // on recupere l'id de l'nput du label "rechercher" ensuite on ajoute Input value dans le chemi le Fetch
  
  
      fetch(`https://api.spotify.com/v1/search?q=${inputSearch.value}&type=track`, options)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      const li = document.createElement('li')
      const addbuttons = document.createElement('button');
      addbuttons.textContent = "Ajouter";
      const liText = document.createTextNode(`${data.tracks.items[0].name} - ${data.tracks.items[0].artists[0].name} `)

      //Const addbtn = document.createElement('Ajouter')
      //const btnText = document.createElement('Add')
      li.append(liText)
      li.append(addbuttons)
      resultSection.append(li)
      //addbtn.append(btnText)



      addbuttons.addEventListener('click', () => {
      // Creation de la balise li
      const nouvelLi = document.createElement('li');
      // Creation de texte avec en paramettre un get de l'attribut data-song
      const nomMusique = document.createTextNode(`${data.tracks.items[0].name} - ${data.tracks.items[0].artists[0].name} `)
      // Creation d'un bouton supprimer
      const buttonDelete = document.createElement('button')
      // Creation du text du boutton
      buttonDelete.textContent="supprimer";
      // Ajout de l'event click pour le boutton supprimer
      buttonDelete.addEventListener('click',()=>{
      // on supprimer le nom de la musique
      nouvelLi.remove(nomMusique)
      // on supprime egalement le boutton supprimer
      nouvelLi.remove(buttonDelete)
      })
      // Attribution à la balise ul le nouvelle Li
      playlistSection.append(nouvelLi);
      
      // Attribution à  la balise li le nouveau text
      nouvelLi.append(nomMusique);

      // Attribution à  la balise li nouveau button
      nouvelLi.append(buttonDelete)

    })
    
  })

})



