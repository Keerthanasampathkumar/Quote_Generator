const quotes = [
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
  ];
  
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const tweetBtn = document.getElementById("tweet");
  
  newQuoteBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
  
    // Fade out
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;
  
    setTimeout(() => {
      quoteText.innerText = quote.text;
      authorText.innerText = "- " + quote.author;
  
      // Fade in
      quoteText.style.opacity = 1;
      authorText.style.opacity = 1;
  
      // Tweet this quote
      const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
      tweetBtn.href = tweetURL;
    }, 300);
  });
  
