function createNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <a class="noact" href="index.html">
                <img class="navlogo" src="7c.png">
            </a>
            <div class="nwa">
                <ul class="nav-menu">
                    <li><a href="router.html" draggable="false">Renklendir</a></li>
                    <li><a href="ap.html" draggable="false">Restorasyon</a></li>
                    <li><a href="powerline.html" draggable="false">Özel Tasarım</a></li>
                    <li><a href="mesh.html" draggable="false">Montaj</a></li>
                    <li><a href="tel:+905321583184" draggable="false">İletişim</a></li>
                </ul>
            </div>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Sayfa Yüklendiğinde Navbar Oluştur
window.addEventListener('DOMContentLoaded', createNavbar);