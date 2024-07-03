// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sections = 4; // Number of course sections
    const completedSections = 1; // Number of completed sections

    const overlay = document.querySelector('.overlay');
    overlay.innerHTML = ''; // Clear any existing overlay parts

    const angleStep = 360 / sections;
    const initialRotation = -45; // Start at 12 o'clock (45 degrees counter-clockwise)

    for (let i = 0; i < sections; i++) {
        const part = document.createElement('div');
        part.style.transform = `rotate(${initialRotation + i * angleStep}deg)`;
        if (i < completedSections) {
            part.style.opacity = '0'; // Fully reveal completed sections
        } else {
            part.style.opacity = '1'; // Hide incomplete sections
        }
        overlay.appendChild(part);
    }
});
