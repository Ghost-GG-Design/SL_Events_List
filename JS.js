// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
  // obj will be empty for event list
  // this will fire only once when the widget loads
  //console.log("onLoad", obj);
  //console.log("HTMLCollection", document.all);
  //console.log("HTMLCollectionLength", document.all.length);
  // for(var i = 0; i < document.all.length; i++){
  //   if(document.all[i].className == "twitch-bit"){   
  //       console.log("Class:", document.all[i].className)  
  //       var bits = document.all[i].innerText.split(" ")[0];  
  //       console.log("Bits:",bits);
  //       if(bits < 100){
  //           $("div.background.twitch-bit").addClass("bit10");
  //       } else if(bits < 1000){
  //           $("div.background.twitch-bit").addClass("bit100");
  //       } else if(bits < 5000){
  //           $("div.background.twitch-bit").addClass("bit1000");
  //       } else if(bits < 10000){
  //           $("div.background.twitch-bit").addClass("bit5000");
  //       } else if(bits >= 10000){
  //           $("div.background.twitch-bit").addClass("bit10000");
  //       }
  //     }
  //   };
  });

document.addEventListener('onEventReceived', function(obj) {
      // obj will contain information about the event
  console.log("onEventReceived", obj);
  
  var bits = obj.detail.tag.split(" ")[0];
  console.log("Bits:",bits);
  if(bits < 100){
 	   	$("li div").first().addClass("bit10");
  } else if(bits < 1000){
      $("li div").first().addClass("bit100");
  } else if(bits < 5000){
      $("li div").first().addClass("bit1000");
  } else if(bits < 10000){
      $("li div").first().addClass("bit5000");
  } else if(bits >= 10000){
      $("li div").first().addClass("bit10000");
  }

});
