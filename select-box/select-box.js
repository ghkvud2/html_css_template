const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const searchBox = document.querySelector(".search-box input");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");
    
    if(optionsContainer.classList.contains("active")){
        searchBox.focus();
    }
});

optionsList.forEach(option => {
    option.addEventListener("click", () => {
        selected.textContent = option.querySelector("label").textContent;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", (event) => {
    filterList(event.target.value);
});

const filterList = (inputValue) => {
    inputValue = inputValue.toUpperCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.textContent.toUpperCase();
        if(label.indexOf(inputValue) != -1){
            option.style.display = "block";
        }else{
            option.style.display = "none";
        }
    });
};