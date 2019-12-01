/* Creating a sticky header
   Reference - https://stackoverflow.com/questions/7402635/how-can-i-make-content-appear-beneath-a-fixed-div-element */
$(document).ready(function () {
    var contentPlacement = $('#header').position().top + $('#header').height();
    $('#content').css('margin-top', contentPlacement);
});


/* CKEditor */
CKEDITOR.replace('editor2', {
    // Upload images to a CKFinder connector (note that the response type is set to JSON).
    uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

    // Configure your file manager integration. This example uses CKFinder 3 for PHP.
    filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html',
    filebrowserImageBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
    filebrowserUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

    // The following options are not necessary and are used here for presentation purposes only.
    // They configure the Styles drop-down list and widgets to use classes.

    stylesSet: [{
            name: 'Narrow image',
            type: 'widget',
            widget: 'image',
            attributes: {
                'class': 'image-narrow'
            }
        },
        {
            name: 'Wide image',
            type: 'widget',
            widget: 'image',
            attributes: {
                'class': 'image-wide'
            }
        }
    ],

    // Load the default contents.css file plus customizations for this sample.
    contentsCss: [
        'http://cdn.ckeditor.com/4.13.0/full-all/contents.css',
        'assets/css/widgetstyles.css'
    ],

    // Configure the Enhanced Image plugin to use classes instead of styles and to disable the
    // resizer (because image size is controlled by widget styles or the image takes maximum
    // 100% of the editor width).
    image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
    image2_disableResizer: true
});

