(function() {
    // Collapse all sections by default
    const allSections = document.querySelectorAll('main section');
    allSections.forEach(function(section) {
        section.classList.add('collapsed');
    });

    // Initialize collapsible H3 elements (generic, excluding feature-detail-toggle)
    const h3Elements = document.querySelectorAll('main h3');
    h3Elements.forEach(function(h3) {
        // Skip if data-no-toggle is set or feature-detail-toggle class
        if (h3.getAttribute('data-no-toggle') === 'true') return;
        if (h3.classList.contains('feature-detail-toggle')) return;
        
        h3.classList.add('collapsible');
        // Find and collapse the next div
        let nextElement = h3.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
            nextElement = nextElement.nextElementSibling;
        }
        if (nextElement && nextElement.tagName === 'DIV') {
            nextElement.classList.add('collapsed');
        }
    });

    // Arrow initialization removed (old system)

    // Initialize H2 collapsible functionality
    const h2Elements = document.querySelectorAll('main h2');
    h2Elements.forEach(function(h2) {
        // Skip if data-no-toggle is set
        if (h2.getAttribute('data-no-toggle') === 'true') return;

        h2.classList.add('collapsible');
        h2.classList.add('collapsed'); // Start collapsed
        // Set arrow data attributes for toggle
        h2.setAttribute('data-arrow-collapsed', '◀');
        h2.setAttribute('data-arrow-expanded', '▼');
        h2.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link inside the h2
            if (e.target.tagName !== 'A') {
                toggleSection(h2);
            }
        });
    });

    // Initialize H3 click listeners for generic collapsible (exclude feature-detail-toggle)
    h3Elements.forEach(function(h3) {
        if (h3.getAttribute('data-no-toggle') === 'true') return;
        if (h3.classList.contains('feature-detail-toggle')) return;

        h3.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                toggleH3Section(h3);
            }
        });
    });
})();

/**
 * Toggle the visibility of a section following an H2 element
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
 * Toggle the visibility of a div associated with an H3 element
 * @param {HTMLElement} h3Element - The H3 element that was clicked
 */
function toggleH3Section(h3Element) {
    h3Element.classList.toggle('collapsed');

    // Find the next div element following this h3
    let nextElement = h3Element.nextElementSibling;
    while (nextElement && nextElement.tagName !== 'DIV' && nextElement.tagName !== 'H3' && nextElement.tagName !== 'H2') {
        nextElement = nextElement.nextElementSibling;
    }

    // Toggle the div if found
    if (nextElement && nextElement.tagName === 'DIV') {
        nextElement.classList.toggle('collapsed');
    }
}
