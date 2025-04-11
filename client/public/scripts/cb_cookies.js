// JavaScript source code

$(() => {
    const html = `
        <div class="cookie">
            <div class="cookie__text">
                This website uses cookies to ensure you get the best experience on our website.
            </div>
            <div class="cookie__btns">
                <button class="cookies__btns--accept">accept</button>
                <button class="cookies__btns--decline">decline</button>
            </div>
        </div>
    `

    if (!Cookies.get("acceptCookies")) {
        $("body").prepend(html)
    }

    $(".cookies__btns--accept").click(() => {
        Cookies.set("acceptCookies", true);
        location.reload();
    })
    $(".cookies__btns--decline").click(() => {
        Cookies.set("acceptCookies", false)
    })

    $(".cookie__btns button").click(() => {
        $(".cookie").fadeOut(200)
    })
})