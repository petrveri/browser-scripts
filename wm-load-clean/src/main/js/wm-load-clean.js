/**
 * This script iterates clean-up of the document and down scrolling of the window
 *
 * @version 1.0
 */
function cleanDocument() {
    var mainColEls = document.getElementsByClassName('section-col-main');
    for (var i = 0; i < mainColEls.length; i++) {
        if (mainColEls[i]) {
            mainColEls[i].style.width = "100%";
        }
    }
    ['section-col-right', 'story-section-inStory-inline', 'share-container', 'ad-sticky', 'inline-video-wrapper-featured']
    .forEach(function(className) {
        var rightColEls = document.getElementsByClassName(className);
        for (var i = rightColEls.length - 1; i > -1; i--) {
            if (rightColEls[i]) {
                rightColEls[i].parentNode.removeChild(rightColEls[i]);
            }
        }
    });
}
// you can calculate execution time: (count + 1) * 3000 / 1000 seconds
var count = 300;
function cleanDocumentAndScrollWindow() {
    cleanDocument();
    window.scrollTo(0, document.body.scrollHeight);
    if (count--) {
        setTimeout(cleanDocumentAndScrollWindow, 3000);
    }
}
cleanDocumentAndScrollWindow();
