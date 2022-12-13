const text = document.querySelector('.long-text')
const filteredElement =document.querySelector('.filtered')
const scrambledElement =document.querySelector('.scrambled')
const searchBar = document.querySelector('#search')
const button = document.querySelector('#scramble')

searchBar.addEventListener('input', e => {
  const filtered = text.innerText.split(' ').filter((word)=>{
    return word.includes(e.target.value)
  })
  console.log(filtered);
  filteredElement.innerText = filtered.join(' ');
})


button.addEventListener('click', ()=>{
  const mapped = text.innerText.split(' ').map(word => {
    const letters = word.split('')
    letters.sort((a, b)=>{return 0.5 - Math.random()})
    return letters.join('')
  });
  scrambledElement.innerText = mapped.join(' ')
})
