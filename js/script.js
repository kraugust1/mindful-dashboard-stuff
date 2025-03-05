// website loaded?
console.log("👍 Okay");


// Days Until an Event


// Streak of Days


// Age of Person, Place, or Thing
// Unit Test
const birthDate = "1000-01-01"; // YYYY-MM-DD format
// const birthDateOfSwoop = "September 29, 1973"; // Month DD, YYYY
// const birthDateOfSwoop = "09/09/1973"; // MM/DD/YYYY
const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );

// EWU Graudation Date
const gradDay = "2025-07-04";
const daysUntilGrad = getDaysUntilEvent( gradDay )  ;
 // console.log( getDaysUntilEvent( gradDay ) );

// Get Elememts
const elemDaysUntilGrad = document.querySelector('.daysUntilGraduation');
// Set Elments
elemDaysUntilGrad.textContent = daysUntilGrad;

// Streaks Data
const startDate = "2025-01-01";
const streakOfMeditation = getDayStreak( startDate );
// console.log( streakOfMeditation ) ;

// Get
const elemMeditation = document.querySelector('.streakOfMeditation');
// Set element
elemMeditation.textContent = streakOfMeditation;

//---------------------test-------------------------------------------
//A.I. , sadly, had a lot to do with this part.

document.addEventListener("DOMContentLoaded", function () {
    // Array of shapes to pick from
    const shapes = document.querySelectorAll('.shape');

    // Function to get a random shape
    function getRandomShape() {
        const randomIndex = Math.floor(Math.random() * shapes.length);
        return shapes[randomIndex];
    }

    // Function to handle the hover event
    function handleHover(event) {
        const hoverElement = event.currentTarget;
        const shapeContainer = document.getElementById('shapeContainer');

        // Set the position of the shape container relative to the hovered element
        const rect = hoverElement.getBoundingClientRect();

        // Calculate the center of the visible part of the element
        const centerX = rect.left + window.scrollX + rect.width / 2;
        const topY = rect.top + window.scrollY;

        // Hide all shapes
        shapes.forEach(shape => shape.style.display = 'none');

        // Show a random shape
        const randomShape = getRandomShape();
        randomShape.style.display = 'block';

        // Adjust the position of the shape container
        shapeContainer.style.left = `${centerX - shapeContainer.offsetWidth / 2}px`; // Center horizontally
        shapeContainer.style.top = `${topY - shapeContainer.offsetHeight}px`; // Position above the element

        // Adjust the position of the shape within the container
        randomShape.style.left = '50%';
        randomShape.style.transform = 'translateX(-50%)';
        randomShape.style.top = `-${randomShape.offsetHeight}px`; // Position above the container
    }

    // Add event listener to each hover element
    const hoverElements = document.querySelectorAll('.bento-item');
    hoverElements.forEach(hoverElement => {
        hoverElement.addEventListener('mouseover', handleHover);

        // Add event listener to hide shapes when not hovering
        hoverElement.addEventListener('mouseout', () => {
            shapes.forEach(shape => shape.style.display = 'none');
        });
    });
});
