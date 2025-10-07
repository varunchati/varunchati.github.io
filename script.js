// script.js

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle code snippets
function toggleCode(codeId) {
    const codeSnippet = document.getElementById(codeId);
    if (codeSnippet.style.display === 'block') {
        codeSnippet.style.display = 'none';
    } else {
        codeSnippet.style.display = 'block';
    }
}

// Show EV project details
function showEVDetails() {
    alert('Interactive EV results visualization would be implemented here with charts showing:\n\n• SO₂ reduction trends\n• EV sales by state\n• Electricity generation correlations\n\nThis demonstrates the technical capability to build interactive data dashboards.');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const hobbyCards = document.querySelectorAll('.hobby-card');
    
    [...projectCards, ...hobbyCards].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
// EV Policy Simulator
function runSimulation() {
    const evSubsidy = parseInt(document.getElementById('evSubsidy').value);
    const solarSubsidy = parseInt(document.getElementById('solarSubsidy').value);
    const gridCarbon = parseInt(document.getElementById('gridCarbon').value);
    
    // Simple model based on your paper's insights
    const baseEmissions = 100;
    const evAdoption = Math.min(100, (evSubsidy / 100) * 80 + (solarSubsidy / 100) * 20);
    const solarCapacity = (solarSubsidy / 100) * 50;
    
    // Emissions calculation considering the trade-off
    const emissionsReductionFromEVs = (evAdoption / 100) * 30;
    const emissionsIncreaseFromGrid = (evAdoption / 100) * (gridCarbon / 100) * 25;
    const emissionsReductionFromSolar = (solarCapacity / 50) * 15;
    
    const totalEmissions = Math.max(0, baseEmissions - emissionsReductionFromEVs + emissionsIncreaseFromGrid - emissionsReductionFromSolar);
    const welfareGain = (evAdoption * 0.3) + (solarCapacity * 0.4) - (totalEmissions * 0.2);
    
    // Update UI
    document.getElementById('totalEmissions').textContent = Math.round(totalEmissions);
    document.getElementById('evAdoption').textContent = Math.round(evAdoption) + '%';
    document.getElementById('solarCapacity').textContent = Math.round(solarCapacity) + ' MW';
    document.getElementById('welfareGain').textContent = Math.round(welfareGain);
    
    // Generate insights
    let insights = '';
    if (evSubsidy > solarSubsidy + 20) {
        insights = '⚠️ High EV subsidies without sufficient solar investment may increase grid emissions. Consider balancing subsidies.';
    } else if (solarSubsidy > evSubsidy + 20) {
        insights = '✅ Good solar investment, but EV adoption might be limited without sufficient vehicle subsidies.';
    } else {
        insights = '🎉 Balanced approach! Coordinated subsidies maximize welfare gains while minimizing emissions.';
    }
    
    if (gridCarbon > 70) {
        insights += ' High grid carbon intensity reduces the environmental benefits of EV adoption.';
    }
    
    document.getElementById('policyInsights').textContent = insights;
    
    updateTradeoffChart(evSubsidy, solarSubsidy, totalEmissions, welfareGain);
}

function updateTradeoffChart(evSubsidy, solarSubsidy, emissions, welfare) {
    // Simple chart update - in practice, you'd use Chart.js here
    console.log(`Updating chart with EV: ${evSubsidy}, Solar: ${solarSubsidy}, Emissions: ${emissions}, Welfare: ${welfare}`);
}

// Initialize slider values
document.getElementById('evSubsidy').addEventListener('input', function() {
    document.getElementById('evSubsidyValue').textContent = this.value;
});

document.getElementById('solarSubsidy').addEventListener('input', function() {
    document.getElementById('solarSubsidyValue').textContent = this.value;
});

document.getElementById('gridCarbon').addEventListener('input', function() {
    document.getElementById('gridCarbonValue').textContent = this.value + '%';
});

// Run initial simulation
document.addEventListener('DOMContentLoaded', function() {
    runSimulation();
});
