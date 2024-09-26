import './modules/router.js';
$("main").load("pages/home.html");
$(window).on("load", function(){
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./service-worker.js")
            .then((reg) => console.log("service worker registered"))
            .catch((err) => console.log(`Here is the error: ${err}`));
    }
})