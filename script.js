/ Dashboard Sim Engine™ - Simulated logic for all components

// BitHumor™ Quotes Rotation
const bitHumorQuotes = [
    "Why did the bit flip? To get to the other side!",
    "Bits walk into a bar: 'We're feeling a bit off today.'",
    "A bit's favorite music? Binary beats.",
    "Don't trust atoms, they make up everything... but bits make up data!",
    "Why was the bit cold? It left its Windows open."
];

let quoteIndex = 0;
function rotateQuote() {
    document.getElementById('bithumor-quote').textContent = bitHumorQuotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % bitHumorQuotes.length;
}
setInterval(rotateQuote, 5000); // Rotate every 5 seconds
rotateQuote(); // Initial call

// BibBot Deployment Controls (Simulated)
function deployBibBot() {
    document.getElementById('bibbot-status').textContent = 'Status: Deploying...';
    setTimeout(() => {
        document.getElementById('bibbot-status').textContent = 'Status: Deployed Successfully!';
    }, 2000);
}

function checkBibBotStatus() {
    document.getElementById('bibbot-status').textContent = 'Status: Online and Operational';
}

// SKU Health Graph (Using Chart.js with simulated data)
let skuChart;
const skuData = {
    'SKU-TEST': [80, 90, 70, 85, 95], // Health scores over time
    'SKU-001': [60, 75, 50, 65, 80]
};

function updateSKU() {
    const sku = document.getElementById('sku-select').value;
    const data = skuData[sku] || [0, 0, 0, 0, 0];
    
    if (skuChart) skuChart.destroy();
    const ctx = document.getElementById('skuChart').getContext('2d');
    skuChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: `${sku} Health`,
                data: data,
                borderColor: '#007bff',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// Lifebits™ (Simulated list)
const lifebitsData = [
    'Lifebit 1: Core Functionality - Stable',
    'Lifebit 2: User Engagement - High',
    'Lifebit 3: Performance Metrics - Optimized',
    'Lifebit 4: Security Layer - Reinforced'
];

function loadLifebits() {
    const list = document.getElementById('lifebits-list');
    lifebitsData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Hidden Cost Analyzer™ (Simulated calculation)
function analyzeCosts() {
    const baseCost = parseFloat(document.getElementById('cost-input').value) || 0;
    const hiddenCosts = baseCost * 0.15 + Math.random() * 50; // Simulated hidden factor
    document.getElementById('cost-output').textContent = `Hidden Costs: $${hiddenCosts.toFixed(2)} (15% overhead + variables)`;
}

// Huddle Room Launcher Logic (Simulated)
function launchHuddleRoom() {
    document.getElementById('huddle-status').textContent = 'Launching Huddle Room...';
    setTimeout(() => {
        alert('Huddle Room Launched! (Simulated - In a real setup, this would open a virtual room.)');
        document.getElementById('huddle-status').textContent = 'Huddle Room Active';
    }, 1500);
}

// Initialize on load
window.onload = () => {
    document.getElementById('sku-select').value = 'SKU-TEST';
    updateSKU();
    loadLifebits();
};7.8s
