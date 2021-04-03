/**Basic Counter 
 * @authors Tee-Marveel
 * Basic Concepts
 * -currentTarget
 * -contains
 * -classList
 */



let count = 0;
const counthead = document.querySelector('.count').innerHTML;
const h1 = document.querySelector('h1');
// const button = document.querySelector('.button-group').children;
const age = document.querySelector('#age');
const para = document.querySelector('#paragraph');
const button = document.querySelectorAll('.button');
button.forEach(child => child.addEventListener('click', (e) => {
// console.log(e.currentTarget.classList);
// const target = e.currentTarget.textContent;
const target = e.currentTarget.classList;
if(target.contains('decrease')){
    count--;
}else if(target.contains('increase')){
    count++;
}else{
    count = 0;
}
h1.innerHTML = count;

if(count < 0){
    h1.style.color = 'red';
} else if(count > 0){
    h1.style.color = 'green';
}else{
    h1.style.color = 'black';
}
if(count > 1){
    para.textContent = 'I HAVE';
    age.textContent = 'YEARS FRONTEND EXPERIENCE';
}
if( count === 1){
    para.textContent = 'I HAVE';
    age.textContent = 'YEAR FRONTEND EXPERIENCE';
}
if(count === 0 ){
    para.textContent = 'ALTRUISM IS A';
    age.textContent = 'SUM GAME';
}
if(count < 0){
    para.textContent = 'I HAVE';
    age.textContent = 'DAYS TO INTERVIEW';
}
if(count === -1){
    para.textContent = 'I HAVE';
    age.textContent = 'DAY TO INTERVIEW';
}

}   
));