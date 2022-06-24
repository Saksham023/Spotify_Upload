$('#search_btn').on('click', function(){
  // console.log('abcd');
  // console.log($('#search').val());
  let val = $('#search').val();
  console.log(val);

  $.ajax({
    url:`/search/${token}/${val}`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    success: function(response) {
        console.log(response);
    }
});
})

// $('.searchbar button').on('click',()=>{
//   console.log('button pressed');
//   let val = $('.searchbar input').val();
//   $.ajax({
//       url:`/search/${token}/${val}`,
//       headers: {
//         'Authorization': 'Bearer ' + token,
//         'Content-Type': 'application/json'
//       },
  
//       success: function(response) {
//           console.log('response recieved');
//            console.log(response);
          
//       }
//   });
// })