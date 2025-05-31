const menuBtn = document.querySelector(".menu-btn"),
    closeBtn = document.querySelector(".close-btn"),
    profile = document.querySelector(".profile"),
    profileItems = document.querySelector(".profile-items"),
    sidebar = document.querySelector(".sidebarshow"),
    rmSerach = document.querySelector(".rm-search"),
    searchBox = document.querySelector(".search-box"),
    blackBg = document.querySelector(".black-bg");

menuBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("-right-full")) {
        sidebar.classList.replace("-right-full", "-right-0");
        sidebar.classList.replace("invisible", "visible");
        blackBg.classList.replace("invisible", "visible");
    }
});
closeBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("-right-0")) {
        sidebar.classList.replace("-right-0", "-right-full");
        sidebar.classList.replace("visible", "invisible");
        blackBg.classList.replace("visible", "invisible");
    }
});
profile.addEventListener("click", () => {
    if (profileItems.classList.contains("hidden")) {
        profileItems.classList.replace("hidden", "flex");
    } else {
        profileItems.classList.replace("flex", "hidden");
    }
});
searchBox.addEventListener("input", () => {
    if (searchBox.value !== "") {
        rmSerach.classList.replace("hidden", "inline");
    } else {
        rmSerach.classList.replace("inline", "hidden");
    }
});
rmSerach.addEventListener("click", () => {
    searchBox.value = "";
    rmSerach.classList.replace("inline", "hidden");
});
