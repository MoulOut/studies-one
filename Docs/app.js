function goToPage() {
  window.location.href = 'https://www.youtube.com/watch?v=mAKsZ26SabQ';
}

function buttonChange() {
  document.querySelector('button#yes2').innerHTML = 'Yes!';
  document.querySelector('button#yes2').removeAttribute('disabled');
}

function changeBack(){
  document.querySelector('button#yes2').innerHTML = 'No';
  document.querySelector('button#yes2').toggleAttribute('disabled');
}