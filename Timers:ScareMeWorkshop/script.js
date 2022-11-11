/**
 * Timers
 *
 */

 const btnScareMe = document.querySelector('#btnScareMe');
 const ghostEl = document.querySelector('#ghost');

 const getRandomNumber = (max = 5 ) => {
    return Math.ceil( Math.random() * max)
 }

 btnScareMe.addEventListener('click', () => {

    btnScareMe.classList.add('hide');

    const delay = getRandomNumber() * 1000

    setTimeout( () => {

        ghostEl.classList.remove('hide');

     setTimeout( () => {
        ghostEl.classList.add('hide');
        btnScareMe.classList.remove('hide');
     }, 2000);
     

 }, delay);
});