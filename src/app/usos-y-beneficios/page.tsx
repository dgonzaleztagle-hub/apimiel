"use client";

import { motion } from "framer-motion";

// Datos de Usos
const usosCulinarios = [
    { titulo: "Endulzante Natural", descripcion: "Alternativa al azúcar refinado en bebidas, postres y recetas. Su dulzura es más intensa, por lo que se necesita menos cantidad." },
    { titulo: "Marinados y Glaseados", descripcion: "Se utiliza para marinar carnes, como pollo, cerdo o salmón, dándoles un toque caramelizado y suave." },
    { titulo: "Productos de Panadería", descripcion: "En galletas, panes y pasteles, la miel ayuda a retener la humedad, mejorando la textura." },
    { titulo: "Aderezo para Ensaladas", descripcion: "Mezclada con aceite de oliva y vinagre, la miel es una base perfecta para aderezos caseros." },
    { titulo: "Conservante Natural", descripcion: "Debido a sus propiedades antimicrobianas, la miel se usa para conservar alimentos durante más tiempo." },
];

const usosMedicinales = [
    { titulo: "Cuidado de la Piel", descripcion: "Ingrediente en mascarillas y cremas por sus propiedades hidratantes y antibacterianas. Ayuda en heridas y quemaduras leves." },
    { titulo: "Remedio para la Tos", descripcion: "Expectorante natural que suaviza la garganta, remedio casero eficaz para la tos y el dolor de garganta." },
    { titulo: "Cicatrización de Heridas", descripcion: "Aplicada tópicamente, acelera la cicatrización y previene infecciones gracias a su capacidad antibacteriana." },
];

const usosCosmeticos = [
    { titulo: "Mascarillas Faciales", descripcion: "Hidrata y suaviza la piel, reduciendo imperfecciones y acné gracias a sus propiedades antimicrobianas." },
    { titulo: "Champús y Acondicionadores", descripcion: "Fortalece el cabello y aporta brillo cuando se añade a productos capilares." },
];

// Propiedades
const propiedades = [
    { icono: "🛡️", titulo: "Antioxidantes", descripcion: "Contiene flavonoides y ácidos fenólicos que protegen contra el daño de los radicales libres, reduciendo el riesgo de enfermedades crónicas." },
    { icono: "🦠", titulo: "Antibacterianas", descripcion: "Gracias al peróxido de hidrógeno, inhibe el crecimiento de bacterias. Útil para heridas y afecciones cutáneas." },
    { icono: "🔥", titulo: "Antiinflamatorias", descripcion: "Reduce la inflamación y el dolor, aliada en el tratamiento de artritis y procesos inflamatorios." },
    { icono: "🧼", titulo: "Antisépticas", descripcion: "Capaz de desinfectar heridas y prevenir infecciones, favoreciendo una curación más rápida." },
    { icono: "⚡", titulo: "Fuente de Energía", descripcion: "Compuesta de glucosa y fructosa, carbohidratos que el cuerpo absorbe rápidamente para energía inmediata." },
    { icono: "🌿", titulo: "Prebiótica", descripcion: "Estimula bacterias buenas en el sistema digestivo, mejorando la digestión y la salud intestinal." },
];

// Beneficios para la Salud
const beneficios = [
    { titulo: "Fortalece el Sistema Inmunológico", descripcion: "Sus antioxidantes y propiedades antimicrobianas refuerzan el sistema inmunológico y previenen infecciones." },
    { titulo: "Mejora la Digestión", descripcion: "Actúa como prebiótico natural, alimentando las bacterias saludables en el intestino." },
    { titulo: "Alivia el Dolor de Garganta", descripcion: "Recubre la garganta, aliviando la irritación y reduciendo la tos. Popular en combinación con limón o jengibre." },
    { titulo: "Promueve la Curación de Heridas", descripcion: "Favorece la cicatrización de cortes, quemaduras y úlceras. Efectiva en heridas infectadas y quemaduras de primer grado." },
    { titulo: "Regula el Azúcar en Sangre", descripcion: "Efecto más moderado sobre la glucosa en sangre que el azúcar refinado, gracias a su proporción de fructosa." },
    { titulo: "Mejora la Calidad del Sueño", descripcion: "Promueve la liberación de melatonina. Un vaso de leche tibia con miel antes de dormir es un remedio natural para el insomnio." },
    { titulo: "Reduce la Fatiga", descripcion: "Fuente de carbohidratos fácilmente digeribles, ideal para recuperar energía después del ejercicio." },
];

// Datos Curiosos
const datosCuriosos = [
    "La miel nunca se echa a perder: se han encontrado jarras en tumbas egipcias con más de 3,000 años que todavía son comestibles.",
    "Una sola abeja produce aproximadamente 1/12 de cucharadita de miel en toda su vida.",
    "Para crear un frasco de 500 gramos, se necesitan las visitas de unas 2 millones de flores.",
    "La miel es el único alimento que contiene todas las sustancias necesarias para la vida.",
    "Las abejas construyen celdas hexagonales porque maximizan el almacenaje con la menor cantidad de cera.",
    "Los antiguos romanos utilizaban miel para tratar heridas en los soldados.",
    "Hay más de 300 tipos de miel en el mundo, cada uno con sabor, aroma y color diferentes.",
    "Los antiguos atletas olímpicos griegos consumían miel antes de competir para obtener energía.",
    "Los astronautas han incluido miel en sus raciones durante misiones espaciales.",
    "Cuando la miel se cristaliza no significa que está en mal estado. Solo hay que calentarla suavemente al baño maría.",
    "La miel es un humectante natural usado durante siglos en productos de belleza.",
    "El sabor de la miel cambia según la altitud donde crecen las flores.",
    "Las abejas se comunican mediante la \"danza del meneo\" para indicar dónde están las flores con néctar.",
    "Algunas especies de osos y tejones mielenos atacan colmenas para disfrutar de la miel.",
    "La miel de manuka es más medicinal, mientras que la de trébol es más suave para endulzar bebidas.",
];

export default function UsosYBeneficiosPage() {
    return (
        <main className="min-h-screen pt-40 bg-[#0A0A0A] text-[#FDF5E6] pb-24">

            {/* Hero Section */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block font-bold">Sabiduría Natural</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                        Usos & <br />
                        <span className="opacity-50 italic font-light">Beneficios.</span>
                    </h1>
                    <div className="h-[1px] w-24 bg-[#D4AF37] mb-8" />
                    <p className="text-lg font-light opacity-70 max-w-2xl text-justify">
                        La miel es un alimento natural con múltiples usos culinarios y terapéuticos. Gracias a sus propiedades antibacterianas, antioxidantes y antiinflamatorias, puede mejorar la salud digestiva, fortalecer el sistema inmunológico y ayudar a la curación de heridas, entre muchos otros beneficios.
                    </p>
                </motion.div>
            </section>

            {/* === USOS DE LA MIEL === */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">Usos de la Miel</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Tradición & Versatilidad</span>
                </div>

                {/* Culinarios */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-2xl">🍯</span>
                        <h3 className="text-xl font-serif text-[#D4AF37]">Culinarios</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {usosCulinarios.map((uso, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bg-[#151515] p-6 rounded-2xl border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500"
                            >
                                <h4 className="text-sm font-bold text-[#FDF5E6] mb-2">{uso.titulo}</h4>
                                <p className="text-xs font-light opacity-60 leading-relaxed">{uso.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Medicinales */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-2xl">💊</span>
                        <h3 className="text-xl font-serif text-[#D4AF37]">Medicinales y Terapéuticos</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {usosMedicinales.map((uso, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bg-[#151515] p-6 rounded-2xl border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500"
                            >
                                <h4 className="text-sm font-bold text-[#FDF5E6] mb-2">{uso.titulo}</h4>
                                <p className="text-xs font-light opacity-60 leading-relaxed">{uso.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Cosméticos */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-2xl">✨</span>
                        <h3 className="text-xl font-serif text-[#D4AF37]">Cosméticos</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {usosCosmeticos.map((uso, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bg-[#151515] p-6 rounded-2xl border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500"
                            >
                                <h4 className="text-sm font-bold text-[#FDF5E6] mb-2">{uso.titulo}</h4>
                                <p className="text-xs font-light opacity-60 leading-relaxed">{uso.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === PROPIEDADES === */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">Propiedades de la Miel</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Ciencia Natural</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {propiedades.map((prop, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className={`group p-8 rounded-[2rem] relative overflow-hidden flex flex-col ${i === 0
                                    ? "bg-[#FDF5E6] text-[#0A0A0A]"
                                    : "bg-[#151515] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500"
                                }`}
                        >
                            {i === 0 && (
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
                            )}
                            <div className="relative z-10">
                                <span className="text-3xl mb-4 block">{prop.icono}</span>
                                <h3 className={`text-xl font-serif mb-3 ${i === 0 ? "text-[#0A0A0A]" : "text-[#D4AF37]"}`}>
                                    {prop.titulo}
                                </h3>
                                <p className={`text-sm font-light leading-relaxed ${i === 0 ? "opacity-80" : "opacity-60"}`}>
                                    {prop.descripcion}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === BENEFICIOS PARA LA SALUD === */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">Beneficios para la Salud</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Bienestar Integral</span>
                </div>

                <div className="space-y-4">
                    {beneficios.map((ben, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="flex gap-6 items-start bg-[#151515] p-6 rounded-2xl border border-[#D4AF37]/5 hover:border-[#D4AF37]/15 transition-all duration-500 group"
                        >
                            <span className="text-[#D4AF37]/30 font-serif text-3xl font-bold min-w-[40px] group-hover:text-[#D4AF37]/60 transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3 className="text-sm font-bold text-[#FDF5E6] mb-1 group-hover:text-[#D4AF37] transition-colors">{ben.titulo}</h3>
                                <p className="text-xs font-light opacity-60 leading-relaxed">{ben.descripcion}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === DATOS CURIOSOS === */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">¿Sabías que...?</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Datos Curiosos</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {datosCuriosos.map((dato, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
                            className="bg-[#151515] p-5 rounded-xl border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500 group"
                        >
                            <span className="text-lg mb-3 block">🐝</span>
                            <p className="text-xs font-light opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity">
                                {dato}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
