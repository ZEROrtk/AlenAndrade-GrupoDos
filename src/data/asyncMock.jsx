export const products = [
    {
        id: 1,
        name: 'Xbox Series S',
        price: 350,
        despcription: 'Cambia de manera fluida entre diferentes títulos y reanuda el juego al instante desde donde lo dejaste, Los juegos se cargan mucho más rápido con la SSD personalizada y el software integrado. Mientras que la latencia ultrabaja mejora el tiempo de respuesta de su control a su televisor. Velocidades de fotogramas más rápidas y estables de hasta 120 FPS mientras juegas.',
        stock: 590,
        img: 'https://static-geektopia.com/storage/t/i/333/33356/300x300/a4c45daf6c57a34c8bf6a5e45.jpg',
        category: 'Microsoft',
      
    },
    {
        id: 2,
        name: 'PlayStation 5',
        price: 520,
        despcription: 'umérgete en juegos que se ven y suenan increíbles, incluidos juegos exclusivos de PlayStation Studios y con retrocompatibilidad total para tu biblioteca de PS4. Ponte en el centro del juego gracias a los controles sensibles, al audio de 360 grados1 y a los detalles gráficos minuciosos. Juega más de 8500 juegos de PS43 en consolas PS5. Disfruta de una experiencia de mayor fluidez y velocidad de cuadros por segundo en algunos de los juegos de PS4 con la tecnología Game Boost de PS5.',
        stock: 1000,
        img: 'https://www.elryan.com/img/300/300/resize/catalog/product/p/s/ps5-slim-hero-4_1_1.png',
        category: 'Sony',
    },
    {
        id: 3,
        name: 'PlayStation 4',
        price: 260,
        despcription: 'Almacena tus juegos, aplicaciones, capturas de pantalla y videos en hasta 1 TB de almacenamiento en la consola PS4: más delgada y ligera que el modelo PS4 original y disponible en Jet Black y más colore',
        stock: 5,
        img: 'https://media.game.es/COVERV2/3D_L/115/115351.png',
        category: 'Sony',
    },
    {
        id: 4,
        name: 'PlayStation 3',
        price: 140,
        despcription: 'Tarjeta gráfica: cuenta con una NVIDIA SCEI RSX de 550 Mhz. Memoria RAM: tiene 512 MB de RAM distribuidos entre 2 tipos de memoria, siendo 256 MB de GDDR3 RSX y 256 MB de XDR RAM. Almacenamiento: 320 GB, pero variará la capacidad de su disco duro Sata de 2,5 pulgadas y 5200 RPM.',
        stock: 14,
        img: 'https://media.game.es/COVERV2/3D_L/070/070795.png',
        category: 'Sony',
    },
    {
        id: 5,
        name: 'PlayStation 2',
        price: 120,
        despcription: 'Emotion Engine (EE) RISC MIPS-IV (R5900) de 64 bits con capacidades SIMD de 128 bits a 294 Mhz con 2 co-procesadores. 32 KB de caché total con un ancho de bus de 128 bits DMA con 10 canales. 32 megabytes de RAMBUS DRAM con un ancho de 32 bits (16 bits en Dual Channel).Frecuencias de 400 Mhz con un máximo de 800. 4 MB de VRAM a 162 Mhz.',
        stock: 50,
        img: 'https://media.game.es/COVERV2/3D_L/090/090245.png',
        category: 'Sony',
    },
    {
        id: 6,
        name: 'PlayStation 1',
        price: 200,
        despcription: 'PlayStation es la primera videoconsola de sobremesa descontinuada producida por Sony Computer Entertainment. Fue lanzado en Japón el 3 de diciembre de 1994, en América del Norte el 9 de septiembre de 1995, en Europa el 29 de septiembre de 1995 y en Australia el 15 de noviembre de 1995.',
        stock: 3,
        img: 'https://bedfordshirephonesales.co.uk/cdn/shop/files/IMG-0160_300x300.jpg?v=1724287906',
        category: 'Sony',
    },
    {
        id: 7,
        name: 'PSP',
        price: 155,
        despcription: ' Se lanzó por primera vez en Japón el 12 de diciembre de 2004, en América del Norte el 24 de marzo de 2005 y en las regiones PAL el 1 de septiembre de 2005, y es la primera entrega portátil de la línea de consolas PlayStation.',
        stock: 2,
        img: 'https://images.freeimages.com/fic/images/icons/382/console/300/psp_black_icon.png',
        category: 'Sony',
    },
    {
        id: 8,
        name: 'PlayStation Vita',
        price: 160,
        despcription: 'Se lanzó por primera vez en Japón el 17 de diciembre de 2011, luego en otros territorios internacionales el 22 de febrero de 2012 y se produjo hasta su discontinuación el 1 de marzo de 2019',
        stock: 8,
        img: 'https://www.rockandpop.cl/wp-content/uploads/2018/05/ps-vita-oled-nueva-en-caja-original-D_NQ_NP_618668-MLA26413979423_112017-F-300x300.jpg',
        category: 'Sony',
    },
    {
        id: 9,
        name: 'Xbox Classic',
        price: 171,
        despcription: 'Salió a la venta como la primera incursión de Microsoft en el mercado de las consolas de videojuegos el 15 de noviembre de 2001 en Norteamérica, seguida de Australia, Europa y Japón en 2002.',
        stock: 1,
        img: 'https://www.gamerclub.cl/wp-content/uploads/2024/10/XBOX11-300x300.png',
        category: 'Microsoft',
    },
    {
        id: 10,
        name: 'Xbox Series X',
        price: 600,
        despcription: 'Aprovecha al máximo cada minuto de tus juegos con Quick Resume, tiempos de carga ultrarrápidos y una jugabilidad de hasta 120 FPS... todo ello con la tecnología Xbox Velocity Architecture.',
        stock: 1500,
        img: 'https://assets1.ignimgs.com/2019/12/13/xbox-series-x---button-01a-1576278376804.jpg?width=300&crop=1%3A1%2Csmart&auto=webp',
        category: 'Microsoft',
    }, 
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};
