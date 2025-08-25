// This function runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Step 1: Set up Navigation (Do this first!) ---
    // This ensures the buttons work even if the avatar library fails to load.

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


    // --- Step 2: Generate and Place Avatars ---
    // We wrap this in a try...catch block. If an error occurs,
    // it will be logged to the console without breaking the button functionality.
    
    try {
        // Import the necessary functions from the DiceBear library
        const { createAvatar } = window.DiceBear;
        const { adventurer } = window.DiceBearAdventurer;

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
        console.error("Could not generate avatars. This might be due to a network issue or an ad-blocker.", error);
    }
});

