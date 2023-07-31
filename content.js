function pauseYouTubeVideo() {
    const videos = document.querySelectorAll('video');
    for (const video of videos) {
      video.pause();
    }
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'pauseVideo') {
      pauseYouTubeVideo();
      sendResponse({ message: 'Video paused successfully.' });
    }
  });
  