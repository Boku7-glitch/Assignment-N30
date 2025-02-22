document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("main-title");
    console.log("Title has class?", title.hasAttribute("class"));
    title.setAttribute("class", "mTitle");
    console.log("Title class:", title.getAttribute("class"));

    let img = document.getElementById("dynamic-img");
    console.log("Image src before:", img.getAttribute("src"));
    img.setAttribute("src",
        "https://photos.zillowstatic.com/fp/560c9cdb04804dda73a7178511d1d70a-cc_ft_960.jpg");
    console.log("Image src after:", img.getAttribute("src"));

    let submitBtn = document.getElementById("submit-btn");
    console.log("Button disabled?", submitBtn.hasAttribute("disabled"));
    submitBtn.setAttribute("disabled", "true");
    console.log("Button disabled after change?",
        submitBtn.hasAttribute("disabled"));
})