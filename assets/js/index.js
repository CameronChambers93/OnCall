window.addEventListener('scroll', function(event) {
    if (window.pageYOffset < 20) {
        document.getElementById('header').style.removeProperty('background-color');
        document.getElementById('header').style.removeProperty('box-shadow');
    }
    else {
        document.getElementById('header').style['background-color'] = '#28398a';
        document.getElementById('header').style['box-shadow'] = '0 2px 10px rgba(0,0,0,.25)';
    }


});