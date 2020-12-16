const tabMenuBtn = document.querySelectorAll(".tab-menu--btn");
const cols = document.querySelectorAll(".table-body a");

cols.forEach(col => {
    col.addEventListener("click", (event)=>{
        const row = event.target.parentElement;
        const subRow = row.nextElementSibling;
        subRow.classList.toggle("active");
    });
});


tabMenuBtn.forEach(btn => {

    btn.addEventListener("click", () => {

        const currentActiveBtn = document.querySelector(".tab-menu--btn.active");
        const currentActiveContent = document.getElementById(currentActiveBtn.getAttribute("data-tab"));
        removeActive(currentActiveBtn);
        removeActive(currentActiveContent);

        const targetActiveContent = document.getElementById(btn.getAttribute("data-tab"));
        addActive(btn);
        addActive(targetActiveContent);

    });
});

const addActive = (target) => {
    target.classList.add("active");
}

const removeActive = (target) => {
    target.classList.remove("active");
}

