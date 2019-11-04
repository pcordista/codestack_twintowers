var openPhotoSwipe = function() {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };
  
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    var galleryElements = document.querySelectorAll('.'+ this.getAttribute('id'))[0];
    items = parseThumbnailElements(galleryElements);

    // define options (if needed)
    var options = {
        index: 0, // start at first slide
        // Gallery options
    maxSpreadZoom: 1,
    getDoubleTapZoom: function (isMouseClick, item) {
        return item.initialZoomLevel;
    },
    // UI options
    zoomEl: false

    };

    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('gallery-1').onclick = openPhotoSwipe;

  document.getElementById('gallery-2').onclick = openPhotoSwipe;
  document.getElementById('gallery-3').onclick = openPhotoSwipe;
  document.getElementById('gallery-4').onclick = openPhotoSwipe;
  document.getElementById('gallery-5').onclick = openPhotoSwipe;
  document.getElementById('gallery-6').onclick = openPhotoSwipe;
  document.getElementById('gallery-7').onclick = openPhotoSwipe;
  document.getElementById('gallery-8').onclick = openPhotoSwipe;
  document.getElementById('gallery-9').onclick = openPhotoSwipe;
  document.getElementById('gallery-10').onclick = openPhotoSwipe;
  document.getElementById('gallery-11').onclick = openPhotoSwipe;
  document.getElementById('gallery-12').onclick = openPhotoSwipe;
  document.getElementById('gallery-13').onclick = openPhotoSwipe;
});