

const tokabcd = document.querySelector('#token');
const tokenabcd = tokabcd.innerHTML.trim();

let dat;

window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(tokenabcd); },
        volume: 1
    });
    console.log('abcd');


    // Ready
    player.addListener('ready', (data) => {
        console.log('abcd')
      console.log('Ready with Device ID', data);
      dat = data.device_id;
      console.log(dat);
      play(data.device_id);
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

    player.connect();
  }



  function play(uri) {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/play?device_id=" + dat,
      type: "PUT",
      data: `{"uris": ["${uri}"]}`,
      beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + tokenabcd); },
      success: function (data) {
        console.log(data)
      }
    });
  }