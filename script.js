// Investor Data
const investors = [
    {
        name: "HODL Hero",
        title: "The Unwavering",
        icon: "💪",
        gradient: "linear-gradient(135deg, #4834d4, #686de0)",
        stats: {
            powerLevel: 85,
            riskTolerance: 70,
            fomoLevel: 10,
            ddTolerance: 100,
            memePower: 90
        },
        signatureMove: "HODL Forever",
        rarity: "legendary"
    },
    // Additional investors here...
];

// Create a Card
function createCard(investor) {
    const card = document.createElement("div");
    card.className = `card ${investor.rarity}`;
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-front" style="background: ${investor.gradient}">
                <div class="icon-container">${investor.icon}</div>
                <div class="card-title">${investor.name}</div>
                <div class="card-subtitle">${investor.title}</div>
                <div class="power-level">${investor.stats.powerLevel}</div>
                <div class="power-level-label">Power Level</div>
            </div>
            <div class="card-face card-back" style="background: ${investor.gradient}">
                <div class="stats-section">
                    <h3>Stats</h3>
                    <p>Risk Tolerance: ${investor.stats.riskTolerance}</p>
                    <p>FOMO Level: ${investor.stats.fomoLevel}</p>
                </div>
                <div class="signature-move">
                    <h3>Signature Move</h3>
                    <p>${investor.signatureMove}</p>
                </div>
            </div>
        </div>
    `;
    return card;
}

// Display Cards
const cardsContainer = document.getElementById("cardsContainer");
investors.forEach(investor => {
    const card = createCard(investor);
    cardsContainer.appendChild(card);
});
