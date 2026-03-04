"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen pt-40 bg-[#0A0A0A] text-[#FDF5E6] pb-24">
            {/* Introducción Hero — Quiénes Somos */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block font-bold">El Origen</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                        Desde Quillaileo,<br />
                        <span className="opacity-50 italic font-light">Capital Nacional de la Miel.</span>
                    </h1>
                    <div className="h-[1px] w-24 bg-[#D4AF37] mb-12" />

                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-[#FDF5E6]/80 text-justify">
                        <p>
                            Apimiel es una empresa familiar que, desde principios del 2000, se ha dedicado a la producción y venta de productos orgánicos derivados de la colmena. Ubicados en los bosques endémicos de la localidad precordillerana de Quillaileo, en la comuna de Santa Bárbara, conocida como la "Capital Nacional de la Miel", en la Región del Biobío, Chile, nuestra apicultura es totalmente sustentable y en armonía con la naturaleza.
                        </p>
                        <p>
                            Nos enorgullece ofrecer miel 100% natural y sin aditivos, obtenida de manera responsable en un entorno donde las abejas polinizan flora nativa libre de químicos. Trabajamos de la mano con productores locales, beneficiando tanto a la comunidad como al ecosistema que nos rodea.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Misión y Visión — Cards Side by Side */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">Nuestra Dirección</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Propósito & Horizonte</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Misión */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group bg-[#FDF5E6] text-[#0A0A0A] p-10 rounded-[2rem] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
                        <div className="relative z-10">
                            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#A67B5B] mb-2 block">Nuestra Razón</span>
                            <h3 className="text-3xl md:text-4xl font-serif mb-6">Misión</h3>
                            <div className="h-[1px] w-12 bg-[#0A0A0A] mb-6" />
                            <p className="text-base font-light leading-relaxed opacity-80 text-justify">
                                En Apimiel, nuestra misión es producir y ofrecer productos orgánicos de alta calidad que promuevan el bienestar de las personas, al mismo tiempo que cuidamos y respetamos el equilibrio natural de los ecosistemas. Nos enfocamos en una apicultura sustentable, donde las abejas y el medio ambiente son parte central de nuestra labor. Creemos en el valor compartido, donde tanto la comunidad como la biodiversidad se benefician de nuestra actividad.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="group bg-[#151515] p-10 rounded-[2rem] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500 relative overflow-hidden"
                    >
                        <span className="text-6xl font-serif text-[#D4AF37]/10 absolute top-4 right-6 group-hover:scale-110 transition-transform">∞</span>
                        <div className="relative z-10">
                            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#D4AF37] mb-2 block">Nuestro Horizonte</span>
                            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#D4AF37]">Visión</h3>
                            <div className="h-[1px] w-12 bg-[#D4AF37]/30 mb-6" />
                            <p className="text-base font-light leading-relaxed opacity-70 text-justify">
                                Nuestra visión es ser referentes en la producción de miel y productos apícolas orgánicos a nivel nacional, expandiendo nuestro impacto positivo en la conservación de los bosques endémicos y fomentando prácticas apícolas sustentables. Queremos seguir fortaleciendo la economía local, contribuyendo al bienestar de las futuras generaciones y preservando la biodiversidad de los ecosistemas para que puedan seguir generando vida y alimentos para todos.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pilares de Apimiel — Grid 2x2 */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto relative z-10 w-full mb-24">
                <div className="flex items-end justify-between mb-12 border-b border-[#D4AF37]/20 pb-4">
                    <h2 className="text-3xl font-serif">4 Pilares de Precisión</h2>
                    <span className="text-[10px] tracking-widest uppercase opacity-40 hidden md:block">Nuestra Esencia</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                    {/* Pilar 1: Apicultura Sustentable */}
                    <div className="group bg-[#151515] p-8 rounded-[2rem] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
                        <div className="mb-6">
                            <span className="text-6xl font-serif text-[#D4AF37]/10 absolute top-4 right-6 group-hover:scale-110 transition-transform">01</span>
                            <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 relative z-10">Apicultura Sustentable</h3>
                        </div>
                        <p className="text-base font-light leading-relaxed opacity-70 relative z-10 text-justify flex-grow">
                            La apicultura sustentable es la base de nuestro trabajo. Entendemos que la cosecha debe ser equilibrada, respetando el ciclo de vida de las abejas. Solo recolectamos el excedente de miel, permitiendo que mantengan reservas suficientes para alimentarse durante los meses de inactividad.
                        </p>
                    </div>

                    {/* Pilar 2: Polinización */}
                    <div className="group bg-[#151515] p-8 rounded-[2rem] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
                        <div className="mb-6">
                            <span className="text-6xl font-serif text-[#D4AF37]/10 absolute top-4 right-6 group-hover:scale-110 transition-transform">02</span>
                            <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 relative z-10">Polinización</h3>
                        </div>
                        <p className="text-base font-light leading-relaxed opacity-70 relative z-10 text-justify flex-grow">
                            A través de la polinización, las abejas permiten el desarrollo de semillas y frutos, favoreciendo la biodiversidad y asegurando la salud de nuestros ecosistemas. Las abejas polinizan flora melífera nativa endémica libre de fertilizantes químicos, por lo cual la miel es 100% natural, orgánica y sin aditivos.
                        </p>
                    </div>

                    {/* Pilar 3: Valor Compartido (Beige Accent) */}
                    <div className="group bg-[#FDF5E6] text-[#0A0A0A] p-8 rounded-[2rem] relative overflow-hidden flex flex-col h-full">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
                        <div className="relative z-10 mb-6">
                            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#A67B5B] mb-2 block">Comunidad</span>
                            <h3 className="text-3xl font-serif mb-4">Valor Compartido</h3>
                            <div className="h-[1px] w-12 bg-[#0A0A0A] mb-6" />
                        </div>
                        <p className="text-base font-light leading-relaxed opacity-80 relative z-10 text-justify flex-grow">
                            Trabajamos de la mano con productores locales, beneficiando tanto a la comunidad como al ecosistema que nos rodea. Creemos en el valor compartido, donde tanto la comunidad como la biodiversidad se benefician de nuestra actividad apícola.
                        </p>
                    </div>

                    {/* Pilar 4: Economía Circular */}
                    <div className="group bg-[#151515] p-8 rounded-[2rem] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
                        <div className="mb-6">
                            <span className="text-6xl font-serif text-[#D4AF37]/20 block mb-2">∞</span>
                            <h3 className="text-xl font-serif text-[#D4AF37]">Economía Circular</h3>
                        </div>
                        <p className="text-base font-light leading-relaxed opacity-70 relative z-10 text-justify flex-grow">
                            Nuestra apicultura contribuye a la economía circular local y preserva los recursos naturales para las generaciones futuras. La polinización se mantiene, se preserva y conserva la biodiversidad de los ecosistemas, y finalmente se logra un producto de calidad para que todos podamos disfrutar sus múltiples beneficios.
                        </p>
                    </div>

                </div>
            </section>

            {/* Sección ¿Es Vegana? — Bloque editorial */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#151515] rounded-[2rem] p-10 md:p-14 border border-[#D4AF37]/10 relative overflow-hidden"
                >
                    <div className="absolute top-6 right-8 text-7xl font-serif text-[#D4AF37]/5 select-none">?</div>
                    <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 block font-bold">Pregunta Frecuente</span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">¿La miel sustentable es vegana?</h2>
                    <div className="h-[1px] w-16 bg-[#D4AF37]/30 mb-8" />
                    <div className="space-y-6 text-base font-light leading-relaxed opacity-80 max-w-4xl text-justify">
                        <p>
                            La miel de apicultura sustentable no se considera vegana según la mayoría de los estándares veganos tradicionales. Esto se debe a que la miel es un producto animal, ya que las abejas la producen y, aunque se coseche de manera ética y sustentable, implica la explotación de insectos. Los veganos, por definición, evitan todos los productos derivados de animales, incluidos los insectos, por razones éticas, ambientales o de bienestar animal.
                        </p>
                        <p>
                            Sin embargo, algunos argumentan que en prácticas de apicultura sustentable, donde se prioriza el bienestar de las abejas y se preserva el ecosistema, la producción de miel puede considerarse más ética. Pero en términos estrictos, la mayoría de los veganos no consume miel, optando por alternativas como jarabe de agave, sirope de arce, o melazas.
                        </p>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
