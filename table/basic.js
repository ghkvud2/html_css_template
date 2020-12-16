const tabMenuBtn = document.querySelectorAll(".tab-menu--btn");

tabMenuBtn.forEach(btn => {

    btn.addEventListener("click", () => {

        // 현재 active 요소를 비활성화
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

