function fetchStoicQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    // Reset the opacity to 0 to trigger the fade-out effect
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    fetch('https://stoic-quotes.com/api/quote')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Set the new text and author with opacity set to 0
            quoteText.textContent = `"${data.text}"`;
            quoteAuthor.textContent = `- ${data.author}`;

            // Trigger a reflow to apply the initial opacity setting
            void quoteText.offsetWidth;
            void quoteAuthor.offsetWidth;

            // Add a class to trigger the fade effect
            quoteText.style.opacity = 1;
            quoteAuthor.style.opacity = 1;

            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching stoic quote:', error);
        });
}

const fetchQuoteButton = document.getElementById('globalButton');
fetchQuoteButton.addEventListener('click', fetchStoicQuote);
