// js/script.js (Añade esto al inicio o donde guardes tus datos)

const menuData = {
    "Rolls": [
        {
            "category": "FUTOMAKI",
            [cite_start]"description": "Roll Gigante de 10 Cortes Envuelto en Alga Nori", [cite: 60]
            "products": [
                [cite_start]{ "id": "futo-kani", "name": "FUTO KANI", "ingredients": "Kanikama, Palta, Pepino, Masago, Cebollín", "price": 6800, "image": "futo-kani.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-chicken", "name": "FUTO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Palta, Pimentón, Ciboulette", "price": 6600, "image": "futo-chicken.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-sake", "name": "FUTO SAKE", "ingredients": "Salmón, Palmito, Palta, Cebollín, Pimentón", "price": 6900, "image": "futo-sake.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-ebi", "name": "FUTO EBI", "ingredients": "Camarón, Queso Crema, Masago, Palta, Ciboulette", "price": 7000, "image": "futo-ebi.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-tako", "name": "FUTO TAKO", "ingredients": "Pulpo, Queso Crema, Palta, Cebollín, Pimentón", "price": 7000, "image": "futo-tako.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-mix", "name": "FUTO MIX", "ingredients": "Salmón, Camarón, Palta, Queso Crema, Cebollín", "price": 7900, "image": "futo-mix.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-acevichado", "name": "FUTO ACEVICHADO", "ingredients": "Queso Crema, Masago, Palta, Palmito", "price": 6400, "image": "futo-acevichado.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-smoke", "name": "FUTO SMOKE", "ingredients": "Salmón Ahumado, Palta, Pimentón, Ciboulette, Espárrago", "price": 7000, "image": "futo-smoke.jpg" }, [cite: 1]
                [cite_start]{ "id": "futo-vegetal-panko", "name": "FUTO VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Espárrago, Pimentón, Ciboulette", "price": 5700, "image": "futo-vegetal-panko.jpg" } [cite: 1]
            ]
        },
        {
            "category": "SAKE ROLLS",
            [cite_start]"description": "Roll de 8 Cortes Envuelto en Salmón", [cite: 58]
            "products": [
                [cite_start]{ "id": "sake-kani", "name": "SAKE KANI", "ingredients": "Kanikama, Palta, Ciboulette", "price": 5900, "image": "sake-kani.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-ebi-roll", "name": "SAKE EBI ROLL", "ingredients": "Camarón, Queso Crema, Masago", "price": 6400, "image": "sake-ebi-roll.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-tako", "name": "SAKE TAKO", "ingredients": "Pulpo, Queso Crema, Ciboulette", "price": 7000, "image": "sake-tako.jpg" }, [cite: 79]
                [cite_start]{ "id": "garden-sake", "name": "GARDEN SAKE", "ingredients": "Palmito, Espárrago, Palta", "price": 5800, "image": "garden-sake.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-smoke", "name": "SAKE SMOKE", "ingredients": "Salmón Ahumado, Queso Crema, Palta", "price": 6500, "image": "sake-smoke.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-ebi-pankonanese", "name": "SAKE EBI PANKONANESE", "ingredients": "Camarón Panko, Queso Crema, Cebollín", "price": 6700, "image": "sake-ebi-pankonanese.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-acevichado", "name": "SAKE ACEVICHADO", "ingredients": "Queso Crema, Palta, Palmito", "price": 8000, "image": "sake-acevichado.jpg" }, [cite: 79]
                [cite_start]{ "id": "sake-vegetal-panko", "name": "SAKE VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Espárrago", "price": 5900, "image": "sake-vegetal-panko.jpg" } [cite: 79]
            ]
        },
        {
            "category": "HOSOMAKI",
            [cite_start]"description": "Roll de 6 Cortes Envuelto en Alga Nori", [cite: 61]
            "products": [
                [cite_start]{ "id": "hoso-kani", "name": "HOSO KANI", "ingredients": "Kanikama, Palta", "price": 3200, "image": "hoso-kani.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-chicken", "name": "HOSO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 3600, "image": "hoso-chicken.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-sake", "name": "HOSO SAKE", "ingredients": "Salmón, Queso Crema", "price": 3900, "image": "hoso-sake.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-ebi", "name": "HOSO EBI", "ingredients": "Camarón, Queso Crema, Ciboulette", "price": 3700, "image": "hoso-ebi.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-tako", "name": "HOSO TAKO", "ingredients": "Pulpo, Queso Crema, Cebollín", "price": 4400, "image": "hoso-tako.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-smoke", "name": "HOSO SMOKE", "ingredients": "Salmón Ahumado, Palta, Ciboulette", "price": 3800, "image": "hoso-smoke.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-vegetal", "name": "HOSO VEGETAL", "ingredients": "Palmito, Espárrago", "price": 3100, "image": "hoso-vegetal.jpg" }, [cite: 66]
                [cite_start]{ "id": "hoso-ton", "name": "HOSO TON", "ingredients": "Atún, Palta", "price": 4100, "image": "hoso-ton.jpg" } [cite: 66]
            ]
        },
        {
            "category": "URAMAKI ROLLS",
            [cite_start]"description": "Roll de 8 Cortes Envuelto en Sésamo, Amapola o Coco/Merquén", [cite: 151]
            "products": [
                [cite_start]{ "id": "california-kani", "name": "CALIFORNIA KANI", "ingredients": "Kanikama, Palta", "price": 4400, "image": "california-kani.jpg" }, [cite: 156]
                [cite_start]{ "id": "california-chicken", "name": "CALIFORNIA CHICKEN", "ingredients": "Pollo Teriyaki, Palta", "price": 4800, "image": "california-chicken.jpg" }, [cite: 156]
                [cite_start]{ "id": "california-sake", "name": "CALIFORNIA SAKE", "ingredients": "Salmón, Palta", "price": 5300, "image": "california-sake.jpg" }, [cite: 156]
                [cite_start]{ "id": "california-ebi", "name": "CALIFORNIA EBI", "ingredients": "Camarón, Palta", "price": 4900, "image": "california-ebi.jpg" }, [cite: 156]
                [cite_start]{ "id": "california-vegetal", "name": "CALIFORNIA VEGETAL", "ingredients": "Palmito, Palta, Ciboulette, Espárrago", "price": 4700, "image": "california-vegetal.jpg" }, [cite: 156]
                [cite_start]{ "id": "maki-ebi-tempura", "name": "MAKI EBI TEMPURA", "ingredients": "Camarón Tempura, Queso Crema, Ciboulette", "price": 5600, "image": "maki-ebi-tempura.jpg" }, [cite: 156]
                [cite_start]{ "id": "maki-yaki-panko", "name": "MAKI YAKI PANKO", "ingredients": "Pollo Panko, Queso Crema, Cebollín", "price": 5500, "image": "maki-yaki-panko.jpg" }, [cite: 156]
                [cite_start]{ "id": "maki-sake-panko", "name": "MAKI SAKE PANKO", "ingredients": "Salmón Panko, Queso Crema, Cebollín", "price": 5900, "image": "maki-sake-panko.jpg" }, [cite: 156]
                [cite_start]{ "id": "smoke-maki", "name": "SMOKE MAKI", "ingredients": "Salmón Ahumado, Queso Crema, Ciboulette", "price": 5200, "image": "smoke-maki.jpg" }, [cite: 156]
                [cite_start]{ "id": "maki-kani", "name": "MAKI KANI", "ingredients": "Kanikama, Queso Crema, Palta", "price": 4700, "image": "maki-kani.jpg" }, [cite: 156]
                [cite_start]{ "id": "maki-yaki", "name": "MAKI YAKI", "ingredients": "Pollo Teriyaki, Queso Crema, Palta", "price": 5300, "image": "maki-yaki.jpg" }, [cite: 156]
                [cite_start]{ "id": "sake-maki", "name": "SAKE MAKI", "ingredients": "Salmón, Queso Crema, Palta", "price": 5700, "image": "sake-maki.jpg" }, [cite: 156]
                [cite_start]{ "id": "ebi-maki", "name": "EBI MAKI", "ingredients": "Camarón, Queso Crema, Palta, Ciboulette", "price": 5400, "image": "ebi-maki.jpg" }, [cite: 156]
                [cite_start]{ "id": "tako-maki-roll", "name": "TAKO MAKI ROLL", "ingredients": "Pulpo, Palta, Ciboulette", "price": 5900, "image": "tako-maki-roll.jpg" }, [cite: 156]
                [cite_start]{ "id": "ebi-spicy", "name": "EBI SPICY", "ingredients": "Camarón, Palta, Ciboulette, Sriracha", "price": 5000, "image": "ebi-spicy.jpg" }, [cite: 156]
                [cite_start]{ "id": "maguro-maki", "name": "MAGURO MAKI", "ingredients": "Atún, Palta, Ciboulette", "price": 5500, "image": "maguro-maki.jpg" }, [cite: 156]
                [cite_start]{ "id": "ura-vegan", "name": "URA VEGAN", "ingredients": "Palta, Pepino, Cebollín", "price": 4400, "image": "ura-vegan.jpg" }, [cite: 156]
                [cite_start]{ "id": "ura-acevichado", "name": "URA ACEVICHADO", "ingredients": "Queso Crema, Palmito, Palta", "price": 6500, "image": "ura-acevichado.jpg" } [cite: 156]
            ]
        },
        {
            "category": "AVOCADO ROLLS",
            [cite_start]"description": "Roll de 8 Cortes Envuelto en Palta", [cite: 152]
            "products": [
                [cite_start]{ "id": "avo-kani", "name": "AVO KANI", "ingredients": "Kanikama, Queso Crema, Cebollín", "price": 5400, "image": "avo-kani.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-chicken", "name": "AVO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 6200, "image": "avo-chicken.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-sake", "name": "AVO SAKE", "ingredients": "Salmón, Queso Crema, Ciboulette", "price": 6500, "image": "avo-sake.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-ebi", "name": "AVO EBI", "ingredients": "Camarón, Queso Crema, Cebollín", "price": 6400, "image": "avo-ebi.jpg" }, [cite: 157]
                [cite_start]{ "id": "tako-roll", "name": "TAKO ROLL", "ingredients": "Pulpo, Queso Crema, Cebollín", "price": 6600, "image": "tako-roll.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-fresh", "name": "AVO FRESH", "ingredients": "Palmito, Espárrago, Cebollín", "price": 5200, "image": "avo-fresh.jpg" }, [cite: 157]
                [cite_start]{ "id": "teri-panko", "name": "TERI PANKO", "ingredients": "Pollo Panko, Queso Crema, Cebollín", "price": 6500, "image": "teri-panko.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-sake-panko", "name": "AVO SAKE PANKO", "ingredients": "Salmón Panko, Queso Crema, Cebollín", "price": 6900, "image": "avo-sake-panko.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-ebi-tempura", "name": "AVO EBI TEMPURA", "ingredients": "Camarón Tempura, Queso Crema, Ciboulette", "price": 6700, "image": "avo-ebi-tempura.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-smoke-roll", "name": "AVO SMOKE ROLL", "ingredients": "Salmón Ahumado, Queso Crema, Cebollín", "price": 6200, "image": "avo-smoke-roll.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-mix", "name": "AVO MIX", "ingredients": "Salmón, Camarón, Queso Crema, Cebollín", "price": 6900, "image": "avo-mix.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-tropical", "name": "AVO TROPICAL", "ingredients": "Salmón, Mango", "price": 6600, "image": "avo-tropical.jpg" }, [cite: 157]
                [cite_start]{ "id": "ebi-like", "name": "EBI LIKE", "ingredients": "Camarón, Queso Crema, Masago", "price": 6200, "image": "ebi-like.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-tonno", "name": "AVO TONNO", "ingredients": "Atún, Queso Crema, Cebollín", "price": 6400, "image": "avo-tonno.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-like-roll", "name": "AVO LIKE ROLL", "ingredients": "Salmón, Palmito, Espárrago", "price": 6300, "image": "avo-like-roll.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-vegetal-panko", "name": "AVO VEGETAL PANKO", "ingredients": "Cebollín Panko, Queso Crema, Pimentón", "price": 5400, "image": "avo-vegetal-panko.jpg" }, [cite: 157]
                [cite_start]{ "id": "avo-acevichado", "name": "AVO ACEVICHADO", "ingredients": "Queso Crema, Espárrago, Palmito", "price": 7200, "image": "avo-acevichado.jpg" } [cite: 157]
            ]
        },
        {
            "category": "CREAM ROLLS",
            [cite_start]"description": "Roll de 8 Cortes Envuelto en Queso Crema", [cite: 153]
            "products": [
                [cite_start]{ "id": "cream-kani", "name": "CREAM KANI", "ingredients": "Kanikama, Palta", "price": 5000, "image": "cream-kani.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-chicken", "name": "CREAM CHICKEN", "ingredients": "Pollo Teriyaki, Palta, Cebollín", "price": 5600, "image": "cream-chicken.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-sake", "name": "CREAM SAKE", "ingredients": "Salmón, Palta, Ciboulette", "price": 6200, "image": "cream-sake.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-ebi", "name": "CREAM EBI", "ingredients": "Camarón, Ciboulette, Palta", "price": 5800, "image": "cream-ebi.jpg" }, [cite: 158]
                [cite_start]{ "id": "tako-snow", "name": "TAKO SNOW", "ingredients": "Pulpo, Palta, Pimentón", "price": 6300, "image": "tako-snow.jpg" }, [cite: 158]
                [cite_start]{ "id": "snow-ebi-panko", "name": "SNOW EBI PANKO", "ingredients": "Camarón Panko, Palta, Cebollín", "price": 6300, "image": "snow-ebi-panko.jpg" }, [cite: 158]
                [cite_start]{ "id": "snow-sake-tempura", "name": "SNOW SAKE TEMPURA", "ingredients": "Salmón Tempura, Espárrago, Pimentón", "price": 6400, "image": "snow-sake-tempura.jpg" }, [cite: 158]
                [cite_start]{ "id": "snow-yaki-panko", "name": "SNOW YAKI PANKO", "ingredients": "Pollo Panko, Palta, Cebollín", "price": 6100, "image": "snow-yaki-panko.jpg" }, [cite: 158]
                [cite_start]{ "id": "snow-tropical", "name": "SNOW TROPICAL", "ingredients": "Camarón Panko, Mango", "price": 6400, "image": "snow-tropical.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-chili", "name": "CREAM CHILI", "ingredients": "Salmón, Coco/Merken, Ají Verde, Cebollín", "price": 6000, "image": "cream-chili.jpg" }, [cite: 158]
                [cite_start]{ "id": "snow-mix", "name": "SNOW MIX", "ingredients": "Camarón, Salmón, Palta, Cebollín", "price": 6000, "image": "snow-mix.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-smoke", "name": "CREAM SMOKE", "ingredients": "Salmón Ahumado, Palta, Cebollín", "price": 5700, "image": "cream-smoke.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-like", "name": "CREAM LIKE", "ingredients": "Masago, Palmito, Palta", "price": 5500, "image": "cream-like.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-vegetal", "name": "CREAM VEGETAL", "ingredients": "Palmito, Espárrago, Cebollín", "price": 5000, "image": "cream-vegetal.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-vegetal-panko", "name": "CREAM VEGETAL PANKO", "ingredients": "Cebollín Panko, Palta, Pimentón", "price": 5100, "image": "cream-vegetal-panko.jpg" }, [cite: 158]
                [cite_start]{ "id": "tuna-cream", "name": "TUNA CREAM", "ingredients": "Atún, Palta, Palmito", "price": 6100, "image": "tuna-cream.jpg" }, [cite: 158]
                [cite_start]{ "id": "cream-acevichado", "name": "CREAM ACEVICHADO", "ingredients": "Palta, Espárrago, Palmito", "price": 6900, "image": "cream-acevichado.jpg" } [cite: 158]
            ]
        },
        {
            "category": "TEMPURAS/PANKO",
            [cite_start]"description": "Roll de 8 Cortes Fritos en Tempura y Panko", [cite: 154]
            "products": [
                [cite_start]{ "id": "kani-panko", "name": "KANI PANKO", "ingredients": "Kanikama, Queso Crema, Pimentón", "price": 5300, "image": "kani-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "chicken-panko", "name": "CHICKEN PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín", "price": 5800, "image": "chicken-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "sake-panko", "name": "SAKE PANKO", "ingredients": "Salmón, Queso Crema, Ciboulette", "price": 6300, "image": "sake-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "ebi-panko", "name": "EBI PANKO", "ingredients": "Camarón, Queso Crema, Cebollín", "price": 5900, "image": "ebi-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "tako-panko", "name": "TAKO PANKO", "ingredients": "Pulpo, Queso Crema, Ciboulette", "price": 6500, "image": "tako-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "vegetal-panko", "name": "VEGETAL PANKO", "ingredients": "Espárrago, Pimentón, Palta", "price": 5400, "image": "vegetal-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "smoke-panko", "name": "SMOKE PANKO", "ingredients": "Salmón Ahumado, Queso Crema, Cebollín", "price": 5900, "image": "smoke-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "mix-panko", "name": "MIX PANKO", "ingredients": "Camarón, Salmón, Queso Crema, Cebollín", "price": 6500, "image": "mix-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "vegan-panko", "name": "VEGAN PANKO", "ingredients": "Palta, Tomate Cherry, Choclo Baby", "price": 5500, "image": "vegan-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "chicken-nuss-panko", "name": "CHICKEN NUSS PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Nueces/Almendras", "price": 6100, "image": "chicken-nuss-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "ebi-panko-2.0", "name": "EBI PANKO 2.0", "ingredients": "Camarón, Queso Crema, Palta", "price": 6300, "image": "ebi-panko-2-0.jpg" }, [cite: 159]
                [cite_start]{ "id": "sea-bomb", "name": "SEA BOMB", "ingredients": "Camarón, Salmón, Pulpo, Queso Crema, Ciboulette", "price": 7000, "image": "sea-bomb.jpg" }, [cite: 159]
                [cite_start]{ "id": "chicken-panko-2.0", "name": "CHICKEN PANKO 2.0", "ingredients": "Pollo Teriyaki, Queso Crema, Palta", "price": 6200, "image": "chicken-panko-2-0.jpg" }, [cite: 159]
                [cite_start]{ "id": "maguro-panko", "name": "MAGURO PANKO", "ingredients": "Atún, Queso Crema, Cebollín", "price": 6400, "image": "maguro-panko.jpg" }, [cite: 159]
                [cite_start]{ "id": "panko-acevichado", "name": "PANKO ACEVICHADO", "ingredients": "Queso Crema, Palta", "price": 7500, "image": "panko-acevichado.jpg" } [cite: 159]
            ]
        },
        {
            "category": "SPECIAL ROLLS",
            [cite_start]"description": "Variedades de Rolls. Especialidades de la casa.", [cite: 155]
            "products": [
                [cite_start]{ "id": "like-ebi-tempura", "name": "LIKE EBI TEMPURA", "ingredients": "Camarón, Queso Crema, Ciboulette (Envuelto en Tempura, 8 Cortes)", "price": 5800, "image": "like-ebi-tempura.jpg" }, [cite: 160]
                [cite_start]{ "id": "like-ura-ebi", "name": "LIKE URA EBI", "ingredients": "Camarón Tempura, Queso Crema, Ají Verde (Envuelto en Masago, 8 Cortes)", "price": 6300, "image": "like-ura-ebi.jpg" }, [cite: 160]
                [cite_start]{ "id": "hoso-chicken-panko-special", "name": "HOSO CHICKEN PANKO", "ingredients": "Pollo Teriyaki, Queso Crema, Cebollín (Envuelto en Nori/Panko, 10 Cortes)", "price": 6000, "image": "hoso-chicken-panko-special.jpg" }, [cite: 160]
                [cite_start]{ "id": "maki-gray-roll", "name": "MAKI GRAY ROLL", "ingredients": "Queso Crema, Palta, Pepino (Envuelto en Amapola, 8 Cortes)", "price": 4500, "image": "maki-gray-roll.jpg" }, [cite: 160]
                [cite_start]{ "id": "army-smoke-roll", "name": "ARMY SMOKE ROLL", "ingredients": "Salmón Ahumado, Queso Crema, Palta (Envuelto en Sésamo/Ciboulette, 8 Cortes)", "price": 5300, "image": "army-smoke-roll.jpg" }, [cite: 160]
                [cite_start]{ "id": "like-ebi-avo", "name": "LIKE EBI AVO", "ingredients": "Camarón, Queso Crema, Palmito (Envuelto en Palta, 8 Cortes)", "price": 6200, "image": "like-ebi-avo.jpg" }, [cite: 160]
                [cite_start]{ "id": "hoso-nuss", "name": "HOSO NUSS", "ingredients": "Queso Crema, Nueces/Almendra (Envuelto en Nori/Tempura, 6 Cortes)", "price": 4000, "image": "hoso-nuss.jpg" }, [cite: 160]
                [cite_start]{ "id": "like-avo-chicken", "name": "LIKE AVO CHICKEN", "ingredients": "Pollo Teriyaki, Queso Crema, Palmito (Envuelto en Palta, 8 Cortes)", "price": 6500, "image": "like-avo-chicken.jpg" }, [cite: 160]
                [cite_start]{ "id": "green-tonno-furai", "name": "GREEN TONNO FURAI", "ingredients": "Atún Panko, Queso Crema (Envuelto en Ciboulette, 8 Cortes)", "price": 6200, "image": "green-tonno-furai.jpg" }, [cite: 160]
                [cite_start]{ "id": "ebi-rainbow", "name": "EBI RAINBOW", "ingredients": "Camarón Panko, Queso Crema, Cebollín (Envuelto en Palta/Salmón, 8 Cortes)", "price": 6800, "image": "ebi-rainbow.jpg" }, [cite: 160]
                [cite_start]{ "id": "sake-ebi-grill", "name": "SAKE EBI GRILL", "ingredients": "Camarón, Queso Crema, Cebollín (Envuelto en Salmón Grillado, 8 Cortes)", "price": 6500, "image": "sake-ebi-grill.jpg" }, [cite: 160]
                [cite_start]{ "id": "coco-tempura", "name": "COCO TEMPURA", "ingredients": "Salmón, Queso Crema, Pimentón (Envuelto en Tempura/Coco, 8 Cortes)", "price": 6500, "image": "coco-tempura.jpg" }, [cite: 160]
                [cite_start]{ "id": "green-mix", "name": "GREEN MIX", "ingredients": "Salmón, Camarón, Queso Crema (Envuelto en Ciboulette, 8 Cortes)", "price": 6400, "image": "green-mix.jpg" }, [cite: 160]
                [cite_start]{ "id": "chicken-crispy-nuss", "name": "CHICKEN CRISPY NUSS", "ingredients": "Pollo Teriyaki, Queso Crema Panko, Ciboulette (Envuelto en Nuez/Almendra, 8 Cortes)", "price": 6800, "image": "chicken-crispy-nuss.jpg" } [cite: 160]
            ]
        },
        {
            "category": "ROLLS SIN ARROZ",
            [cite_start]"description": "Rolls de 8 cortes, 5 ingredientes y sin arroz", [cite: 69, 70]
            "products": [
                [cite_start]{ "id": "vegetal-panko-sin-arroz", "name": "Vegetal Panko", "ingredients": "(8 Cortes)", "price": "Consultar", "image": "vegetal-panko-sin-arroz.jpg" }, [cite: 68]
                [cite_start]{ "id": "pollo-panko-sin-arroz", "name": "Pollo Panko", "ingredients": "(8 Unidades)", "price": "Consultar", "image": "pollo-panko-sin-arroz.jpg" }, [cite: 68]
                [cite_start]{ "id": "salmon-panko-sin-arroz", "name": "Salmón Panko", "ingredients": "(8 Unidades)", "price": "Consultar", "image": "salmon-panko-sin-arroz.jpg" } [cite: 68]
            ]
        }
    ],
    "Tablas": [
        [cite_start]{ "id": "tabla-1-18-piezas", "name": "TABLA 1 - 18 Piezas (1 Persona)", "ingredients": "Cream Chicken (9 Cortes), Maki Kani (9 Cortes)", "price": 8490, "image": "tabla-1-18.jpg" }, [cite: 16, 17]
        [cite_start]{ "id": "tabla-2-38-piezas", "name": "TABLA 2 - 38 Piezas (2 Personas)", "ingredients": "Avo Sake (8 Cortes), Maki Kani (8 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes), Palta Panko (4 Unidades), Salmón Panko (4 Unidades)", "price": 17990, "image": "tabla-2-38.jpg" }, [cite: 18, 19, 20, 21, 22, 23, 24]
        [cite_start]{ "id": "tabla-3-72-piezas", "name": "TABLA 3 - 72 Piezas (4 Personas)", "ingredients": "Avo Sake (8 Cortes), Maki Kani (8 Cortes), Cream Chicken (8 Cortes), Futo Sake (10 Cortes), Hoso Ebi (6 Cortes), Chicken Panko (8 Cortes)", "price": 29990, "image": "tabla-3-72.jpg" }, [cite: 25, 26, 27, 28, 29, 30, 31]
        [cite_start]{ "id": "tabla-like-50-piezas", "name": "TABLA LIKE - 50 Piezas", "ingredients": "California Kani (9 Cortes), Avo Chicken (9 Cortes), Hoso Chicken Panko (10 Cortes), Cream Vegetal (9 Cortes), Vegetal Panko (9 Cortes), Pollo Panko (4 Unidades)", "price": 20990, "image": "tabla-like-50.jpg" }, [cite: 71, 72, 76, 78, 80, 82]
        [cite_start]{ "id": "tabla-hot-34-piezas", "name": "TABLA HOT - 34 Piezas", "ingredients": "Ebi Panko (8 Cortes), Vegetal Panko (8 Cortes), Hoso Chicken Panko (10 Cortes), Pollo Panko (8 Unidades)", "price": 18990, "image": "tabla-hot-34.jpg" }, [cite: 92, 97, 98, 102, 107]
        [cite_start]{ "id": "tabla-vegan-32-piezas", "name": "TABLA VEGAN - 32 Piezas", "ingredients": "California Vegetal (8 Cortes), Vegan Panko (8 Cortes), Avo Fresh (8 Cortes), Ura Vegan (envuelto en amapola, 8 Unidades)", "price": 14990, "image": "tabla-vegan-32.jpg" } [cite: 112, 113, 114, 115, 116]
    ],
    "Promociones": [
        [cite_start]{ "id": "promo-3x2-rolls", "name": "PROMOCIÓN 3x2 en Rolls", "description": "¡Todos los días! 3x2 en Rolls. Retiro en Local y Pago en Efectivo. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-3x2.jpg" }, [cite: 2, 3, 4, 13, 14]
        [cite_start]{ "id": "promo-lunes-martes-20", "name": "PROMOCIÓN LUNES y MARTES: 20% en Rolls", "description": "20% de descuento en Rolls. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-20.jpg" }, [cite: 5, 6, 7, 14]
        [cite_start]{ "id": "promo-miercoles-jueves-15", "name": "PROMOCIÓN MIÉRCOLES y JUEVES: 15% en Rolls", "description": "15% de descuento en Rolls. No válido para Días Festivos y Vísperas.", "price": "Ver en Local", "image": "promo-15.jpg" }, [cite: 8, 9, 10, 14]
        [cite_start]{ "id": "super-1", "name": "SUPER 1 (30 piezas)", "ingredients": "1 Pollo Teriyaki - Queso Crema - Cebollín (Env. Palta), 1 Kanikama-Palta Pimentón (Env. Sésamo), 1 Camarón-Queso Crema - Palta (Panko). Incluye 1 Soya, 1 Unagui, 2 Palitos. NO TIENEN CAMBIO.", "price": 12990, "image": "super-promo1.jpg" }, [cite: 33, 34, 35, 36, 37, 56]
        [cite_start]{ "id": "super-2", "name": "SUPER 2 (50 piezas)", "ingredients": "1 Pollo Teriyaki - Queso Crema - Cebollín (Env. Palta), 1 Kanikama - Palta - Pimentón (Env. Sésamo), 1 Pollo Teriyaki - Queso Crema-Cebollín (Env. Amapola), 1 Camarón - Queso Crema - Palta (Panko), 1 Palta-Palmito - Pimentón (Panko). Incluye: 2 Goya, 1 Unagui, 3 Palitos. NO TIENEN CAMBIO.", "price": 18990, "image": "super-promo2.jpg" }, [cite: 38, 39, 40, 41, 42, 43, 44, 45, 56]
        [cite_start]{ "id": "super-3", "name": "SUPER 3 (70 piezas)", "ingredients": "1 Pollo Teriyaki-Queso Crema - Cebollín (Env. Palta), 1 Kanikama-Palta Pimentón (Env. Sésamo), 1 Pollo Teriyaki-Queso Crema-Cebollín (Env. Amapola), 1 Palmito - Espárrago - Cebollín (Env. Queso Crema), 1 Camarón-Queso Crema - Palta (Panko), 1 Palta-Palmito - Pimentón (Panko), 1 Pollo Teriyaki - Queso Crema-Cebollín (Panko). Incluye: Soya, 2 Unagui, Palitos. NO TIENEN CAMBIO.", "price": 25990, "image": "super-promo3.jpg" } [cite: 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]
    ],
    "Snacks": [
        [cite_start]{ "id": "sashimi-salmon-3", "name": "SASHIMI SALMÓN (3 Cortes)", "price": 2800, "image": "sashimi-salmon.jpg" }, [cite: 99, 100]
        [cite_start]{ "id": "sashimi-salmon-6", "name": "SASHIMI SALMÓN (6 Cortes)", "price": 5000, "image": "sashimi-salmon.jpg" }, [cite: 99, 101]
        [cite_start]{ "id": "sashimi-salmon-12", "name": "SASHIMI SALMÓN (12 Cortes)", "price": 9000, "image": "sashimi-salmon.jpg" }, [cite: 99, 101]
        [cite_start]{ "id": "sashimi-pulpo-3", "name": "SASHIMI PULPO (3 Cortes)", "price": 3400, "image": "sashimi-pulpo.jpg" }, [cite: 103, 104]
        [cite_start]{ "id": "sashimi-pulpo-6", "name": "SASHIMI PULPO (6 Cortes)", "price": 6000, "image": "sashimi-pulpo.jpg" }, [cite: 103, 104]
        [cite_start]{ "id": "sashimi-pulpo-12", "name": "SASHIMI PULPO (12 Cortes)", "price": 10500, "image": "sashimi-pulpo.jpg" }, [cite: 103, 105]
        [cite_start]{ "id": "snack-salmon-panko-3", "name": "SNACK SALMÓN PANKO (3 Cortes)", "price": 3000, "image": "snack-salmon-panko.jpg" }, [cite: 108, 119, 120]
        [cite_start]{ "id": "snack-salmon-panko-6", "name": "SNACK SALMÓN PANKO (6 Cortes)", "price": 5500, "image": "snack-salmon-panko.jpg" }, [cite: 108, 119, 120]
        [cite_start]{ "id": "snack-salmon-panko-12", "name": "SNACK SALMÓN PANKO (12 Cortes)", "price": 9900, "image": "snack-salmon-panko.jpg" }, [cite: 108, 121]
        [cite_start]{ "id": "snack-ebi-temp-3", "name": "SNACK EBI TEMP. (3 Cortes)", "price": 2900, "image": "snack-ebi-tempura.jpg" }, [cite: 108, 122, 123]
        [cite_start]{ "id": "snack-ebi-temp-6", "name": "SNACK EBI TEMP. (6 Cortes)", "price": 5400, "image": "snack-ebi-tempura.jpg" }, [cite: 108, 124]
        [cite_start]{ "id": "snack-ebi-temp-12", "name": "SNACK EBI TEMP. (12 Cortes)", "price": 9800, "image": "snack-ebi-tempura.jpg" }, [cite: 108, 125]
        [cite_start]{ "id": "snack-pollo-3", "name": "SNACK POLLO (3 Cortes)", "price": 2800, "image": "snack-pollo.jpg" }, [cite: 108, 126, 127]
        [cite_start]{ "id": "snack-pollo-6", "name": "SNACK POLLO (6 Cortes)", "price": 4900, "image": "snack-pollo.jpg" }, [cite: 108, 128]
        [cite_start]{ "id": "snack-pollo-12", "name": "SNACK POLLO (12 Cortes)", "price": 9000, "image": "snack-pollo.jpg" }, [cite: 108, 129]
        [cite_start]{ "id": "snack-verduras-3", "name": "SNACK VERDURAS (3 Cortes)", "price": 2000, "image": "snack-verduras.jpg" }, [cite: 108, 131]
        [cite_start]{ "id": "snack-verduras-6", "name": "SNACK VERDURAS (6 Cortes)", "price": 3600, "image": "snack-verduras.jpg" }, [cite: 108, 132]
        [cite_start]{ "id": "snack-verduras-12", "name": "SNACK VERDURAS (12 Cortes)", "price": 6800, "image": "snack-verduras.jpg" }, [cite: 108, 132]
        [cite_start]{ "id": "nigiris-salmon", "name": "NIGIRIS SALMÓN", "price": 1000, "image": "nigiris-salmon.jpg" }, [cite: 135, 136]
        [cite_start]{ "id": "nigiris-camaron", "name": "NIGIRIS CAMARÓN", "price": 1000, "image": "nigiris-camaron.jpg" }, [cite: 135, 138]
        [cite_start]{ "id": "nigiris-kanikama", "name": "NIGIRIS KANIKAMA", "price": 900, "image": "nigiris-kanikama.jpg" }, [cite: 135, 140]
        [cite_start]{ "id": "nigiris-crispy-14", "name": "NIGIRIS CRISPY (14 UNIDADES)", "ingredients": "Mezcla de arroz, Queso Crema, Cebollín, Pollo/Kanikama", "price": 4290, "image": "nigiris-crispy.jpg" }, [cite: 137, 139, 141, 142, 146]
        [cite_start]{ "id": "gohan-mixto", "name": "GOHAN MIXTO", "price": 6990, "image": "gohan-mixto.jpg" }, [cite: 73, 74, 75]
        [cite_start]{ "id": "gohan-mixto-panko", "name": "GOHAN MIXTO PANKO", "price": 7990, "image": "gohan-mixto-panko.jpg" }, [cite: 81]
        [cite_start]{ "id": "gohan-pollo", "name": "GOHAN POLLO", "price": 6990, "image": "gohan-pollo.jpg" }, [cite: 81]
        [cite_start]{ "id": "gohan-pollo-panko", "name": "GOHAN POLLO PANKO", "price": 7990, "image": "gohan-pollo-panko.jpg" }, [cite: 81]
        [cite_start]{ "id": "gohan-vegetal", "name": "GOHAN VEGETAL", "price": 5490, "image": "gohan-vegetal.jpg" } [cite: 83, 84]
    ],
    "Extras": [
        [cite_start]{ "id": "salsa-soya-extra", "name": "Salsa Soya", "price": 500, "image": "salsa-soya.jpg" }, [cite: 118]
        [cite_start]{ "id": "sriracha-extra", "name": "Sriracha", "price": 500, "image": "sriracha.jpg" }, [cite: 118]
        [cite_start]{ "id": "salsa-unagui", "name": "Salsa Unagui", "price": 900, "image": "salsa-unagui.jpg" }, [cite: 118]
        [cite_start]{ "id": "wasabi-extra", "name": "Wasabi", "price": 400, "image": "wasabi.jpg" }, [cite: 118]
        [cite_start]{ "id": "jengibre-extra", "name": "Jengibre", "price": 400, "image": "jengibre.jpg" }, [cite: 118]
        [cite_start]{ "id": "palitos-extra", "name": "Palitos", "price": 150, "image": "palitos.jpg" }, [cite: 118]
        [cite_start]{ "id": "ayuda-palitos", "name": "Ayuda Palitos", "price": 400, "image": "ayuda-palitos.jpg" }, [cite: 118]
        [cite_start]{ "id": "envoltura-hoja-arroz", "name": "Envoltura Hoja de Arroz", "price": 500, "image": "hoja-arroz.jpg" }, [cite: 118]
        [cite_start]{ "id": "ciboulette-extra", "name": "Ciboulette", "price": 500, "image": "ciboulette.jpg" }, [cite: 118]
        [cite_start]{ "id": "bebidas", "name": "BEBIDAS", "ingredients": "Coca Cola, Sprite, Fanta, Coca Zero", "price": 2700, "image": "bebidas.jpg" } [cite: 143, 144, 145]
    ]
};
