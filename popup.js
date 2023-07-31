document.addEventListener('DOMContentLoaded', function() {
    const pauseButton = document.getElementById('pauseButton');
  
    pauseButton.addEventListener('click', function() {
      chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function(tab) {
          chrome.tabs.sendMessage(tab.id, { action: 'pauseVideo' });
        });
      });
    });
  });  