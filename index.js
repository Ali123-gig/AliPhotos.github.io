AOS.init({
    duration: 2000,
}
);


jQuery(document).ready(function(e) {
    e('.count').counterUp({
        delay: 50,
        time: 3000
    });
});