

var test =  $.ajax({
        type : 'get',
        url : "http://localhost:8088/data-trans/area",
       // contentType: "application/json; charset=utf-8",
       // data: '{"machineIP":"192.168.6.120"}',
        dataType : 'json',
        success : function(data){
           
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        },
        async :false,  
        
    });
   
   console.log( JSON.parse(test.responseText));
   
   
   var test2 =  $.ajax({
       type : 'get',
       url : "http://localhost:8088/data-trans/assets",
      // contentType: "application/json; charset=utf-8",
      // data: '{"machineIP":"192.168.6.120"}',
       dataType : 'json',
       success : function(data2){
          
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) {
           console.log(errorThrown);
       },
       async :false,  
   });
  
  console.log(test2.responseJSON);
  
  
  var test3 =  $.ajax({
      type : 'get',
      url : "http://localhost:8088/data-trans/assets",
     // contentType: "application/json; charset=utf-8",
     // data: '{"machineIP":"192.168.6.120"}',
      dataType : 'json',
      success : function(data2){
         
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log(errorThrown);
      },
      async :false,  
  });
 
 console.log(test2.responseJSON);