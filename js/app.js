

$(function(){

            var Trivialist= $('.trivia-list');
            var get= $('#get-trivia');
            var loading= $('#loading');
            var count=0;



    get.on('click', async function(e){
          count++;
          loading.remove();

           var getRandomTrivia= Trivia_SERVICE.gettrivia();
            
            var TriviaResult;
            var TriviaNumber;
            var TriviaSec;
          
 

    getRandomTrivia.then(async function(res){
          e.preventDefault();
        
          await res;
          console.log(res);
          TriviaResult= res.text;
          console.log(TriviaResult);
          TriviaNumber= res.number;
          console.log(TriviaNumber);

        
          $.ajax({

              type:'get',
              url: 'http://numbersapi.com/'+TriviaNumber+'/year'
 


          }).then(function(res){

              TriviaSec= res;
              var li= ` <div id="container">
                    <h3>Trivia ${count}</h3>
                    <h4 style="padding-top:20px;"> ${TriviaResult}</h4>
                    <h4 id="second" style="color:grey; padding-left:50px;padding-top:40px;"> ${TriviaSec}</h4> 
                 </div>
                 `;

        Trivialist.append(li);


          })


    })




})


    })// end











