//FORM:JS
var selectField = document.getElementById('select01');
selectField.addEventListener('touchstart' /*'mousedown'*/, function(e) {
    e.stopPropagation();
}, false);