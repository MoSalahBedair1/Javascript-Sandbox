/*
    Method 1
*/

if (window.location.hash) {

    if (window.location.hash.indexOf('osama') === 1 ) { // 0 === #

    console.log('Good Osama Hash Is Found');

    }

} else {
    console.log('Bad There is No Hash In Link');
}


/*
    Method 2
*/

if (window.location.hash) {

    var hash = window.location.hash.substring(1);

    if (hash === 'osama' ) {

    console.log('Good Osama Hash Is Found');

    }

} else {
    console.log('Bad There is No Hash In Link');
}
