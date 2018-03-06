const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let movieID = "4PF7QK-RWwI";
function onYouTubeIframeAPIReady(){
  console.log("onYouTubeIframeAPIReady");
  player = new YT.Player('player',{
    height: '360',
    width: '640',
    videoId: movieID,
    playerVars: {
                autoplay:0,
                rel     :0, // 関連動画非表示
                fs      :0,
                iv_load_policy:3,
                modestbranding:1,
                showinfo:0
              },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  console.log(movieID);
}

function onPlayerReady(event) {
  console.log("onPlayerReady");
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
    }).done(function(body) {
      movieID = body.movieID;

      event.target.loadVideoById(movieID);

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
