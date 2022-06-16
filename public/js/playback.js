

const tokabcd = document.querySelector('#token');
const tokenabcd = tokabcd.innerHTML.trim();

let footer_visi = false;

let dat;

window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(tokenabcd); },
        volume: 1
    });


    // Ready
    player.addListener('ready', (data) => {
      console.log('Ready with Device ID', data);
      dat = data.device_id;
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
      console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
      console.error(message);
    });

      

    // document.getElementById('togglePlay').onclick = function () {
    //     console.log('reewdsdc');
    //     play(dat);
    // };
    $('.topicon').on('click', function(){
      let iidx = parseInt($(this).attr('id'));
      play(uriarr[iidx]);
    })

    $('#play_btn').on('click', function(){
      if($(this).attr('class').includes('play-exit')){
        player.togglePlay().then(() => {
          console.log('Toggled playback!');
        });
        $('#play_btn').removeClass('play-exit');
        $('#pause_btn').removeClass('pause-enter');
        $('#pause_btn').addClass('pause-exit');
        $('#play_btn').addClass('play-enter');
      }
      else{
        player.togglePlay().then(() => {
          console.log('Toggled playback!');
        $('#play_btn').addClass('play-exit');
        $('#pause_btn').addClass('pause-enter');
        $('#pause_btn').removeClass('pause-exit');
        $('#play_btn').removeClass('play-enter');
        });
      }
    })

    player.connect();
  }

  function play(uri) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/play?device_id=" + dat,
        type: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: `{"uris": ["${uri}"]}`,
        success: function(response) {
            // console.log(response);
            let idd = (uri.split(':')[2]);
            // setTimeout(fu, 3500);
            $('#play_btn').addClass('play-exit');
            $('#pause_btn').addClass('pause-enter');
            $('#pause_btn').removeClass('pause-exit');
            $('#play_btn').removeClass('play-enter');

            $('.footer').addClass('foot_en');

            $.ajax({
              url: "https://api.spotify.com/v1/tracks/" + idd,
              type: "GET",
              headers: {
                  'Authorization': 'Bearer ' + token,
                  'Content-Type': 'application/json'
              },
              success: function(response) {
                  console.log(response.album.images[0].url);
                  $('#curr_song_img').attr('src', response.album.images[0].url);
                  // console.log('chal gaya')
              }
        });
            // fu();
        }
  });
  }

  function pause() {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/pause?device_id=" + dat,
        type: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        success: function(response) {
            // console.log(response);
            // console.log('chal gaya')
        }
  });
  }


  function fu(){
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/currently-playing",
        // url: "https://api.spotify.com/v1/me/player",
        // type: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        success: function(response) {

            console.log(response);
        }
  });
}