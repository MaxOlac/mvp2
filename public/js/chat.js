$('document').ready(function(){
  console.log("ready");
  var time=1000;
  var turno=1;
  var res = [0,0,0,0,0];
  $('input:text:first').focus();
      var me = {};
      // me.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";
      // me.avatar = "img/poggo1_hello.png";

      var you = {};
      // you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

      function formatAMPM(date) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
      }            

      //-- No use time. It is a javaScript effect.
      function insertChat(who, text, time = 0){
          var control = "";
          var date = formatAMPM(new Date());
          
          if (who == "me"){
              
              control = '<li style="width:100%">' +
                              '<div class="msj macro">' +
                              '<div class="avatar"><img class="img-circle" style="width:100%;" src="img/poggo1_hello.png" /></div>' +
                                  '<div class="chat chat-l">' +
                                      '<p>'+ text +'</p>' +
                                      '<p><small>'+date+'</small></p>' +
                                  '</div>' +
                              '</div>' +
                          '</li>';                    
          }else{
              control = '<li style="width:100%;">' +
                              '<div class="msj-rta macro">' +
                                  '<div class="chat chat-r">' +
                                      '<p>'+text+'</p>' +
                                      '<p><small>'+date+'</small></p>' +
                                  '</div>' +
                              '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="img/user.png" /></div>' +                                
                        '</li>';
          }
          setTimeout(
              function(){                        
                  $(".chat_ul").append(control);

              }, time);
          
      }

      function resetChat(){
          $("ul_chat").empty();
      }

      function more_time(){
          time+=1500;
      }
      
      function start(){
        
        insertChat("me", "¡Hola!", time);
        more_time();
        insertChat("me", "Soy Poggo, seré tu guia en este divertido camino.", time);
        more_time();
        insertChat("me", "¿Si tuvieras $100,000 qué comprarías?", time);
        more_time();
        game_show(time);
             
      }

      function game_show(time){  
        setTimeout(
              function(){                        
                  $("#game").show(); 
              }, time);        
      }

      function game_1(id){  
        if (id == "1") {  
          insertChat("you", "Un carro");
          res[0]=1;
        } 
        if (id == "2") {
          insertChat("you", "Hago los XV's de mi hija");
          res[0]=2;
        } 
        if (id == "3") {
          insertChat("you", "Los ahorro");
          res[0]=3;
        } 
        if (id == "4") {
          insertChat("you", "Un seguro para la educación de mis hijos");
          res[0]=4;
        }
         insertChat("me", "¿Qué harías con $5,000 pesos?",1500);
         turno=2;
         change_game();          
      }

      $('.juego').on("click",function(e) {
        var id = $(this).attr("id");
        console.log(id);
        if (turno == 1) {
          game_1(id);
        }
      })

      function change_game(){
        setTimeout(
          function(){                                        
            if (turno == 2) {
              $("#1").attr("src","img/juego/ahorro.jpeg");
              $('#p_4').text("Invertir en bonos");
              $('#p_2').text("Pagar tu tarjeta de credito");
              $('#p_1').text("Comprar tu despensa mensual");
              $('#p_3').text("Lo metes al cochinito");

            } 
            if (turno == 3) {
              insertChat("you", "Los ahorro");
            } 
            if (turno == 4) {
              insertChat("you", "Un seguro para la educación de mis hijos");
            }
        }, 3000);
      }
  
      

      $('.mychat').on("keyup", function(e){
          if (e.which == 13){
              var text = $(this).val();
              if (text !== ""){
                  insertChat("you", text);              
                  $(this).val('');
              }
          }
      });

      //-- Clear Chat
      resetChat();

      //-- Print Messages
      $("#game").hide();
      start();
      
      


      
});
