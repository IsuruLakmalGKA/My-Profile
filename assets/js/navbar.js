/**
 * @author   : Isuru Lakmal G K A
 * @since    : 0.1.0
 * @date     : 9/25/22
 **/

const btnnav = document.querySelector('.btn-nav')
const mobilemenu = document.querySelector('.mobile-nav')

btnnav.addEventListener('click', function (){
    this.classList.toggle('is-active');
    mobilemenu.classList.toggle('is-active');
});