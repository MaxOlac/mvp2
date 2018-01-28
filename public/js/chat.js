$('document').ready(function(){
  console.log("ready");

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
          $("ul").empty();
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
      // resetChat();

      //-- Print Messages
      insertChat("me", "Hola!", 500);  
      insertChat("me", "Mi nombre es Poggo", 1500);  
      setTimeout(
              function(){                        
                  $(".poggo").remove();
              }, 3000);
      // insertChat("you", "Hi, Pablo", 1500);
      // insertChat("me", "What would you like to talk about today?", 3500);
      // insertChat("you", "Tell me a joke",7000);
      // insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
      // insertChat("you", "LOL", 12000);
      var watson = require('watson-developer-cloud');

      var conversation = watson.conversation({
        username: '{6bd5183c-67b8-4a18-860b-3762086a6037}',
        password: '{gSdXuT4sIYfY}',
        version: 'v1',
        version_date: '2017-05-26'
      });

      conversation.message({
        workspace_id: '837ea30b-9ed6-4ab0-b0c8-2c09a662bbe4',
        input: {'text': 'Hello'}
      },  function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
      });
});
