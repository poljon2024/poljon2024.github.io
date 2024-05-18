# poljon2024.github.io

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fruit and Vegetable Scientific Names</title>
    <link rel="icon" type="image/png" href="vegetable.png">
    <link rel="stylesheet" href="style.css">    
</head>
<body>
    <div class="navbar">
        <a href="CALCULATOR.html">Calculator</a>
        <a href="F&VLIST.html">F&V</a>
    </div>
  
    <video id="video-background" autoplay muted loop>
        <source src="background.mp4" type="video/mp4">
    </video>

    <div id="container">
        <h2>Search for Fruit or Vegetable Names</h2>
        <input type="text" id="searchInput" placeholder="Enter fruit or vegetable name">
        <div id="results"></div>
    </div>


    <script>
        
        const data = {
"okra": "Abelmoschus esculentus",
"sapodilla": "Achras sapota",
"kiwi": "Actinidia chinensis",
"button Mushroom": "Agaricus bisporus",
"mushroom": "Agaricus spp",
"green Agave": "Agave atrovirens",
"tung Tree": "Aleurites spp",
"leek": "Allium ampeloprasum",
"onion": "Allium cepa",
"leek": "Allium porrum",
"garlic": "Allium sativum",
"chives": "Allium schoenoprasum",
"aloe Vera": "Aloe vera",
"galangal": "Alpinia officinarum",
"cashew": "Anacardium occidentale",
"pineapple": "Ananas comosus",
"dill": "Anethum graveolens",
"caraway": "Anisosciadium lanatum",
"cherimoya": "Annona reticulata",
"sugar Apple": "Annona squamosa",
"chervil": "Anthriscus cerefolium",
"celery": "Apium graveolens",
"peanut": "Arachis hypogaea",
"areca Nut": "Areca catechu",
"horseradish": "Armoracia rusticana",
"arracacha": "Arracacia xanthorhiza",
"tarragon": "Artemisia dracunculus",
"breadfruit": "Artocarpus altilis",
"asparagus": "Asparagus officinalis",
"quebracho": "Aspidosperma spp",
"brazil Nut": "Bertholletia excelsa",
"beet": "Beta vulgaris",
"cabbage": "Brassica oleracea capitata",
"rapeseed": "Brassica napus",
"cabbage": "Brassica oleracea",
"broccoli": "Brassica oleracea Var.Italica",
"cauliflower": "Brassica oleracea var. botrytis",
"cabbage": "Brassica oleracea var. capitata",
"mustard": "Brassica spp",
"pigeon Pea": "Cajanus cajan",
"tea": "Camellia sinensis",
"bell Pepper": "Capsicum annuum",
"pepper": "Capsicum spp",
"papaya": "Carica papaya",
"caraway": "Carum carvi",
"pecan": "Carya illinoensis",
"chestnut": "Castanea sativa",
"kapok": "Ceiba pentandra",
"carob": "Ceratonia siliqua",
"quinoa": "Chenopodium quinoa",
"chickpea": "Cicer arietinum",
"endive": "Cichorium endivia",
"chicory": "Cichorium intybus",
"cinchona": "Cinchona spp",
"watermelon": "Citrullus lanatus",
"orange": "Citrus sinensis",
"lime": "Citrus aurantifolia",
"bitter Orange": "Citrus aurantium",
"bergamot": "Citrus bergamia",
"pomelo": "Citrus grandis",
"kaffir Lime": "Citrus hystrix DC",
"lemon": "Citrus limon",
"citrus Medica": "Citrus medica",
"grapefruit": "Citrus paradisi",
"tangerine": "Citrus reticulata",
"sweet Orange": "Citrus sinensis",
"mandarin": "Citrus veticulata",
"ivy Gourd": "Coccinia grandis",
"coconut": "Cocos nucifera",
"coffee": "Coffee spp",
"taro": "Colocasia spp",
"congo Jute": "Corchorus olitorius",
"coriander": "Coriandrum sativum",
"hazelnut": "Corylus avellana",
"melon": "Cucumis melo",
"honeydew Melon": "Cucumis melo Inodorus",
"armenian Cucumber": "Cucumis melo flexuosus",
"cucumber": "Cucumis sativus",
"pumpkin": "Cucurbita pepo",
"squash": "Cucurbita spp",
"turmeric": "Curcuma longa",
"guar": "Cyamopsis tetragonoloba",
"quince": "Cydonia oblonga",
"lemongrass": "Cymbopogon spp",
"artichoke": "Cynara cardunculus",
"carrot": "Daucus carota",
"longan": "Dimocarpus longan",
"yam": "Dioscorea spp",
"persimmon": "Diospyros kaki",
"loquat": "Eriobotrya japonica",
"arugula": "Eruca Sativa",
"fig": "Ficus carica",
"fennel": "Foeniculum vulgare",
"strawberry": "Fragaria spp",
"maguey": "Furcraea macrophylla",
"mangosteen": "Garcinia mangostana",
"soybean": "Glycine max",
"licorice": "Glycyrrhiza glabra",
"grape Leaves": "Vitis vinifera",
"niger Seed": "Guizotia abyssinica",
"kenaf": "Hibiscus cannabinus",
"barley": "Hordeum vulgare",
"hops": "Humulus lupulus",
"dragon Fruit": "Hylocereus costaricensis",
"yerba Mate": "Ilex paraguariensis",
"sweet Potato": "Ipomoea batatas",
"walnut": "Juglans spp",
"lettuce": "Lactuca sativa",
"bottle Gourd": "Lagenaria siceraria",
"lavender": "Lavandula spp",
"lentil": "Lens culinaris",
"cress": "Lepidium sativum",
"flax": "Linum usitatissimum",
"litchi": "Litchi chinensis",
"lupin": "Lupinus spp",
"macadamia": "Macadamia spp",
"apple": "Malus domestica",
"crab Apple": "Malus sylvestris",
"mango": "Mangifera indica",
"yuca": "Manihot esculenta",
"chico Fruit": "Manilkara zapota",
"arrowroot": "Maranta arundinacea",
"mint": "Mentha spp",
"peppermint": "Mentha × piperita",
"medlar": "Mespilus germanica",
"bitter Melon": "Momordica charantia",
"moringa": "Moringa oleifera",
"mulberry": "Morus spp",
"banana": "Musa acuminata",
"plantain": "Musa paradisiaca",
"abaca": "Musa textilis",
"rambutan": "Nephelium lappaceum",
"tobacco": "Nicotiana tabacum",
"basil": "Ocimum basilicum",
"olive": "Olea europaea",
"sainfoin": "Onobrychis viciifolia",
"marjoram": "Origanum majorana",
"parsnip": "Pastinaca sativa",
"perilla": "Perilla spp",
"avocado": "Persea americana",
"parsley": "Petroselinum crispum",
"common Bean": "Phaseolus vulgaris",
"date": "Phoenix dactylifera",
"new Zealand Flax": "Phormium tenax",
"indian Gooseberry": "Phyllanthus emblica",
"goldenberry": "Physalis peruviana",
"groundcherry": "Physalis spp",
"anise": "Pimpinella anisum",
"black Pepper": "Piper nigrum",
"pistachio": "Pistacia spp",
"pea": "Pisum sativum",
"chinese Potato": "Plectranthus rotundifolius",
"purslane": "Portulaca oleracea",
"tinda": "Praecitrullus fistulosus",
"apricot": "Prunus armeniaca",
"plum": "Prunus domestica",
"almond": "Prunus dulcis",
"peach": "Prunus persica",
"cherry": "Prunus spp",
"guava": "Psidium guajava",
"pomegranate": "Punica granatum",
"pear": "Pyrus communis",
"radish": "Raphanus sativus",
"redcurrant": "Ribes rubrum",
"currant": "Ribes spp",
"wild Rose": "Rosa davurica",
"rosemary": "Rosmarinus officinalis",
"bramble": "Rubus spp",
"sugarcane": "Saccharum officinarum",
"sage": "Salvia officinalis",
"black Salsify": "Scorzonera hispanica",
"chayote": "Sechium edule",
"sesame": "Sesamum indicum",
"potato": "Solanum tuberosum",
"tomato": "Solanum lycopersicum",
"eggplant": "Solanum melongena",
"pepino": "Solanum muricatum",
"argel": "Solenostemma argel",
"sorghum": "Sorghum bicolor",
"spinach": "Spinacia oleracea",
"sweet Basil": "Ocimum basilicum",
"tamarind": "Tamarindus indica",
"desert Truffle": "Terfeziaceae spp",
"cocoa": "Theobroma cacao",
"thyme": "Thymus vulgaris",
"snake Gourd": "Trichosanthes cucumerina",
"trichosanthes": "Trichosanthes spp",
"clover": "Trifolium spp",
"fenugreek": "Trigonella foenum-graecum",
"wheat": "Triticum spp",
"blueberry": "Vaccinium spp",
"corn Salad": "Valerianella locusta",
"vanilla": "Vanilla planifolia",
"fava Bean": "Vicia faba",
"common Vetch": "Vicia sativa",
"cowpea": "Vigna unguiculata",
"grape": "Vitis vinifera",
"tannia": "Xanthosoma sagittifolium",
"corn": "Zea mays",
"ginger": "Zingiber officinale",
"jujube": "Ziziphus jujuba",
"kumquat": "Fortunella margarita",
"vigna": "Vigna spp",
            
        };

      
        function searchScientificName() {
            const searchInput = document.getElementById("searchInput").value.toLowerCase();
            const resultsContainer = document.getElementById("results");
            const scientificName = data[searchInput];
            if (scientificName) {
                resultsContainer.innerHTML = "<span>Scientific Name:</span> " + scientificName + " <button onclick='copyScientificName(\"" + scientificName + "\")'>Copy</button>";
            } else {
                resultsContainer.innerHTML = "Scientific name not found for '" + searchInput + "'";
            }
        }

        function copyScientificName(name) {
            const textarea = document.createElement('textarea');
            textarea.value = name;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
        }

        document.getElementById("searchInput").addEventListener("input", searchScientificName);
    </script>
</body>
</html>
