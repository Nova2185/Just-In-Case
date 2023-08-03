chrome.idle.onStateChanged.addListener((state) => {
    if (state === 'idle' || state === 'locked') {
      setTimeout(clearHistory, 7 * 24 * 60 * 60 * 1000); 
    }
  });
  
  function clearHistory() {
    chrome.history.deleteAll(() => {
      const newHistory = [
        { url: 'https://www.google.com/search?q=How+to+be+a+better+person' },
        { url: 'https://www.charity.org/confirmation.pdf' },
        { url: 'https://www.charity.org/donate'},
        { url: 'https://www.inspiringquotes.com/'},
        { url: 'https://www.exoticislandtours.com/virtual-tour'},
        { url: 'https://www.deliciousrecipes.com/chocolate-chip-cookies'},
        { url: 'https://www.languagelearninghub.com/'},
        { url: 'https://www.calmnessmindful.com/meditation-for-peace'},
        { url: 'https://www.ted.com/talks/topics/science'},
        { url: 'https://www.crehana.com/blog/estilo-vida/crochet-puntos-principiantes/'},

      ];
  
      chrome.history.add(newHistory, () => {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'Just in case!',
          message: 'Your browser history has been replaced with beautiful entries!',
        });
      });
    });
  }
  