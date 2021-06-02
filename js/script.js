//const buttons = document.querySelectorAll("button")

//const playListButton = button[0]
const plusButtons = document.querySelectorAll('#first-playlist button');
const pListInput = document.getElementById('list-group');
const pListSpan = document.getElementById('ResultPlayList');

const removeButton = document.querySelector('#playlist button');
const removeList = document.getElementById('ResultPlayList');

const spotifyAcces = document.getElementById('spotify');




plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.dataset.song);
    const newPlayList1 = document.createElement('li');
    const text = document.createTextNode(button.dataset.song);

    const del = document.createElement('button');
    del.textContent = "Delete";
    del.addEventListener('click', () => {
      newPlayList1.remove(text);
      
    })
    
    newPlayList1.append(text);
    newPlayList1.append(del);
    pListSpan.append(newPlayList1);
    
  })

});

// 1) Connexion Api Spotify (access token)



spotifyAcces.addEventListener('click',() => {


  const spotify = "https://accounts.spotify.com/authorize?response_type=code&client_id=a12a62138a824884805c61fde334ed10&redirect_uri=http://127.0.0.1:5500/javascript-spotify/";

  document.location.href=spotify


})



// 2) Request Api Spotify











