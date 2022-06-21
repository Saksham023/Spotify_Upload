
let colors = ['red', 'dark-violet', 'violet', 'yellow', 'orange', 'gray', 'green'];
colors.sort( ()=>Math.random()-0.5 );
let idx = -1;

let grad = $(`#background_${colors[0]}`).css('background-image');
$(`#background_default`).css('background-image', grad);

$('.topdiv').on('mouseenter', function(){
    $(this).addClass('top-ani');
    $(this).removeClass('top-ani-leave');
    // console.log($(this).attr('id'));
    idx = parseInt($(this).attr('id'));
    if(idx==0){
        return;
    }
    // if(idx%2==0){
    //     $(`#background_${colors[idx]}`).css('background-image', 'linear-gradient(rgba(55,55,55) 30%, #121212)');
    // }
    // else{
    //     $(`#background_${colors[idx]}`).css('background-image', 'linear-gradient(rgba(92,43,17) 30%, #121212');
    // }
    $(`#background_default`).removeClass(`ani-default-enter`)
    $(`#background_default`).addClass(`ani-default-exit`)

    $(`#background_${colors[idx]}`).removeClass(`ani-${colors[idx]}-exit`)
    $(`#background_${colors[idx]}`).addClass(`ani-${colors[idx]}-enter`)
})

$('.topdiv').on('mouseleave', function(){
    $(this).addClass('top-ani-leave');
    $(this).removeClass('top-ani');
    if(idx==0){
        return;
    }

    $(`#background_default`).removeClass(`ani-default-exit`)
    $(`#background_default`).addClass(`ani-default-enter`)

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


$('#play_btn').on('mouseenter', function(){
    $(this).css('transform', 'scale(1.08)');
    $('#pause_btn').css('transform', 'scale(1.08)');
    
    $(this).css('box-shadow', '0px 6px 20px 0.1px rgb(79, 74, 74)');
    $('#pause_btn').css('box-shadow', '0px 6px 20px 0.1px rgb(79, 74, 74)');
    // box-shadow: 0px 6px 20px 0.02px rgb(41, 37, 37);

})
$('#play_btn').on('mouseleave', function(){
    $(this).css('transform', 'scale(1)');
    $('#pause_btn').css('transform', 'scale(1)');

    $(this).css('box-shadow', '');
    $('#pause_btn').css('box-shadow', '');
})



$('#next_btn').on('mouseenter', function(){
    $(this).css('transform', 'scale(1.08)');
    $(this).css('box-shadow', '0px 6px 20px 0.1px rgb(79, 74, 74)');

})
$('#next_btn').on('mouseleave', function(){
    $(this).css('transform', 'scale(1)');
    $(this).css('box-shadow', '');
})

$('#prev_btn').on('mouseenter', function(){
    $(this).css('transform', 'scale(1.08)');
    $(this).css('box-shadow', '0px 6px 20px 0.1px rgb(79, 74, 74)');

})
$('#prev_btn').on('mouseleave', function(){
    $(this).css('transform', 'scale(1)');
    $(this).css('box-shadow', '');
})

$('#top_by .card').on('click', function(){
    let idx = $(this).attr('id').charAt(4) - 1;
    console.log(idx);
    console.log(uriarr_top_by[idx]);

    const a = document.createElement('a');
    a.setAttribute('href', `/playlist/${uriarr_top_by[idx]}/${token}`);
    console.log(a);
    a.click();

    // $.ajax({
    //     url: `/playlist/${uriarr_top_by[idx]}/${token}`,
    //     headers: {
    //         'Authorization': 'Bearer ' + token,
    //         'Content-Type': 'application/json'
    //     },
    //     success: function(response) {
    //         console.log(response);
    //     }
    // });
})

// console.log($('#artists #card1 .card-img-top').attr('src'));
// if($('#artists #card1 .card-img-top').attr('src')===''){
//     $('#artists #card1 .card-img-top').css('width', '0px');
// }
