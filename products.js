var IMG_EQUIPACIONES = 'img/equipaciones/';

var wishlist = JSON.parse(localStorage.getItem('ozz_wishlist') || '[]');

function saveWishlist() {
    localStorage.setItem('ozz_wishlist', JSON.stringify(wishlist));
    var b = document.getElementById('wishlist-count');
    if (b) b.textContent = wishlist.length;
}

function toggleWishlist(el, key) {
    var idx = wishlist.indexOf(key);
    if (idx === -1) { wishlist.push(key); el.classList.add('active'); }
    else { wishlist.splice(idx, 1); el.classList.remove('active'); }
    saveWishlist();
}

function findProduct(key) {
    for (var i = 0; i < PRODUCTOS.length; i++) {
        var p = PRODUCTOS[i];
        var pk = encodeURIComponent(p.nombre + '-' + p.variantes[0].folder);
        if (pk === key) return p;
    }
    return null;
}

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
            { nombre: "Local", color: "#f6fafb", folder: "mundial/alemania", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "mundial/alemaniav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#16b5d8", folder: "mundial/argentina", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "mundial/argentinav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#ff2600", folder: "mundial/belgica", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#7ac9f1", folder: "mundial/belgicav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#fff700", folder: "mundial/brasil", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0b0087", folder: "mundial/brasilv", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#ead700", folder: "mundial/colombia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#0775a8", folder: "mundial/colombiav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#eb2f2f", folder: "mundial/croacia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#052489", folder: "mundial/croaciav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#bf0603", folder: "mundial/espa\u00F1a", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mundial/espa\u00F1av", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#001692", folder: "mundial/francia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#87efef", folder: "mundial/franciav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#ffffff", folder: "mundial/inglaterra", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#e00707", folder: "mundial/inglaterrav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#0303df", folder: "mundial/italia", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#feffff", folder: "mundial/italiav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#001692", folder: "mundial/japon", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mundial/japonv", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#e10909", folder: "mundial/marruecos", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mundial/marruecosv", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#01661a", folder: "mundial/mexico", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mundial/mexicov", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#ff6200", folder: "mundial/holanda", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#ffffff", folder: "mundial/holandav", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#b10505", folder: "mundial/portugal", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#34dddd", folder: "mundial/portugalv", imagenes: ["delante.jpg", "detras.jpg"] }
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
            { nombre: "Local", color: "#5bb9fd", folder: "mundial/uruguay", imagenes: ["delante.jpg", "detras.jpg"] },
            { nombre: "Visitante", color: "#2404de", folder: "mundial/uruguayv", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "AC Milan 96/97",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#bf0603", folder: "retro/ac-milan-9697", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Arsenal 05/06",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#e10909", folder: "retro/arsenal-0506", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Arsenal 88/89",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#cc0000", folder: "retro/arsenal-8889", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Atl\u00E9tico de Madrid 96/97",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#e63946", folder: "retro/atletico-madrid-9697", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "FC Barcelona 08/09",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#a50044", folder: "retro/barcelona-0809", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Boca Juniors 99/00",
        categoria: "retro",
        liga: "Otras Ligas",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#003399", folder: "retro/boca-juniors-9900", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Brasil 2002",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#fff700", folder: "retro/brasil-2002", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Espa\u00F1a 2010",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#bf0603", folder: "retro/espana-2010", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Fiorentina 98/99",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#5c0e9e", folder: "retro/fiorentina-9899", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Inter de Mil\u00E1n 97/98",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#0b0087", folder: "retro/inter-milan-9798", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },

    {
        nombre: "Manchester United 02/04",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#cc0000", folder: "retro/manchester-united-0204", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Newcastle Utd 95/97",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#333333", folder: "retro/newcastle-9597", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Parma 98/99",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffcc00", folder: "retro/parma-9899", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Real Madrid 00/01",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/real-madrid-0001", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Real Madrid 94/96",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/real-madrid-9496", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "FC Barcelona 95/97",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#a50044", folder: "retro/barcelona-9597", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Valencia CF 99/01",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/valencia-9901", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Real Betis 95/97",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#008000", folder: "retro/real-betis-9597", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Sevilla FC 92/93",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/sevilla-9293", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Deportivo de La Coru\u00F1a 99/00",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#003399", folder: "retro/deportivo-9900", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Celta de Vigo 98/00",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#0055aa", folder: "retro/celta-9800", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Athletic Club 97/98",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ee0000", folder: "retro/athletic-club-9798", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Granada CF 97/98",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#cc0000", folder: "retro/granada-9798", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "M\u00E1laga CF 12/13",
        categoria: "retro",
        liga: "LaLiga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#003399", folder: "retro/malaga-1213", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "West Ham United 99/01",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#800080", folder: "retro/west-ham-9901", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Manchester City 97/99",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#87ceeb", folder: "retro/manchester-city-9799", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Chelsea 08/09",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#003399", folder: "retro/chelsea-0809", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Tottenham 95/97",
        categoria: "retro",
        liga: "Premier League",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/tottenham-9597", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Lazio 98/00",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#0055aa", folder: "retro/lazio-9800", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "AS Roma 98/99",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#cc0000", folder: "retro/as-roma-9899", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "AC Milan 93/94",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#bf0603", folder: "retro/ac-milan-9394", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Fiorentina 92/93",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#5c0e9e", folder: "retro/fiorentina-9293", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Sampdoria 03/04",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#0055aa", folder: "retro/sampdoria-0304", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Bayer Leverkusen 01/02",
        categoria: "retro",
        liga: "Bundesliga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#e10909", folder: "retro/bayer-leverkusen-0102", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Borussia Dortmund 96/97",
        categoria: "retro",
        liga: "Bundesliga",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#fff700", folder: "retro/borussia-dortmund-9697", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Alemania 1990",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ffffff", folder: "retro/alemania-1990", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Croacia 1998",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#eb2f2f", folder: "retro/croacia-1998", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Nigeria 1994",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#008000", folder: "retro/nigeria-1994", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "Pa\u00EDses Bajos 1988",
        categoria: "retro",
        liga: "Mundial",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#ff6200", folder: "retro/holanda-1988", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    },
    {
        nombre: "N\u00E1poles 87/88",
        categoria: "retro",
        liga: "Serie A",
        tipo: "camiseta",
        precioFan: 25,
        precioJugador: 0,
        tieneJugador: false,
        topVentas: false,
        nuevoDrop: false,
        disponible: true,
        personalizacion: true,
        pantalon: false,
        parchesTexto: "A\u00F1adir Parches (+1\u20AC)",
        placeholder: "Nombre y N\u00BA",
        variantes: [
            { nombre: "Local", color: "#01a0e2", folder: "retro/napoles-8788", imagenes: ["delante.jpg", "detras.jpg"] }
        ]
    }
];

function generarCard(p) {
    var primeraVariante = p.variantes[0].nombre;
    var precioStr = p.precioFan + ',00\u20AC';
    var wishlistKey = encodeURIComponent(p.nombre + '-' + p.variantes[0].folder);
    var inWishlist = wishlist.indexOf(wishlistKey) !== -1;

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
        ? '<button class="btn-order" onclick="addWithPackOption(this)">\uD83D\uDED2 A\u00F1adir al Pedido</button>'
        : '<button class="btn-order" disabled style="background-color: #333; color: #666; cursor: not-allowed; opacity: 0.6;">Agotado</button>';

    var heartHTML = '<span class="wishlist-heart' + (inWishlist ? ' active' : '') + '" onclick="toggleWishlist(this, \'' + wishlistKey + '\')">' + (inWishlist ? '\u2665' : '\u2661') + '</span>';
    var qvHTML = '';

    return '<div class="card" data-product-key="' + wishlistKey + '" data-active-version="Fan" data-active-variant="' + primeraVariante + '" data-price="' + p.precioFan + '">' +
        '<div class="image-container">' +
            badgeHTML +
            heartHTML +
            qvHTML +
            '<button class="nav-arrow prev" onclick="moveSlider(this, -1)">&#10094;</button>' +
            '<button class="nav-arrow next" onclick="moveSlider(this, 1)">&#10095;</button>' +
            slidersHTML +
        '</div>' +
        '<div class="info">' +
            '<h3>' + p.nombre + '</h3>' +
            '<div class="variant-selector">' + dotsHTML + '</div>' +
            (p.tieneJugador !== false ? '<div class="version-selector"><button class="version-btn active" onclick="switchVersion(this, \'Fan\', ' + p.precioFan + ')">Versi\u00F3n Fan</button><button class="version-btn" onclick="switchVersion(this, \'Jugador\', ' + p.precioJugador + ')">Versi\u00F3n Jugador</button></div>' : '<div class="version-selector" style="display:none;"></div>') +
            '<div class="price-row"><span class="price">' + precioStr + '</span>' + statusHTML + '</div>' +
            orderFormHTML +
            '<span class="size-link" onclick="openSizeModal()">\uD83D\uDCD6 Ver Gu\u00EDa de Tallas</span>' +
            btnHTML +
        '</div>' +
    '</div>';
}

function renderProductos() {
    var grids = {};
    var seccionesDinamicas = ['camisetas', 'retro', 'chandales', 'vestir'];
    document.querySelectorAll('.category-section').forEach(function(section) {
        var gridEl = section.querySelector('.grid');
        if (gridEl && seccionesDinamicas.indexOf(section.id) !== -1) {
            grids[section.id] = gridEl;
            gridEl.innerHTML = '';
        }
    });

    // Group retro products by liga
    var retroGrid = grids['retro'];
    if (retroGrid) {
        var retroProducts = [];
        PRODUCTOS.forEach(function(p) { if (p.categoria === 'retro') retroProducts.push(p); });
        var ligas = {};
        retroProducts.forEach(function(p) {
            var l = p.liga || 'Otras';
            if (!ligas[l]) ligas[l] = [];
            ligas[l].push(p);
        });
        var ordenLigas = ['LaLiga', 'Premier League', 'Serie A', 'Bundesliga', 'Mundial', 'Otras Ligas'];
        var ligasOrden = Object.keys(ligas).sort(function(a, b) {
            var ia = ordenLigas.indexOf(a), ib = ordenLigas.indexOf(b);
            return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        });
        ligasOrden.forEach(function(liga) {
            ligas[liga].sort(function(a, b) { return a.nombre.localeCompare(b.nombre); });
            retroGrid.insertAdjacentHTML('beforeend', '<div class="liga-header"><span class="liga-name">' + liga + '</span></div>');
            ligas[liga].forEach(function(p) { retroGrid.insertAdjacentHTML('beforeend', generarCard(p)); });
            retroGrid.insertAdjacentHTML('beforeend',
                '<div class="card" style="border: 1px dashed #333;">' +
                    '<div class="image-container"><img src="img/banners/banner-retro.jpg" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;"></div>' +
                    '<div class="info" style="display: flex; flex-direction: column; height: calc(100% - 100px); justify-content: space-between;">' +
                        '<div>' +
                            '<h3>\u00BFNo encuentras tu camiseta?</h3>' +
                            '<p style="color: #666; font-size: 0.8rem; margin-top: 6px; line-height: 1.4;">Tenemos m\u00E1s equipos retro disponibles bajo pedido. Preg\u00FAntanos sin compromiso.</p>' +
                        '</div>' +
                        '<div style="margin-top: 15px;">' +
                            '<a href="https://wa.me/34635062811?text=%C2%A1Buenas!%20Estoy%20buscando%20una%20camiseta%20retro%20que%20no%20veo%20en%20la%20web." class="btn-order" target="_blank" style="background-color: #1aa34a; color: #fff;">Consultar Disponibilidad</a>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        });
        // Assign data-liga to retro elements for dropdown filtering
        var retroHeaders = retroGrid.querySelectorAll('.liga-header');
        retroHeaders.forEach(function(h) {
            var liga = h.querySelector('.liga-name').textContent;
            var el = h.nextElementSibling;
            while (el && !el.classList.contains('liga-header')) {
                el.setAttribute('data-liga', liga);
                el = el.nextElementSibling;
            }
        });
    }

    PRODUCTOS.forEach(function(p) {
        if (p.categoria === 'retro') return;
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
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

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