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
          Il primo grazie va ai <strong>miei genitori</strong>, che con il loro supporto
          non mi hanno mai fatto mancare nulla e mi hanno spronato a dare sempre il meglio di me.
          Più di tutti mi hanno permesso di arrivare dove sono ora, 
          perciò grazie di aver deciso (volutamente o no), quel soleggiato giorno di maggio, di dare luce a una nuova creatura. 
          Grazie di avermi sempre seguito e accompagnato in ogni mio traguardo da 24 anni a questa parte. <br></br>
          Un grazie va a <strong>mia sorella</strong>, che è sempre stata un esempio per me. 
          Una sorella maggiore generosa, empatica e buona, che mi ha passato la sua determinazione nello studio e nel raggiungere i miei obiettivi. 
          Anche se combattevamo per vedere la TV da piccoli mi ha insegnanto la condivisione e l'altruismo.
          È stata come una seconda madre per me, con l'aggiunta di quella sincerità e complicità che solo una sorella può dare.
          Grazie per essermi sempre stata vicina e di aver condiviso con me questo ultimo anno, difficile per me ma ancora di più per te.
          Spero di essere riuscito a darti anche solo un briciolo di quello che mi hai dato tu, trasmettendoti un po di posistività e serenità.
          Anche se sono poco affettuoso ci tenevo a dirti che ti voglio bene,  dato che lo chiedi spesso. e che mi mancherà non averti più come coinquilina, però non vedo l'ora di venirti a trovare in Puglia, quindi aspettami.  <br></br>
          Un grazie speciale va a <strong>Gaia</strong>, la mia ragazza, che mi ha supportato nei momenti
          più difficili, e che mi ha sempre incoraggiato a dare il meglio di me in ogni situazione.
          Da 4 anni mi sta accanto, e mi ha insegnato a stare in un mondo diverso dal mio, facendomi vedere le cose da un'altra prospettiva, e facendomi uscire dalla mia bolla.
          Mi ha fatto crescere come persona, vedendo spesso ciò che io non ero in grado di vedere in me stesso.
          Più di tutti mi ha permesso di trovare un posto felice e sicuro qua a Torino, facendomi sentire come a casa. 
          Grazie di essermi stata affianco nonostante tutto, mettendomi spesso prima di ogni cosa.<br></br>
          E un grazie va ovviamente <strong>alla sua famiglia</strong> che mi ha accolto sempre in modo caloroso e gentile, non facendomi sentire mai come un ospite o un semplice fidanzato, ma come parte della famiglia. <br></br>
          Un grazie va ai <strong>miei amici di Monse (+ uno)</strong>, con cui ho condiviso momenti indimenticabili, risate e tante pizze squartarate.
          Da quando andavamo ogni giorno a giocare a pallone a Terramaini ne è passato di tempo, o da quando l'unico pensiero che avevamo era trovare nuovi meme, o trovare Marco che si era perso.
          Grazie a loro il covid e il lockdown non sono sembrati parte di un epidemia sterminatrice mondiale, ma semplicemente un'avventura da superare insieme con il sorriso e la spensieratezza.
          Ma soprattutto mi hanno sempre fatto sentire parte di un qualcosa, che non era un semplice gruppo di amici, ma una seconda famiglia. <br></br>
          Un grazie va a <strong>Elena</strong>, la mia migliore amica, che da 18 anni mi conosce, e ancora non è scappata via! 
          In tutto questo tempo siamo cresciuti assieme, superando inseme un sacco di traguardi spronandoci a vicenda.
          Sarà sempre la persona con cui potrò confidarmi, e con cui potrò ridere e scherzare come se fossimo ancora quei bambini di 9 anni che giocavano con spiderman, vegeta e le lollipop (anche se poi da 10 anni in poi sono diventato grande e non ci giocavo più).
          Nonostante la distanza e il tempo senza sentirci, ogni volta che ci sentiamo è come se non fosse passato un giorno, perciò grazie di essere l'amica che sei. <br></br> 
          Un grazie va anche a <strong>tutti i miei amici del mare</strong> (che anche se non andiamo più al mare assieme rimarranno sempre etichettati così)
          che hanno fatto parte del mio viaggio. Mi hanno regalato estati indimenticabili e felici, tra yugioh, bagni infiniti, lucaemauro e buche nella sabbia giganti.
          Seppur ciascuno ha preso la propria strada, sarà sempre bello poter passare una serata assieme, condividendo e ricordando tutto quello che abbiamo passato in questi anni.<br></br>
          Un grazie va ai <strong> miei zii</strong>, che mi hanno accompagnato e supportato in tutti i miei traguardi, e che mi hanno visto crescere. 
          Siete sempre stati fieri di me, dandomi un motivo in più per perseverare e continuare a superare gli ostacoli.
          Adesso anche il piccolo di famiglia sta finalmente diventando grande. <br></br>
          E grazie ai <strong>miei cugini Iorgos e Mattia</strong> che sono sempre stati un riferimento per me, fin da piccolo.
          Hanno sempre condiviso le loro passioni con me, insegnandomi tanto e non considerandomi mai come un peso anche se ero il più piccolino di tutti. 
          Mi hanno sempre trattato come una persona grande e intelligente, credendo in me e dandomi tanto anche se io potevo dargli poco. <br></br>
          Infine, un grazie va a <strong>me stesso</strong>, per aver superato (più o meno) problemi fisici e mentali dati dall'ansia e dallo stress, 
          ed essermi sempre impegnato per raggiungere questo traguardo, sacrificando tempo che avrei potuto usare per giocare ai famigerati "ghignosperi". <br></br>
          Questo traguardo è solo mio, ma se sono qui ora è grazie a tutti voi, che ci siamo trovati a condividere assieme parti di questa vita strana e piena di ostacoli, ma anche di gioie. <br></br>
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
