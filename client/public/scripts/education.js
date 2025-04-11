$(document).ready(function () {
    function sliderAccord(accordion, item) {
        $(accordion + " > .accordionTitle").click(function () {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active").find(item).slideUp();
            } else {
                $(accordion + ".active " + item).slideUp();
                $(accordion + ".active").removeClass("active");
                $(this).parent().addClass("active").find(item).slideDown();
            }
            return false;
        });
    }

    sliderAccord(".accordion", ".itemAccordion")

    $(".osobaIs").click((e) => {
        switch ($('.osobaIs input[name=RadioButtonList1]:checked', '.right #form1').val()) {
            case "pravnaOsoba":
                $(".tvrtkaOib").removeClass("disabled")
                $(".terminAndPolazak").removeClass("disabled")
                break
            case "fizickaOsoba":
                $(".tvrtkaOib").addClass("disabled")
                $(".terminAndPolazak").removeClass("disabled")
                break
            case "info":
                $(".tvrtkaOib").addClass("disabled")
                $(".terminAndPolazak").addClass("disabled")
                break
            default:
                $(".tvrtkaOib").addClass("disabled")
        }
    })

    $(".osobaIsNapredno").click((e) => {
        switch ($('.osobaIsNapredno input[name=RadioButtonList1]:checked', '.right #form2').val()) {
            case "pravnaOsoba":
                $(".tvrtkaOib").removeClass("disabled")
                $(".terminAndPolazak").removeClass("disabled")
                break
            case "fizickaOsoba":
                $(".tvrtkaOib").addClass("disabled")
                $(".terminAndPolazak").removeClass("disabled")
                break
            case "info":
                $(".tvrtkaOib").addClass("disabled")
                $(".terminAndPolazak").addClass("disabled")
                break
            default:
                $(".tvrtkaOib").addClass("disabled")
        }
    })
});