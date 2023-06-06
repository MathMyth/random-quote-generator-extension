document.addEventListener('DOMContentLoaded', function () {
  const greeting = document.getElementById('greeting');
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generate-button');

  function getRandomQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        const quote = data.content;
        quoteElement.textContent = quote;
      })
      .catch(error => {
        console.error('Failed to fetch quotes:', error);
      });
  }

  chrome.storage.local.get('name', function (result) {
    const name = result.name || 'Dixit';
    greeting.textContent = `Hello, ${name}! Here's a random quote for you:`;
  });

  generateButton.addEventListener('click', function () {
    getRandomQuote();
  });

  getRandomQuote();
});
