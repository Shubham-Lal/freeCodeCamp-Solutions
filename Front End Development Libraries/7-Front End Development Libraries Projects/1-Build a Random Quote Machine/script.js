let allQuotesData;
var colors = ["#73A857", "#16A085", "#73A857", "#FB6964", "#9B59B6"];
var currentQuote = "";
var currentAuthor = "";

const openURL = (url) => {
    window.open(
        url,
        "Share",
        "width=550, height=400, toolbar=0, scrollbars=1, menubar=0, statusbar=0, location=0, resizable=0"
    );
};

const getQuotes = () => {
    return $.ajax({
        headers: {
            Accept: "application/json",
        },
        url:
            "https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/client/i18n/locales/english/motivation.json",
        success: function (jsonQuotes) {
            if (typeof jsonQuotes === "string") {
                allQuotesData = JSON.parse(jsonQuotes);
            }
        },
    });
};

const getRandomQuote = () => {
    return allQuotesData?.motivationalQuotes[
        Math.floor(Math.random() * allQuotesData.motivationalQuotes.length)
    ];
};

const getQuote = () => {
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    $(".quote-text").animate(
        { opacity: 0 },
        500,
        function () {
            $(this).animate({ opacity: 1 }, 500);
            $("#text").text(randomQuote.quote);
        }
    );

    $(".quote-author").animate(
        { opacity: 0 },
        500,
        function () {
            $(this).animate({ opacity: 1 }, 500);
            $("#author").html(randomQuote.author);
        }
    );

    var color = Math.floor(Math.random() * colors.length);

    $("html body").animate(
        {
            backgroundColor: colors[color],
            color: colors[color],
        },
        1000
    );

    $(".button").animate(
        {
            backgroundColor: colors[color],
        },
        1000
    );
};

$(document).ready(function () {
    getQuotes().then(() => {
        getQuote();
    });

    $("#new-quote").on("click", getQuote);

    $("#tweet-quote").on("click", function () {
        openURL(
            "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
            encodeURIComponent('"' + currentQuote + '" -' + currentAuthor)
        );
    });
});
