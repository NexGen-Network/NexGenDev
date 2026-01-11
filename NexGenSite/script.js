document.addEventListener('DOMContentLoaded', function() {
    // Welcome Popup Logic
    if (!localStorage.getItem('nexgen_welcome_seen')) {
        // Create modal HTML dynamically if not present
        if (!document.getElementById('welcomeModal')) {
            const modalHTML = `
            <div class="modal fade" id="welcomeModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content nexgen-popup-content">
                        <div class="modal-header border-0"><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button></div>
                        <div class="modal-body pb-5">
                            <h2 class="fw-bold text-uppercase">Welcome!</h2>
                            <p class="text-muted">Use code <strong>WELCOME10</strong> for 10% off.</p>
                            <button type="button" class="btn btn-primary px-4 mt-3" data-bs-dismiss="modal" style="background: #00d2ff; border:none; color:black; font-weight:bold;">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        setTimeout(function() { myModal.show(); }, 2000);
        localStorage.setItem('nexgen_welcome_seen', 'true');
    }
});
