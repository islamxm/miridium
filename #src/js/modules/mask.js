import IMask from "imask";

const mask = () => {
    const tel = document.querySelectorAll('.telMask');

    if(tel.length > 0) {
        tel.forEach(t => {
            let telMask = IMask(
                t, {
                  mask: '+{7}(000)000-00-00'
                });
        })
    }
}

export default mask;