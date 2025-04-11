$(() => {
    //jumping form (only one form from backend)
   // $(".open-jobs__title").on("click", function () {
        

        $(".open-jobs__title").click(function (e) {            
            $(this).next().slideToggle();
            $(this).parent().toggleClass("active");
            $(".open-jobs > div").find(".open-jobs__details").not($(this).next()).slideUp();
            $(".open-jobs > div").find(".open-jobs__title").not($(this)).parent().removeClass("active");
            $(".form-wrapper").appendTo(".active .open-jobs__details");
            $(".cv").change(function (e) {
                let filename = e.target.files[0].name
                if (filename.length >= 26) {
                    $(this).find(".cv-name").text(`${[...filename].splice(0, 25).join("")}...`)
                } else {
                    $(this).find(".cv-name").text(filename)
                }
            })

            $(".cover-letter").change(function (e) {
                let filename = e.target.files[0].name
                if (filename.length >= 26) {
                    $(this).find(".cover-l-name").text(`${[...filename].splice(0, 25).join("")}...`)
                } else {
                    $(this).find(".cover-l-name").text(filename)
                }
            })

        })

 


        


  //  })

    //var fileCV = $('[name="CV"]').val();
    //$(fileCV).change(function () {
    //    var splitPathOfCV = fileCV.split("\\");
    //    var shortFileName = fileCV[splitPathOfCV.length - 1];
    //    $(".cv-name").text(shortFileName);
    //    console.log(shortFileName);
    //});

})