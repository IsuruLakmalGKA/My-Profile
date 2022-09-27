/**
 * @author   : Isuru Lakmal G K A
 * @since    : 0.1.0
 * @date     : 9/27/22
 **/

const oberver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
    
const hidddenElements = document.querySelectorAll('.pageLoader');
hidddenElements.forEach((el) => oberver.observe(el));