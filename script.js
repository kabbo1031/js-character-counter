const text = document.getElementById('text');
const count = document.getElementById('count');

text.addEventListener('input', ()=>{
  count.innerText = text.value.length;
});
