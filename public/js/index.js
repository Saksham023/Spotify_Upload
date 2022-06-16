
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
