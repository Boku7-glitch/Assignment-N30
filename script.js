document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("main-title");
    console.log("Title has class?", title.hasAttribute("class")); // Title has class? false
    title.setAttribute("class", "mTitle");
    console.log("Title class:", title.getAttribute("class")); // Title class: mTitle

    let img = document.getElementById("dynamic-img");
    console.log("Image src before:", img.getAttribute("src")); // Image src before: https://photos.zillowstatic.com/fp/560c9cdb04804dda73a7178511d1d70a-cc_ft_960.jpg
    img.setAttribute("src",
        "https://photos.zillowstatic.com/fp/560c9cdb04804dda73a7178511d1d70a-cc_ft_960.jpg");
    console.log("Image src after:", img.getAttribute("src")); // Image src after: https://photos.zillowstatic.com/fp/560c9cdb04804dda73a7178511d1d70a-cc_ft_960.jpg

    let submitBtn = document.getElementById("submit-btn");
    console.log("Button disabled?", submitBtn.hasAttribute("disabled")); // Button disabled? false
    submitBtn.setAttribute("disabled", "true");
    console.log("Button disabled after change?",
        submitBtn.hasAttribute("disabled")); // Button disabled after change? true
})
