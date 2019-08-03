var Trivia_SERVICE = {

    gettrivia : function(){
        return $.ajax({

            type: 'get',
            url:  'http://numbersapi.com/random/year?json'

        });
    },
}