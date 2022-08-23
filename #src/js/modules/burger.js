const burger = () => {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.mobmenu');
    const close = document.querySelector('.mobmenu__close');

    const checkMenu = () => {
        if(menu.classList.contains('active')) {
            document.body.classList.add('lock')
        } else {
            document.body.classList.remove('lock')
        }
    }

    if(btn && menu && close) {
        btn.addEventListener('click', () => {
            btn.classList.add('active');
            menu.classList.add('active');
            checkMenu();
            
        })

        menu.addEventListener('click', (e) => {
            if(e.target.classList.contains('mobmenu')) {
                menu.classList.remove('active');
                btn.classList.remove('active');
                checkMenu();
            }
            
        })

        close.addEventListener('click', () => {
            menu.classList.remove('active');
            btn.classList.remove('active');
            checkMenu();
        })
    }


}
export default burger;