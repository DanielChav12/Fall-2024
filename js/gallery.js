// A $( document ).ready() block.
$( document ).ready(function() {
   // console.log( "ready!" );


   $("#galleryIMED1316").nanogallery2({

    thumbnailHeight:  "auto",
    thumbnailWidth:   "450",
    thumbnailBorderVertical: "0",
    thumbnailBorderHorizontal: "0",
    thumnailLabel: {
        postition: "overImageOnBottom",
        display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|LabelAppear75",
    thumbnailGutterWidth: 20,
    thumbnailHeight: 20,
    thumbnailAlignment: "center",
    thumbnailOpenImage: true


  });




});