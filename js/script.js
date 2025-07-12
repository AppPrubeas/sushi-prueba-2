document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('#sidebar nav ul li a');
    const contentSections = document.querySelectorAll('.content-section');
    const trackingInput = document.getElementById('tracking-input');
    const trackOrderBtn = document.getElementById('track-order-btn');
    const trackingInfo = document.getElementById('tracking-info');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');


    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // --- Datos del Menú (Transcritos del PDF) ---
    // NOTA: No puedo incluir imágenes, deberás agregarlas a la carpeta 'images/'
    // y actualizar la propiedad 'imageUrl' de cada producto si las tienes.
    const productsData = {
        futomaki: [
            [cite_start]{ id: 'futo_kani', name: 'FUTO KANI', description: 'Kanikama-Palta-Pepino-Masago-Cebollin', price: 6800 }, [cite: 1]
            [cite_start]{ id: 'futo_chicken', name: 'FUTO CHICKEN', description: 'Pollo Teriyaki-Queso Crema-Palta Pimenton-Ciboulette', price: 6600 }, [cite: 1]
            [cite_start]{ id: 'futo_sake', name: 'FUTO SAKE', description: 'Salmon-Palmito-Palta-Cebollin-Pimenton', price: 6900 }, [cite: 1]
            [cite_start]{ id: 'futo_ebi', name: 'FUTO EBI', description: 'Camarón-Queso Crema-Masago-Palta-Ciboulette', price: 7000 }, [cite: 1]
            [cite_start]{ id: 'futo_tako', name: 'FUTO TAKO', description: 'Pulpo-Queso Crema-Palta-Cebollin-Pimenton', price: 6900 }, [cite: 1]
            [cite_start]{ id: 'futo_mix', name: 'FUTO MIX', description: 'Salmón-Camaron-Palta-Queso Crema-Cebollin', price: 7900 }, [cite: 1]
            [cite_start]{ id: 'futo_acevichado', name: 'FUTO ACEVICHADO', description: 'Queso Crema-Masago-Palta-Palmito', price: 6400 }, [cite: 1]
            [cite_start]{ id: 'futo_smoke', name: 'FUTO SMOKE', description: 'Salmon Ahumado-Palta-Pimentón-Ciboulette-Esparrago', price: 6400 }, [cite: 1]
            [cite_start]{ id: 'futo_vegetal_panko', name: 'FUTO VEGETAL PANKO', description: 'Cebollin Panko-Queso Crema-Esparrago-Pimenton-Ciboulette', price: 5700 } [cite: 1]
        ],
        hosomaki: [
            [cite_start]{ id: 'hoso_kani', name: 'HOSO KANI', description: 'Kanikama-Palta', price: 3200 }, [cite: 66]
            [cite_start]{ id: 'hoso_chicken', name: 'HOSO CHICKEN', description: 'Pollo Teriyaki-Queso Crema-Cebollin', price: 3600 }, [cite: 66]
            [cite_start]{ id: 'hoso_sake', name: 'HOSO SAKE', description: 'Salmon-Queso Crema', price: 3900 }, [cite: 66]
            [cite_start]{ id: 'hoso_ebi', name: 'HOSO EBI', description: 'Camarón-Queso Crema-Ciboulette', price: 3700 }, [cite: 66]
            [cite_start]{ id: 'hoso_tako', name: 'HOSO TAKO', description: 'Pulpo-Queso Crema-Cebollin', price: 4400 }, [cite: 66]
            [cite_start]{ id: 'hoso_smoke', name: 'HOSO SMOKE', description: 'Salmón Ahumado-Palta-Ciboulette', price: 3800 }, [cite: 66]
            [cite_start]{ id: 'hoso_vegetal', name: 'HOSO VEGETAL', description: 'Palmito-Esparrago', price: 3100 }, [cite: 66]
            [cite_start]{ id: 'hoso_ton', name: 'HOSO TON', description: 'Atun-Palta', price: 4100 } [cite: 66]
        ],
        sake_rolls: [
            [cite_start]{ id: 'sake_kani', name: 'SAKE KANI', description: 'Kanikama-Palta-Ciboulette', price: 5900 }, [cite: 79]
            [cite_start]{ id: 'sake_ebi_roll', name: 'SAKE EBI ROLL', description: 'Camarón-Queso Crema-Masago', price: 6400 }, [cite: 79]
            [cite_start]{ id: 'sake_tako', name: 'SAKE TAKO', description: 'Pulpo-Queso Crema-Cebollin', price: 7000 }, [cite: 79]
            [cite_start]{ id: 'garden_sake', name: 'GARDEN SAKE', description: 'Palmito-Esparrago-Palta', price: 5800 }, [cite: 79]
            [cite_start]{ id: 'sake_smoke', name: 'SAKE SMOKE', description: 'Salmon Ahumado-Queso Crema-Palta', price: 6500 }, [cite: 79]
            [cite_start]{ id: 'sake_ebi_pankonanese', name: 'SAKE EBI PANKONANESE', description: 'Camarón Panko-Queso Crema-Cebollin', price: 6700 }, [cite: 79]
            [cite_start]{ id: 'sake_acevichado', name: 'SAKE ACEVICHADO', description: 'Queso Crema-Palta-Palmito', price: 8000 }, [cite: 79]
            [cite_start]{ id: 'sake_vegetal_panko', name: 'SAKE VEGETAL PANKO', description: 'Cebollin Panko-Queso Crema-Esparrago', price: 5900 } [cite: 79]
        ],
        uramaki_rolls: [
            [cite_start]{ id: 'california_kani', name: 'CALIFORNIA KANI', description: 'Kanikama-Palta', price: 4400 }, [cite: 156]
            [cite_start]{ id: 'california_chicken', name: 'CALIFORNIA CHICKEN', description: 'Pollo Teriyaki-Palta', price: 4800 }, [cite: 156]
            [cite_start]{ id: 'california_sake', name: 'CALIFORNIA SAKE', description: 'Salmon-Palta', price: 5300 }, [cite: 156]
            [cite_start]{ id: 'california_ebi', name: 'CALIFORNIA EBI', description: 'Camarón-Palta', price: 4900 }, [cite: 156]
            [cite_start]{ id: 'california_vegetal', name: 'CALIFORNIA VEGETAL', description: 'Palmito-Palta-Ciboulette-Esparrago', price: 4700 }, [cite: 156]
            [cite_start]{ id: 'maki_ebi_tempura', name: 'MAKI EBI TEMPURA', description: 'Camaron Tempura-Queso Crema-Ciboulette', price: 5600 }, [cite: 156]
            [cite_start]{ id: 'maki_yaki_panko', name: 'MAKI YAKI PANKO', description: 'Pollo Panko-Queso Crema-Cebollin', price: 5500 }, [cite: 156]
            [cite_start]{ id: 'maki_sake_panko', name: 'MAKI SAKE PANKO', description: 'Salmon Panko-Queso Crema-Cebollin', price: 5900 }, [cite: 156]
            [cite_start]{ id: 'smoke_maki', name: 'SMOKE MAKI', description: 'Salmón Ahumado-Queso Crema-Cebollin', price: 5200 }, [cite: 156]
            [cite_start]{ id: 'maki_kani', name: 'MAKI KANI', description: 'Kanikama-Queso Crema-Palta', price: 4700 }, [cite: 156]
            [cite_start]{ id: 'maki_yaki', name: 'MAKI YAKI', description: 'Pollo Teriyaki-Queso Crema-Palta', price: 5300 }, [cite: 156]
            [cite_start]{ id: 'sake_maki', name: 'SAKE MAKI', description: 'Salmon-Queso Crema-Palta', price: 5700 }, [cite: 156]
            [cite_start]{ id: 'ebi_maki', name: 'EBI MAKI', description: 'Camarón-Queso Crema-Palta-Ciboulette', price: 5400 }, [cite: 156]
            [cite_start]{ id: 'tako_maki_roll', name: 'TAKO MAKI ROLL', description: 'Pulpo-Palta-Ciboulette', price: 5900 }, [cite: 156]
            [cite_start]{ id: 'ebi_spicy', name: 'EBI SPICY', description: 'Camaron-Palta-Ciboulette-Sriracha', price: 5000 }, [cite: 156]
            [cite_start]{ id: 'maguro_maki', name: 'MAGURO MAKI', description: 'Atún-Palta-Ciboulette', price: 5500 }, [cite: 156]
            [cite_start]{ id: 'ura_vegan', name: 'URA VEGAN', description: 'Paita-Pepino-Cebollin', price: 4400 }, [cite: 156]
            [cite_start]{ id: 'ura_acevichado', name: 'URA ACEVICHADO', description: 'Queso Crema-Palmito-Palta', price: 6500 } [cite: 156]
        ],
        avocado_rolls: [
            [cite_start]{ id: 'avo_kani', name: 'AVO KANI', description: 'Kanikama-Queso Crema-Cebollin', price: 5400 }, [cite: 157]
            [cite_start]{ id: 'avo_chicken', name: 'AVO CHICKEN', description: 'Pollo Teriyaki-Queso Crema-Cebollin', price: 6200 }, [cite: 157]
            [cite_start]{ id: 'avo_sake', name: 'AVO SAKE', description: 'Salmon-Queso Crema-Ciboulette', price: 6500 }, [cite: 157]
            [cite_start]{ id: 'avo_ebi', name: 'AVO EBI', description: 'Camaron Queso Crema-Cebollin', price: 6400 }, [cite: 157]
            [cite_start]{ id: 'tako_roll_avo', name: 'TAKO ROLL', description: 'Pulpo-Queso Crema-Cebollin', price: 6600 }, [cite: 157]
            [cite_start]{ id: 'avo_fresh', name: 'AVO FRESH', description: 'Palmito-Esparrago-Cebollin', price: 5200 }, [cite: 157]
            [cite_start]{ id: 'teri_panko', name: 'TERI PANKO', description: 'Pollo Panko-Queso Crema Cebollin', price: 6500 }, [cite: 157]
            [cite_start]{ id: 'avo_sake_panko', name: 'AVO SAKE PANKO', description: 'Salmon Panko-Queso Crema-Cebollin', price: 6900 }, [cite: 157]
            [cite_start]{ id: 'avo_ebi_tempura', name: 'AVO EBI TEMPURA', description: 'Camarón Tempura-Queso Crema-Ciboulette', price: 6700 }, [cite: 157]
            [cite_start]{ id: 'avo_smoke_roll', name: 'AVO SMOKE ROLL', description: 'Salmón Ahumado-Queso Crema-Cebollin', price: 6200 }, [cite: 157]
            [cite_start]{ id: 'avo_mix', name: 'AVO MIX', description: 'Salmón-Camarón-Queso Crema-Cebollin', price: 6900 }, [cite: 157]
            [cite_start]{ id: 'avo_tropical', name: 'AVO TROPICAL', description: 'Salmón-Mango', price: 6600 }, [cite: 157]
            [cite_start]{ id: 'ebi_like', name: 'EBI LIKE', description: 'Camaran-Queso Crema-Masago', price: 6200 }, [cite: 157]
            [cite_start]{ id: 'avo_tonno', name: 'AVO TONNO', description: 'Atun-Queso Crema-Cebollin', price: 6400 }, [cite: 157]
            [cite_start]{ id: 'avo_like_roll', name: 'AVO LIKE ROLL', description: 'Salmon-Palmito-Esparrago', price: 6300 }, [cite: 157]
            [cite_start]{ id: 'avo_vegetal_panko', name: 'AVO VEGETAL PANKO', description: 'Cebollin Panko-Queso Crema-Pimentón', price: 5400 }, [cite: 157]
            [cite_start]{ id: 'avo_acevichado', name: 'AVO ACEVICHADO', description: 'Queso Crema-Esparrago-Palmito', price: 7200 } [cite: 157]
        ],
        cream_rolls: [
            [cite_start]{ id: 'cream_kani', name: 'CREAM KANI', description: 'Kanikama-Palta', price: 5000 }, [cite: 158]
            [cite_start]{ id: 'cream_chicken', name: 'CREAM CHICKEN', description: 'Pollo Teriyaki-Palta-Cebollin', price: 5600 }, [cite: 158]
            [cite_start]{ id: 'cream_sake', name: 'CREAM SAKE', description: 'Salmon-Palta-Ciboulette', price: 6200 }, [cite: 158]
            [cite_start]{ id: 'cream_ebi', name: 'CREAM EBI', description: 'Camarón-Ciboulette-Palta', price: 5800 }, [cite: 158]
            [cite_start]{ id: 'tako_snow', name: 'TAKO SNOW', description: 'Pulpo-Palta-Pimenton', price: 6300 }, [cite: 158]
            [cite_start]{ id: 'snow_ebi_panko', name: 'SNOW EBI PANKO', description: 'Camarón Panko-Palta-Cebollin', price: 6300 }, [cite: 158]
            [cite_start]{ id: 'snow_sake_tempura', name: 'SNOW SAKE TEMPURA', description: 'Salmon Tempura-Esparraga-Pimenton', price: 6400 }, [cite: 158]
            [cite_start]{ id: 'snow_yaki_panko', name: 'SNOW YAKI PANKO', description: 'Pollo Panko-Palta-Cebollin', price: 6100 }, [cite: 158]
            [cite_start]{ id: 'snow_tropical', name: 'SNOW TROPICAL', description: 'Camarón Panko-Mango', price: 6400 }, [cite: 158]
            [cite_start]{ id: 'cream_chili', name: 'CREAM CHILI', description: 'Salmon-Coco/Merken-Aji Verde-Cebollin', price: 6000 }, [cite: 158]
            [cite_start]{ id: 'snow_mix', name: 'SNOW MIX', description: 'Camaron-Salmon-Palta-Cebollin', price: 6000 }, [cite: 158]
            [cite_start]{ id: 'cream_smoke', name: 'CREAM SMOKE', description: 'Salmon Ahumado-Palta-Cebollin', price: 5700 }, [cite: 158]
            [cite_start]{ id: 'cream_like', name: 'CREAM LIKE', description: 'Masago-Palmito-Palta', price: 5500 }, [cite: 158]
            [cite_start]{ id: 'cream_vegetal', name: 'CREAM VEGETAL', description: 'Palmito-Esparrago-Cebollin', price: 5000 }, [cite: 158]
            [cite_start]{ id: 'cream_vegetal_panko', name: 'CREAM VEGETAL PANKO', description: 'Cebollin Panko-Palta-Pimentón', price: 5100 }, [cite: 158]
            [cite_start]{ id: 'tuna_cream', name: 'TUNA CREAM', description: 'Atun-Palta-Palmito', price: 6100 }, [cite: 158]
            [cite_start]{ id: 'cream_acevichado', name: 'CREAM ACEVICHADO', description: 'Palto-Esparrago-Palmito', price: 6900 } [cite: 158]
        ],
        tempuras_panko: [
            [cite_start]{ id: 'kani_panko', name: 'KANI PANKO', description: 'Kanikama-Queso Crema-Pimenton', price: 5300 }, [cite: 159]
            [cite_start]{ id: 'chicken_panko', name: 'CHICKEN PANKO', description: 'Pollo Teriyaki-Queso Crema-Cebollin', price: 5800 }, [cite: 159]
            [cite_start]{ id: 'sake_panko', name: 'SAKE PANKO', description: 'Salmon-Queso Crema-Ciboulette', price: 6300 }, [cite: 159]
            [cite_start]{ id: 'ebi_panko_temp', name: 'EBI PANKO', description: 'Camarón-Queso Crema-Cebollin', price: 5900 }, [cite: 159]
            [cite_start]{ id: 'tako_panko', name: 'TAKO PANKO', description: 'Pulpo-Queso Crema-Ciboulette', price: 6500 }, [cite: 159]
            [cite_start]{ id: 'vegetal_panko', name: 'VEGETAL PANKO', description: 'Esparrago-Pimenton-Palta', price: 5400 }, [cite: 159]
            [cite_start]{ id: 'smoke_panko', name: 'SMOKE PANKO', description: 'Salman Ahumado-Queso Crema-Cebollin', price: 5900 }, [cite: 159]
            [cite_start]{ id: 'mix_panko', name: 'MIX PANKO', description: 'Camaron-Salmon-Queso Crema-Cebollin', price: 6500 }, [cite: 159]
            [cite_start]{ id: 'vegan_panko', name: 'VEGAN PANKO', description: 'Palta-Tomate Cherry-Choclo Baby', price: 5500 }, [cite: 159]
            [cite_start]{ id: 'chicken_nuss_panko', name: 'CHICKEN NUSS PANKO', description: 'Pollo Teriyaki-Queso Crema-Nueces/Almendras', price: 6100 }, [cite: 159]
            [cite_start]{ id: 'ebi_panko_2_0', name: 'EBI PANKO 2.0', description: 'Camarón-Queso Crema-Palta', price: 6300 }, [cite: 159]
            [cite_start]{ id: 'sea_bomb', name: 'SEA BOMB', description: 'Camaron-Salmon-Pulpo-Queso Crema-Ciboulette', price: 7000 }, [cite: 159]
            [cite_start]{ id: 'chicken_panko_2_0', name: 'CHICKEN PANKO 2.0', description: 'Pollo Teriyaki-Queso Crema-Palta', price: 6200 }, [cite: 159]
            [cite_start]{ id: 'maguro_panko', name: 'MAGURO PANKO', description: 'Atun-Queso Crema-Cebollin', price: 6400 }, [cite: 159]
            [cite_start]{ id: 'panko_acevichado', name: 'PANKO ACEVICHADO', description: 'Queso Crema-Palta', price: 7500 } [cite: 159]
        ],
        special_rolls: [
            [cite_start]{ id: 'like_ebi_tempura', name: 'LIKE EBI TEMPURA', description: 'Camarón-Queso Crema-Ciboulette (Envuelto en Tempura, 8 Cortes)', price: 5800 }, [cite: 160]
            [cite_start]{ id: 'like_ura_ebi', name: 'LIKE URA EBI', description: 'Camaron Tempura-Queso Crema-Aji Verde (Envuelto en Masago, 8 Cortes)', price: 6300 }, [cite: 160]
            [cite_start]{ id: 'hoso_chicken_panko_special', name: 'HOSO CHICKEN PANKO', description: 'Pollo Teriyaki-Queso Crema-Cebollin (Envuelto en Nori/Panko, 10 Cortes)', price: 6000 }, [cite: 160]
            [cite_start]{ id: 'maki_gray_roll', name: 'MAKI GRAY ROLL', description: 'Queso Crema-Palta-Pepino (Envuelto en Amapola, 8 Cortes)', price: 4500 }, [cite: 160]
            [cite_start]{ id: 'army_smoke_roll', name: 'ARMY SMOKE ROLL', description: 'Salmón Ahumado-Queso Crema-Palta (Envuelto en Sésamo/Ciboulette, 8 Cortes)', price: 5300 }, [cite: 160]
            [cite_start]{ id: 'like_ebi_avo', name: 'LIKE EBI AVO', description: 'Camaron-Queso Crema Palmito (Envuelto en Palta, 8 Cortes)', price: 6200 }, [cite: 160]
            [cite_start]{ id: 'hoso_nuss', name: 'HOSO NUSS', description: 'Queso Crema-Nueces/Almendra (Envuelto en Nori/Tempura, 6 Cortes)', price: 4000 }, [cite: 160]
            [cite_start]{ id: 'like_avo_chicken', name: 'LIKE AVO CHICKEN', description: 'Pollo Teriyaki-Queso Crema-Palmito (Envuelto en Palta, 8 Cortes)', price: 6500 }, [cite: 160]
            [cite_start]{ id: 'green_tonno_furai', name: 'GREEN TONNO FURAI', description: 'Atun Panko-Queso Crema (Envuelto en Ciboulette, 8 Cortes)', price: 6200 }, [cite: 160]
            [cite_start]{ id: 'ebi_rainbow', name: 'EBI RAINBOW', description: 'Camaron Panko-Queso Crema-Cebollin (Envuelto en Palta/Salmón, 8 Cortes)', price: 6800 }, [cite: 160]
            [cite_start]{ id: 'sake_ebi_grill', name: 'SAKE EBI GRILL', description: 'Camarón-Queso Crema-Cebollin (Envuelto en Salmón Grillado, 8 Cortes)', price: 6500 }, [cite: 160]
            [cite_start]{ id: 'coco_tempura', name: 'COCO TEMPURA', description: 'Salmon-Queso Crema-Pimenton (Envuelto en Tempura/Coco, 8 Cortes)', price: 6500 }, [cite: 160]
            [cite_start]{ id: 'green_mix', name: 'GREEN MIX', description: 'Salmon-Camarón-Queso Crema (Envuelto en Ciboulette, 8 Cortes)', price: 6400 }, [cite: 160]
            [cite_start]{ id: 'chicken_crispy_nuss', name: 'CHICKEN CRISPY NUSS', description: 'Pollo Teriyaki-Queso Crema Panko-Ciboulette (Envuelto en Nuez/Almendra, 8 Cortes)', price: 6800 } [cite: 160]
        ],
        rolls_sin_arroz: [
            [cite_start]{ id: 'vegetal_panko_sin_arroz', name: 'Vegetal Panko', description: '8 Cortes', price: 'consultar' }, [cite: 68]
            [cite_start]{ id: 'pollo_panko_sin_arroz', name: 'Pollo Panko', description: '8 Unidades', price: 'consultar' }, [cite: 68]
            [cite_start]{ id: 'salmon_panko_sin_arroz', name: 'Salmon Panko', description: '8 Unidades', price: 'consultar' } [cite: 68]
        ],
        tablas_clasicas: [
            [cite_start]{ id: 'tabla_1_18', name: 'TABLA 1 - 18 Piezas', description: 'Cream Chicken (9 Cortes), Maki Kani (9 Cortes)', price: 8490 }, [cite: 16, 17]
            [cite_start]{ id: 'tabla_2_38', name: 'TABLA 2 - 38 Piezas', description: 'Ava Sake (8 Cortes), Maki Kani (8 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes), Palta Panko (4 Unidades), Salmon Panko (4 Unidades)', price: 17990 }, [cite: 18, 19, 20, 21, 22, 23, 24]
            [cite_start]{ id: 'tabla_3_72', name: 'TABLA 3 - 72 Piezas', description: 'Avo Sake (8 Cortes), Maki Kani (8 Cortes), Cream Chicken (8 Cortes), Futo Sake (10 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes)', price: 29990 } [cite: 25, 26, 27, 28, 29, 30, 31]
        ],
        super_promos: [
            { id: 'super_1_30', name: 'SUPER 1 (30 piezas)', description: '1 Pollo Teriyaki - Queso Crema - Cebollin (Env. Palta), 1 Kanikama-Palta Pimenton (Env. Sésamo), 1 Camaron-Queso Crema - Palta (Panko). [cite_start]Incluye 1 Soyo, 1 Unagui, 2 Palitos.', price: 12990 }, [cite: 33, 34, 35, 36, 37]
            { id: 'super_2_50', name: 'SUPER 2 (50 piezas)', description: '1 Pollo Teriyaki - Queso Crema - Cebollin (Env. Palta), 1 Kanikama - Palta - Pimenton (Env. Sésamo), 1 Pollo Teriyaki - Queso Crema-Cebollin (Env. Amapola), 1 Camarón - Queso Crema - Palta (Panko), 1 Palta-Palmito - Pirnenton (Panko). [cite_start]Incluye: 2 Goya, 1 Unagul, 3 Palitos.', price: 18990 }, [cite: 38, 39, 40, 41, 42, 43, 44, 45]
            { id: 'super_3_70', name: 'SUPER 3 (70 piezas)', description: '1 Pollo Teriyaki-Queso Crema - Cebollin (Env. Palta), 1 Kanikama-Palta Pimenton (Env. Sésamo), 1 Pollo Teriyaki-Queso Crema-Cebollin (Env. Amapola), 1 Palmito - Esparrago - Cebollin (Env. Queso Crema), 1 Camaron-Queso Crema - Palta (Panko), 1 Palta-Palmito - Pimentón (Panko), 1 Pollo Teriyaki - Queso Crema-Cebollin (Panko). [cite_start]Incluye Soyo, 2 Unagui, Palitos.', price: 25990 } [cite: 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
        ],
        otras_tablas: [
            [cite_start]{ id: 'tabla_like_50', name: 'TABLA LIKE-50 Piezas', description: 'California Kani (9 Cortes), Avo Chicken (9 Cortes), Hoso Chicken Panko (10 Cortes), Cream Vegetal (9 Cortes), Vegetal Panko (9 Cortes), Pollo Panko (4 Unidades)', price: 20990 }, [cite: 71, 72, 76, 78, 80, 82]
            [cite_start]{ id: 'tabla_hot_34', name: 'TABLA HOT-34 Piezas', description: '1-Salmon-Camaron-Queso Crema-Cebollin (Envuelto en Palta), 2-Pollo Panko-Palta-Palmito-Cebollin-Pimenton (Envuelto en Queso Crema), 3-Camaron Panko-Queso Crema-Masago-Palta-Cebollin (Envuelto en Salmon), 4-Pollo Teriyaki-Palta-Nueces-Queso Crema-Cebollin (Envuelto en Panko), 5-Camarón-Salmon-Queso Crema-Palta-Cebollin (Envuelto en Panko).', price: 18990 }, [cite: 85, 92]
            [cite_start]{ id: 'tabla_vegan_32', name: 'TABLA VEGAN-32 Piezas', description: 'California Vegetal (8 Cortes), Vegan Panko (8 Cortes), Avo Fresh (8 Cortes), Ura Vegan (envuelto en amapola) (8 Unidades)', price: 14990 } [cite: 112, 113, 114, 115, 116]
        ],
        sashimi: [
            [cite_start]{ id: 'sashimi_salmon_3', name: 'SALMON', description: '3 Piezas', price: 2800 }, [cite: 99, 100]
            [cite_start]{ id: 'sashimi_salmon_6', name: 'SALMON', description: '6 Piezas', price: 5000 }, [cite: 99, 100]
            [cite_start]{ id: 'sashimi_salmon_12', name: 'SALMON', description: '12 Piezas', price: 9000 }, [cite: 99, 101]
            [cite_start]{ id: 'sashimi_pulpo_3', name: 'PULPO', description: '3 Piezas', price: 3400 }, [cite: 103, 104]
            [cite_start]{ id: 'sashimi_pulpo_6', name: 'PULPO', description: '6 Piezas', price: 6000 }, [cite: 103, 104]
            [cite_start]{ id: 'sashimi_pulpo_12', name: 'PULPO', description: '12 Piezas', price: 10500 } [cite: 103, 105]
        ],
        snack_tempurizados: [
            [cite_start]{ id: 'temp_salmon_panko_3', name: 'SALMON PANKO', description: '3 Unidades', price: 3000 }, [cite: 119, 120]
            [cite_start]{ id: 'temp_salmon_panko_6', name: 'SALMON PANKO', description: '6 Unidades', price: 5500 }, [cite: 119, 120]
            [cite_start]{ id: 'temp_salmon_panko_12', name: 'SALMON PANKO', description: '12 Unidades', price: 9900 }, [cite: 119, 121]
            [cite_start]{ id: 'temp_ebi_3', name: 'EBI Temp.', description: '3 Unidades', price: 2900 }, [cite: 122, 123]
            [cite_start]{ id: 'temp_ebi_6', name: 'EBI Temp.', description: '6 Unidades', price: 5400 }, [cite: 122, 124]
            [cite_start]{ id: 'temp_ebi_12', name: 'EBI Temp.', description: '12 Unidades', price: 9800 }, [cite: 122, 125]
            [cite_start]{ id: 'temp_pollo_3', name: 'POLLO', description: '3 Unidades', price: 2800 }, [cite: 126, 127]
            [cite_start]{ id: 'temp_pollo_6', name: 'POLLO', description: '6 Unidades', price: 4900 }, [cite: 126, 128]
            [cite_start]{ id: 'temp_pollo_12', name: 'POLLO', description: '12 Unidades', price: 9000 }, [cite: 126, 129]
            [cite_start]{ id: 'temp_panko_verduras_3', name: 'PANKO VERDURAS', description: '3 Unidades', price: 2000 }, [cite: 130, 131, 132]
            [cite_start]{ id: 'temp_panko_verduras_6', name: 'PANKO VERDURAS', description: '6 Unidades', price: 3600 }, [cite: 130, 132]
            [cite_start]{ id: 'temp_panko_verduras_12', name: 'PANKO VERDURAS', description: '12 Unidades', price: 6800 } [cite: 130, 132]
        ],
        nigiris: [
            [cite_start]{ id: 'nigiri_salmon', name: 'SALMON NIGIRI', description: 'Unidad', price: 1000 }, [cite: 136]
            [cite_start]{ id: 'nigiri_camaron', name: 'CAMARON NIGIRI', description: 'Unidad', price: 1000 }, [cite: 138]
            [cite_start]{ id: 'nigiri_kanikama', name: 'KANIKAMA NIGIRI', description: 'Unidad', price: 900 } [cite: 140]
        ],
        nigiris_crispy: [
            [cite_start]{ id: 'nigiris_crispy_14', name: 'NIGIRIS CRISPY', description: 'Mezcla de arroz - Queso Crema - Cebollin - Pollo', price: 4290 } [cite: 137, 139, 141, 142]
        ],
        gohan: [
            [cite_start]{ id: 'gohan_mixto', name: 'GOHAN MIXTO', description: 'Arroz con variedad de ingredientes.', price: 6990 }, [cite: 74, 75]
            [cite_start]{ id: 'gohan_mixto_panko', name: 'GOHAN MIXTO PANKO', description: 'Arroz con variedad de ingredientes y panko.', price: 7990 }, [cite: 81]
            [cite_start]{ id: 'gohan_pollo', name: 'GOHAN POLLO', description: 'Arroz con pollo.', price: 6990 }, [cite: 81]
            [cite_start]{ id: 'gohan_pollo_panko', name: 'GOHAN POLLO PANKO', description: 'Arroz con pollo y panko.', price: 7990 }, [cite: 81]
            [cite_start]{ id: 'gohan_vegetal', name: 'GOHAN VEGETAL', description: 'Arroz con vegetales.', price: 5490 } [cite: 83, 84]
        ],
        extras: [
            [cite_start]{ id: 'extra_salsa_saya', name: 'Salsa Saya', description: '', price: 500 }, [cite: 118]
            [cite_start]{ id: 'extra_sriracha', name: 'Sriracha', description: '', price: 500 }, [cite: 118]
            [cite_start]{ id: 'extra_salsa_unagui', name: 'Salsa Unagui', description: '', price: 900 }, [cite: 118]
            [cite_start]{ id: 'extra_wasabi', name: 'Wasabi', description: '', price: 400 }, [cite: 118]
            [cite_start]{ id: 'extra_jengibre', name: 'Jengibre', description: '', price: 400 }, [cite: 118]
            [cite_start]{ id: 'extra_palitos', name: 'Palitos', description: '', price: 150 }, [cite: 118]
            [cite_start]{ id: 'extra_ayuda_palitos', name: 'Ayuda Palitos', description: '', price: 400 }, [cite: 118]
            [cite_start]{ id: 'extra_envoltura_hoja_arroz', name: 'Envoltura Hoja de Arroz', description: '', price: 500 }, [cite: 118]
            [cite_start]{ id: 'extra_ciboulette', name: 'Ciboulette', description: '', price: 500 } [cite: 118]
        ],
        bebidas: [
            [cite_start]{ id: 'bebida_coca_cola', name: 'Coca Cola', description: '', price: 2700 }, [cite: 143, 144]
            [cite_start]{ id: 'bebida_sprite', name: 'Sprite', description: '', price: 2700 }, [cite: 143, 144]
            [cite_start]{ id: 'bebida_fanta', name: 'Fanta', description: '', price: 2700 }, [cite: 143, 145]
            [cite_start]{ id: 'bebida_coca_zero', name: 'Coca Zero', description: '', price: 2700 } [cite: 143, 145]
        ]
    };

    // --- Funcionalidad del Sidebar ---
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('sidebar-hidden');
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('visible');
        }
    });

    // Ocultar sidebar en móviles si se hace clic en el contenido principal
    mainContent.addEventListener('click', () => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('visible')) {
            sidebar.classList.remove('visible');
        }
    });

    // --- Navegación de Secciones (sin redirección) ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetSectionId = link.getAttribute('data-section');

            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('visible');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Vuelve al inicio de la página al cambiar de sección
        });
    });

    // Mostrar la sección de inicio por defecto
    document.getElementById('inicio').classList.add('active');

    // --- Funcionalidad del Carrito ---
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <span>${item.name} - $${item.price.toLocaleString('es-CL')}</span>
                    <button data-index="${index}" class="remove-from-cart-btn">Eliminar</button>
                `;
                cartItemsContainer.appendChild(itemDiv);
                total += item.price;
            });
        }
        cartTotalSpan.textContent = total.toLocaleString('es-CL');

        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                saveCart();
            });
        });
    }

    // Función para agregar al carrito, accesible desde los botones HTML
    window.addToCart = (product) => {
        // Clonar el producto para asegurar que no haya referencias cruzadas si se modifica
        const productToAdd = { ...product };
        cart.push(productToAdd);
        saveCart();
        alert(`${product.name} ha sido agregado al carrito.`);
    };

    // Botón de finalizar pedido (placeholder)
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Pedido enviado! (Esta es una simulación. En un sitio real, aquí se procesaría el pago y se enviaría el pedido.)');
            cart = []; // Vaciar el carrito después de "finalizar"
            saveCart();
        } else {
            alert('Tu carrito está vacío. Agrega algunos productos para finalizar el pedido.');
        }
    });

    // --- Funcionalidad de Seguimiento de Pedidos ---
    // Genera un número de seguimiento aleatorio de hasta 12 dígitos
    function generateTrackingNumber() {
        return Math.floor(100000000000 + Math.random() * 900000000000).toString();
    }

    trackOrderBtn.addEventListener('click', () => {
        const trackingNumber = trackingInput.value.trim();
        if (trackingNumber) {
            const statusOptions = [
                "Pedido recibido, esperando confirmación.",
                "Preparando tu sushi con dedicación.",
                "¡Tu pedido va en camino! Disfrútalo pronto.",
                "Pedido entregado. ¡Esperamos que lo hayas disfrutado!",
                "Lo sentimos, no encontramos un pedido con este número. Por favor, verifica."
            ];
            // Simulación simple: si el número es "123456789012" es entregado, sino, aleatorio.
            // En un sistema real, harías una llamada a una API de backend.
            let status;
            if (trackingNumber === '123456789012') { // Un número de prueba
                status = statusOptions[3]; // Entregado
            } else {
                status = statusOptions[Math.floor(Math.random() * (statusOptions.length - 1))]; // Cualquier estado menos "entregado" para otros números
            }
            trackingInfo.innerHTML = `<p>Estado de tu pedido <strong>${trackingNumber}</strong>: <strong>${status}</strong></p>`;
        } else {
            trackingInfo.innerHTML = '<p>Por favor, ingresa un número de seguimiento.</p>';
        }
    });

    // --- Carrusel de Imágenes (básico) ---
    const carouselContainer = document.querySelector('#inicio #carousel');
    const carouselImages = [
        'https://via.placeholder.com/1200x500/f12121/ffffff?text=PROMOCION+ESPECIAL+1',
        'https://via.placeholder.com/1200x500/000000/ffffff?text=NUEVOS+ROLLS+DISPONIBLES',
        'https://via.placeholder.com/1200x500/e4e4e4/000000?text=DELIVERY+RAPIDO+Y+FRESCO'
    ];
    let currentImageIndex = 0;

    function updateCarousel() {
        if (!carouselContainer) return;
        carouselContainer.innerHTML = `<img src="${carouselImages[currentImageIndex]}" alt="Promoción de Sushi Like">`;
    }

    if (carouselContainer) {
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            updateCarousel();
        }, 4000); // Cambia cada 4 segundos
        updateCarousel(); // Mostrar la primera imagen al cargar
    }


    // --- Renderizado Dinámico de Productos ---
    function renderProducts(containerId, products) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Contenedor no encontrado: ${containerId}`);
            return;
        }
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar productos
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-item';
            productDiv.innerHTML = `
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p class="price">$${product.price ? product.price.toLocaleString('es-CL') : 'Consultar'}</p>
                ${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.name}">` : ''}
                <button onclick="addToCart({ id: '${product.id}', name: '${product.name}', price: ${product.price || 0} })">Agregar al carrito</button>
            `;
            container.appendChild(productDiv);
        });
    }

    // Llamadas para renderizar cada categoría de productos
    renderProducts('futomaki-rolls', productsData.futomaki);
    renderProducts('hosomaki-rolls', productsData.hosomaki);
    renderProducts('sake-rolls', productsData.sake_rolls);
    renderProducts('uramaki-rolls', productsData.uramaki_rolls);
    renderProducts('avocado-rolls', productsData.avocado_rolls);
    renderProducts('cream-rolls', productsData.cream_rolls);
    renderProducts('tempuras-panko-rolls', productsData.tempuras_panko);
    renderProducts('special-rolls', productsData.special_rolls);
    renderProducts('rolls-sin-arroz', productsData.rolls_sin_arroz);
    renderProducts('tablas-clasicas', productsData.tablas_clasicas);
    renderProducts('super-promos', productsData.super_promos);
    renderProducts('otras-tablas', productsData.otras_tablas);
    renderProducts('sashimi-items', productsData.sashimi);
    renderProducts('snack-tempurizados-items', productsData.snack_tempurizados);
    renderProducts('nigiris-items', productsData.nigiris);
    renderProducts('nigiris-crispy-items', productsData.nigiris_crispy);
    renderProducts('gohan-items', productsData.gohan);
    renderProducts('extras-items', productsData.extras);
    renderProducts('bebidas-list', productsData.bebidas);


    // Renderizado de las Super Promos detalladas en la sección de Promociones
    const promosSuperDetailContainer = document.getElementById('promos-super-detail');
    if (promosSuperDetailContainer) {
        productsData.super_promos.forEach(promo => {
            const promoDiv = document.createElement('div');
            promoDiv.className = 'product-item'; // Reutilizamos el estilo de item de producto
            promoDiv.innerHTML = `
                <h4>${promo.name}</h4>
                <p>${promo.description}</p>
                <p class="price">$${promo.price.toLocaleString('es-CL')}</p>
                 <button onclick="addToCart({ id: '${promo.id}', name: '${promo.name}', price: ${promo.price} })">Agregar al carrito</button>
            `;
            promosSuperDetailContainer.appendChild(promoDiv);
        });
    }


    // Carga inicial del carrito
    renderCart();
});