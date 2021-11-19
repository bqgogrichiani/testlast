const menu = document.querySelector('.mobile__menu');
const menuLinks = document.querySelector('.header__menu');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const categoryTitle = document.querySelectorAll('.category__title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0 ; i < categoryTitle.length ; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this , categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0 ; i <allCategoryPosts.length; i++ ){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = " block ";
        }else {
            allCategoryPosts[i].style.display = " none ";
        }
    }
}




function changeActivePosition(activeItem){
    for(let i = 0 ; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active__btn');
    }
    activeItem.classList.add('active__btn');
}