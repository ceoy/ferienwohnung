$(function () {
    $.each(images, function (parentIndex, item) {
        // get parent div
        var imageDiv = $("#" + item.id);
        var tableDiv = $("#" + item.id + "LocationInfo");

        // load images and create a and img tag
        $.each(item.images, function (index, item) {
            var img = $("<a href='" + item + "' data-imagelightbox='" + parentIndex + "'><img class='owl-lazy' data-src='" + item + "'></a>")
            img.appendTo(imageDiv);
        })

        // init owl carousel
        imageDiv.owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            autoHeight:true
        })

        // init lightbox
        var selector = "a[data-imagelightbox='" + parentIndex + "']";
        $(selector).imageLightbox({
            onStart: function () { overlayOn(); },
            onEnd: function () { overlayOff(); }
        });

        // also create table
        var tableString = createTableString(parentIndex + 1, item.name, item.price, item.location, item.url);
        tableDiv.append(tableString);
    })
})

/**
 * lul
 * @param {Integer} id Id of the House
 * @param {String} name Name of the House
 * @param {String} price Price of the House
 * @param {String} location Location of the House
 * @param {String} ur Url of the House
 */
function createTableString(id, name, price, location, url) {
    return "<table class='table table-striped'><tr><td>Villa Nr.</td><td>" +
        id +
        "</td></tr><tr><td>Name</td><td>" +
        name +
        "</td></tr><tr><td>Preis</td><td>" +
        price +
        "</td></tr><tr><td>Lage</td><td>" +
        location +
        "</td></tr><tr><td>Link</td><td><a target='_blank' href='" +
        url +
        "'>Hier Klicken</a></td></tr></table>"
}

function overlayOn() {
    $('<div id="imagelightbox-overlay"></div>').appendTo('body');
}

function overlayOff() {
    $('#imagelightbox-overlay').remove();
}