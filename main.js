document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const lid = document.querySelector(".lid");
    const card = document.querySelector(".card");
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    

    let isOpen = false;
    let enableEscape = false;

    // Click event to open envelope
    container.addEventListener("click", function () {
        if (!isOpen) {
            lid.classList.add("open-lid");
            setTimeout(() => {
                card.classList.add("slide-card");
                enableEscape = true; // Enable "No" button movement AFTER animation
            }, 500); // Delay ensures lid opens first
            isOpen = true;
        }
    });

    yesBtn.addEventListener("click", function () {
        const happyImage = document.getElementById("happyImage");
        happyImage.classList.add("animate"); // Trigger animation
    });

    // No Button Click
    noBtn.addEventListener("click", function () {
        const angyImage = document.getElementById("angyImage");
        angyImage.classList.add("animate"); // Trigger animation
    });

//     document.addEventListener("mousemove", function (event) {
//         const noBtn = document.getElementById("noBtn");
//         const yesBtn = document.getElementById("yesBtn");
    
//         if (!noBtn || !yesBtn) return; // Safety check
    
//         const noRect = noBtn.getBoundingClientRect();
//         const yesRect = yesBtn.getBoundingClientRect();
    
//         function isMouseInside(rect) {
//             return (
//                 event.clientX >= rect.left &&
//                 event.clientX <= rect.right &&
//                 event.clientY >= rect.top &&
//                 event.clientY <= rect.bottom
//             );
//         }
    
//         if (isMouseInside(yesRect)) {
//             alert("yoo hoo");
//         }
//     });
    

//     console.log("Yes button:", document.getElementById("yesBtn"));
// console.log("No button:", document.getElementById("noBtn"));

// document.getElementById("yesBtn").addEventListener("mouseenter", () => {
//     console.log("Hovered over Yes!");
// });
// document.getElementById("noBtn").addEventListener("mouseenter", () => {
//     console.log("Hovered over No!");
// });


    // Function to move the "No" button
    function moveNoButton() {
        const noBtn = document.getElementById("noBtn");
    
        // Predefined safe positions
        const positions = [
            { x: 300, y: 200 }, { x: 500, y: 250 },
            { x: 700, y: 300 }, { x: 900, y: 150 }, { x: 200, y: 400 },
            { x: 600, y: 450 }, { x: 800, y: 500 }, { x: 400, y: 500 },
            { x: 250, y: 320 }, { x: 750, y: 380 }, { x: 900, y: 420 }, { x: 350, y: 250 }, { x: 850, y: 470 }
        ];
    
        // Get current position
        const currentX = parseInt(noBtn.style.left, 10) || 0;
        const currentY = parseInt(noBtn.style.top, 10) || 0;
    
        let newPos;
        do {
            newPos = positions[Math.floor(Math.random() * positions.length)];
        } while (newPos.x === currentX && newPos.y === currentY); // Prevent same position
    
        // Apply the new position
        noBtn.style.position = "absolute";
        noBtn.style.left = `${newPos.x}px`;
        noBtn.style.top = `${newPos.y}px`;
    
        // ✅ Log the new position
        console.log(`Moved "No" button to: X=${newPos.x}, Y=${newPos.y}`);
    }
    
    

    // Check distance between mouse and "No" button (ONLY after envelope is opened)
    document.addEventListener("mousemove", function (event) {
        if (!enableEscape) return; // Don't move buttons if the envelope is closed
    
        // Get button positions
        const noRect = noBtn.getBoundingClientRect();
        const yesRect = yesBtn.getBoundingClientRect();
    
        // Calculate distance between mouse and "No" button
        const dx = event.clientX - (noRect.left + noRect.width / 2);
        const dy = event.clientY - (noRect.top + noRect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        // Only move "No" button if mouse is too close
        if (distance < 30) {
            moveNoButton();
        }
    
        // // Make sure the "Yes" button is interactive
        // document.getElementById("yesBtn").style.pointerEvents = "auto";
    });
    
});