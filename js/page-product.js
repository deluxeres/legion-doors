(()=> {
    let imgBig = document.querySelector('.img-big');
    let imgSmall = document.querySelectorAll('.img-small_wrapper');

    for (let item of imgSmall) {
        item.addEventListener('click', ()=> {
            imgSmallPath = item.children[0].getAttribute('src');
            imgBig.setAttribute('src', imgSmallPath)
            for (let item of imgSmall) {
                item.classList.remove('img-small_active')
            }
            item.classList.add('img-small_active')
        })
    }
})()