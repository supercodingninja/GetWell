// MENU TOGGLE - CRITICAL FUNCTION
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBtn = document.getElementById('menuBtn');
    
    if (sideMenu) sideMenu.classList.toggle('open');
    if (menuOverlay) menuOverlay.classList.toggle('open');
    if (menuBtn) menuBtn.classList.toggle('active');
}

// ACCESSIBILITY MODAL FUNCTIONS
function openAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.add('open');
}

function closeAccessibilityModal() {
    const modal = document.getElementById('accessibilityModal');
    if (modal) modal.classList.remove('open');
}

function toggleFeature(element, feature) {
    element.classList.toggle('active');
    const isActive = element.classList.contains('active');
    document.body.classList.toggle(feature + '-mode', isActive);
    localStorage.setItem('gw_access_' + feature, isActive);
    
    // Toggle the switch visual
    const switchEl = element.querySelector('.toggle-switch');
    if (switchEl) switchEl.classList.toggle('active', isActive);
}

function applyColorFilter(filter) {
    document.body.classList.remove(
        'filter-deuteranomaly', 'filter-deuteranopia', 
        'filter-protanomaly', 'filter-protanopia',
        'filter-tritanomaly', 'filter-tritanopia',
        'filter-achromatopsia'
    );
    
    if (filter !== 'none') {
        document.body.classList.add('filter-' + filter);
    }
    
    localStorage.setItem('gw_color_filter', filter);
    
    // Update active button
    document.querySelectorAll('.access-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filter.replace('-', '')) || 
            (filter === 'none' && btn.textContent.includes('Normal'))) {
            btn.classList.add('active');
        }
    });
}

// HOME FUNCTION
function goHome() {
    window.location.href = '../index.html';
}
