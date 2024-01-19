const calc = document.querySelector('.wrapper')
const result = document.querySelector('#result')

calc.addEventListener('click', function(count) {
  if (!count.target.classList.contains('calc__btn')) return
  
  const value = count.target.innerText

  switch(value) {
    case 'C' :
      result.innerText = '';
      break;
    
    case '=' :
      result.innerText = eval(result.innerText).toFixed(2);
      break;

    default :
      result.innerText += value;
  }

})