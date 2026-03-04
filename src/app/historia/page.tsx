"use client";

import { motion } from "framer-motion";

const timelineData = [
    {
        era: "Prehistoria",
        periodo: "~8,000 años atrás",
        titulo: "Los Primeros Cazadores de Miel",
        contenido: "Una de las primeras evidencias del uso de la miel proviene de una pintura rupestre de la cueva de la Araña en Valencia, España, que data de hace unos 8,000 años. En esta imagen se muestra a una persona recolectando miel de una colmena silvestre.",
        acento: false,
    },
    {
        era: "Antigüedad",
        periodo: "3,000+ a.C.",
        titulo: "Egipto: Oro Líquido de los Faraones",
        contenido: "Los antiguos egipcios valoraban enormemente la miel y la usaban como alimento, ofrenda a los dioses, medicina y parte del proceso de embalsamamiento. En las tumbas de faraones como Tutankamón se han encontrado jarras de miel intactas. También fue utilizada en tratamientos para heridas y en cosméticos.",
        acento: true,
    },
    {
        era: "Antigüedad",
        periodo: "2,000+ a.C.",
        titulo: "Mesopotamia: Ritual y Curación",
        contenido: "En la antigua Mesopotamia, la miel era considerada un lujo y se menciona en tablillas de arcilla como parte de rituales religiosos. Se creía que tenía propiedades curativas, y formaba parte de tratamientos medicinales para heridas y enfermedades.",
        acento: false,
    },
    {
        era: "Antigüedad",
        periodo: "800 a.C. – 500 d.C.",
        titulo: "Grecia y Roma: El Regalo de los Dioses",
        contenido: "Los antiguos griegos consideraban a la miel un \"regalo de los dioses\". Las abejas eran sagradas y estaban asociadas con la diosa Artemisa. Los atletas olímpicos consumían miel antes de las competencias para ganar energía. Los romanos la apreciaban como endulzante y la usaban para conservar frutas y como remedio medicinal.",
        acento: false,
    },
    {
        era: "Edad Media",
        periodo: "Siglos V – XV",
        titulo: "Monasterios, Hidromiel y Medicina",
        contenido: "La miel era uno de los principales endulzantes en Europa antes de que el azúcar se popularizara. Se usaba en cocina y en la elaboración de hidromiel, una bebida alcohólica fermentada. Los monjes practicaban la apicultura en sus monasterios. La medicina tradicional árabe e india (ayurveda) también valoraba la miel por sus propiedades curativas.",
        acento: true,
    },
    {
        era: "Época Moderna",
        periodo: "Siglos XVI – XIX",
        titulo: "Del Azúcar a la Colmena Moderna",
        contenido: "La miel perdió parte de su importancia como endulzante con el auge del azúcar, pero siguió siendo valorada por sus propiedades medicinales. En 1851, Lorenzo Langstroth inventó la colmena de cuadros móviles, revolucionando la apicultura moderna al permitir recolectar miel sin destruir las colmenas.",
        acento: false,
    },
    {
        era: "Siglo XX",
        periodo: "1900 – 2000",
        titulo: "Industrialización y Conciencia",
        contenido: "La producción de miel se industrializó, pero surgieron preocupaciones sobre la calidad y los métodos de producción masiva. El uso excesivo de antibióticos y pesticidas comenzó a afectar a las abejas y la calidad de la miel, generando un movimiento hacia prácticas más responsables.",
        acento: false,
    },
    {
        era: "Siglo XXI",
        periodo: "2000 – Presente",
        titulo: "Apicultura Sustentable y el Renacer",
        contenido: "Ha resurgido la apicultura sustentable, centrada en proteger abejas y su entorno. El Colapso de las Colonias de Abejas (CCD) ha llevado a mayor conciencia sobre su papel crucial en la polinización. La miel se ha convertido en símbolo de la conexión entre alimentación saludable y protección del medio ambiente.",
        acento: true,
    },
];

export default function HistoriaPage() {
    return (
        <main className="min-h-screen pt-40 bg-[#0A0A0A] text-[#FDF5E6] pb-24">

            {/* Hero */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block font-bold">Legado Milenario</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                        Historia de<br />
                        <span className="opacity-50 italic font-light">la Miel.</span>
                    </h1>
                    <div className="h-[1px] w-24 bg-[#D4AF37] mb-8" />
                    <p className="text-lg font-light opacity-70 max-w-2xl text-justify">
                        La historia de la miel es tan antigua como la humanidad misma. Ha sido valorada tanto como alimento como medicina desde hace miles de años. Un recorrido por los momentos más importantes de este oro líquido a lo largo de la civilización.
                    </p>
                </motion.div>
            </section>

            {/* Timeline */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto mb-24">
                <div className="relative">
                    {/* Línea vertical central (solo desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 -translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        {timelineData.map((item, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`relative md:flex items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:gap-12 md:py-8`}
                                >
                                    {/* Dot en la línea central (desktop) */}
                                    <div className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 z-10">
                                        <div className={`w-3 h-3 rounded-full ${item.acento ? "bg-[#D4AF37]" : "bg-[#D4AF37]/30"} ring-4 ring-[#0A0A0A]`} />
                                    </div>

                                    {/* Card */}
                                    <div className={`md:w-[45%] ${isLeft ? "md:ml-0 md:mr-auto md:pr-8" : "md:mr-0 md:ml-auto md:pl-8"}`}>
                                        <div className={`p-8 rounded-[2rem] relative overflow-hidden ${item.acento
                                                ? "bg-[#FDF5E6] text-[#0A0A0A]"
                                                : "bg-[#151515] border border-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-500"
                                            }`}>
                                            {item.acento && (
                                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
                                            )}
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${item.acento ? "text-[#A67B5B]" : "text-[#D4AF37]"}`}>
                                                        {item.era}
                                                    </span>
                                                    <span className={`text-[10px] ${item.acento ? "opacity-40" : "opacity-30"}`}>
                                                        {item.periodo}
                                                    </span>
                                                </div>
                                                <h3 className={`text-xl md:text-2xl font-serif mb-4 ${item.acento ? "" : "text-[#FDF5E6]"}`}>
                                                    {item.titulo}
                                                </h3>
                                                <p className={`text-sm font-light leading-relaxed text-justify ${item.acento ? "opacity-80" : "opacity-60"}`}>
                                                    {item.contenido}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* La Miel Hoy — Cierre Editorial */}
            <section className="px-6 md:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#151515] rounded-[2rem] p-10 md:p-16 border border-[#D4AF37]/10 relative overflow-hidden"
                >
                    <div className="absolute top-6 right-8 text-8xl font-serif text-[#D4AF37]/5 select-none">∞</div>
                    <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 block font-bold">Presente y Futuro</span>
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">La Miel Hoy</h2>
                    <div className="h-[1px] w-16 bg-[#D4AF37]/30 mb-8" />
                    <div className="space-y-6 text-base font-light leading-relaxed opacity-80 max-w-4xl text-justify">
                        <p>
                            La miel sigue siendo valorada en todo el mundo tanto por sus propiedades culinarias como por sus beneficios para la salud. Con el resurgimiento de la apicultura sustentable y el interés por los productos naturales, la miel se ha convertido en un símbolo de la conexión entre la alimentación saludable y la protección del medio ambiente.
                        </p>
                        <p>
                            Además, la miel es un componente clave en muchas tradiciones culturales, desde la gastronomía hasta la medicina popular. En la actualidad, la producción de miel se ha adaptado a las necesidades del mundo moderno, pero sigue conservando ese encanto milenario como un regalo de la naturaleza lleno de historia y sabor.
                        </p>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
