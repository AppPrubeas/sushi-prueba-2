// js/script.js

// Objeto que contiene todos los datos del menú, categorizados y con sus productos.
const menuData = {
    "Rolls": [
        {
            "category": "FUTOMAKI",
            "description": "Roll Gigante de 10 Cortes Envuelto en Alga Nori",
            "products": [
                { "id": "futo-kani", "name": "FUTO KANI", "ingredients": "Kanikama, Palta, Pepino, Masago, Cebollín", "price": 6800, "image": "futo-kani.jpg" },
                { "id": "futo-chicken", "name": "FUTO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Palta, Pimentón, Ciboulette", "price": 6600, "image": "futo-chicken.jpg" },
                { "id": "futo-sake", "name": "FUTO SAKE", "ingredients": "Salmón, Palmito, Palta, Cebollín, Pimentón", "price": 6900, "image": "futo-sake.jpg" },
                { "id": "futo-ebi", "name": "FUTO EBI", "ingredients": "Camarón, Queso Crema, Masago, Palta, Ciboulette", "price": 7000, "image": "futo-ebi.jpg" },
                { "id": "futo-tako", "name": "FUTO TAKO", "ingredients": "Pulpo, Queso Crema, Palta, Cebollín, Pimentón", "price": 7000, "image": "futo-tako.jpg" },
                { "id": "futo-mix", "name": "FUTO MIX", "ingredients": "Salmón, Camarón, Palta, Queso Crema, Cebollín", "price": 7900, "image": "futo-mix.jpg" },
                { "id": "futo-acevichado", "name": "FUTO ACEVICHADO", "ingredients": "Queso Crema, Masago, Palta, Palmito", "price": 6400, "image": "futo-acevichado.jpg" },
                { "id": "futo-smoke", "name": "FUTO SMOKE", "ingredients": "Salmón Ahumado, Palta, Pimentón, Ciboulette, Espárrago", "price": 7000, "image": "futo-smoke.jpg" },
                { "id": "futo-vegetal-panko", "name": "FUTO VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Espárrago, Pimentón, Ciboulette", "price": 5700, "image": "futo-vegetal-panko.jpg" }
            ]
        },
        {
            "category": "SAKE ROLLS",
            "description": "Roll de 8 Cortes Envuelto en Salmón",
            "products": [
                { "id": "sake-kani", "name": "SAKE KANI", "ingredients": "Kanikama, Palta, Ciboulette", "price": 5900, "image": "sake-kani.jpg" },
                { "id": "sake-ebi-roll", "name": "SAKE EBI ROLL", "ingredients": "Camarón, Queso Crema, Masago", "price": 6400, "image": "sake-ebi-roll.jpg" },
                { "id": "sake-tako", "name": "SAKE TAKO", "ingredients": "Pulpo, Queso Crema, Ciboulette", "price": 7000, "image": "sake-tako.jpg" },
                { "id": "garden-sake", "name": "GARDEN SAKE", "ingredients": "Palmito, Espárrago, Palta", "price": 5800, "image": "garden-sake.jpg" },
                { "id": "sake-smoke", "name": "SAKE SMOKE", "ingredients": "Salmón Ahumado, Queso Crema, Palta", "price": 6500, "image": "sake-smoke.jpg" },
                { "id": "sake-ebi-pankonanese", "name": "SAKE EBI PANKONANESE", "ingredients": "Camarón Panko, Queso Crema, Cebollín", "price": 6700, "image": "sake-ebi-pankonanese.jpg" },
                { "id": "sake-acevichado", "name": "SAKE ACEVICHADO", "ingredients": "Queso Crema, Palta, Palmito", "price": 8000, "image": "sake-acevichado.jpg" },
                { "id": "sake-vegetal-panko", "name": "SAKE VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Espárrago", "price": 5900, "image": "sake-vegetal-panko.jpg" }
            ]
        },
        {
            "category": "HOSOMAKI",
            "description": "Roll de 6 Cortes Envuelto en Alga Nori",
            "products": [
                { "id": "hoso-kani", "name": "HOSO KANI", "ingredients": "Kanikama, Palta", "price": 3200, "image": "hoso-kani.jpg" },
                { "id": "hoso-chicken", "name": "HOSO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 3600, "image": "hoso-chicken.jpg" },
                { "id": "hoso-sake", "name": "HOSO SAKE", "ingredients": "Salmón, Queso Crema", "price": 3900, "image": "hoso-sake.jpg" },
                { "id": "hoso-ebi", "name": "HOSO EBI", "ingredients": "Camarón, Queso Crema, Ciboulette", "price": 3700, "image": "hoso-ebi.jpg" },
                { "id": "hoso-tako", "name": "HOSO TAKO", "ingredients": "Pulpo, Queso Crema, Cebollín", "price": 4400, "image": "hoso-tako.jpg" },
                { "id": "hoso-smoke", "name": "HOSO SMOKE", "ingredients": "Salmón Ahumado, Palta, Ciboulette", "price": 3800, "image": "hoso-smoke.jpg" },
                { "id": "hoso-vegetal", "name": "HOSO VEGETAL", "ingredients": "Palmito, Espárrago", "price": 3100, "image": "hoso-vegetal.jpg" },
                { "id": "hoso-ton", "name": "HOSO TON", "ingredients": "Atún, Palta", "price": 4100, "image": "hoso-ton.jpg" }
            ]
        },
        {
            "category": "URAMAKI ROLLS",
            "description": "Roll de 8 Cortes Envuelto en Sésamo, Amapola o Coco/Merquén",
            "products": [
                { "id": "california-kani", "name": "CALIFORNIA KANI", "ingredients": "Kanikama, Palta", "price": 4400, "image": "california-kani.jpg" },
                { "id": "california-chicken", "name": "CALIFORNIA CHICKEN", "ingredients": "Pollo Teriyaki, Palta", "price": 4800, "image": "california-chicken.jpg" },
                { "id": "california-sake", "name": "CALIFORNIA SAKE", "ingredients": "Salmón, Palta", "price": 5300, "image": "california-sake.jpg" },
                { "id": "california-ebi", "name": "CALIFORNIA EBI", "ingredients": "Camarón, Palta", "price": 4900, "image": "california-ebi.jpg" },
                { "id": "california-vegetal", "name": "CALIFORNIA VEGETAL", "ingredients": "Palmito, Palta, Ciboulette, Espárrago", "price": 4700, "image": "california-vegetal.jpg" },
                { "id": "maki-ebi-tempura", "name": "MAKI EBI TEMPURA", "ingredients": "Camarón Tempura, Queso Crema, Ciboulette", "price": 5600, "image": "maki-ebi-tempura.jpg" },
                { "id": "maki-yaki-panko", "name": "MAKI YAKI PANKO", "ingredients": "Pollo Panko, Queso Crema, Cebollín", "price": 5500, "image": "maki-yaki-panko.jpg" },
                { "id": "maki-sake-panko", "name": "MAKI SAKE PANKO", "ingredients": "Salmón Panko, Queso Crema, Cebollín", "price": 5900, "image": "maki-sake-panko.jpg" },
                { "id": "smoke-maki", "name": "SMOKE MAKI", "ingredients": "Salmón Ahumado, Queso Crema, Ciboulette", "price": 5200, "image": "smoke-maki.jpg" },
                { "id": "maki-kani", "name": "MAKI KANI", "ingredients": "Kanikama, Queso Crema, Palta", "price": 4700, "image": "maki-kani.jpg" },
                { "id": "maki-yaki", "name": "MAKI YAKI", "ingredients": "Pollo Teriyaki, Queso Crema, Palta", "price": 5300, "image": "maki-yaki.jpg" },
                { "id": "sake-maki", "name": "SAKE MAKI", "ingredients": "Salmón, Queso Crema, Palta", "price": 5700, "image": "sake-maki.jpg" },
                { "id": "ebi-maki", "name": "EBI MAKI", "ingredients": "Camarón, Queso Crema, Palta, Ciboulette", "price": 5400, "image": "ebi-maki.jpg" },
                { "id": "tako-maki-roll", "name": "TAKO MAKI ROLL", "ingredients": "Pulpo, Palta, Ciboulette", "price": 5900, "image": "tako-maki-roll.jpg" },
                { "id": "ebi-spicy", "name": "EBI SPICY", "ingredients": "Camarón, Palta, Ciboulette, Sriracha", "price": 5000, "image": "ebi-spicy.jpg" },
                { "id": "maguro-maki", "name": "MAGURO MAKI", "ingredients": "Atún, Palta, Ciboulette", "price": 5500, "image": "maguro-maki.jpg" },
                { "id": "ura-vegan", "name": "URA VEGAN", "ingredients": "Palta, Pepino, Cebollín", "price": 4400, "image": "ura-vegan.jpg" },
                { "id": "ura-acevichado", "name": "URA ACEVICHADO", "ingredients": "Queso Crema, Palmito, Palta", "price": 6500, "image": "ura-acevichado.jpg" }
            ]
        },
        {
            "category": "AVOCADO ROLLS",
            "description": "Roll de 8 Cortes Envuelto en Palta",
            "products": [
                { "id": "avo-kani", "name": "AVO KANI", "ingredients": "Kanikama, Queso Crema, Cebollín", "price": 5400, "image": "avo-kani.jpg" },
                { "id": "avo-chicken", "name": "AVO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 6200, "image": "avo-chicken.jpg" },
                { "id": "avo-sake", "name": "AVO SAKE", "ingredients": "Salmón, Queso Crema, Ciboulette", "price": 6500, "image": "avo-sake.jpg" },
                { "id": "avo-ebi", "name": "AVO EBI", "ingredients": "Camarón, Queso Crema, Cebollín", "price": 6400, "image": "avo-ebi.jpg" },
                { "id": "tako-roll", "name": "TAKO ROLL", "ingredients": "Pulpo, Queso Crema, Cebollín", "price": 6600, "image": "tako-roll.jpg" },
                { "id": "avo-fresh", "name": "AVO FRESH", "ingredients": "Palmito, Espárrago, Cebollín", "price": 5200, "image": "avo-fresh.jpg" },
                { "id": "teri-panko", "name": "TERI PANKO", "ingredients": "Pollo Panko, Queso Crema, Cebollín", "price": 6500, "image": "teri-panko.jpg" },
                { "id": "avo-sake-panko", "name": "AVO SAKE PANKO", "ingredients": "Salmón Panko, Queso Crema, Cebollín", "price": 6900, "image": "avo-sake-panko.jpg" },
                { "id": "avo-ebi-tempura", "name": "AVO EBI TEMPURA", "ingredients": "Camarón Tempura, Queso Crema, Ciboulette", "price": 6700, "image": "avo-ebi-tempura.jpg" },
                { "id": "avo-smoke-roll", "name": "AVO SMOKE ROLL", "ingredients": "Salmón Ahumado, Queso Crema, Cebollín", "price": 6200, "image": "avo-smoke-roll.jpg" },
                { "id": "avo-mix", "name": "AVO MIX", "ingredients": "Salmón, Camarón, Queso Crema, Cebollín", "price": 6900, "image": "avo-mix.jpg" },
                { "id": "avo-tropical", "name": "AVO TROPICAL", "ingredients": "Salmón, Mango", "price": 6600, "image": "avo-tropical.jpg" },
                { "id": "ebi-like", "name": "EBI LIKE", "ingredients": "Camarón, Queso Crema, Masago", "price": 6200, "image": "ebi-like.jpg" },
                { "id": "avo-tonno", "name": "AVO TONNO", "ingredients": "Atún, Queso Crema, Cebollín", "price": 6400, "image": "avo-tonno.jpg" },
                { "id": "avo-like-roll", "name": "AVO LIKE ROLL", "ingredients": "Salmón, Palmito, Espárrago", "price": 6300, "image": "avo-like-roll.jpg" },
                { "id": "avo-vegetal-panko", "name": "AVO VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Pimentón", "price": 5400, "image": "avo-vegetal-panko.jpg" },
                { "id": "avo-acevichado", "name": "AVO ACEVICHADO", "ingredients": "Queso Crema, Espárrago, Palmito", "price": 7200, "image": "avo-acevichado.jpg" }
            ]
        },
        {
            "category": "CREAM ROLLS",
            "description": "Roll de 8 Cortes Envuelto en Queso Crema",
            "products": [
                { "id": "cream-kani", "name": "CREAM KANI", "ingredients": "Kanikama, Palta", "price": 5000, "image": "cream-kani.jpg" },
                { "id": "cream-chicken", "name": "CREAM CHICKEN", "ingredients": "Pollo Teriyaki, Palta, Cebollín", "price": 5600, "image": "cream-chicken.jpg" },
                { "id": "cream-sake", "name": "CREAM SAKE", "ingredients": "Salmón, Palta, Ciboulette", "price": 6200, "image": "cream-sake.jpg" },
                { "id": "cream-ebi", "name": "CREAM EBI", "ingredients": "Camarón, Ciboulette, Palta", "price": 5800, "image": "cream-ebi.jpg" },
                { "id": "tako-snow", "name": "TAKO SNOW", "ingredients": "Pulpo, Palta, Pimentón", "price": 6300, "image": "tako-snow.jpg" },
                { "id": "snow-ebi-panko", "name": "SNOW EBI PANKO", "ingredients": "Camarón Panko, Palta, Cebollín", "price": 6300, "image": "snow-ebi-panko.jpg" },
                { "id": "snow-sake-tempura", "name": "SNOW SAKE TEMPURA", "ingredients": "Salmón Tempura, Espárrago, Pimentón", "price": 6400, "image": "snow-sake-tempura.jpg" },
                { "id": "snow-yaki-panko", "name": "SNOW YAKI PANKO", "ingredients": "Pollo Panko, Palta, Cebollín", "price": 6100, "image": "snow-yaki-panko.jpg" },
                { "id": "snow-tropical", "name": "SNOW TROPICAL", "ingredients": "Camarón Panko, Mango", "price": 6400, "image": "snow-tropical.jpg" },
                { "id": "cream-chili", "name": "CREAM CHILI", "ingredients": "Salmón, Coco/Merken, Ají Verde, Cebollín", "price": 6000, "image": "cream-chili.jpg" },
                { "id": "snow-mix", "name": "SNOW MIX", "ingredients": "Camarón, Salmón, Palta, Cebollín", "price": 6000, "image": "snow-mix.jpg" },
                { "id": "cream-smoke", "name": "CREAM SMOKE", "ingredients": "Salmón Ahumado, Palta, Cebollín", "price": 5700, "image": "cream-smoke.jpg" },
                { "id": "cream-like", "name": "CREAM LIKE", "ingredients": "Masago, Palmito, Palta", "price": 5500, "image": "cream-like.jpg" },
                { "id": "cream-vegetal", "name": "CREAM VEGETAL", "ingredients": "Palmito, Espárrago, Cebollín", "price": 5000, "image": "cream-vegetal.jpg" },
                { "id": "cream-vegetal-panko", "name": "CREAM VEGETAL PANKO", "ingredients": "Cebollín Panko, Palta, Pimentón", "price": 5100, "image": "cream-vegetal-panko.jpg" },
                { "id": "tuna-cream", "name": "TUNA CREAM", "ingredients": "Atún, Palta, Palmito", "price": 6100, "image": "tuna-cream.jpg" },
                { "id": "cream-acevichado", "name": "CREAM ACEVICHADO", "ingredients": "Palta, Espárrago, Palmito", "price": 6900, "image": "cream-acevichado.jpg" }
            ]
        },
        {
            "category": "TEMPURAS/PANKO",
            "description": "Roll de 8 Cortes Fritos en Tempura y Panko",
            "products": [
                { "id": "kani-panko", "name": "KANI PANKO", "ingredients": "Kanikama, Queso Crema, Pimentón", "price": 5300, "image": "kani-panko.jpg" },
                { "id": "chicken-panko", "name": "CHICKEN PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 5800, "image": "chicken-panko.jpg" },
                { "id": "sake-panko", "name": "SAKE PANKO", "ingredients": "Salmón, Queso Crema, Ciboulette", "price": 6300, "image": "sake-panko.jpg" },
                { "id": "ebi-panko", "name": "EBI PANKO", "ingredients": "Camarón, Queso Crema, Cebollín", "price": 5900, "image": "ebi-panko.jpg" },
                { "id": "tako-panko", "name": "TAKO PANKO", "ingredients": "Pulpo, Queso Crema, Ciboulette", "price": 6500, "image": "tako-panko.jpg" },
                { "id": "vegetal-panko", "name": "VEGETAL PANKO", "ingredients": "Espárrago, Pimentón, Palta", "price": 5400, "image": "vegetal-panko.jpg" },
                { "id": "smoke-panko", "name": "SMOKE PANKO", "ingredients": "Salmón Ahumado, Queso Crema, Cebollín", "price": 5900, "image": "smoke-panko.jpg" },
                { "id": "mix-panko", "name": "MIX PANKO", "ingredients": "Camarón, Salmón, Queso Crema, Cebollín", "price": 6500, "image": "mix-panko.jpg" },
                { "id": "vegan-panko", "name": "VEGAN PANKO", "ingredients": "Palta, Tomate Cherry, Choclo Baby", "price": 5500, "image": "vegan-panko.jpg" },
                { "id": "chicken-nuss-panko", "name": "CHICKEN NUSS PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Nueces/Almendras", "price": 6100, "image": "chicken-nuss-panko.jpg" },
                { "id": "ebi-panko-2.0", "name": "EBI PANKO 2.0", "ingredients": "Camarón, Queso Crema, Palta", "price": 6300, "image": "ebi-panko-2-0.jpg" },
                { "id": "sea-bomb", "name": "SEA BOMB", "ingredients": "Camarón, Salmón, Pulpo, Queso Crema, Ciboulette", "price": 7000, "image": "sea-bomb.jpg" },
                { "id": "chicken-panko-2.0", "name": "CHICKEN PANKO 2.0", "ingredients": "Pollo Teriyaki, Queso Crema, Palta", "price": 6200, "image": "chicken-panko-2-0.jpg" },
                { "id": "maguro-panko", "name": "MAGURO PANKO", "ingredients": "Atún, Queso Crema, Cebollín", "price": 6400, "image": "maguro-panko.jpg" },
                { "id": "panko-acevichado", "name": "PANKO ACEVICHADO", "ingredients": "Queso Crema, Palta", "price": 7500, "image": "panko-acevichado.jpg" }
            ]
        },
        {
            "category": "SPECIAL ROLLS",
            "description": "Variedades de Rolls. Especialidades de la casa.",
            "products": [
                { "id": "like-ebi-tempura", "name": "LIKE EBI TEMPURA", "ingredients": "Camarón, Queso Crema, Ciboulette (Envuelto en Tempura, 8 Cortes)", "price": 5800, "image": "like-ebi-tempura.jpg" },
                { "id": "like-ura-ebi", "name": "LIKE URA EBI", "ingredients": "Camarón Tempura, Queso Crema, Ají Verde (Envuelto en Masago, 8 Cortes)", "price": 6300, "image": "like-ura-ebi.jpg" },
                { "id": "hoso-chicken-panko-special", "name": "HOSO CHICKEN PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín (Envuelto en Nori/Panko, 10 Cortes)", "price": 6000, "image": "hoso-chicken-panko-special.jpg" },
                { "id": "maki-gray-roll", "name": "MAKI GRAY ROLL", "ingredients": "Queso Crema, Palta, Pepino (Envuelto en Amapola, 8 Cortes)", "price": 4500, "image": "maki-gray-roll.jpg" },
                { "id": "army-smoke-roll", "name": "ARMY SMOKE ROLL", "ingredients": "Salmón Ahumado, Queso Crema, Palta (Envuelto en Sésamo/Ciboulette, 8 Cortes)", "price": 5300, "image": "army-smoke-roll.jpg" },
                { "id": "like-ebi-avo", "name": "LIKE EBI AVO", "ingredients": "Camarón, Queso Crema, Palmito (Envuelto en Palta, 8 Cortes)", "price": 6200, "image": "like-ebi-avo.jpg" },
                { "id": "hoso-nuss", "name": "HOSO NUSS", "ingredients": "Queso Crema, Nueces/Almendra (Envuelto en Nori/Tempura, 6 Cortes)", "price": 4000, "image": "hoso-nuss.jpg" },
                { "id": "like-avo-chicken", "name": "LIKE AVO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Palmito (Envuelto en Palta, 8 Cortes)", "price": 6500, "image": "like-avo-chicken.jpg" },
                { "id": "green-tonno-furai", "name": "GREEN TONNO FURAI", "ingredients": "Atún Panko, Queso Crema (Envuelto en Ciboulette, 8 Cortes)", "price": 6200, "image": "green-tonno-furai.jpg" },
                { "id": "ebi-rainbow", "name": "EBI RAINBOW", "ingredients": "Camarón Panko, Queso Crema, Cebollín (Envuelto en Palta/Salmón, 8 Cortes)", "price": 6800, "image": "ebi-rainbow.jpg" },
                { "id": "sake-ebi-grill", "name": "SAKE EBI GRILL", "ingredients": "Camarón, Queso Crema, Cebollín (Envuelto en Salmón Grillado, 8 Cortes)", "price": 6500, "image": "sake-ebi-grill.jpg" },
                { "id": "coco-tempura", "name": "COCO TEMPURA", "ingredients": "Salmón, Queso Crema, Pimentón (Envuelto en Tempura/Coco, 8 Cortes)", "price": 6500, "image": "coco-tempura.jpg" },
                { "id": "green-mix", "name": "GREEN MIX", "ingredients": "Salmón, Camarón, Queso Crema, Ciboulette (Envuelto en Ciboulette, 8 Cortes)", "price": 6400, "image": "green-mix.jpg" },
                { "id": "chicken-crispy-nuss", "name": "CHICKEN CRISPY NUSS", "ingredients": "Pollo Teriyaki, Queso Crema Panko, Ciboulette (Envuelto en Nuez/Almendra, 8 Cortes)", "price": 6800, "image": "chicken-crispy-nuss.jpg" }
            ]
        },
        {
            "category": "ROLLS SIN ARROZ",
            "description": "Rolls de 8 cortes, 5 ingredientes y sin arroz",
            "products": [
                { "id": "vegetal-panko-sin-arroz", "name": "Vegetal Panko", "ingredients": "(8 Cortes)", "price": "Consultar", "image": "vegetal-panko-sin-arroz.jpg" },
                { "id": "pollo-panko-sin-arroz", "name": "Pollo Panko", "ingredients": "(8 Unidades)", "price": "Consultar", "image": "pollo-panko-sin-arroz.jpg" },
                { "id": "salmon-panko-sin-arroz", "name": "Salmón Panko", "ingredients": "(8 Unidades)", "price": "Consultar", "image": "salmon-panko-sin-arroz.jpg" }
            ]
        }
    ],
    "Tablas": [
        { "id": "tabla-1-18-piezas", "name": "TABLA 1 - 18 Piezas (1 Persona)", "ingredients": "Cream Chicken (9 Cortes), Maki Kani (9 Cortes)", "price": 8490, "image": "tabla-1-18.jpg" },
        { "id": "tabla-2-38-piezas", "name": "TABLA 2 - 38 Piezas (2 Personas)", "ingredients": "Avo Sake (8 Cortes), Maki Kani (8 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes), Palta Panko (4 Unidades), Salmón Panko (4 Unidades)", "price": 17990, "image": "tabla-2-38.jpg" },
        { "id": "tabla-3-72-piezas", "name": "TABLA 3 - 72 Piezas (4 Personas)", "ingredients": "Avo Sake (8 Cortes), Maki Kani (8 Cortes), Cream Chicken (8 Cortes), Futo Sake (10 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes)", "price": 29990, "image": "tabla-3-72.jpg" },
        { "id": "tabla-like-50-piezas", "name": "TABLA LIKE - 50 Piezas", "ingredients": "California Kani (9 Cortes), Avo Chicken (9 Cortes), Hoso Chicken Panko (10 Cortes), Cream Vegetal (9 Cortes), Vegetal Panko (9 Cortes), Pollo Panko (4 Unidades)", "price": 20990, "image": "tabla-like-50.jpg" },
        { "id": "tabla-hot-34-piezas", "name": "TABLA HOT - 34 Piezas", "ingredients": "Ebi Panko (8 Cortes), Vegetal Panko (8 Cortes), Hoso Chicken Panko (10 Cortes), Pollo Panko (8 Unidades)", "price": 18990, "image": "tabla-hot-34.jpg" },
        { "id": "tabla-vegan-32-piezas", "name": "TABLA VEGAN - 32 Piezas", "ingredients": "California Vegetal (8 Cortes), Vegan Panko (8 Cortes), Avo Fresh (8 Cortes), Ura Vegan (envuelto en amapola, 8 Unidades)", "price": 14990, "image": "tabla-vegan-32.jpg" }
    ],
    "Promociones": [
        { "id": "promo-3x2-rolls", "name": "PROMOCIÓN 3x2 en Rolls", "description": "¡Todos los días! 3x2 en Rolls. Retiro en Local y Pago en Efectivo. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-3x2.jpg" },
        { "id": "promo-lunes-martes-20", "name": "PROMOCIÓN LUNES y MARTES: 20% en Rolls", "description": "20% de descuento en Rolls. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-20.jpg" },
        { "id": "promo-miercoles-jueves-15", "name": "PROMOCIÓN MIÉRCOLES y JUEVES: 15% en Rolls", "description": "15% de descuento en Rolls. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-15.jpg" },
        { "id": "super-1", "name": "SUPER 1 (30 piezas)", "ingredients": "1 Pollo Teriyaki - Queso Crema - Cebollín (Env. Palta), 1 Kanikama-Palta Pimentón (Env. Sésamo), 1 Camarón-Queso Crema - Palta (Panko). Incluye 1 Soya, 1 Unagui, 2 Palitos. NO TIENEN CAMBIO.", "price": 12990, "image": "super-promo1.jpg" },
        { "id": "super-2", "name": "SUPER 2 (50 piezas)", "ingredients": "1 Pollo Teriyaki - Queso Crema - Cebollín (Env. Palta), 1 Kanikama - Palta - Pimentón (Env. Sésamo), 1 Pollo Teriyaki - Queso Crema-Cebollín (Env. Amapola), 1 Camarón - Queso Crema - Palta (Panko), 1 Palta-Palmito - Pimentón (Panko). Incluye: 2 Goya, 1 Unagui, 3 Palitos. NO TIENEN CAMBIO.", "price": 18990, "image": "super-promo2.jpg" },
        { "id": "super-3", "name": "SUPER 3 (70 piezas)", "ingredients": "1 Pollo Teriyaki-Queso Crema - Cebollín (Env. Palta), 1 Kanikama-Palta Pimentón (Env. Sésamo), 1 Pollo Teriyaki-Queso Crema-Cebollín (Env. Amapola), 1 Palmito - Espárrago - Cebollín (Env. Queso Crema), 1 Camarón-Queso Crema - Palta (Panko), 1 Palta-Palmito - Pimentón (Panko), 1 Pollo Teriyaki - Queso Crema-Cebollín (Panko). Incluye: Soya, 2 Unagui, Palitos. NO TIENEN CAMBIO.", "price": 25990, "image": "super-promo3.jpg" }
    ],
    "Snacks": [
        { "id": "sashimi-salmon-3", "name": "SASHIMI SALMÓN (3 Cortes)", "price": 2800, "image": "sashimi-salmon.jpg" },
        { "id": "sashimi-salmon-6", "name": "SASHIMI SALMÓN (6 Cortes)", "price": 5000, "image": "sashimi-salmon.jpg" },
        { "id": "sashimi-salmon-12", "name": "SASHIMI SALMÓN (12 Cortes)", "price": 9000, "image": "sashimi-salmon.jpg" },
        { "id": "sashimi-pulpo-3", "name": "SASHIMI PULPO (3 Cortes)", "price": 3400, "image": "sashimi-pulpo.jpg" },
        { "id": "sashimi-pulpo-6", "name": "SASHIMI PULPO (6 Cortes)", "price": 6000, "image": "sashimi-pulpo.jpg" },
        { "id": "sashimi-pulpo-12", "name": "SASHIMI PULPO (12 Cortes)", "price": 10500, "image": "sashimi-pulpo.jpg" },
        { "id": "snack-salmon-panko-3", "name": "SNACK SALMÓN PANKO (3 Cortes)", "price": 3000, "image": "snack-salmon-panko.jpg" },
        { "id": "snack-salmon-panko-6", "name": "SNACK SALMÓN PANKO (6 Cortes)", "price": 5500, "image": "snack-salmon-panko.jpg" },
        { "id": "snack-salmon-panko-12", "name": "SNACK SALMÓN PANKO (12 Cortes)", "price": 9900, "image": "snack-salmon-panko.jpg" },
        { "id": "snack-ebi-temp-3", "name": "SNACK EBI TEMP. (3 Cortes)", "price": 2900, "image": "snack-ebi-tempura.jpg" },
        { "id": "snack-ebi-temp-6", "name": "SNACK EBI TEMP. (6 Cortes)", "price": 5400, "image": "snack-ebi-tempura.jpg" },
        { "id": "snack-ebi-temp-12", "name": "SNACK EBI TEMP. (12 Cortes)", "price": 9800, "image": "snack-ebi-tempura.jpg" },
        { "id": "snack-pollo-3", "name": "SNACK POLLO (3 Cortes)", "price": 2800, "image": "snack-pollo.jpg" },
        { "id": "snack-pollo-6", "name": "SNACK POLLO (6 Cortes)", "price": 4900, "image": "snack-pollo.jpg" },
        { "id": "snack-pollo-12", "name": "SNACK POLLO (12 Cortes)", "price": 9000, "image": "snack-pollo.jpg" },
        { "id": "snack-verduras-3", "name": "SNACK VERDURAS (3 Cortes)", "price": 2000, "image": "snack-verduras.jpg" },
        { "id": "snack-verduras-6", "name": "SNACK VERDURAS (6 Cortes)", "price": 3600, "image": "snack-verduras.jpg" },
        { "id": "snack-verduras-12", "name": "SNACK VERDURAS (12 Cortes)", "price": 6800, "image": "snack-verduras.jpg" },
        { "id": "nigiris-salmon", "name": "NIGIRIS SALMÓN", "price": 1000, "image": "nigiris-salmon.jpg" },
        { "id": "nigiris-camaron", "name": "NIGIRIS CAMARÓN", "price": 1000, "image": "nigiris-camaron.jpg" },
        { "id": "nigiris-kanikama", "name": "NIGIRIS KANIKAMA", "price": 900, "image": "nigiris-kanikama.jpg" },
        { "id": "nigiris-crispy-14", "name": "NIGIRIS CRISPY (14 UNIDADES)", "ingredients": "Mezcla de arroz, Queso Crema, Cebollín, Pollo/Kanikama", "price": 4290, "image": "nigiris-crispy.jpg" },
        { "id": "gohan-mixto", "name": "GOHAN MIXTO", "price": 6990, "image": "gohan-mixto.jpg" },
        { "id": "gohan-mixto-panko", "name": "GOHAN MIXTO PANKO", "price": 7990, "image": "gohan-mixto-panko.jpg" },
        { "id": "gohan-pollo", "name": "GOHAN POLLO", "price": 6990, "image": "gohan-pollo.jpg" },
        { "id": "gohan-pollo-panko", "name": "GOHAN POLLO PANKO", "price": 7990, "image": "gohan-pollo-panko.jpg" },
        { "id": "gohan-vegetal", "name": "GOHAN VEGETAL", "price": 5490, "image": "gohan-vegetal.jpg" }
    ],
    "Extras": [
        { "id": "salsa-soya-extra", "name": "Salsa Soya", "price": 500, "image": "salsa-soya.jpg" },
        { "id": "sriracha-extra", "name": "Sriracha", "price": 500, "image": "sriracha.jpg" },
        { "id": "salsa-unagui", "name": "Salsa Unagui", "price": 900, "image": "salsa-unagui.jpg" },
        { "id": "wasabi-extra", "name": "Wasabi", "price": 400, "image": "wasabi.jpg" },
        { "id": "jengibre-extra", "name": "Jengibre", "price": 400, "image": "jengibre.jpg" },
        { "id": "palitos-extra", "name": "Palitos", "price": 150, "image": "palitos.jpg" },
        { "id": "ayuda-palitos", "name": "Ayuda Palitos", "price": 400, "image": "ayuda-palitos.jpg" },
        { "id": "envoltura-hoja-arroz", "name": "Envoltura Hoja de Arroz", "price": 500, "image": "hoja-arroz.jpg" },
        { "id": "ciboulette-extra", "name": "Ciboulette", "price": 500, "image": "ciboulette.jpg" },
        { "id": "bebidas", "name": "BEBIDAS", "ingredients": "Coca Cola, Sprite, Fanta, Coca Zero", "price": 2700, "image": "bebidas.jpg" }
    ]
};

// Función para formatear el precio a moneda chilena
function formatPrice(price) {
    if (typeof price === 'number') {
        return `$${price.toLocaleString('es-CL')}`;
    }
    return price; // Devuelve el valor tal cual si no es un número (ej. "Consultar")
}

// Función para renderizar los productos en la vista
function displayProducts(products, sectionTitle) {
    const productsGrid = document.getElementById('products-grid');
    const subcategoryTitleElement = document.getElementById('current-subcategory-title');

    if (!productsGrid) return; // Salir si el contenedor no existe

    productsGrid.innerHTML = ''; // Limpia el contenedor de productos

    // Actualiza el título de la subcategoría si el elemento existe
    if (subcategoryTitleElement) {
        subcategoryTitleElement.textContent = sectionTitle;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id;
        productCard.dataset.name = product.name;
        productCard.dataset.price = product.price;

        let ingredientsHtml = '';
        if (product.ingredients) {
            ingredientsHtml = `<p>${product.ingredients}</p>`;
        } else if (product.description) {
            ingredientsHtml = `<p>${product.description}</p>`;
        }

        const formattedPrice = formatPrice(product.price);

        productCard.innerHTML = `
            <img src="images/${product.image || 'placeholder.jpg'}" alt="${product.name}">
            <h3>${product.name}</h3>
            ${ingredientsHtml}
            <p class="price">${formattedPrice}</p>
            <button class="add-to-cart-btn">Agregar al Carrito</button>
        `;
        productsGrid.appendChild(productCard);
    });
    // Volver a enlazar los botones "Agregar al Carrito" después de renderizar nuevos productos
    attachAddToCartListeners();
}

// Función para cargar los productos de una página principal (ej. Rolls)
function loadProductsPage(mainCategory) {
    const categoriesContainer = document.getElementById('roll-categories'); // Contenedor para los botones de subcategoría
    const productsGrid = document.getElementById('products-grid');

    if (!categoriesContainer && mainCategory === 'Rolls') {
        // Esto significa que estamos en la página de Rolls pero el contenedor de categorías no existe.
        // Podría ser un error, o que la página de rolls.html no está bien configurada con el ID 'roll-categories'.
        // Si no es la página de Rolls, simplemente seguimos.
    }

    if (categoriesContainer) { // Solo limpia y añade botones si el contenedor de categorías existe (ej. en rolls.html)
        categoriesContainer.innerHTML = ''; // Limpia los botones anteriores
    }


    const subCategories = menuData[mainCategory];

    // Verifica si la categoría principal tiene subcategorías anidadas (como "Rolls")
    if (Array.isArray(subCategories) && subCategories.every(item => item.category && item.products)) {
        // Es una categoría con subcategorías (ej. Rolls)
        if (categoriesContainer) { // Asegurarse de que el contenedor de categorías existe para Rolls
            subCategories.forEach((subCat, index) => {
                const button = document.createElement('button');
                button.textContent = subCat.category;
                button.addEventListener('click', () => {
                    // Remover clase 'active' de todos los botones de categoría
                    document.querySelectorAll('.product-categories button').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    // Añadir clase 'active' al botón clickeado
                    button.classList.add('active');
                    displayProducts(subCat.products, subCat.category);
                });
                categoriesContainer.appendChild(button);

                // Cargar la primera subcategoría por defecto al iniciar la página
                if (index === 0) {
                    button.classList.add('active');
                    displayProducts(subCat.products, subCat.category);
                }
            });
        } else {
             // Si el contenedor de categorías no existe en la página de Rolls,
             // cargamos todos los productos de Rolls en el grid principal.
             // Esto puede ocurrir si se espera que rolls.html muestre todos los rolls sin subcategorías
             // o si el elemento #roll-categories no está presente.
             let allRollsProducts = [];
             subCategories.forEach(subCat => {
                 allRollsProducts = allRollsProducts.concat(subCat.products);
             });
             displayProducts(allRollsProducts, mainCategory);
        }
    } else {
        // Es una categoría sin subcategorías (ej. Tablas, Snacks, Extras, Promociones)
        // No se crean botones de subcategoría, se muestran todos los productos directamente
        displayProducts(subCategories, mainCategory);
    }
}

// Función para adjuntar los listeners de "Agregar al Carrito"
function attachAddToCartListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        // Remueve listeners existentes para evitar duplicados si la función se llama varias veces
        button.removeEventListener('click', handleAddToCartClick);
        button.addEventListener('click', handleAddToCartClick);
    });
}

// Manejador del evento click para el botón "Agregar al Carrito"
function handleAddToCartClick(event) {
    const productElement = event.target.closest('.product-card');
    const productId = productElement.dataset.id;
    const productName = productElement.dataset.name;
    // Parsea el precio, eliminando el signo '$' y el separador de miles '.' si existen
    let productPriceRaw = productElement.dataset.price;
    if (typeof productPriceRaw === 'string') {
        productPriceRaw = productPriceRaw.replace('$', '').replace(/\./g, '');
    }
    const productPrice = parseFloat(productPriceRaw);


    // Asegurarse de que el precio sea un número antes de agregar al carrito
    if (isNaN(productPrice)) {
        alert('Este producto no tiene un precio numérico definido y no puede ser agregado al carrito directamente.');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    alert(`${productName} agregado al carrito!`);
    updateCartDisplay();
}

// Variable global para el carrito
let cart = [];

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Carrusel (solo en index.html) ---
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const carouselImages = document.querySelectorAll('.carousel-slide img');
        const prevBtn = document.querySelector('.carousel-nav .prev');
        const nextBtn = document.querySelector('.carousel-nav .next');

        let currentIndex = 0;
        const totalImages = carouselImages.length;

        function updateCarousel() {
            if (carouselSlide) { // Asegura que el elemento existe antes de manipularlo
                carouselSlide.style.transform = `translateX(${-currentIndex * 100 / totalImages}%)`;
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                updateCarousel();
            });
        }

        // Auto-avance del carrusel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }, 5000);
    }

    // --- Lógica del Carrito de Compras ---
    // Carga el carrito desde localStorage o inicializa como vacío
    cart = JSON.parse(localStorage.getItem('sushiCart')) || [];

    // Función para actualizar la visualización del carrito en la página carrito.html
    const updateCartDisplay = () => {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartTotalElement = document.getElementById('cart-total');

        if (cartItemsContainer && cartTotalElement) {
            cartItemsContainer.innerHTML = ''; // Limpia el contenido actual del carrito
            let total = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
            }
            else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('cart-item');
                    itemElement.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${formatPrice(item.price)} c/u</p>
                        </div>
                        <div class="cart-item-controls">
                            <button data-id="${item.id}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button data-id="${item.id}" data-action="increase">+</button>
                            <button data-id="${item.id}" data-action="remove">X</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                    total += item.price * item.quantity;
                });
            }
            cartTotalElement.textContent = `Total: ${formatPrice(total)}`;
            localStorage.setItem('sushiCart', JSON.stringify(cart)); // Guarda el carrito en localStorage
        }
    };

    // Manejar cambios en el carrito (aumentar, disminuir, eliminar)
    const cartContainer = document.getElementById('cart-items-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.tagName === 'BUTTON') {
                const itemId = target.dataset.id;
                const action = target.dataset.action;

                const itemIndex = cart.findIndex(item => item.id === itemId);

                if (itemIndex > -1) {
                    if (action === 'increase') {
                        cart[itemIndex].quantity++;
                    } else if (action === 'decrease') {
                        cart[itemIndex].quantity--;
                        if (cart[itemIndex].quantity <= 0) {
                            cart.splice(itemIndex, 1); // Elimina el ítem si la cantidad es 0 o menos
                        }
                    } else if (action === 'remove') {
                        cart.splice(itemIndex, 1); // Elimina el ítem completamente
                    }
                    updateCartDisplay(); // Actualiza la vista del carrito
                }
            }
        });
    }

    // Lógica para el botón de "Comprar" en el carrito
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega algunos productos antes de comprar.');
                return;
            }
            // Genera un número de pedido aleatorio (simulado)
            const orderNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();
            alert(`¡Pedido realizado con éxito! Tu número de seguimiento es: ${orderNumber}. Puedes rastrearlo en la sección "Seguimiento".`);

            // Guarda el pedido en localStorage (simulando una base de datos de pedidos)
            let orders = JSON.parse(localStorage.getItem('sushiOrders')) || [];
            orders.push({
                orderId: orderNumber,
                items: cart,
                status: 'Pendiente', // Estado inicial del pedido
                timestamp: new Date().toLocaleString()
            });
            localStorage.setItem('sushiOrders', JSON.stringify(orders));

            // Vacía el carrito después de la compra
            cart = [];
            localStorage.removeItem('sushiCart');
            updateCartDisplay();
        });
    }

    // Lógica para el seguimiento de pedidos
    const trackOrderBtn = document.getElementById('track-order-btn');
    const orderIdInput = document.getElementById('order-id-input');
    const trackingResults = document.getElementById('tracking-results');

    if (trackOrderBtn && orderIdInput && trackingResults) {
        trackOrderBtn.addEventListener('click', () => {
            const orderId = orderIdInput.value.trim();
            if (orderId) {
                let orders = JSON.parse(localStorage.getItem('sushiOrders')) || [];
                const foundOrder = orders.find(order => order.orderId === orderId);

                if (foundOrder) {
                    trackingResults.innerHTML = `
                        <p>Estado del Pedido <strong>${foundOrder.orderId}</strong>:</p>
                        <p><strong>Estado:</strong> ${foundOrder.status}</p>
                        <p><strong>Fecha/Hora:</strong> ${foundOrder.timestamp}</p>
                        <p><strong>Productos:</strong></p>
                        <ul>
                            ${foundOrder.items.map(item => `<li>${item.name} (x${item.quantity}) - ${formatPrice(item.price)} c/u</li>`).join('')}
                        </ul>
                        <p>¡Gracias por tu compra!</p>
                    `;
                } else {
                    trackingResults.innerHTML = '<p>No se encontró un pedido con ese número de seguimiento. Por favor, verifica e inténtalo de nuevo.</p>';
                }
            } else {
                trackingResults.innerHTML = '<p>Por favor, ingresa un número de seguimiento.</p>';
            }
        });
    }

    // Llama a updateCartDisplay al cargar la página si estamos en carrito.html
    if (document.getElementById('cart-items-container')) {
        updateCartDisplay();
    }

    // --- Carga dinámica de productos al entrar a las páginas de menú ---
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'rolls.html') {
        loadProductsPage('Rolls');
    } else if (currentPage === 'tablas.html') {
        loadProductsPage('Tablas');
    } else if (currentPage === 'promociones.html') {
        loadProductsPage('Promociones');
    } else if (currentPage === 'snacks.html') {
        loadProductsPage('Snacks');
    } else if (currentPage === 'extras.html') {
        loadProductsPage('Extras');
    } else if (currentPage === 'index.html') {
        // En index.html, no necesitas cargar todas las categorías,
        // solo los productos destacados que ya están en el HTML.
        // Asegúrate de que los botones "Agregar al Carrito" de los productos destacados estén vinculados.
        attachAddToCartListeners();
    }
});
