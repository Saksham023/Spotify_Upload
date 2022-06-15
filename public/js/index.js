
const tok = document.querySelector('#token');
const token = tok.innerHTML;


let colors = ['red', 'dark-violet', 'violet', 'yellow', 'orange', 'gray'];
let idx = -1;


$('.topdiv').on('mouseenter', function(){
    $(this).addClass('top-ani');
    $(this).removeClass('top-ani-leave');
    // console.log($(this).attr('id'));
    idx = parseInt($(this).attr('id'));
    // if(idx%2==0){
    //     $(`#background_${colors[idx]}`).css('background-image', 'linear-gradient(rgba(55,55,55) 30%, #121212)');
    // }
    // else{
    //     $(`#background_${colors[idx]}`).css('background-image', 'linear-gradient(rgba(92,43,17) 30%, #121212');
    // }

    $(`#background_${colors[idx]}`).removeClass(`ani-${colors[idx]}-exit`)
    $(`#background_${colors[idx]}`).addClass(`ani-${colors[idx]}-enter`)
})

$('.topdiv').on('mouseleave', function(){
    $(this).addClass('top-ani-leave');
    $(this).removeClass('top-ani');

    $(`#background_${colors[idx]}`).removeClass(`ani-${colors[idx]}-enter`)
    $(`#background_${colors[idx]}`).addClass(`ani-${colors[idx]}-exit`)
})

$('.topicon').on('mouseenter', function(){
    $(this).css('transform', 'scale(1.08)');
})
$('.topicon').on('mouseleave', function(){
    $(this).css('transform', 'scale(1)');
})
$('.cardicon').on('mouseenter', function(){
    $(this).css('transform', 'scale(1.08)');
})
$('.cardicon').on('mouseleave', function(){
    $(this).css('transform', 'scale(1)');
})

// console.log($('#artists #card1 .card-img-top').attr('src'));
// if($('#artists #card1 .card-img-top').attr('src')===''){
//     $('#artists #card1 .card-img-top').css('width', '0px');
// }

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
        num = 0;
        for(let head of $('.topdiv h5')){
            head.innerText = response.tracks[num].name;
            num++;
        }
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
