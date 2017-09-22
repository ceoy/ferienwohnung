var tbl;
$(function () {
    $.each(images, function (parentIndex, item) {
        // get parent div
        var imageDiv = $("#" + item.id);
        var tableDiv = $("#" + item.id + "LocationInfo");
        
        // load images and create a and img tag
        $.each(item.images, function (index, item) {
            var img = $("<a href='" + item + "' data-imagelightbox='" + imageDiv + "'><img class='owl-lazy' data-src='" + item + "'></a>")
            img.appendTo(imageDiv);
        })

        // init owl carousel
        imageDiv.owlCarousel({
            items:1,
            lazyLoad:true,
            loop:true
        })
    
        // init lightbox
        var selector = "a[data-imagelightbox='" + parentIndex + "']";
        $(selector).imageLightbox();

        // also create table 
        var tableString = createTableString(item.name, item.price, item.location, item.url);
        tableDiv.append(tableString);
        console.log(tableString);
    })
})  

/**
 * lul
 * @param {String} name Name of the House
 * @param {String} price Price of the House
 * @param {String} location Location of the House
 * @param {String} ur Url of the House
 */
function createTableString(name, price, location, url) {
    return "<table class='table table-striped'><tr><td>Name</td><td>" +
    name +
    "</td></tr><tr><td>Preis</td><td>" +
    price +
    "</td></tr><tr><td>Lage</td><td>" +
    location + 
    "</td></tr><tr><td>Url</td><td><a target='_blank' href='" + 
    url + 
    "'>Hier Clicken</a></td></tr></table>"
}