document.querySelector('#openPop').addEventListener('click', function () {

    if (document.querySelector('div.threePop').style.display == 'block') {
        document.querySelector('div.threePop').style.display = 'none';
    } else {
        document.querySelector('div.threePop').style.display = 'block';
    }

})


document.querySelector('.threePop button').addEventListener('click', function () {
    document.querySelector('div.threePop').style.display = 'none';
})


