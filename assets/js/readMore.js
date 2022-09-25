/**
 * @author   : Isuru Lakmal G K A
 * @since    : 0.1.0
 * @date     : 9/25/22
 **/
    
const readMbtn = document.getElementById('read-more')
const readText = document.getElementById('more')
const myskillsextend = document.getElementById('section-3')


readMbtn.addEventListener('click', function (){
    readText.classList.toggle('is-active');
    myskillsextend.classList.toggle('is-active');

});