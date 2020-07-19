let controls_btn = document.querySelectorAll('.control-btn');
let prev_btn = document.querySelector('.prev');
let next_btn = document.querySelector('.next');
let mainItems = document.querySelector('.mobile-carousel')
let items = document.querySelector('.item');
let body = document.body;
let itemsTotal = parseInt(getComputedStyle(body).getPropertyValue('--itemsTotal'));
let itemsVisible = parseInt(getComputedStyle(body).getPropertyValue('--itemsVisible'));
let index = 0;
let ratio = 0;

let itemWidth = items.getBoundingClientRect().width
let mainWidth = mainItems.getBoundingClientRect().width
let currentItem = itemsTotal - itemsVisible;
nextItems();
//prevItems();
function nextItems() {
    index = 1
    next_btn.addEventListener('click',  (e) => {
        //console.log(index)
        if (index >= itemsTotal / itemsVisible) {
            index = 0;
        }
        ratio = -itemWidth * itemsVisible * index;
        mainItems.style.marginLeft = ratio + "px";
        index++
    })
}
/*function prevItems() {
    prev_btn.addEventListener('click', (e) => {
        index = 0
        console.log(index)
        if (index <= 0) {
            index = 0;
        }
        ratio = itemWidth * itemsVisible * index;
        mainItems.style.marginLeft = ratio + "px";
        index--
    })
}
*/