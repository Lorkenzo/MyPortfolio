import { motion } from "framer-motion";
import { Heart, Leaf, Star, Feather, BookOpen, GraduationCap } from "lucide-react";

function FloatingElements() {
  const icons = [
    { Component: Heart, color: "#f87171" },   // rosso tenue
    { Component: Leaf, color: "#4ade80" },    // verde
    { Component: Star, color: "#facc15" },    // giallo oro
    { Component: Feather, color: "#60a5fa" }, // azzurro
    { Component: BookOpen, color: "#a78bfa" } // lilla
  ];

  const items = Array.from({ length: 80 }).map((_, i) => {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    return {
      id: i,
      ...icon,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 22 + 14,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 2,
      rotate: Math.random() * 360,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => {
        const Icon = item.Component;
        return (
          <motion.div
            key={item.id}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "200vh",
              x: [0, 20, -20, 0],
              opacity: [1, 1, 0.5, 0],
              rotate: item.rotate,
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: item.left,
              fontSize: item.size,
            }}
          >
            <Icon style={{ color: item.color, opacity: 0.7 }} />
          </motion.div>
        );
      })}
    </div>
  );
}

export { FloatingElements };

function Greatings() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 my-4 overflow-hidden bg-gradient-animate">
      {/* Cuori e foglie */}
      <FloatingElements />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 relative z-10"
      >
        <GraduationCap className="w-14 h-14 text-amber-600 mx-auto mb-4" />
        <h1 className="text-4xl font-serif text-amber-800">Ringraziamenti</h1>
        <p className="text-amber-600 mt-2 italic">
          “Ogni traguardo è il frutto di mille piccoli passi.”
        </p>
      </motion.div>

      {/* Contenuto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl bg-white/80 rounded-2xl shadow-lg p-8 backdrop-blur relative z-10"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          È stato un lungo viaggio, fatto di ansie, notti insonni, ma anche di
          grandi soddisfazioni. Non sarei arrivato fin qui senza il supporto e
          l'incoraggiamento di persone che mi sono state vicino. <br></br>
          Il primo grazie va ai <strong>miei genitori</strong>, che con il loro supporto economico
          non mi hanno mai fatto mancare nulla, e mi hanno permesso di arrivare dove sono ora. <br></br>
          Un grazie va a <strong>mia sorella</strong>, che nell'ultimo anno mi ha sfamato e fatto compagnia;
          e grazie per essere la mia sorella maggiore, che ,facendo gli errori prima di me, mi ha permesso di prendere la giusta strada.<br></br>
          Un grazie speciale va ai <strong>Gaia</strong>, la mia ragazza, che mi ha supportato nei momenti
          più difficili, e che mi ha sempre incoraggiato a dare il meglio di me.
          Mi ha permesso di trovare un posto felice e sicuro qua a Torino, credendo sempre in me anche quando mi
          rintanavo nelle mie ansie e paranoie, e spingendomi a continuare e migliorarmi ogni volta. <br></br>
          Un grazie va ai <strong>miei amici di Monse (+ uno)</strong>, con cui ho condiviso momenti indimenticabili e tante pizze squartarate,
          e con cui ho superando covid e coprifuochi assieme, come una seconda famiglia.<br></br>
          Un grazie va a <strong>Elena</strong>, la mia migliore amica, che da 18 anni mi conosce, e ancora non è scappata via; 
          che nonostante la distanza e il tempo senza sentirci, ogni volta che ci sentiamo è come se non fosse passato un giorno.<br></br> 
          Un grazie va anche a <strong>tutti i miei amici del mare</strong> (che anche se non andiamo più al mare assieme rimarranno sempre etichettati così)
          che hanno fatto parte del mio viaggio, e con cui, seppur ciascuno ha preso la propria strada, sarà sempre bello poter passare una serata assieme.<br></br>
          Un grazie generale va a <strong>tutti i parenti e persone</strong>, che hanno condiviso parte del loro viaggio con me, e che in qualche modo
          hanno fatto parte del percorso che mi ha portato fino a qui.<br></br>
          Infine, un grazie va a <strong>me stesso</strong>, per aver superato (più o meno) problemi fisici e mentali, 
          ed essermi sempre impegnato per raggiungere questo traguardo, sacrificando tempo che avrei potuto usare per giocare ai famigerati "ghignosperi". <br></br>
          Questo traguardo è solo mio, ma se sono qui ora è grazie a tutti voi, che, uniti dal caso, ci siamo trovati a condividere assieme parti di questa vita strana e piena di ostacoli, ma anche di gioie. <br></br>
          Grazie di cuore a tutti voi.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6"
        >
          <Heart className="w-8 h-8 text-red-500 mx-auto animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 text-sm text-gray-500 relative z-10"
      >
        © {new Date().getFullYear()} | “Ogni fine è solo un nuovo inizio.”
      </motion.footer>
    </div>
  );
}

export { Greatings };
