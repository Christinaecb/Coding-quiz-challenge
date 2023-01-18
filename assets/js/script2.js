let clearBtn = document.querySelector("#clear-score");

clearBtn.onclick = () => {
    // Clear local storage
    localStorage.clear();
    location.reload();
}