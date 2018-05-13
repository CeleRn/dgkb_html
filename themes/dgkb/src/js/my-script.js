function headerHeightAlignment(selector) {
    let maxHeight = 0;
    $(selector).each(function(i,elem){
        if (maxHeight < $(elem).outerHeight()) {
            maxHeight = $(elem).outerHeight();
        }
        $(selector).css("height", maxHeight);
    })
    return true;
}

$(document).ready(function () {
    headerHeightAlignment(".advantage-item__title");
});