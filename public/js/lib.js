$("#lib_open_btn").on("click", function () {
  $.ajax({
    url: `/lib/${token}`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    success: function (response) {
      console.log(response);
      const lib_grid = document.querySelector("#lib_grid");
      lib_grid.innerHTML = "";
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      const sec = document.querySelector("#lib_grid");

      const lib_card = document.createElement("div");
      lib_card.setAttribute("class", "lib_card");
      lib_card.setAttribute("id", "liked_card");
      lib_card.style.maxWidth = "none";

      const liked_cardicon = document.createElement("img");
      liked_cardicon.setAttribute("class", "liked_cardicon");
      liked_cardicon.setAttribute("src", "/icon.png");
      liked_cardicon.addEventListener("mouseenter", function () {
        liked_cardicon.style.transform = "scale(1.08)";
      });
      liked_cardicon.addEventListener("mouseleave", function () {
        liked_cardicon.style.transform = "scale(1)";
      });

      const liked_list = document.createElement("div");
      liked_list.setAttribute("id", "liked_list");

      const para = document.createElement("p");
      para.setAttribute("id", "para");
      
      $.ajax({
        url: `/liked_list/${token}`,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        success: function (response) {
          console.log(response);
          for (let i = 0; i < response.arr.length; i++) {
            const para_active = document.createElement("span");
            para_active.innerText = response.arr[i].artist + " ";
            const para_muted = document.createElement("span");
            para_muted.innerText = response.arr[i].name + "  ·  ";
            para_muted.style.color = "rgb(192 183 194)";
            para.style.letterSpacing = "1.5px";
            // para.style.wordSpacing = '2px';
            para.appendChild(para_active);
            para.appendChild(para_muted);
          }
        },
      });
      
      // liked_list.appendChild(para);
      const liked_card_body = document.createElement("div");
      liked_card_body.setAttribute("class", "liked_card_body");

      const heading = document.createElement("h4");
      heading.setAttribute("class", "liked_cardHeading");
      heading.innerText = "Liked Songs";
      const lib_card_text = document.createElement("p");
      lib_card_text.setAttribute("class", "liked_card_text");
      lib_card_text.innerText = "50 liked songs";

      liked_card_body.appendChild(heading);
      liked_card_body.appendChild(lib_card_text);
      lib_card.addEventListener('click', function(){
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
      })
      
      liked_cardicon.addEventListener('click', function(){
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

            play(response.tracks[0].uri);
      
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
      })

      lib_card.appendChild(liked_cardicon);
      lib_card.appendChild(liked_list);
      lib_card.appendChild(liked_card_body);

      sec.appendChild(lib_card);

      for (let i = 0; i < response.playlists.length; i++) {
        const lib_card = document.createElement("div");
        lib_card.setAttribute("class", "lib_card");

        const lib_card_img_top = document.createElement("img");
        lib_card_img_top.setAttribute("class", "lib_card_img_top");
        lib_card_img_top.setAttribute("src", response.playlists[i].image);

        const lib_cardicon = document.createElement("img");
        lib_cardicon.setAttribute("class", "lib_cardicon");
        lib_cardicon.setAttribute("src", "/icon.png");
        lib_cardicon.addEventListener("mouseenter", function () {
          lib_cardicon.style.transform = "scale(1.08)";
        });
        lib_cardicon.addEventListener("mouseleave", function () {
          lib_cardicon.style.transform = "scale(1)";
        });

        const lib_card_body = document.createElement("div");
        lib_card_body.setAttribute("class", "lib_card_body");

        const heading = document.createElement("h4");
        heading.setAttribute("class", "lib_cardHeading");
        heading.innerText = response.playlists[i].name;
        const lib_card_text = document.createElement("p");
        lib_card_text.setAttribute("class", "lib_card_text");
        lib_card_text.innerText = response.playlists[i].des;

        lib_card_body.appendChild(heading);
        lib_card_body.appendChild(lib_card_text);

        lib_card.appendChild(lib_card_img_top);
        lib_card.appendChild(lib_cardicon);
        lib_card.appendChild(lib_card_body);

        lib_card.addEventListener("click", function () {
          document.body.scrollTop = document.documentElement.scrollTop = 0;

          $.ajax({
            url: `/playlist/${response.playlists[i].uri}/${token}`,
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            success: function (response) {
              // console.log(response);
              const list_cont = document.querySelector(
                "#album_page #list_cont"
              );
              list_cont.innerHTML = "";

              const code =
                response.color.red +
                "," +
                response.color.green +
                "," +
                response.color.blue;
              $("#album_page #background").css(
                "background-image",
                `linear-gradient(rgba(${code}), 50%, #121212)`
              );

              document.body.scrollTop = document.documentElement.scrollTop = 0;
              $("#album_page #topimg").attr("src", response.img);
              $("#album_page #album_head").text(response.name.split("(")[0]);
              $("#album_page #album_det").css("display", "none");
              $("#album_page #playlist_des").css("display", "inline-block");
              // $('#album_page #alb').css('display', 'flex');
              $("#album_page #playlist_des").text(response.des);

              $("#album_page #album").text("PLAYLIST");

              // $('#tit').css('width', '60%');

              for (let i = 0; i < response.tracks.length; i++) {
                const list_con = document.createElement("div");
                list_con.setAttribute("id", "list_con");

                const nu = document.createElement("div");
                nu.setAttribute("id", "nu");

                const tit_list = document.createElement("div");
                tit_list.setAttribute("id", "tit_list1");

                const heading = document.createElement("h4");
                heading.setAttribute("id", "list_song_head");

                const list_singer = document.createElement("p");
                list_singer.setAttribute("id", "list_singer");

                const alb = document.createElement("div");
                alb.setAttribute("id", "alb");
                const p_alb = document.createElement("p");
                p_alb.setAttribute("id", "p_alb");

                const dur = document.createElement("div");
                dur.setAttribute("id", "dur");

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

                const play_btn = document.createElement("img");
                play_btn.setAttribute("src", "/play1.png");
                play_btn.setAttribute("id", "small_play");

                nu.addEventListener("click", function () {
                  play(response.tracks[i].uri);
                });
                list_con.addEventListener("mouseenter", function () {
                  list_con.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  list_con.style.cursor = "pointer";
                  nu.innerText = "";
                  nu.appendChild(play_btn);
                });
                list_con.addEventListener("mouseleave", function () {
                  list_con.style.backgroundColor = "";
                  play_btn.remove();
                  nu.innerText = i + 1;
                });

                list_cont.appendChild(list_con);
              }

              setTimeout(function () {
                im_wid = $("#album_page #topimg").width();
                // console.log('xyz');
                // console.log(im_wid);
                let lef = im_wid + 20;
                $("#album_page #album_info").css("left", lef);
                $("#album_page #album_info").css("visibility", "visible");
              }, 100);

              myInterval = setInterval(function () {
                im_wid = $("#album_page #topimg").width();
                // console.log('abcd');
                // console.log(im_wid);
                let lef = im_wid + 20;
                $("#album_page #album_info").css("left", lef);
                $("#album_page #album_info").css("visibility", "visible");
              }, 200);
            },
          });

          $("#album_page").animate(
            { left: "0px" },
            600,
            "linear",
            function () {}
          );
          if ($("#homepage").css("display") === "block") {
            prev_page.push(document.querySelector("#homepage"));
          }
          if ($("#playlist_page").css("display") === "block") {
            prev_page.push(document.querySelector("#playlist_page"));
          }
          if ($("#lib_page").css("display") === "block") {
            prev_page.push(document.querySelector("#lib_page"));
          }

          $("#homepage").css("display", "none");
          $("#playlist_page").css("display", "none");
          $("#lib_page").css("display", "none");
          $("#album_page").css("display", "block");
        });


        lib_cardicon.addEventListener("click", function () {
          document.body.scrollTop = document.documentElement.scrollTop = 0;

          $.ajax({
            url: `/playlist/${response.playlists[i].uri}/${token}`,
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            success: function (response) {
              // console.log(response);
              const list_cont = document.querySelector(
                "#album_page #list_cont"
              );
              list_cont.innerHTML = "";

              const code =
                response.color.red +
                "," +
                response.color.green +
                "," +
                response.color.blue;
              $("#album_page #background").css(
                "background-image",
                `linear-gradient(rgba(${code}), 50%, #121212)`
              );

              document.body.scrollTop = document.documentElement.scrollTop = 0;
              $("#album_page #topimg").attr("src", response.img);
              $("#album_page #album_head").text(response.name.split("(")[0]);
              $("#album_page #album_det").css("display", "none");
              $("#album_page #playlist_des").css("display", "inline-block");
              // $('#album_page #alb').css('display', 'flex');
              $("#album_page #playlist_des").text(response.des);

              $("#album_page #album").text("PLAYLIST");

              // $('#tit').css('width', '60%');

              for (let i = 0; i < response.tracks.length; i++) {
                const list_con = document.createElement("div");
                list_con.setAttribute("id", "list_con");

                const nu = document.createElement("div");
                nu.setAttribute("id", "nu");

                const tit_list = document.createElement("div");
                tit_list.setAttribute("id", "tit_list1");

                const heading = document.createElement("h4");
                heading.setAttribute("id", "list_song_head");

                const list_singer = document.createElement("p");
                list_singer.setAttribute("id", "list_singer");

                const alb = document.createElement("div");
                alb.setAttribute("id", "alb");
                const p_alb = document.createElement("p");
                p_alb.setAttribute("id", "p_alb");

                const dur = document.createElement("div");
                dur.setAttribute("id", "dur");

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

                const play_btn = document.createElement("img");
                play_btn.setAttribute("src", "/play1.png");
                play_btn.setAttribute("id", "small_play");

                nu.addEventListener("click", function () {
                  play(response.tracks[i].uri);
                });
                list_con.addEventListener("mouseenter", function () {
                  list_con.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  list_con.style.cursor = "pointer";
                  nu.innerText = "";
                  nu.appendChild(play_btn);
                });
                list_con.addEventListener("mouseleave", function () {
                  list_con.style.backgroundColor = "";
                  play_btn.remove();
                  nu.innerText = i + 1;
                });

                list_cont.appendChild(list_con);
              }

              play(response.tracks[0].uri);

              setTimeout(function () {
                im_wid = $("#album_page #topimg").width();
                // console.log('xyz');
                // console.log(im_wid);
                let lef = im_wid + 20;
                $("#album_page #album_info").css("left", lef);
                $("#album_page #album_info").css("visibility", "visible");
              }, 100);

              myInterval = setInterval(function () {
                im_wid = $("#album_page #topimg").width();
                // console.log('abcd');
                // console.log(im_wid);
                let lef = im_wid + 20;
                $("#album_page #album_info").css("left", lef);
                $("#album_page #album_info").css("visibility", "visible");
              }, 200);
            },
          });

          $("#album_page").animate(
            { left: "0px" },
            600,
            "linear",
            function () {}
          );
          if ($("#homepage").css("display") === "block") {
            prev_page.push(document.querySelector("#homepage"));
          }
          if ($("#playlist_page").css("display") === "block") {
            prev_page.push(document.querySelector("#playlist_page"));
          }
          if ($("#lib_page").css("display") === "block") {
            prev_page.push(document.querySelector("#lib_page"));
          }

          $("#homepage").css("display", "none");
          $("#playlist_page").css("display", "none");
          $("#lib_page").css("display", "none");
          $("#album_page").css("display", "block");
        });

        sec.appendChild(lib_card);
      }

      $("#liked_card").css("visibility", "visible");
    },
  });

  $("#lib_page").animate({ left: "0px" }, 600, "linear", function () {});
  if ($("#homepage").css("display") === "block") {
    prev_page.push(document.querySelector("#homepage"));
  }
  if ($("#playlist_page").css("display") === "block") {
    prev_page.push(document.querySelector("#playlist_page"));
  }
  if ($("#album_page").css("display") === "block") {
    prev_page.push(document.querySelector("#album_page"));
  }

  $("#homepage").css("display", "none");
  $("#playlist_page").css("display", "none");
  $("#album_page").css("display", "none");
  $("#lib_page").css("display", "block");
});

$("#lib_page #back_btn").on("click", function () {
  $("#lib_page").animate({ left: "100vw" }, 600, "linear", function () {
    // $('#homepage').css('display', 'block');
    prev_page.pop().style.display = "block";
    $("#lib_page").css("display", "none");
    const lib_grid = document.querySelector("#lib_grid");
    lib_grid.innerHTML = "";

    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

$("#lib_page #back_btn").on("mouseenter", function () {
  $(this).css("cursor", "pointer");
});
