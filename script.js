var videoSrc = $("#P1 iframe").attr("src");
$('#P1').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#P1 iframe").attr("src", videoSrc);
}).on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#P1 iframe").attr("src", null);
});

var videoSrc = $("#P2 iframe").attr("src");
$('#P2').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#P2 iframe").attr("src", videoSrc);
}).on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#P2 iframe").attr("src", null);
});


var videoSrc = $("#P3 iframe").attr("src");
$('#P3').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#P3 iframe").attr("src", videoSrc);
}).on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#P3 iframe").attr("src", null);
});