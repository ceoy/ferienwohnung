$(function () {

    console.log("hi");
    $.each(images, function (parentIndex, item) {
        // get parent div
        var parentDiv = $("#" + item.id);
        
        // load images and create a and img tag
        $.each(item.images, function (index, item) {
            var img = $("<a href='" + item + "' data-imagelightbox='" + parentIndex + "'><img class='owl-lazy' data-src='" + item + "'></a>")
            img.appendTo(parentDiv);
        })

        // init owl carousel
        parentDiv.owlCarousel({
            items:1,
            lazyLoad:true,
            loop:true
        })
    
        // init lightbox
        var selector = "a[data-imagelightbox='" + parentIndex + "']";
        $(selector).imageLightbox();
    })
})  