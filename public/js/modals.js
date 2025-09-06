export async function carregarModais() {
    const resp = await fetch('/public/components/modals.html');
    const html = await resp.text();
    document.body.insertAdjacentHTML('beforeend', html);

    // Modal Ajuda
    const ajudaBtn = document.querySelector(".containerAjuda");
    const ajudaModalEl = document.getElementById("ajudaModal");
    const ajudaModal = new bootstrap.Modal(ajudaModalEl);

    if (ajudaBtn) {
        ajudaBtn.addEventListener("click", (e) => {
            e.preventDefault();
            ajudaModal.show();
        });
    }

    // Modal sair da página
    const containerLogoMenu = document.querySelector('.containerLogoMenu');
    const confirmExitBtn = document.getElementById('confirmExitBtn');
    const exitModalEl = document.getElementById('confirmExitModal');
    const exitModal = new bootstrap.Modal(exitModalEl);
    let targetHref = '';

    if (containerLogoMenu && confirmExitBtn) {
        containerLogoMenu.addEventListener('click', (e) => {
            e.preventDefault();
            targetHref = containerLogoMenu.getAttribute('href');
            exitModal.show();
        });

        confirmExitBtn.addEventListener('click', () => {
            exitModal.hide();
            window.location.href = targetHref;
        });
    }
}
