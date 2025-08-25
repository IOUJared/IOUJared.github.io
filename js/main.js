// --- Step 1: Import the necessary functions directly from the CDN ---
// This is the modern "module" way to import libraries in the browser.
import { createAvatar } from 'https://cdn.jsdelivr.net/npm/@dicebear/core@9.2.4/lib/index.min.js';
import { adventurer } from 'https://cdn.jsdelivr.net/npm/@dicebear/adventurer@9.2.4/lib/index.min.js';


// --- Step 2: Set up Navigation ---
// We can do this right away. No need to wait for DOMContentLoaded in a module.
const csButton = document.getElementById('cs-resume-btn');
const cnaButton = document.getElementById('cna-resume-btn');

if (csButton) {
    csButton.addEventListener('click', () => {
        window.location.href = 'resume.html?pdf=cs_resume';
    });
}

if (cnaButton) {
    cnaButton.addEventListener('click', () => {
        window.location.href = 'resume.html?pdf=cna_resume';
    });
}


// --- Step 3: Generate and Place Avatars ---
// The try...catch block is still here for safety.
try {
    // Create the Computer Science Avatar
    const csAvatar = createAvatar(adventurer, {
        seed: 'jared-cs-professional',
        skinColor: ['f2d5ab'],
        hair: ['short18'],
        hairProbability: 100,
        glasses: ['variant01'],
        glassesProbability: 100,
        mouth: ['variant09'],
        backgroundColor: ['555555', '333333'],
    }).toDataUriSync();

    // Create the CNA (Nursing) Avatar
    const cnaAvatar = createAvatar(adventurer, {
        seed: 'jared-cna-professional',
        skinColor: ['f2d5ab'],
        hair: ['short18'],
        hairProbability: 100,
        mouth: ['variant01'],
        backgroundColor: ['2d7c7f', '1e5254'],
    }).toDataUriSync();

    // Place Avatars on the Page
    const csAvatarContainer = document.getElementById('cs-avatar');
    const cnaAvatarContainer = document.getElementById('cna-avatar');

    csAvatarContainer.style.backgroundImage = `url(${csAvatar})`;
    cnaAvatarContainer.style.backgroundImage = `url(${cnaAvatar})`;

} catch (error) {
    console.error("Could not generate avatars.", error);
    // You could also add a fallback here, like displaying a placeholder image.
}

