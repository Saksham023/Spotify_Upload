            
var Interval ;

function start_timer(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function stop_timer(){
    clearInterval(Interval);
}

function reset_timer(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
}

function startTimer () {
  tens++; 
  
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
  }
  
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }

  if(seconds > 59){
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
  }

  if(minutes > 9){
      appendMinutes.innerHTML = minutes;
  }

}


$('#for_hover').on('click', function(e){
    // console.log(e.offsetX);
    // console.log($(this).width());
    // console.log((tap*100)/total_width);
    let total_width = $(this).width();
    let tap = e.offsetX;
    let seek_to_dur = set_time((tap)/total_width);
    let left_dur = song_dur - seek_to_dur;
    seek_to_dur = parseInt(seek_to_dur);

    $('#prog_bar').stop(true).css({width: e.offsetX});
    $('#prog_bar').animate({ width: '100%' }, left_dur, 'linear', function(){
        $('#prog_bar').css('width', '0');
    });

    $.ajax({
        url: "https://api.spotify.com/v1/me/player/seek?position_ms=" + seek_to_dur,
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
})

$('#for_hover').on('mouseenter', function(e){
    $('#full_prog_bar').animate({
        height: '9px',
        borderRadius: '9px' 
    }, 100, 'linear', function(){});
})

$('#for_hover').on('mouseleave', function(e){
    $('#full_prog_bar').animate({
        height: '5px',
        borderRadius: '5px'
    }, 100, 'linear', function(){});
})


function set_time(percent){
    // console.log(song_dur);
    let dur_temp = song_dur * percent;
    // console.log(millisToMinutesAndSeconds(dur_temp));
    // console.log(millisToMinutesAndSeconds(dur_temp).split(':')[0]);
    // console.log(millisToMinutesAndSeconds(dur_temp).split(':')[1]);
    // console.log(millisToMinutesAndSeconds(song_dur));
    tens = "00";
    seconds = millisToMinutesAndSeconds(dur_temp).split(':')[1];
    minutes = millisToMinutesAndSeconds(dur_temp).split(':')[0];

    appendSeconds.innerHTML = seconds;
    
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
    else{
        appendMinutes.innerHTML = "0" + minutes;
    }

    return (dur_temp);
}