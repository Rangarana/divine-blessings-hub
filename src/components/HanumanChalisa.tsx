import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

const chalisaVerses = [
  { hindi: "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।", english: "With the dust of Guru's lotus feet, I clean the mirror of my mind." },
  { hindi: "बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥", english: "And then narrate the sacred glory of Sri Ram, the bestower of the four attainments." },
  { hindi: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।", english: "Knowing my body to be devoid of intelligence, I remember Hanuman, the son of Wind." },
  { hindi: "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥", english: "Bestow upon me strength, wisdom and knowledge, and remove all my afflictions." },
  { hindi: "जय हनुमान ज्ञान गुन सागर।", english: "Victory to Hanuman, the ocean of wisdom and virtue." },
  { hindi: "जय कपीस तिहुँ लोक उजागर॥", english: "Victory to the Lord of monkeys, illuminator of the three worlds." },
  { hindi: "राम दूत अतुलित बल धामा।", english: "Messenger of Ram, repository of immeasurable strength." },
  { hindi: "अंजनि पुत्र पवनसुत नामा॥", english: "Son of Anjani, known as the son of the Wind." },
  { hindi: "महाबीर बिक्रम बजरंगी।", english: "Great hero, mighty, with body like thunderbolt." },
  { hindi: "कुमति निवार सुमति के संगी॥", english: "Dispeller of evil thoughts, companion of good sense." },
];

const HanumanChalisa = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % chalisaVerses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + chalisaVerses.length) % chalisaVerses.length);
  };

  return (
    <section id="chalisa" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-xl">📿</span>
            <span className="text-sm font-body text-primary">Sacred Hymn</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-gold-gradient section-title">Hanuman Chalisa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The forty verses praising Lord Hanuman, written by Tulsidas. 
            Recite along with synchronized audio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Audio/Video Player */}
          <div className="glow-card overflow-hidden">
            {/* Video Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22none%22%20stroke%3D%22%23D4A84B%22%20stroke-width%3D%220.5%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] opacity-30" />
              <div className="text-center z-10">
                <div className="text-6xl mb-4">🙏</div>
                <p className="font-heading text-xl text-gold-gradient">जय श्री राम</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="p-6 border-t border-border/30">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                    style={{ width: `${((currentVerse + 1) / chalisaVerses.length) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Verse {currentVerse + 1}</span>
                  <span>{chalisaVerses.length} verses</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevVerse}
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <SkipBack className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                  style={{ boxShadow: "var(--glow-saffron)" }}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  )}
                </button>
                <button
                  onClick={nextVerse}
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <SkipForward className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full hover:bg-muted transition-colors ml-4"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Lyrics Display */}
          <div className="glow-card p-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
            <div className="space-y-6">
              {chalisaVerses.map((verse, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    currentVerse === index
                      ? "bg-primary/20 border border-primary/40"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => setCurrentVerse(index)}
                >
                  <p
                    className={`font-heading text-lg mb-2 ${
                      currentVerse === index ? "text-gold-gradient" : "text-foreground/90"
                    }`}
                  >
                    {verse.hindi}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {verse.english}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanumanChalisa;
