
$.ajax({
  url: 'https://api.spotify.com/v1/me',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },

  success: function (response) {
    // console.log(response.id);
    let user_id = response.id;

    $.ajax({
      url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists?limit=30',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },

      success: function (response) {
        for (let obj of response.items) {
          const li = document.createElement('li');
          li.innerText = obj.name;

          li.addEventListener('click', function () {

            $.ajax({
              url: `/playlist/${obj.uri}/${token}`,
              headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
              success: function (response) {
                console.log(response);
                const list_cont = document.querySelector('#album_page #list_cont');
                list_cont.innerHTML = '';

                const code = response.color.red + ',' + response.color.green + ',' + response.color.blue;
                $('#album_page #background').css('background-image', `linear-gradient(rgba(${code}), 50%, #121212)`);

                document.body.scrollTop = document.documentElement.scrollTop = 0;
                $('#album_page #topimg').attr('src', response.img);
                $('#album_page #album_head').text(response.name.split('(')[0]);
                $('#album_page #album_det').css('display', 'none');
                $('#album_page #playlist_des').css('display', 'inline-block');
                // $('#album_page #alb').css('display', 'flex');
                $('#album_page #playlist_des').text(response.des);

                $('#album_page #album').text('PLAYLIST');

                // $('#tit').css('width', '60%');

                for (let i = 0; i < response.tracks.length; i++) {
                  const list_con = document.createElement('div');
                  list_con.setAttribute('id', 'list_con');

                  const nu = document.createElement('div');
                  nu.setAttribute('id', 'nu');

                  const tit_list = document.createElement('div');
                  tit_list.setAttribute('id', 'tit_list1');

                  const heading = document.createElement('h4');
                  heading.setAttribute('id', 'list_song_head');

                  const list_singer = document.createElement('p');
                  list_singer.setAttribute('id', 'list_singer');

                  const alb = document.createElement('div');
                  alb.setAttribute('id', 'alb');
                  const p_alb = document.createElement('p');
                  p_alb.setAttribute('id', 'p_alb');

                  const dur = document.createElement('div');
                  dur.setAttribute('id', 'dur');

                  heading.innerText = response.tracks[i].track_name;
                  list_singer.innerText = response.tracks[i].track_artist;
                  tit_list.appendChild(heading);
                  tit_list.appendChild(list_singer);

                  p_alb.innerText = response.tracks[i].track_album;
                  alb.appendChild(p_alb);

                  nu.innerText = i + 1;
                  dur.innerText = response.tracks[i].duration;

                  list_con.appendChild(nu);
                  list_con.appendChild(tit_list);
                  list_con.appendChild(alb);
                  list_con.appendChild(dur);

                  const play_btn = document.createElement('img');
                  play_btn.setAttribute('src', '/play1.png');
                  play_btn.setAttribute('id', 'small_play');

                  nu.addEventListener('click', function () {
                    play(response.tracks[i].uri);
                  });
                  list_con.addEventListener('mouseenter', function () {
                    list_con.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    list_con.style.cursor = "pointer";
                    nu.innerText = '';
                    nu.appendChild(play_btn);
                  });
                  list_con.addEventListener('mouseleave', function () {
                    list_con.style.backgroundColor = '';
                    play_btn.remove();
                    nu.innerText = i + 1;
                  });

                  list_cont.appendChild(list_con);
                }

                setTimeout(function () {
                  im_wid = $('#album_page #topimg').width();
                  // console.log('xyz');
                  // console.log(im_wid);
                  let lef = im_wid + 20;
                  $('#album_page #album_info').css('left', lef);
                  $('#album_page #album_info').css('visibility', 'visible');
                }, 100);

                myInterval = setInterval(function () {
                  im_wid = $('#album_page #topimg').width();
                  // console.log('abcd');
                  // console.log(im_wid);
                  let lef = im_wid + 20;
                  $('#album_page #album_info').css('left', lef);
                  $('#album_page #album_info').css('visibility', 'visible');
                }, 200);

              }
            });

            $('#album_page').animate({ left: '0px' }, 600, 'linear', function () {
            });
            if ($('#homepage').css('display',) === 'block') {
              prev_page.push(document.querySelector('#homepage'));
            }
            if ($('#playlist_page').css('display',) === 'block') {
              prev_page.push(document.querySelector('#playlist_page'));
            }
            if ($('#lib_page').css('display',) === 'block') {
              prev_page.push(document.querySelector('#lib_page'));
            }

            $('#homepage').css('display', 'none');
            $('#playlist_page').css('display', 'none');
            $('#lib_page').css('display', 'none');
            $('#album_page').css('display', 'block');

            // $('#prog_bar').css('width', '0');
          })
          const ul = document.querySelector('#side ul');
          ul.appendChild(li);
        }

      }
    });
  }
});








$('#like_btn').on('click', function () {

  $.ajax({
    url: `/liked/${token}`,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    success: function (response) {
      console.log(response);
      const list_cont = document.querySelector('#album_page #list_cont');
      list_cont.innerHTML = '';

      const code = response.color.red + ',' + response.color.green + ',' + response.color.blue;
      $('#album_page #background').css('background-image', `linear-gradient(rgba(${code}), 50%, #121212)`);

      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $('#album_page #topimg').attr('src', '/liked_big.png');
      $('#album_page #album_head').text('Liked Songs');
      $('#album_page #album_det').css('display', 'none');
      $('#album_page #playlist_des').css('display', 'none');
      // $('#album_page #alb').css('display', 'flex');
      // $('#album_page #playlist_des').text(response.des);

      $('#album_page #album').text('PLAYLIST');

      // $('#tit').css('width', '60%');

      for (let i = 0; i < response.tracks.length; i++) {
        const list_con = document.createElement('div');
        list_con.setAttribute('id', 'list_con');

        const nu = document.createElement('div');
        nu.setAttribute('id', 'nu');

        const tit_list = document.createElement('div');
        tit_list.setAttribute('id', 'tit_list1');

        const heading = document.createElement('h4');
        heading.setAttribute('id', 'list_song_head');

        const list_singer = document.createElement('p');
        list_singer.setAttribute('id', 'list_singer');

        const alb = document.createElement('div');
        alb.setAttribute('id', 'alb');
        const p_alb = document.createElement('p');
        p_alb.setAttribute('id', 'p_alb');

        const dur = document.createElement('div');
        dur.setAttribute('id', 'dur');

        heading.innerText = response.tracks[i].track_name;
        list_singer.innerText = response.tracks[i].track_artist;
        tit_list.appendChild(heading);
        tit_list.appendChild(list_singer);

        p_alb.innerText = response.tracks[i].track_album;
        alb.appendChild(p_alb);

        nu.innerText = i + 1;
        dur.innerText = response.tracks[i].duration;

        list_con.appendChild(nu);
        list_con.appendChild(tit_list);
        list_con.appendChild(alb);
        list_con.appendChild(dur);

        const play_btn = document.createElement('img');
        play_btn.setAttribute('src', '/play1.png');
        play_btn.setAttribute('id', 'small_play');

        nu.addEventListener('click', function () {
          play(response.tracks[i].uri);
        });
        list_con.addEventListener('mouseenter', function () {
          list_con.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          list_con.style.cursor = "pointer";
          nu.innerText = '';
          nu.appendChild(play_btn);
        });
        list_con.addEventListener('mouseleave', function () {
          list_con.style.backgroundColor = '';
          play_btn.remove();
          nu.innerText = i + 1;
        });

        list_cont.appendChild(list_con);
      }

      setTimeout(function () {
        im_wid = $('#album_page #topimg').width();
        // console.log('xyz');
        // console.log(im_wid);
        let lef = im_wid + 20;
        $('#album_page #album_info').css('left', lef);
        $('#album_page #album_info').css('visibility', 'visible');
      }, 100);

      myInterval = setInterval(function () {
        im_wid = $('#album_page #topimg').width();
        // console.log('abcd');
        // console.log(im_wid);
        let lef = im_wid + 20;
        $('#album_page #album_info').css('left', lef);
        $('#album_page #album_info').css('visibility', 'visible');
      }, 200);

    }
  });

  $('#album_page').animate({ left: '0px' }, 600, 'linear', function () {
  });
  if ($('#homepage').css('display',) === 'block') {
    prev_page.push(document.querySelector('#homepage'));
  }
  if ($('#playlist_page').css('display',) === 'block') {
    prev_page.push(document.querySelector('#playlist_page'));
  }
  if ($('#lib_page').css('display',) === 'block') {
    prev_page.push(document.querySelector('#lib_page'));
  }

  $('#homepage').css('display', 'none');
  $('#playlist_page').css('display', 'none');
  $('#lib_page').css('display', 'none');
  $('#album_page').css('display', 'block');

  // $('#prog_bar').css('width', '0');
})