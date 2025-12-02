import $ from "jquery";

$(document).ready(function () {
    // TWÓJ KOD – NIE RUSZAM
    $(".program__nav > button").on("click", function () {
        let filter_id = $(this).attr("data-id");

        $(".program__nav > button").removeClass("active");
        $(this).addClass("active");
        $(".program__item").fadeOut();
        setTimeout(function () {
            $("#" + filter_id).fadeIn();
        }, 500);

        if (window.matchMedia("(max-width: 991px)").matches) {
            $("html, body").animate(
                {
                    scrollTop: $(this).offset().top - 150,
                },
                1000
            );
        }
    });

    // NOWA LOGIKA: jeśli jest hash i pasuje do program__item → odpal ten tab + scroll
    const hash = window.location.hash ? window.location.hash.substring(1) : "";

    if (
        hash &&
        $(".program").length && // sekcja istnieje
        $("#" + hash).length && // istnieje element o tym id
        $("#" + hash).hasClass("program__item") // i jest to program__item
    ) {
        const $btn = $('.program__nav > button[data-id="' + hash + '"]');

        if ($btn.length) {
            // ustaw aktywny przycisk
            $(".program__nav > button").removeClass("active");
            $btn.addClass("active");

            // pokaż odpowiedni tab (bez animacji, żeby nie było laga na starcie)
            $(".program__item").hide();
            $("#" + hash).show();

            // scroll w dół do sekcji programu (niezależnie od rozdzielczości)
            $("html, body").animate(
                {
                    scrollTop: $(".program").offset().top - 150,
                },
                1000
            );
        }
    }
});
