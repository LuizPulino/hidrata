export default $("nav>a").on("click", function(){
    let page = $(this).data("page");
    $("main").load("pages/" + page + ".html");
});