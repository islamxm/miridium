import Accordion from 'accordion-js';

const acc = () => {
    const el = document.querySelector('.mobmenu__in');

    if(el) {
        const ac = new Accordion('.mobmenu__in', {
            // panelClass: 'mobmenu__item_body',
            // elementClass: 'mobmenu__item',
            // triggerClass: 'mobmenu__item_head_btn', 
        });
    }

}

export default acc;