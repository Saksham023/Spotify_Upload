// $(".searchbar input").keypress(function(e){
//   if(e.key === 'Enter'){
//     console.log(e.key);
//   }
// })






$(".searchbar input").keypress(function(e){
  if(e.key === 'Enter'){


  console.log('button pressed');
  let val = $('.searchbar input').val();
 // document.body.scrollTop = document.documentElement.scrollTop = 0;

 if(val==""){
         $('#searchPage').css('display','none');
         $('#grid').css('display','grid');
         $('#artists').css('display','flex');
         $('#greeting').css('display','flex');
         $('#top_by').css('display','flex');
         $('#like').css('display','flex');
         $('#featured').css('display','flex');
         $('.hideforsearch').css('display','block');
         $('#searchPage #artistss').empty();
         $('#searchPage #Albums').empty();
         $('#searchPage #playlists').empty();


 }
 else{

 
  $.ajax({
      url:`/search/${token}/${val}`,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
  
      success: function(response) {
          console.log('response recieved');
           console.log(response);

         $('#searchPage').css('display','block');
         $('#grid').css('display','none');
         $('#artists').css('display','none');
         $('#greeting').css('display','none');
         $('#top_by').css('display','none');
         $('#like').css('display','none');
         $('#featured').css('display','none');
         $('.hideforsearch').css('display','none');



           //for artists
           let i = 1;
          let artistbar =$('#searchPage #artistss');
        //  let iconimg = $('#SearchPage #artistss #acardicon1').getAttribute('src');
           for(let art of response.artist){
              if(art.artist_image!=null){
                  let artcard = document.createElement('div');
              artcard.setAttribute('class','acard');
              artcard.setAttribute('id',`acard${i}`);
              
              let artimg = document.createElement('img');
              artimg.setAttribute('src',`${art.artist_image.url}`);
              artimg.setAttribute('class','acard-img-top');

            //  let articon = document.createElement('img');
             // articon.setAttribute('url',`${iconimg}`);//might have some prob;
             // articon.setAttribute('class','acardicon'); 
             // articon.setAttribute('id',`acardicon${i}`); 

              let artcardbody = document.createElement('div');
              artcardbody.setAttribute('class','acard-body');

              let artcardbodyh4 = document.createElement('h4');
              artcardbodyh4.setAttribute('class','acardHeading');
              artcardbodyh4.textContent = `${art.artist_name}`;

              let artcardbodyp = document.createElement('p');
              artcardbodyp.setAttribute('class','acard-text');
              artcardbodyp.textContent = 'Artist';

              artcardbody.appendChild(artcardbodyh4);
              artcardbody.appendChild(artcardbodyp);

              artcard.appendChild(artimg);
           //   artcard.appendChild(articon);
              artcard.appendChild(artcardbody);

              artistbar.append(artcard);


              i++;
              }
              
           }

           // For the searched album part
            i = 1;
           let albumbar =$('#searchPage #Albums');
         //  let iconimg = $('#SearchPage #artistss #acardicon1').getAttribute('src');
            for(let alb of response.album){
               if(alb.album_image!=null){
               
               let albcard = document.createElement('div');
               albcard.setAttribute('class','acard');
               albcard.setAttribute('id',`acard${i}`);
               
               let albimg = document.createElement('img');
               albimg.setAttribute('src',`${alb.album_image.url}`);
               albimg.setAttribute('class','acard-img-top');

             //  let articon = document.createElement('img');
              // articon.setAttribute('url',`${iconimg}`);//might have some prob;
              // articon.setAttribute('class','acardicon'); 
              // articon.setAttribute('id',`acardicon${i}`); 

               let albcardbody = document.createElement('div');
               albcardbody.setAttribute('class','acard-body');

               let albcardbodyh4 = document.createElement('h4');
               albcardbodyh4.setAttribute('class','acardHeading');
               albcardbodyh4.textContent = `${alb.album_name}`;

               let albcardbodyp = document.createElement('p');
               albcardbodyp.setAttribute('class','acard-text');
               albcardbodyp.textContent = `${alb.albums_artists}`;

               albcardbody.appendChild(albcardbodyh4);
               albcardbody.appendChild(albcardbodyp);

               albcard.appendChild(albimg);
            //   artcard.appendChild(articon);
               albcard.appendChild(albcardbody);

               albumbar.append(albcard);


               i++;
               }
               
            }

            // For the searched album part
            i = 1;
           let playlistbar =$('#searchPage #playlists');
         //  let iconimg = $('#SearchPage #artistss #acardicon1').getAttribute('src');
            for(let alb of response.playlist){
               if(alb.playlist_image!=null){
               console.log('inside playlist')
               let albcard = document.createElement('div');
               albcard.setAttribute('class','acard');
               albcard.setAttribute('id',`acard${i}`);
               
               let albimg = document.createElement('img');
               albimg.setAttribute('src',`${alb.playlist_image.url}`);
               albimg.setAttribute('class','acard-img-top');

             //  let articon = document.createElement('img');
              // articon.setAttribute('url',`${iconimg}`);//might have some prob;
              // articon.setAttribute('class','acardicon'); 
              // articon.setAttribute('id',`acardicon${i}`); 

               let albcardbody = document.createElement('div');
               albcardbody.setAttribute('class','acard-body');

               let albcardbodyh4 = document.createElement('h4');
               albcardbodyh4.setAttribute('class','acardHeading');
               albcardbodyh4.textContent = `${alb.playlist_name}`;

               let albcardbodyp = document.createElement('p');
               albcardbodyp.setAttribute('class','acard-text');
               albcardbodyp.textContent = `Playlist`;

               albcardbody.appendChild(albcardbodyh4);
               albcardbody.appendChild(albcardbodyp);

               albcard.appendChild(albimg);
            //   artcard.appendChild(articon);
               albcard.appendChild(albcardbody);

               playlistbar.append(albcard);


               i++;
               }
               
            }

            i = 1;
            let trackk =$('#searchPage #tracks #list');
          //  let iconimg = $('#SearchPage #artistss #acardicon1').getAttribute('src');
             for(let trk of response.tracks){

              let listitem = document.createElement('div');
              listitem.style.marginTop = "20px";

              let nu = document.createElement('div');
              let tit = document.createElement('div');
              let alb = document.createElement('div');
              let dur = document.createElement('div');

              nu.setAttribute('id','nu');
              nu.textContent = `${i}`;
              tit.setAttribute('id','tit_list');
              tit.textContent = `${trk.track_name}`;
              alb.setAttribute('id','alb');
              alb.textContent = `${trk.track_album}`;
              dur.setAttribute('id','dur');
              dur.textContent = `${trk.duration}`;

              listitem.appendChild(nu);
              listitem.appendChild(tit);
              listitem.appendChild(alb);
              listitem.appendChild(dur);

              trackk.appendChild(listitem);
              
               i++;
             }
/*
            setTimeout(function(){
              
              let lef = im_wid + 20;
              $('#searchPage').css('left', lef);
              $('#searchPage').css('visibility', 'visible');
          }, 5);
      */    
          
      }
  });

}
/*
  $('#searchPage').animate({ left: '0px' }, 600, 'linear', function(){
  });
  $('#homepage').css('display', 'none');
  $('#album_page').css('display', 'none');
  $('#playlist_page').css('display', 'block');
*/
  }   
})