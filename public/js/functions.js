function show_playlist_page(uri, is_btn, str) {
  $("#playlist_page #background").css("background-image", ``);
  const list_cont = document.querySelector("#playlist_page #list_cont");
  list_cont.innerHTML = "";

  // document.body.scrollTop = document.documentElement.scrollTop = 0;
  $("#playlist_page #topimg").attr("src", "");
  $("#playlist_page #album_head").text("");
  $("#playlist_page #album").text("");

  $("#playlist_page #artist_name").text("");
  $("#playlist_page #year").text("");
  $("#playlist_page #num").text("");

  if (str === "album") {
    album_print(uri, is_btn);
  }

  if (str == "artist") {
    artist_print(uri, is_btn);
  }

  $("#playlist_page").animate({ left: "0px" }, 600, "linear", function () {});
  if ($("#homepage").css("display") === "block") {
    let pp = new Pair(document.querySelector("#homepage"), 'home');
    prev_page.push(pp);
  }
  if ($("#playlist_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#playlist_page"), 'playlist');
    prev_page.push(pp);
  }
  if ($("#liked_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#liked_page"), 'like');
    prev_page.push(pp);
  }
  if ($("#album_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#album_page"), 'album');
    prev_page.push(pp);
  }
  if ($("#lib_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#lib_page"), 'lib');
    prev_page.push(pp);
  }
  if ($("#search_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#search_page"), 'search');
    prev_page.push(pp);
  }
  $("#homepage").css("display", "none");
  $("#album_page").css("display", "none");
  $("#lib_page").css("display", "none");
  $("#liked_page").css("display", "none");
  $("#search_page").css("display", "none");
  $("#playlist_page").css("display", "block");
  page_uri.push(uri);
}

function show_album_page(uri, is_btn) {
  $("#album_page #background").css("background-image", ``);
  const list_cont = document.querySelector("#album_page #list_cont");
  list_cont.innerHTML = "";
  $("#album_page #topimg").attr("src", "");
  $("#album_page #album_head").text("");
  $("#album_page #album").text("");
  $("#album_page #playlist_des").text("");


  playlist_print(uri, is_btn);

  $("#album_page").animate({ left: "0px" }, 600, "linear", function () {});
  if ($("#homepage").css("display") === "block") {
    let pp = new Pair(document.querySelector("#homepage"), 'home');
    prev_page.push(pp);
  }
  if ($("#playlist_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#playlist_page"), 'playlist');
    prev_page.push(pp);
  }
  if ($("#liked_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#liked_page"), 'like');
    prev_page.push(pp);
  }
  if ($("#album_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#album_page"), 'album');
    prev_page.push(pp);
  }
  if ($("#lib_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#lib_page"), 'lib');
    prev_page.push(pp);
  }
  if ($("#search_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#search_page"), 'search');
    prev_page.push(pp);
  }
  $("#homepage").css("display", "none");
  $("#playlist_page").css("display", "none");
  $("#lib_page").css("display", "none");
  $("#liked_page").css("display", "none");
  $("#search_page").css("display", "none");
  $("#album_page").css("display", "block");
  page_uri.push(uri);
}

function show_liked_page(is_btn) {

  liked_page_print(is_btn);

  $("#liked_page").animate({ left: "0px" }, 600, "linear", function () {});
  if ($("#homepage").css("display") === "block") {
    let pp = new Pair(document.querySelector("#homepage"), 'home');
    prev_page.push(pp);
  }
  if ($("#playlist_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#playlist_page"), 'playlist');
    prev_page.push(pp);
  }
  if ($("#album_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#album_page"), 'album');
    prev_page.push(pp);
  }
  if ($("#lib_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#lib_page"), 'lib');
    prev_page.push(pp);
  }
  if ($("#search_page").css("display") === "block") {
    let pp = new Pair(document.querySelector("#search_page"), 'search');
    prev_page.push(pp);
  }
  $("#homepage").css("display", "none");
  $("#playlist_page").css("display", "none");
  $("#lib_page").css("display", "none");
  $("#search_page").css("display", "none");
  $("#album_page").css("display", "none");
  $("#liked_page").css("display", "block");
}


function load_page(uri){
  console.log(uri);
  let kind = uri.split(':')[1];
  if(kind === 'playlist'){
    playlist_print(uri, false);
  }
  if(kind === 'album'){
    album_print(uri, false);
  }
  if(kind === 'artist'){
    artist_print(uri, false);
  }
}

setInterval(function(){
  console.log(page_uri);
}, 3000);