function createFooter() {
    const footerContent = `
        <div class="five">
            <div class="endofpage">
                <p>Diğer alışveriş seçenekleri: Erzurum'da <a class="underline" href="https://maps.app.goo.gl/dY18Hb5m3bhfnBMY9"> Yedi Renk Mobilya</a>'yı ziyaret edin. Veya <a class="underline" href="tel:+905055418325"> 0505 541 83 25</a> numaralı telefonu arayın.</p>
                <div class="divider"></div>
                <p>Telif Hakkı © 2025 Yedi Renk Mobilya. Tüm hakları saklıdır.</p>
                <ul class="legal">
                    <a href=""><li class="legalli"></li></a>
                    <a href=""><li class="legalli"></li></a>
                    <a href=""><li class="legalli"></li></a>
                    <a href=""><li class="legalli"></li></a>
                    <a href=""><li class="legalli"></li></a>
                    <a href=""><li class="legalli"></li></a>
                </ul>
            </div>
        </div>
    `;
    document.querySelector('.desktop').insertAdjacentHTML('beforeend', footerContent);
}

document.addEventListener('DOMContentLoaded', createFooter);