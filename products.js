var IMG_EQUIPACIONES = 'img/equipaciones/';

var PRODUCTOS = [
    {
        nombre: "Alemania",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches del Torneo (+1\u20AC)",
        placeholder: "Ej: OZZ 10",
        variantes: [
            { nombre: "Local", color: "#f6fafb", folder: "alemania", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "alemaniav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Argentina",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: true,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches del Torneo (+1\u20AC)",
        placeholder: "Ej: MESSI 10",
        variantes: [
            { nombre: "Local", color: "#16b5d8", folder: "argentina", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "argentinav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "B\u00E9lgica",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ff2600", folder: "belgica", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#7ac9f1", folder: "belgicav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Brasil",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: true,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#fff700", folder: "brasil", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "brasilv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Colombia",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ead700", folder: "colombia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0775a8", folder: "colombiav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Croacia",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#eb2f2f", folder: "croacia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#052489", folder: "croaciav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Espa\u00F1a",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: true,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#bf0603", folder: "espa\u00F1a", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "espa\u00F1av", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Francia",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#001692", folder: "francia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#87efef", folder: "franciav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Inglaterra",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "inglaterra", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#e00707", folder: "inglaterrav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Italia",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#0303df", folder: "italia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#feffff", folder: "italiav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Jap\u00F3n",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#001692", folder: "japon", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "japonv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Marruecos",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#e10909", folder: "marruecos", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "marruecosv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "M\u00E9xico",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#01661a", folder: "mexico", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mexicov", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Pa\u00EDses Bajos",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ff6200", folder: "holanda", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "holandav", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Portugal",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#b10505", folder: "portugal", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#34dddd", folder: "portugalv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Uruguay",
        categoria: "camisetas",
        tipo: "camiseta",
        precioFan: 20,
        precioJugador: 22,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: true,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#5bb9fd", folder: "uruguay", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#2404de", folder: "uruguayv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    }
];

function generarCard(p) {
    var primeraVariante = p.variantes[0].nombre;
    var precioStr = p.precioFan + ',00\u20AC';

    var badgeHTML = '';
    if (p.topVentas) badgeHTML = '<span class="trend-badge top-sales">\uD83D\uDD25 TOP VENTAS</span>';
    else if (p.nuevoDrop) badgeHTML = '<span class="trend-badge new">\u2728 NUEVO DROP</span>';

    var slidersHTML = '';
    var dotsHTML = '';
    p.variantes.forEach(function(v, i) {
        var activeClass = i === 0 ? ' active' : '';
        var dotActiveClass = i === 0 ? ' active' : '';
        var variantClass = 'variant-' + v.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        var imgsHTML = '';
        v.imagenes.forEach(function(img) {
            imgsHTML += '<img src="' + IMG_EQUIPACIONES + v.folder + '/' + img + '" alt="' + p.nombre + '" loading="lazy">';
        });
        slidersHTML += '<div class="image-slider ' + variantClass + activeClass + '">' + imgsHTML + '</div>';
        dotsHTML += '<span class="variant-dot' + dotActiveClass + '" style="background-color: ' + v.color + ';" onclick="switchVariant(this, \'' + variantClass + '\', \'' + v.nombre + '\')"></span>';
    });

    var orderFormHTML = '<div class="order-form"><div style="display: flex; gap: 10px;"><div style="flex: 1;"><label>Talla</label><select class="talla-select"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select></div>';
    if (p.personalizacion) {
        orderFormHTML += '<div style="flex: 2;"><label>Personalizar (+1\u20AC)</label><input type="text" class="perso-input" placeholder="' + p.placeholder + '"></div>';
    }
    orderFormHTML += '</div>';
    orderFormHTML += '<label class="checkbox-container"><input type="checkbox" class="parches-check"> ' + p.parchesTexto + '</label>';
    if (p.pantalon) {
        orderFormHTML += '<label class="checkbox-container" style="margin-top: 5px;"><input type="checkbox" class="pantalon-check"> A\u00F1adir Pantal\u00F3n a juego (+5\u20AC)</label>';
    }
    orderFormHTML += '</div>';

    var statusHTML = p.disponible
        ? '<span class="status">Disponible</span>'
        : '<span class="status" style="color: #ff4444; background-color: rgba(255,68,68,0.1);">Agotado</span>';

    var btnHTML = p.disponible
        ? '<button class="btn-order" onclick="addToCart(this)">\uD83D\uDED2 A\u00F1adir al Pedido</button>'
        : '<button class="btn-order" disabled style="background-color: #333; color: #666; cursor: not-allowed; opacity: 0.6;">Agotado</button>';

    return '<div class="card" data-active-version="Fan" data-active-variant="' + primeraVariante + '" data-price="' + p.precioFan + '">' +
        '<div class="image-container">' +
            badgeHTML +
            '<button class="nav-arrow prev" onclick="moveSlider(this, -1)">&#10094;</button>' +
            '<button class="nav-arrow next" onclick="moveSlider(this, 1)">&#10095;</button>' +
            slidersHTML +
        '</div>' +
        '<div class="info">' +
            '<h3>' + p.nombre + '</h3>' +
            '<div class="variant-selector">' + dotsHTML + '</div>' +
            '<div class="version-selector"><button class="version-btn active" onclick="switchVersion(this, \'Fan\', ' + p.precioFan + ')">Versi\u00F3n Fan</button><button class="version-btn" onclick="switchVersion(this, \'Jugador\', ' + p.precioJugador + ')">Versi\u00F3n Jugador</button></div>' +
            '<div class="price-row"><span class="price">' + precioStr + '</span>' + statusHTML + '</div>' +
            orderFormHTML +
            '<span class="size-link" onclick="openSizeModal()">\uD83D\uDCD6 Ver Gu\u00EDa de Tallas</span>' +
            btnHTML +
        '</div>' +
    '</div>';
}

function renderProductos() {
    var grids = {};
    var seccionesDinamicas = ['camisetas', 'retro', 'chandales', 'vestir', 'f1', 'nba'];
    document.querySelectorAll('.category-section').forEach(function(section) {
        var gridEl = section.querySelector('.grid');
        if (gridEl && seccionesDinamicas.indexOf(section.id) !== -1) {
            grids[section.id] = gridEl;
            gridEl.innerHTML = '';
        }
    });

    PRODUCTOS.forEach(function(p) {
        var grid = grids[p.categoria];
        if (grid) {
            grid.insertAdjacentHTML('beforeend', generarCard(p));
        }
    });

    var gridMundial = grids['camisetas'];
    if (gridMundial) {
        gridMundial.insertAdjacentHTML('beforeend',
            '<div class="card" style="border: 1px dashed #333;">' +
                '<div class="image-container"><img src="img/mundial.jpg" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;"></div>' +
                '<div class="info" style="display: flex; flex-direction: column; height: calc(100% - 100px); justify-content: space-between;">' +
                    '<div>' +
                        '<h3>\u00BFBuscas otra selecci\u00F3n?</h3>' +
                        '<p style="color: #666; font-size: 0.8rem; margin-top: 6px; line-height: 1.4;">Tenemos los cat\u00E1logos completos de las 48 selecciones del Mundial bajo pedido directo.</p>' +
                    '</div>' +
                    '<div style="margin-top: 15px;">' +
                        '<a href="https://wa.me/34635062811?text=\u00A1Buenas!%20Estoy%20buscando%20la%20camiseta%20de%20una%20selecci%C3%B3n%20que%20no%20veo%20en%20la%20web." class="btn-order" target="_blank" style="background-color: #1aa34a; color: #fff;">Consultar Disponibilidad</a>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    }

    initZoom();
}

function initZoom() {
    var container = document.querySelector('.container');
    if (!container) return;

    container.addEventListener('mousemove', function(e) {
        var imgContainer = e.target.closest('.image-container');
        if (!imgContainer) return;
        var card = imgContainer.closest('.card');
        if (card && card.style.border && card.style.border.includes('dashed')) return;

        var currentSlider = imgContainer.querySelector('.image-slider.active');
        if (!currentSlider) return;
        var images = currentSlider.querySelectorAll('img');
        if (images.length === 0) return;

        var width = currentSlider.clientWidth;
        var activeIndex = Math.round(currentSlider.scrollLeft / width);
        var img = images[activeIndex];
        if (!img) return;

        var rect = imgContainer.getBoundingClientRect();
        var pctX = ((e.clientX - rect.left) / rect.width) * 100;
        var pctY = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transition = 'transform 0.15s ease-out';
        img.style.transformOrigin = pctX + '% ' + pctY + '%';
        img.style.transform = 'scale(1.5)';
    });

    container.addEventListener('mouseleave', function() {
        container.querySelectorAll('.image-slider img').forEach(function(img) {
            img.style.transition = 'transform 0.4s ease';
            img.style.transform = 'scale(1)';
            img.style.transformOrigin = 'center center';
        });
    });
}