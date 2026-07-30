// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tombol Mulai Belanja - Scroll ke bagian produk
    const btnMulaiBelanja = document.querySelector('.btn-primary');
    const productsSection = document.getElementById('products');
    
    if (btnMulaiBelanja && productsSection) {
        btnMulaiBelanja.addEventListener('click', () => {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 3. Fitur Modal Detail Produk
    const detailModal = document.getElementById('productDetailModal');
    const closeDetail = document.getElementById('closeProductDetail');
    
    const detailImage = document.getElementById('detailImage');
    const detailTitle = document.getElementById('detailTitle');
    const detailPrice = document.getElementById('detailPrice');
    const detailDesc = document.getElementById('detailDesc');

    // Tambahkan event click ke seluruh product-card (bukan hanya tombolnya)
    productCardsList.forEach(card => {
        card.style.cursor = 'pointer'; // Make it look clickable
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            const desc = card.getAttribute('data-desc');

            detailImage.src = imgSrc;
            detailTitle.textContent = title;
            detailPrice.textContent = price;
            detailDesc.textContent = desc || "Deskripsi produk tidak tersedia.";

            detailModal.classList.add('show');
        });
    });

    // Tutup modal
    if (closeDetail) {
        closeDetail.addEventListener('click', () => {
            detailModal.classList.remove('show');
        });
    }

    // Tutup modal jika klik di luar modal (overlay)
    window.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.remove('show');
    });
});

