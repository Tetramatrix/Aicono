/**
 * Scroll functions for Aicono Documentation
 */

/**
 * Scroll to a section with smart positioning
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        // Überprüfe, ob das Element bereits sichtbar ist
        const rect = targetElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Wenn das Element sichtbar ist, aber am oberen Rand, scrollen wir so, dass es in der Mitte ist
        if (isVisible && rect.top < window.innerHeight * 0.1) {
            // Scrollen, sodass das Element in der Mitte des Viewports ist
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Ansonsten normales Scrollen
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Alternative Funktion, die immer zentriert, wenn das Element bereits sichtbar ist
 * @param {string} targetId - The ID of the target section (with or without #)
 */
function smartScrollToSection(targetId) {
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInViewport) {
            // Wenn das Element bereits sichtbar ist, zentriere es
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            // Ansonsten scroll zum Anfang des Elements
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Collapsible Sections for Aicono Documentation
 * Makes all H2 elements in the main element clickable to toggle their sections
 */

/**
 * Toggle the visibility of a section associated with an H2 element
 * @param {HTMLElement} h2Element - The H2 element that was clicked
 */
function toggleSection(h2Element) {
    h2Element.classList.toggle('collapsed');
    
    // Find the next section element following this h2 (skip any intermediate elements, stop at next H2)
    let nextElement = h2Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'SECTION' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }
    
    // Toggle the section if found
    if (nextElement && nextElement.tagName === 'SECTION') {
        nextElement.classList.toggle('collapsed');
    }
}

/**
 * Initialize collapsible sections
 */
(function() {
    const h2Elements = document.querySelectorAll('main h2');
    h2Elements.forEach(function(h2) {
        h2.classList.add('collapsible');
        h2.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h2
            if (e.target.tagName !== 'A') {
                toggleSection(h2);
            }
        });
    });
})();

