// This function runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration for DiceBear Avatars ---

    // Import the necessary functions from the DiceBear library
    const { createAvatar } = window.DiceBear;
    const { adventurer } = window.DiceBearAdventurer;

    // --- Create the Computer Science Avatar ---

    const csAvatar = createAvatar(adventurer, {
        seed: 'jared-cs', // A unique name to generate a consistent avatar
        // Customizations to look like a programmer
        glasses: ['variant01'],
        glassesProbability: 100,
        hair: ['short01'],
        features: ['hat'],
        featuresProbability: 100,
    }).toDataUriSync();

    // --- Create the CNA (Nursing) Avatar ---

    const cnaAvatar = createAvatar(adventurer, {
        seed: 'jared-cna', // A different seed for a different avatar
        // Customizations to look like a nursing professional
        hair: ['short04'],
        earrings: ['variant01'],
        earringsProbability: 100,
        features: ['blush'],
        featuresProbability: 100,
        mouth: ['variant01'], // Gives a slight smile
    }).toDataUriSync();

    // --- Place Avatars on the Page ---

    // Find the avatar containers in the HTML
    const csAvatarContainer = document.getElementById('cs-avatar');
    const cnaAvatarContainer = document.getElementById('cna-avatar');

    // Set the generated avatars as the background images of the containers
    csAvatarContainer.style.backgroundImage = `url(${csAvatar})`;
    cnaAvatarContainer.style.backgroundImage = `url(${cnaAvatar})`;


    // --- Add Click Listeners for Navigation ---

    const csButton = document.getElementById('cs-resume-btn');
    const cnaButton = document.getElementById('cna-resume-btn');

    csButton.addEventListener('click', () => {
        window.location.href = 'resume.html?pdf=cs_resume';
    });

    cnaButton.addEventListener('click', () => {
        window.location.href = 'resume.html?pdf=cna_resume';
    });
});

