"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Carousel3D from "../components/Carousel3D";

// Data de productos
const products = [
    {
        id: "quillay",
        name: "Miel de Quillay",
        price: "$10.990",
        image: "/prospectos/apimiel/assets/products/quillay_natural.png",
        tag: "Best Seller",
        tieneDetalle: true,
    },
    {
        id: "avellano",
        name: "Miel de Avellano",
        price: "$12.990",
        image: "/prospectos/apimiel/assets/products/avellano_natural.png",
        tag: "Limitada",
        tieneDetalle: true,
    },
    {
        id: "multifloral",
        name: "Miel Multifloral",
        price: "$8.990",
        image: "/prospectos/apimiel/assets/products/multifloral_natural.png",
        tag: "Esencial",
        tieneDetalle: true,
    },
    {
        id: "ulmo",
        name: "Ulmo Valdiviano",
        price: "$11.990",
        image: "/prospectos/apimiel/assets/products/ulmo_natural.png",
        tag: "Premium",
        tieneDetalle: false,
    },
    {
        id: "raps",
        name: "Crema de Raps",
        price: "$9.990",
        image: "/prospectos/apimiel/assets/products/raps_natural.png",
        tag: null,
        tieneDetalle: false,
    },
    {
        id: "hierba_azul",
        name: "Hierba Azul",
        price: "$13.990",
        image: "/prospectos/apimiel/assets/products/hierba_azul_natural.png",
        tag: "Exclusiva",
        tieneDetalle: false,
    }
];

// Fichas detalladas del cliente
const fichas: Record<string, {
    titulo: string;
    origen: string;
    composicion: string;
    color: string;
    aroma: string;
    sabor: string;
    textura: string;
    persistencia: string;
    maridaje: string;
    caracteristicas: string;
    nutricion: { calorias: string; carbohidratos: string; azucares: string; proteinas: string; grasas: string; fibra: string };
    beneficios: string;
}> = {
    quillay: {
        titulo: "Miel de Quillay",
        origen: "Santa Bárbara, VIII Región de Chile, bosque esclerófilo ubicado en el sector de Quillaileo, Cordillera de los Andes.",
        composicion: "Miel con un 52,5% de pólenes de Quillay predominantes. Miel pura y sin filtrar. 100% Natural, libre de químicos o compuestos sintéticos.",
        color: "Ámbar oscuro, con tonos rojizos, sutilmente dorado.",
        aroma: "Intenso y herbáceo, con notas que recuerdan a la madera y resina, típico del quillay.",
        sabor: "Dulce profundo, intenso, agradable y muy suave, con notas sutilmente mentoladas al retrogusto.",
        textura: "Cristalización rápida, fuerte, ligeramente viscosa y untable, cristales finos y muy suaves.",
        persistencia: "Larga, con un final marcado y algo resinoso.",
        maridaje: "Quesos curados, carnes a la parrilla, panes integrales. Vinos tintos robustos o cervezas artesanales oscuras.",
        caracteristicas: "Origen botánico del árbol de Quillay, flores de las cuales liban el néctar las abejas.",
        nutricion: { calorias: "30-35 kcal", carbohidratos: "8-9 g", azucares: "7-8 g", proteinas: "0.1 g", grasas: "0 g", fibra: "0 g" },
        beneficios: "Rica en antioxidantes. Contiene vitamina C, calcio y potasio.",
    },
    avellano: {
        titulo: "Miel de Avellano",
        origen: "Cosechada en la floración del avellano chileno, especie endémica — propia y única del lugar, no existe otra en el planeta.",
        composicion: "Miel con un 60% del polen de esta flor, convirtiéndola en monofloral. Miel cruda.",
        color: "Dorado intenso, ámbar claro con matices dorados.",
        aroma: "Suave y ligeramente a nuez, con toques sutiles de frutos secos, evocando avellanas frescas.",
        sabor: "Dulce moderado, ligero matiz de nuez tostada y toque afrutado. Suave, pero con complejidad agradable en boca.",
        textura: "Cremosa y untuosa, fácil de esparcir.",
        persistencia: "Media, con un retrogusto que resalta notas de frutos secos.",
        maridaje: "Quesos frescos o semicurados, frutos secos, panes tostados. Vinos blancos suaves o espumosos.",
        caracteristicas: "Además de un delicioso sabor, posee beneficios antibacterianos, antimicrobianos, antiinflamatorios y antioxidantes. Ideal para resfríos, enfermedades virales y dolores de cabeza.",
        nutricion: { calorias: "30-35 kcal", carbohidratos: "8-9 g", azucares: "7-8 g", proteinas: "0.1 g", grasas: "0 g", fibra: "0 g" },
        beneficios: "Propiedades antisépticas y cicatrizantes para heridas de la piel. Evita infecciones y acelera la cicatrización.",
    },
    multifloral: {
        titulo: "Miel Multifloral",
        origen: "Santa Bárbara, VIII Región de Chile, de bosques esclerófilos de origen botánico.",
        composicion: "Contiene especies como flores silvestres del Biobío, Notro, Litre, Boldo, Peumo y Quillay, sin predominancia de una sobre las otras.",
        color: "Ámbar medio levemente oscuro (por ser de montaña), reflejos dorados o rojizos.",
        aroma: "Muy floral y variado, fuertemente floral intenso. Notas desde lo frutal hasta lo herbáceo.",
        sabor: "Intenso, muy dulce y persistente, matizado con notas cítricas y sutilmente amargas.",
        textura: "Cristalización rápida, cristales finos y suaves.",
        persistencia: "Media, con un final fresco y floral.",
        maridaje: "Frutas frescas, quesos suaves, yogures naturales. Excelente para tés e infusiones. Vinos blancos afrutados o cervezas ligeras.",
        caracteristicas: "Miel sobre la cual no predomina ningún néctar o polen particular. Su composición depende de la zona de recolección de las abejas.",
        nutricion: { calorias: "30-35 kcal", carbohidratos: "8-9 g", azucares: "7-8 g", proteinas: "0.1 g", grasas: "0 g", fibra: "0 g" },
        beneficios: "Propiedades antibióticas y antibacterianas. Fortalece el sistema inmunológico y proporciona energía rápidamente.",
    },
};

export default function ProductosPage() {
    const [view, setView] = useState<'3d' | 'grid'>('3d');
    const [fichaActiva, setFichaActiva] = useState<string | null>(null);

    const fichaData = fichaActiva ? fichas[fichaActiva] : null;

    return (
        <main className="min-h-screen pt-32 bg-[#0A0A0A] text-[#FDF5E6] flex flex-col items-center overflow-x-hidden">

            <section className="w-full max-w-[1400px] px-4 flex flex-col items-center">

                {/* Header & Controls */}
                <div className="w-full flex flex-col md:flex-row items-end justify-between mb-8 border-b border-[#D4AF37]/30 pb-4">
                    <div className="mb-4 md:mb-0">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 block font-medium">Boutique</span>
                        <h1 className="text-3xl md:text-5xl font-serif">La Colección</h1>
                    </div>

                    {/* Switcher Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setView('3d')}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${view === '3d'
                                ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                : 'border-[#D4AF37]/20 text-[#D4AF37]/50 hover:border-[#D4AF37]/50'
                                }`}
                        >
                            Vista Inmersiva 3D
                        </button>
                        <button
                            onClick={() => setView('grid')}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${view === 'grid'
                                ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                                : 'border-[#D4AF37]/20 text-[#D4AF37]/50 hover:border-[#D4AF37]/50'
                                }`}
                        >
                            Catálogo
                        </button>
                    </div>
                </div>

                {/* Content Switching */}
                <div className="w-full min-h-[600px] relative">
                    <AnimatePresence mode="wait">

                        {view === '3d' ? (
                            <motion.div
                                key="3d"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <Carousel3D />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                {/* Grid */}
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-16 justify-items-center mt-12">
                                    {products.map((product, i) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="group flex flex-col w-full max-w-[220px] cursor-pointer"
                                            onClick={() => product.tieneDetalle && setFichaActiva(product.id)}
                                        >
                                            {/* Card Imagen */}
                                            <div className="relative aspect-square w-full mb-5 rounded-lg overflow-hidden border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-500 shadow-md">
                                                {product.tag && (
                                                    <div className="absolute top-2 right-2 z-20">
                                                        <span className="text-[7px] font-bold uppercase tracking-wider bg-[#0A0A0A]/80 backdrop-blur-sm text-[#D4AF37] border border-[#D4AF37]/50 px-2 py-0.5 rounded-sm">
                                                            {product.tag}
                                                        </span>
                                                    </div>
                                                )}
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
                                                    sizes="220px"
                                                />
                                                {product.tieneDetalle && (
                                                    <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-300 flex items-center justify-center">
                                                        <span className="text-xs uppercase tracking-widest text-[#FDF5E6] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                                                            Ver Ficha
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Info */}
                                            <div className="text-center px-1">
                                                <h3 className="text-xs font-bold text-[#FDF5E6] leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors min-h-[2.5em] flex items-center justify-center">
                                                    {product.name}
                                                </h3>
                                                <div className="text-xs font-serif text-[#D4AF37] opacity-80">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </section>

            {/* Modal Ficha de Producto */}
            <AnimatePresence>
                {fichaActiva && fichaData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md"
                            onClick={() => setFichaActiva(null)}
                        />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10 bg-[#151515] border border-[#D4AF37]/20 rounded-[2rem] max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setFichaActiva(null)}
                                className="absolute top-6 right-6 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors text-2xl font-light"
                            >
                                ✕
                            </button>

                            {/* Header */}
                            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3 block font-bold">Ficha Técnica</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-2">{fichaData.titulo}</h2>
                            <p className="text-xs font-light opacity-50 mb-8">{fichaData.origen}</p>
                            <div className="h-[1px] w-16 bg-[#D4AF37]/30 mb-8" />

                            {/* Composición */}
                            <p className="text-sm font-light opacity-70 mb-8 text-justify leading-relaxed">
                                {fichaData.composicion}
                            </p>

                            {/* Perfil Sensorial — Grid */}
                            <h3 className="text-lg font-serif text-[#D4AF37] mb-6">Perfil Sensorial</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: "Color", value: fichaData.color },
                                    { label: "Aroma", value: fichaData.aroma },
                                    { label: "Sabor", value: fichaData.sabor },
                                    { label: "Textura", value: fichaData.textura },
                                    { label: "Persistencia", value: fichaData.persistencia },
                                    { label: "Maridaje", value: fichaData.maridaje },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#0A0A0A] rounded-xl p-4 border border-[#D4AF37]/5">
                                        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 block">{item.label}</span>
                                        <p className="text-xs font-light opacity-70 leading-relaxed">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Características */}
                            <div className="bg-[#FDF5E6] text-[#0A0A0A] rounded-xl p-6 mb-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
                                <div className="relative z-10">
                                    <span className="text-[10px] uppercase tracking-widest text-[#A67B5B] mb-2 block font-bold">Características</span>
                                    <p className="text-sm font-light opacity-80 leading-relaxed">{fichaData.caracteristicas}</p>
                                </div>
                            </div>

                            {/* Información Nutricional */}
                            <h3 className="text-lg font-serif text-[#D4AF37] mb-4">Información Nutricional</h3>
                            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Por 10g (1 cucharadita)</p>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
                                {[
                                    { label: "Calorías", value: fichaData.nutricion.calorias },
                                    { label: "Carbohidratos", value: fichaData.nutricion.carbohidratos },
                                    { label: "Azúcares", value: fichaData.nutricion.azucares },
                                    { label: "Proteínas", value: fichaData.nutricion.proteinas },
                                    { label: "Grasas", value: fichaData.nutricion.grasas },
                                    { label: "Fibra", value: fichaData.nutricion.fibra },
                                ].map((item, i) => (
                                    <div key={i} className="text-center bg-[#0A0A0A] rounded-lg p-3 border border-[#D4AF37]/5">
                                        <span className="text-lg font-serif text-[#D4AF37] block mb-1">{item.value}</span>
                                        <span className="text-[8px] uppercase tracking-widest opacity-40">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Beneficios */}
                            <div className="border-l-2 border-[#D4AF37]/30 pl-6">
                                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 block font-bold">Beneficios</span>
                                <p className="text-sm font-light opacity-70 leading-relaxed">{fichaData.beneficios}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
