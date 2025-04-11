//FORM VALIDATION/SUBMIT


$(document).ready(() => {
                                             // FULL NAME INPUT VALIDATION
    $("#CheckBox1").attr("required", "")
    const fullNameInput = $("#tbxName");
    fullNameInput.blur(() => {
        $(fullNameInput).attr("placeholder", "Full Name*:")
       const regex = /^[a-z ,.'-]+$/i;
        if (fullNameInput.val() === "") {
            const errEmptyString = `<span class = "error-name error-message">Please fill in Full Name field</span>`
            $(errEmptyString).appendTo($(".form-group__name"))
            fullNameInput.addClass("error")
        }
        if (fullNameInput.val().match(regex) === null && fullNameInput.val() != "" ) {
           const errInvalidRegex = `<span class = "error-name error-message">Numbers and special characters are not allowed</span>`
            $(errInvalidRegex).appendTo($(".form-group__name"))
            fullNameInput.addClass("error")
       }
   }).focus(() => {
       $(".error-name").remove()
       fullNameInput.removeClass("error")
   })
                                            //EMAIL INPUT VALIDATION
    const emailInput = $("#tbxEmail");
    emailInput.blur(() => {
        const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        console.log(emailInput.val().match(regex))
        if (emailInput.val() === "") {
            const errEmptyString = `<span class = "error-email error-message">Please fill in Email field</span>`
            $(errEmptyString).appendTo($(".form-group__email"))
            emailInput.addClass("error")
        }
        if (emailInput.val().match(regex) === null && emailInput.val() != "") {
            const errInvalidRegex = `<span class = "error-email error-message">Special characters are not allowed</span>`
            $(errInvalidRegex).appendTo($(".form-group__email"))
            emailInput.addClass("error")
        }
    }).focus(() => {
        $(".error-email").remove();
        emailInput.removeClass("error")
    })
                                               //PHONE TEXT DISABLED
    const phoneInput = $("#tbxPhone")
    phoneInput.keydown((e) => {
        const key = e.which || e.keyCode;

        if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // numbers   
            key >= 48 && key <= 57 ||
            // Numeric keypad
            key >= 96 && key <= 105 ||
            // comma, period and minus, . on keypad
            key == 190 || key == 188 || key == 109 || key == 110 ||
            // Backspace and Tab and Enter
            key == 8 || key == 9 || key == 13 ||
            // Home and End
            key == 35 || key == 36 ||
            // left and right arrows
            key == 37 || key == 39 ||
            // Del and Ins
            key == 46 || key == 45) {
        } else {
            e.preventDefault()
        }
    })
    const messageInput = $("#tbxMessage");
    messageInput.blur(() => {
        if (messageInput.val() === "") {
            const errEmptyString = `<span class = "error-messagebox error-message">Please fill in Message field</span>`
            $(errEmptyString).appendTo($(".form-group__message"))
            messageInput.addClass("error")
        }
    }).focus(() => {
        $(".error-messagebox").remove();
        messageInput.removeClass("error")
    })
    /*
    $("#btnSend").click((e) => {
        console.log("ASD")
        e.preventDefault();
        if (!document.querySelector('#CheckBox1').checked && $(".error-terms").length === 0) {
            const errChecked = `<span class = "error-terms error-message">You must accept tems and conditions</span>`
            $(errChecked).appendTo($(".form-check-label"))
        }
        if (state === true) {
            $("form").submit();
        }
    })

    $("#CheckBox1").change(() => {
        $(".error-terms").remove();
    })
    */
})//document ready end