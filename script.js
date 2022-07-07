const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const bar4 = document.querySelector('.bar4');
const bar5 = document.querySelector('.bar5');
const bar6 = document.querySelector('.bar6');
const bar7 = document.querySelector('.bar7');

const amount1 = document.querySelector('.amount1');
const amount2 = document.querySelector('.amount2');
const amount3 = document.querySelector('.amount3');
const amount4 = document.querySelector('.amount4');
const amount5 = document.querySelector('.amount5');
const amount6 = document.querySelector('.amount6');
const amount7 = document.querySelector('.amount7');

bar1.addEventListener('click', showAmount1);
bar2.addEventListener('click', showAmount2);
bar3.addEventListener('click', showAmount3);
bar4.addEventListener('click', showAmount4);
bar5.addEventListener('click', showAmount5);
bar6.addEventListener('click', showAmount6);
bar7.addEventListener('click', showAmount7);

function showAmount1(){
    amount1.classList.toggle('active');
    bar1.classList.toggle('active');
}

function showAmount2(){
    amount2.classList.toggle('active');
    bar2.classList.toggle('active');
}


function showAmount3(){
    amount3.classList.toggle('active');
    bar3.classList.toggle('active');
}
function showAmount4(){
    amount4.classList.toggle('active');
    bar4.classList.toggle('active');
}
function showAmount5(){
    amount5.classList.toggle('active');
    bar5.classList.toggle('active');
}
function showAmount6(){
    amount6.classList.toggle('active');
    bar6.classList.toggle('active');
}
function showAmount7(){
    amount7.classList.toggle('active');
    bar7.classList.toggle('active');
}
