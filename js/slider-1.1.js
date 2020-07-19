let items = document.querySelector('.item');
let body = document.body;
let itemsTotal = parseInt(getComputedStyle(body).getPropertyValue('--itemsTotal'));
let itemsVisible = parseInt(getComputedStyle(body).getPropertyValue('--itemsVisible'));
let ratio = 0;

function carou(element) {
    let mainItems = document.querySelector('.' + element);
    console.log(mainItems.parentNode)
    let itemWidth = mainItems.children[0].getBoundingClientRect().width
    let next_btn = mainItems.parentNode.querySelector('.next');
   // let prev_btn = mainItems.parentNode.querySelector('.prev');
    console.log(next_btn)
    nextItems();
    //prevItems();
    function nextItems() {
        let index = 1;
        next_btn.addEventListener('click', (e) => {
            if (index >= itemsTotal / itemsVisible) {
                index = 0;
            }
            ratio = -itemWidth * itemsVisible * index;
            mainItems.style.marginLeft = ratio + "px";
            index++
        })
    }
}
carou('mobile-carousel');
carou('mobile-carousel2');
