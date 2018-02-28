const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
var movieID = "4PF7QK-RWwI";
function onYouTubeIframeAPIReady(){
  console.log(movieID);
  player = new YT.Player('player',{
    height: '360',
    width: '640',
    videoId: movieID,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING){//動画が再生中場合

  }
  if(event.data == YT.PlayerState.ENDED){//動画再生が終了した場合
    $.ajax({
      url: 'https://v157-7-129-202.myvps.jp:44503/getMovieID',
      type: 'GET',
      dataType: 'json',
      timeout: 5000,
    }).done(function(data) {
      console.log(data);
      movieID = data.body.movieID;
      console.log("--------------");
      console.log(movieID);
      event.target.playVideo();
    }).fail(function() {
     // 通信失敗時の処理を記述
    });
  }
  if(event.data == YT.PlayerState.PAUSED){//動画再生を停止した場合

  }
}

function stopVideo() {
  player.stopVideo();
}
