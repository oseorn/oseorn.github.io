document.addEventListener("DOMContentLoaded", function(){
    //window.scrollTo(0, document.getElementById('console').offsetHeight);
});


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 13) {
        window.scrollTo(0, 0);
    }
};
