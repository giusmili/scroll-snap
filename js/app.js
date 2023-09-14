document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    let btn_change_mode = document.querySelector("button");
    let parent_page = document.querySelector("body");
    const elements = document.getElementsByTagName("footer")[0];
    console.log(elements.children);
    console.log(el.children);
    console.log(el.children[2].innerText = `Javascript`);

    /* event dark mode */
    /* btn_change_mode.addEventListener("click",()=>{
        parent_page.classList.toggle("parent_page")
    })
    */
    /* object */
    const darkmode = {
        btn_change_mode: document.querySelector("button"),
        parent_page: document.querySelector("body"),
        methode_clic() {
            this.btn_change_mode.addEventListener("click", () => {
                this.parent_page.classList.toggle("darkmode");
            });
        }
    };

    darkmode.methode_clic();
});