let modal = document.querySelector('.auth');
let opn = document.querySelector('.open');
let cls = document.querySelector('.close');

function open(){
    modal.style.display='block';
}

function close(){
    modal.style.display='none';
}


opn.addEventListener('click',open);
cls.addEventListener('click',open);


window.onclick = function(event){
      if (event.target == modal){
          modal.style.display = "none";
      }
}