//const buttons = document.querySelectorAll("button")

//const playListButton = button[0]
const plusButtons = document.querySelectorAll('#first-playlist button');
const pListInput = document.getElementById('list-group');
const pListSpan = document.getElementById('ResultPlayList');

const removeButton = document.querySelector('#playlist button');
const removeList = document.getElementById('ResultPlayList');


plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.dataset.song);
    const newPlayList1 = document.createElement('li');
    const text = document.createTextNode(button.dataset.song);

    const del = document.createElement('button');
    newPlayList1.append(del);
    del.textContent = "Delete";

    del.addEventListener('click', () => {
      newPlayList1.remove(text);

    })

    newPlayList1.append(text);
    pListSpan.append(newPlayList1);

  })
  
})



