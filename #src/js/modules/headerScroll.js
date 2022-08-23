const headerScroll = () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 20) {
            header.classList.add('active');
        } else {
            header.classList.remove('active')
        }
    })
}

export default headerScroll;