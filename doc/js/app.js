const header = document.querySelector("#header");
const overlay = document.querySelector("#overlay");
const coordonne = document.querySelector("#coordonne");
const btnCoordonneToggle = document.querySelector("#toggle-coordonne");

class App {
    constructor() {
        if (header) {
            header.addEventListener('click', this._mobileToggle)
        }
        console.log(btnCoordonneToggle, coordonne);
        if (btnCoordonneToggle && coordonne) {
            btnCoordonneToggle.addEventListener("click", function() {
                coordonne.classList.toggle("is-open")
            })
        }
        // console.log(navigator.language);
    }

    _mobileToggle(e) {
        const toggleBtn = e.target.closest('button[class="toggle"]')
        const anchor = e.target.closest('a[href]')
        if(!toggleBtn && !anchor) return;
        if (anchor && !header.children[2].classList.contains('is-open')) return;
        header.children[1].children[0].remove()
        header.children[2].classList.toggle('is-open')
        overlay.classList.toggle('fixed')
        if (toggleBtn && !header.children[2].classList.contains('is-open') || anchor) {
            header.children[1].insertAdjacentHTML('afterbegin', `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V3H0V1Z" fill="currentColor"/><rect y="7" width="20" height="3" fill="currentColor"/><path d="M0 14H20V16C20 16.5523 19.5523 17 19 17H1C0.447715 17 0 16.5523 0 16V14Z" fill="currentColor"/></svg>`)
            document.querySelector('body').style.overflowY = ""
        } else {
            toggleBtn.insertAdjacentHTML('afterbegin', `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="3" rx="1" transform="matrix(0.735456 -0.677572 0.735456 0.677572 0 13.5515)" fill="currentColor"/><rect width="20" height="3" rx="1" transform="matrix(0.735456 0.677572 -0.735456 0.677572 2.20642 0)" fill="currentColor"/></svg>`)
            document.querySelector('body').style.overflowY = "hidden" 
        }
    }
}

const app = new App()