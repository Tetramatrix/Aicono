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
    });})();
