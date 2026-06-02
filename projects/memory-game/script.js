const cardPool = [
    {iconClass: "fa-solid fa-chess-king", color: "#6A00F4", name: "chess-king"},
    {iconClass: "fa-solid fa-guitar", color: "#BC00DD", name: "guitar"},
    {iconClass: "fa-solid fa-wine-glass", color: "#E500A4", name: "wine-glass"},
    {iconClass: "fa-solid fa-umbrella", color: "#256EFF", name: "umbrella"},
    {iconClass: "fa-brands fa-fly", color: "#BE0A3A", name: "fly"},
    {iconClass: "fa-solid fa-pencil", color: "#F84113", name: "pencil"},
    {iconClass: "fa-solid fa-rocket", color: "#0424DE", name: "rocket"},
    {iconClass: "fa-solid fa-paper-plane", color: "#1E2624", name: "paper-plane"},
    {iconClass: "fa-solid fa-bell", color: "#F8C21F", name: "bell"},
    {iconClass: "fa-solid fa-apple-whole", color: "#0DB128", name: "apple"},
    {iconClass: "fa-solid fa-chess-queen", color: "#EE0B4F", name: "chess-queen"},
    {iconClass: "fa-solid fa-award", color: "#00D161", name: "award"},
    {iconClass: "fa-brands fa-canadian-maple-leaf", color: "#FB3E3E", name: "maple-leaf"},
    {iconClass: "fa-solid fa-paw", color: "#FF6593", name: "paw"},
    {iconClass: "fa-solid fa-ice-cream", color: "#B077C5", name: "ice-cream"},
    {iconClass: "fa-solid fa-lemon", color: "#8BE95C", name: "lemon"},
    {iconClass: "fa-solid fa-graduation-cap", color: "#C20044", name: "graduation-cap"},
    {iconClass: "fa-solid fa-anchor", color: "#24F1DD", name: "anchor"}
];

const btnLevelSelection = document.querySelectorAll(".selecting-levels");

btnLevelSelection.forEach(button => {
    button.addEventListener('click', event => {
        const clickedBtnId = event.currentTarget.id;

        if(clickedBtnId === "easy-level") {
            startGame(6);
        } else if (clickedBtnId === "medium-level") {
            startGame(10);
        } else if(clickedBtnId === "hard-level") {
            startGame(18);
        }
    });
});

function startGame(pairCount) {
    // shuffle the cards
    const shuffledPool = shuffle([...cardPool]);
    // slecting the cards of the game
    const selectedCards = shuffledPool.slice(0, pairCount);
    // duplicate cards
    const gameDeck = [...selectedCards, ...selectedCards];
    // shuffle the final deck
    const finalDeck = shuffle(gameDeck);

    console.log("My final deck is: ", finalDeck);
}

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[1]];
    }
    return array
}
