var time = 5, endTime = 1;
$(window).scroll(function(){
    $('.number').each(function(){
      var cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 750) {
            if (endTime < 2){
            $('div').each(function(){
                    var
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                    if (i <= num) {
                    that.html(i);
                    } else {
                    endTime = endTime + 2;
                    clearInterval(int);
                    }i++;
                }, step);
                });
}
}
        });
});
