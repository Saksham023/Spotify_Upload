
const tok = document.querySelector('#token');
const token = tok.innerHTML.trim();


let uriarr = JSON.parse(localStorage.getItem('uriArray'));

$.ajax({
    url: 'https://api.spotify.com/v1/recommendations?seed_artists=6LEG9Ld1aLImEFEVHdWNSB&seed_artists=4PULA4EFzYTrxYvOVlwpiQ&seed_tracks=5W7DOVGQLTigu09afW7QMT&seed_tracks=7AW4g4I9fPfUIyqtbsuAkM&limit=6',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        let num = 0;
        for(let img of $('.topdiv .topimg')){
            // console.log(img);
            let ur = 'https://api.spotify.com/v1/tracks/' + response.tracks[num].id;
            $.ajax({
                url: ur,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                success: function(resp) {
                    img.setAttribute("src", resp.album.images[0].url);
                }
            })
            num++;
        }
        // console.log(response.tracks[0].uri);
        let arr = [];
        num = 0;
        for(let head of $('.topdiv h5')){
            head.innerText = response.tracks[num].name;
            arr.push(response.tracks[num].uri);
            num++;
        }
        localStorage.setItem('uriArray', JSON.stringify(arr));
        uriarr = JSON.parse(localStorage.getItem('uriArray'));
    }
});


$.ajax({
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        // console.log(response);
        let num = Math.floor(Math.random()*19);

        let data = [];

        for(let i=num; i<(num+6); i++){
            let n = i%19;
            data.push(response.items[n]);
        }

        // console.log(data);
        let count = 0;
        for(let card of $('#artists .card')){
            const im = document.querySelector(`#card${count+1} .card-img-top`);
            const heading = document.querySelector(`#card${count+1} h4`);
            const des = document.querySelector(`#card${count+1} p`);
            im.setAttribute('src', data[count].images[0].url);
            heading.innerText = data[count].name;
            des.innerText = 'Artist';
            count++;
        }
    }
});


$('.topicon').on('click', function(){
    let iidx = parseInt($(this).attr('id'));
    play(uriarr[iidx]);
})