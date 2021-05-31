//const buttons = document.querySelectorAll("button")

//const playListButton = button[0]
const plusButtons = document.querySelectorAll('#first-playlist button');
const pListInput = document.getElementById('list-group');
const pListSpan = document.getElementById('ResultPlayList');


plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.dataset.song);
    const newPlayList1 = document.createElement('li');
    const text = document.createTextNode(button.dataset.song);
    nouvelLi.append(text);
    pListSpan.append(nouvelLi);
  })
})

