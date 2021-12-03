(()=> {
    document.getElementById('menu-btn').addEventListener('click', ()=> {
        document.querySelector('.burger').style.display = 'flex';
    })
    document.querySelector('.burger__close').addEventListener('click', ()=> {
        document.querySelector('.burger').style.display = 'none';
    })
})()