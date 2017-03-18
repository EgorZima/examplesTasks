(function() {
	let form = document.querySelector('.form');
  let buttonRandom = document.querySelectorAll('.submit')[0];
  let buttonSearch = document.querySelectorAll('.submit')[1];
 

  form.addEventListener('mousedown', (e) => {
    let target = e.target;

    if(!target.classList.contains('submit')) return;
    target.classList.add('shadow');
  })

  form.addEventListener('mouseup', (e) => {
    let target = e.target;

    if(!target.classList.contains('shadow')) return;
    target.classList.remove('shadow');
  })


  buttonRandom.addEventListener('click', randomVideo);

  
  let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLs0ByhrXWG5r4ueD1SVLNHXYBZQJ37tbe&key=AIzaSyDZjU4tkv7LqOGLkAdQaSAZh4MjsxsohgI";

  function randomVideo() {
      jQuery.ajax({
            url: url,   
            data: 'JSON',
            type: "GET",  
        })
        .done( (data) => {
            let arr = [];
                    
            for (var i = 0; i < data.items.length; i++) {
              arr.push(data.items[i].snippet.resourceId.videoId)
            }
                
            let vidUrl = "https://www.youtube.com/embed/" + arr[Math.floor(Math.random()*arr.length)];
                        
            let frame = document.querySelector('.video');
            frame.src = vidUrl;

            })
        .fail(() => {
          alert('there is some error')
        });
    }

    
})()