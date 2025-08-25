// This function runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration for DiceBear Avatars ---

    // Import the necessary functions from the DiceBear library
    const { createAvatar } = window.DiceBear;
    const { adventurer } = window.DiceBearAdventurer;

    // --- Create the Computer Science Avatar ---
    // Based on: bald, white male, lean, tech profession clothes

    const csAvatar = createAvatar(adventurer, {
        seed: 'jared-cs-professional', // A unique name for consistency
        skinColor: ['f2d5ab'],
        hair: ['short18'], // This is the closest style to bald (a buzz cut)
        hairProbability: 100,
        glasses: ['variant01'], // Glasses for the tech look
        glassesProbability: 100,
        mouth: ['variant09'], // A neutral, focused expression
        // The 'adventurer' style doesn't have hoodies, but we can imply a dark shirt
        // by setting a specific background color for the character sprite itself.
        backgroundColor: ['555555', '333333'], // Shades of grey for a hoodie/dark shirt
    }).toDataUriSync();

    // --- Create the CNA (Nursing) Avatar ---
    // Based on: bald, white male, lean, nursing profession clothes

    const cnaAvatar = createAvatar(adventurer, {
        seed: 'jared-cna-professional', // A different seed for consistency
        skinColor: ['f2d5ab'],
        hair: ['short18'], // Matching buzz cut for bald look
        hairProbability: 100,
        mouth: ['variant01'], // A friendly, caring smile
        // We'll use the background color to represent teal scrubs
        backgroundColor: ['2d7c7f', '1e5254'], 
    }).toDataUriSync();

    // --- Place Avatars on the Page ---

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

