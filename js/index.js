var quote = "";
var author = "";
$(".twitter-link").on('click', function(){
  //use a twitter query string to add a hashtag and tweet text
  window.open("http://twitter.com/intent/tweet?hashtags=FreeCodeCamp&text=" + encodeURIComponent(quote) + "-" + encodeURIComponent(author));
});
//call json api when new quote button is clicked
//is currently only working on the first click
$(".btn").on('click', function(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
    quote = data.quoteText;
    author = data.quoteAuthor;
  $(".quote-text").html(quote);
    $(".quote-author").html(" -" + author);
});
});