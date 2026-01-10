import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Loader2, Languages, Search, Download } from "lucide-react";

const chalisaVerses = [
  { hindi: "श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।", telugu: "శ్రీ గురు చరణ సరోజ రజ నిజ మన ముకుర సుధారి |", english: "With the dust of Guru's lotus feet, I clean the mirror of my mind." },
  { hindi: "बरनऊं रघुबर बिमल जसु, जो दायकु फल चारि॥", telugu: "వరణౌ రఘువర విమల యశ జో దాయక ఫల చారి ||", english: "And then narrate the sacred glory of Sri Ram, the bestower of the four attainments." },
  { hindi: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।", telugu: "బుద్ధిహీన తను జానికే సుమిరౌ పవన కుమార |", english: "Knowing my body to be devoid of intelligence, I remember Hanuman, the son of Wind." },
  { hindi: "बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥", telugu: "బల బుద్ధి విద్యా దేహు మోహి హరహు కలేశ వికార ||", english: "Bestow upon me strength, wisdom and knowledge, and remove all my afflictions." },
  { hindi: "जय हनुमान ज्ञान गुन सागर।", telugu: "జయ హనుమాన జ్ఞాన గుణ సాగర |", english: "Victory to Hanuman, the ocean of wisdom and virtue." },
  { hindi: "जय कपीस तिहुँ लोक उजागर॥", telugu: "జయ కపీశ తిహు లోక ఉజాగర ||", english: "Victory to the Lord of monkeys, illuminator of the three worlds." },
  { hindi: "राम दूत अतुलित बल धामा।", telugu: "రామ దూత అతులిత బల ధామా |", english: "Messenger of Ram, repository of immeasurable strength." },
  { hindi: "अंजनि पुत्र पवनसुत नामा॥", telugu: "అంజని పుత్ర పవనసుత నామా ||", english: "Son of Anjani, known as the son of the Wind." },
  { hindi: "महाबीर बिक्रम बजरंगी।", telugu: "మహావీర విక్రమ బజరంగీ |", english: "Great hero, mighty, with body like thunderbolt." },
  { hindi: "कुमति निवार सुमति के संगी॥", telugu: "కుమతి నివార సుమతి కే సంగీ ||", english: "Dispeller of evil thoughts, companion of good sense." },
  { hindi: "कंचन बरन बिराज सुबेसा।", telugu: "కంచన వరణ విరాజ సువేశా |", english: "Golden hued, resplendent in fine attire." },
  { hindi: "कानन कुंडल कुंचित केसा॥", telugu: "కానన కుండల కుంచిత కేశా ||", english: "Ears adorned with earrings, hair curly." },
  { hindi: "हाथ बज्र औ ध्वजा बिराजै।", telugu: "హాత వజ్ర ఔ ధ్వజా విరాజై |", english: "Thunderbolt and flag in hand." },
  { hindi: "काँधे मूँज जनेऊ साजै॥", telugu: "కాంధే మూంజ జనేవూ సాజై ||", english: "Sacred thread of Munja grass on shoulder." },
  { hindi: "संकर सुवन केसरीनंदन।", telugu: "శంకర సువన కేసరీ నందన |", english: "Incarnation of Shiva, son of Kesari." },
  { hindi: "तेज प्रताप महा जग बन्दन॥", telugu: "తేజ ప్రతాప మహా జగ వందన ||", english: "Glorious and radiant, worshipped by the whole world." },
  { hindi: "विद्यावान गुनी अति चातुर।", telugu: "విద్యావాన గుణీ అతి చాతుర |", english: "Learned, virtuous and extremely clever." },
  { hindi: "राम काज करिबे को आतुर॥", telugu: "రామ కాజ కరివే కో ఆతుర ||", english: "Eager to do Ram's work." },
  { hindi: "प्रभु चरित्र सुनिबे को रसिया।", telugu: "ప్రభు చరిత్ర సునివే కో రసియా |", english: "Delighted to hear the Lord's deeds." },
  { hindi: "राम लखन सीता मन बसिया॥", telugu: "రామ లఖన సీతా మన బసియా ||", english: "Ram, Lakshman and Sita dwell in your heart." },
  { hindi: "सूक्ष्म रूप धरि सियहिं दिखावा।", telugu: "సూక్ష్మ రూప ధరి సియహి దిఖావా |", english: "Assuming a subtle form, you appeared to Sita." },
  { hindi: "बिकट रूप धरि लंक जरावा॥", telugu: "వికట రూప ధరి లంక జరావా ||", english: "Assuming a formidable form, you burnt Lanka." },
  { hindi: "भीम रूप धरि असुर संहारे।", telugu: "భీమ రూప ధరి అసుర సంహారే |", english: "Assuming a terrible form, you destroyed demons." },
  { hindi: "रामचंद्र के काज सँवारे॥", telugu: "రామచంద్ర కే కాజ సంవారే ||", english: "You accomplished Ramachandra's tasks." },
  { hindi: "लाय सजीवन लखन जियाये।", telugu: "లాయ సజీవన లఖన జియాయే |", english: "Bringing the Sanjivani herb, you revived Lakshman." },
  { hindi: "श्रीरघुबीर हरषि उर लाये॥", telugu: "శ్రీ రఘువీర హరషి ఉర లాయే ||", english: "Sri Ram embraced you with joy." },
  { hindi: "रघुपति कीन्ही बहुत बड़ाई।", telugu: "రఘుపతి కీన్హీ బహుత బడాయీ |", english: "Raghupati praised you greatly." },
  { hindi: "तुम मम प्रिय भरतहि सम भाई॥", telugu: "తుమ మమ ప్రియ భరతహి సమ భాయీ ||", english: "You are as dear to me as my brother Bharat." },
  { hindi: "सहस बदन तुम्हरो जस गावैं।", telugu: "సహస వదన తుమ్హరో యశ గావై |", english: "The thousand-headed serpent sings your glory." },
  { hindi: "अस कहि श्रीपति कंठ लगावैं॥", telugu: "అస కహి శ్రీపతి కంఠ లగావై ||", english: "Saying this, the Lord of Lakshmi embraced you." },
  { hindi: "सनकादिक ब्रह्मादि मुनीसा।", telugu: "సనకాదిక బ్రహ్మాది మునీశా |", english: "Sanaka and others, Brahma and other sages." },
  { hindi: "नारद सारद सहित अहीसा॥", telugu: "నారద శారద సహిత అహీశా ||", english: "Narad, Sarad and the King of serpents." },
  { hindi: "जम कुबेर दिगपाल जहाँ ते।", telugu: "యమ కుబేర దిగపాల జహా తే |", english: "Yama, Kubera and the guardians of directions." },
  { hindi: "कबि कोबिद कहि सके कहाँ ते॥", telugu: "కవి కోవిద కహి సకే కహా తే ||", english: "How can poets and scholars describe your glory?" },
  { hindi: "तुम उपकार सुग्रीवहिं कीन्हा।", telugu: "తుమ ఉపకార సుగ్రీవహి కీన్హా |", english: "You did a great service to Sugriva." },
  { hindi: "राम मिलाय राज पद दीन्हा॥", telugu: "రామ మిలాయ రాజ పద దీన్హా ||", english: "Uniting him with Ram, you gave him the kingdom." },
  { hindi: "तुम्हरो मंत्र बिभीषन माना।", telugu: "తుమ్హరో మంత్ర విభీషణ మానా |", english: "Vibhishana heeded your counsel." },
  { hindi: "लंकेस्वर भए सब जग जाना॥", telugu: "లంకేశ్వర భయే సబ జగ జానా ||", english: "He became the Lord of Lanka, as the world knows." },
  { hindi: "जुग सहस्र जोजन पर भानू।", telugu: "యుగ సహస్ర యోజన పర భానూ |", english: "The sun is thousands of miles away." },
  { hindi: "लील्यो ताहि मधुर फल जानू॥", telugu: "లీల్యో తాహి మధుర ఫల జానూ ||", english: "You swallowed it thinking it to be a sweet fruit." },
  { hindi: "प्रभु मुद्रिका मेलि मुख माहीं।", telugu: "ప్రభు ముద్రికా మేలి ముఖ మాహీ |", english: "Holding the Lord's ring in your mouth." },
  { hindi: "जलधि लाँघि गये अचरज नाहीं॥", telugu: "జలధి లాంఘి గయే అచరజ నాహీ ||", english: "You crossed the ocean, no wonder." },
  { hindi: "दुर्गम काज जगत के जेते।", telugu: "దుర్గమ కాజ జగత కే జేతే |", english: "Difficult tasks in the world." },
  { hindi: "सुगम अनुग्रह तुम्हरे तेते॥", telugu: "సుగమ అనుగ్రహ తుమ్హరే తేతే ||", english: "Become easy by your grace." },
  { hindi: "राम दुआरे तुम रखवारे।", telugu: "రామ దువారే తుమ రఖవారే |", english: "You are the guardian of Ram's door." },
  { hindi: "होत न आज्ञा बिनु पैसारे॥", telugu: "హోత న ఆజ్ఞా బిను పైసారే ||", english: "No one enters without your permission." },
  { hindi: "सब सुख लहै तुम्हारी सरना।", telugu: "సబ సుఖ లహై తుమ్హారీ శరణా |", english: "All happiness lies in your refuge." },
  { hindi: "तुम रक्षक काहू को डर ना॥", telugu: "తుమ రక్షక కాహూ కో డర నా ||", english: "When you are the protector, why fear?" },
  { hindi: "आपन तेज सम्हारो आपै।", telugu: "ఆపన తేజ సంహారో ఆపై |", english: "You alone can control your power." },
  { hindi: "तीनों लोक हाँक तें काँपै॥", telugu: "తీనో లోక హాంక తే కాంపై ||", english: "The three worlds tremble at your roar." },
  { hindi: "भूत पिसाच निकट नहिं आवै।", telugu: "భూత పిశాచ నికట నహి ఆవై |", english: "Ghosts and demons do not come near." },
  { hindi: "महाबीर जब नाम सुनावै॥", telugu: "మహావీర జబ నామ సునావై ||", english: "When one recites the name of Mahavir." },
  { hindi: "नासै रोग हरै सब पीरा।", telugu: "నాసై రోగ హరై సబ పీరా |", english: "Disease is destroyed and all pain removed." },
  { hindi: "जपत निरंतर हनुमत बीरा॥", telugu: "జపత నిరంతర హనుమత వీరా ||", english: "By constantly repeating the name of Hanuman." },
  { hindi: "संकट तें हनुमान छुड़ावै।", telugu: "సంకట తే హనుమాన ఛుడావై |", english: "Hanuman delivers from distress." },
  { hindi: "मन क्रम बचन ध्यान जो लावै॥", telugu: "మన క్రమ వచన ధ్యాన జో లావై ||", english: "Those who meditate on him in thought, word and deed." },
  { hindi: "सब पर राम तपस्वी राजा।", telugu: "సబ పర రామ తపస్వీ రాజా |", english: "Ram the ascetic king reigns over all." },
  { hindi: "तिन के काज सकल तुम साजा॥", telugu: "తిన కే కాజ సకల తుమ సాజా ||", english: "You accomplished all his tasks." },
  { hindi: "और मनोरथ जो कोई लावै।", telugu: "ఔర మనోరథ జో కోయీ లావై |", english: "Whoever brings any other desire." },
  { hindi: "सोइ अमित जीवन फल पावै॥", telugu: "సోయీ అమిత జీవన ఫల పావై ||", english: "Receives the imperishable fruit of life." },
  { hindi: "चारों जुग परताप तुम्हारा।", telugu: "చారో యుగ ప్రతాప తుమ్హారా |", english: "Your glory spans the four ages." },
  { hindi: "है परसिद्ध जगत उजियारा॥", telugu: "హై ప్రసిద్ధ జగత ఉజియారా ||", english: "It is famous and illuminates the world." },
  { hindi: "साधु संत के तुम रखवारे।", telugu: "సాధు సంత కే తుమ రఖవారే |", english: "You are the protector of sages and saints." },
  { hindi: "असुर निकंदन राम दुलारे॥", telugu: "అసుర నికందన రామ దులారే ||", english: "Destroyer of demons, beloved of Ram." },
  { hindi: "अष्ट सिद्धि नौ निधि के दाता।", telugu: "అష్ట సిద్ధి నౌ నిధి కే దాతా |", english: "Giver of eight Siddhis and nine Nidhis." },
  { hindi: "अस बर दीन जानकी माता॥", telugu: "అస వర దీన జానకీ మాతా ||", english: "Mother Janaki gave you this boon." },
  { hindi: "राम रसायन तुम्हरे पासा।", telugu: "రామ రసాయన తుమ్హరే పాసా |", english: "You hold the elixir of Ram's devotion." },
  { hindi: "सदा रहो रघुपति के दासा॥", telugu: "సదా రహో రఘుపతి కే దాసా ||", english: "May you always remain Raghupati's servant." },
  { hindi: "तुम्हरे भजन राम को पावै।", telugu: "తుమ్హరే భజన రామ కో పావై |", english: "Through your hymns one attains Ram." },
  { hindi: "जनम जनम के दुख बिसरावै॥", telugu: "జన్మ జన్మ కే దుఖ బిసరావై ||", english: "And forgets the sorrows of many births." },
  { hindi: "अन्त काल रघुबर पुर जाई।", telugu: "అంత కాల రఘువర పుర జాయీ |", english: "At the end of time, one goes to Raghubar's abode." },
  { hindi: "जहाँ जन्म हरिभक्त कहाई॥", telugu: "జహా జన్మ హరిభక్త కహాయీ ||", english: "Where being born, one is called a devotee of Hari." },
  { hindi: "और देवता चित्त न धरई।", telugu: "ఔర దేవతా చిత్త న ధరయీ |", english: "Worshipping no other deity." },
  { hindi: "हनुमत सेइ सर्ब सुख करई॥", telugu: "హనుమత సేయీ సర్వ సుఖ కరయీ ||", english: "Serving Hanuman gives all happiness." },
  { hindi: "संकट कटै मिटै सब पीरा।", telugu: "సంకట కటై మిటై సబ పీరా |", english: "Distress is removed and all pain vanishes." },
  { hindi: "जो सुमिरै हनुमत बलबीरा॥", telugu: "జో సుమిరై హనుమత బలవీరా ||", english: "For one who remembers Hanuman the mighty." },
  { hindi: "जय जय जय हनुमान गोसाईं।", telugu: "జయ జయ జయ హనుమాన గోసాయీ |", english: "Victory, Victory, Victory to Hanuman, the Lord." },
  { hindi: "कृपा करहु गुरु देव की नाईं॥", telugu: "కృపా కరహు గురుదేవ కీ నాయీ ||", english: "Bestow grace like a Guru." },
  { hindi: "जो सत बार पाठ कर कोई।", telugu: "జో శత వార పాఠ కర కోయీ |", english: "Whoever recites this a hundred times." },
  { hindi: "छूटहि बंदि महा सुख होई॥", telugu: "ఛూటహి బంది మహా సుఖ హోయీ ||", english: "Is freed from bondage and attains great happiness." },
  { hindi: "जो यह पढ़ै हनुमान चालीसा।", telugu: "జో యహ పఢై హనుమాన చాలీసా |", english: "Whoever reads this Hanuman Chalisa." },
  { hindi: "होय सिद्धि साखी गौरीसा॥", telugu: "హోయ సిద్ధి సాఖీ గౌరీశా ||", english: "Attains perfection, Shiva is the witness." },
  { hindi: "तुलसीदास सदा हरि चेरा।", telugu: "తులసీదాస సదా హరి చేరా |", english: "Tulsidas is always Hari's servant." },
  { hindi: "कीजै नाथ हृदय महँ डेरा॥", telugu: "కీజై నాథ హృదయ మహ డేరా ||", english: "Lord, make your abode in my heart." },
  { hindi: "पवन तनय संकट हरन, मंगल मूरति रूप।", telugu: "పవన తనయ సంకట హరణ మంగళ మూర్తి రూప |", english: "Son of Wind, dispeller of distress, embodiment of auspiciousness." },
  { hindi: "राम लखन सीता सहित, हृदय बसहु सुर भूप॥", telugu: "రామ లఖన సీతా సహిత హృదయ బసహు సుర భూప ||", english: "Dwell in my heart, O King of Gods, with Ram, Lakshman and Sita." },
];

const HanumanChalisa = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [script, setScript] = useState<'hindi' | 'telugu'>('hindi');
  const [audioSrc, setAudioSrc] = useState("https://archive.org/download/shree-hanuman-chalisa-gulshan-kumar/Shree%20Hanuman%20Chalisa%20-%20Gulshan%20Kumar.mp3");
  const audioRef = useRef<HTMLAudioElement>(null);
  const verseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (verseRefs.current[currentVerse]) {
      verseRefs.current[currentVerse]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentVerse]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Playback failed:", error);
            setIsPlaying(false);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleAudioError = () => {
    console.log("Audio source failed:", audioSrc);
    if (audioSrc.includes("Gulshan")) {
      setAudioSrc("https://archive.org/download/shree-hanuman-chalisa-hariharan/Shree%20Hanuman%20Chalisa%20-%20Hariharan.mp3");
    } else if (audioSrc.includes("hariharan")) {
      setAudioSrc("https://archive.org/download/HanumanChalisa_202104/Hanuman%20Chalisa.mp3");
    }
  };

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % chalisaVerses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + chalisaVerses.length) % chalisaVerses.length);
  };

  const downloadPDF = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Hanuman Chalisa Lyrics</title>');
      printWindow.document.write('<style>body { font-family: sans-serif; padding: 40px; line-height: 1.6; } .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; } .verse { margin-bottom: 20px; page-break-inside: avoid; } .script { font-size: 18px; font-weight: bold; margin-bottom: 4px; color: #1a1a1a; } .english { font-style: italic; color: #666; font-size: 14px; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write('<div class="header"><h1>Hanuman Chalisa</h1><p>Sri Abhaya Anjaneya Swamy Temple</p></div>');
      
      chalisaVerses.forEach((verse) => {
        printWindow.document.write('<div class="verse">');
        printWindow.document.write(`<div class="script">${script === 'hindi' ? verse.hindi : verse.telugu}</div>`);
        printWindow.document.write(`<div class="english">${verse.english}</div>`);
        printWindow.document.write('</div>');
      });
      
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  const filteredVerses = chalisaVerses
    .map((verse, index) => ({ ...verse, originalIndex: index }))
    .filter((verse) => 
      verse.hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verse.telugu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verse.english.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
            <audio
              ref={audioRef}
              src={audioSrc}
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onWaiting={() => setIsBuffering(true)}
              onCanPlay={() => setIsBuffering(false)}
              onPlaying={() => setIsBuffering(false)}
              onError={handleAudioError}
              preload="auto"
            />
            {/* Video Thumbnail */}
            <div 
              className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative cursor-pointer group"
              onClick={togglePlay}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22none%22%20stroke%3D%22%23D4A84B%22%20stroke-width%3D%220.5%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] opacity-30" />
              <div className="text-center z-10 transition-transform duration-300 group-hover:scale-105">
                {!isPlaying && !isBuffering ? (
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mb-4 mx-auto shadow-lg shadow-primary/30 group-hover:bg-primary transition-colors">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                ) : (
                  <div className="text-6xl mb-4 animate-pulse">🙏</div>
                )}
                <p className="font-heading text-xl text-gold-gradient">{isPlaying ? "Now Playing" : "Play Hanuman Chalisa"}</p>
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
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center gap-6">
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
                    {isBuffering ? (
                      <Loader2 className="w-6 h-6 text-primary-foreground animate-spin" />
                    ) : isPlaying ? (
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
                </div>

                <div className="flex items-center justify-between gap-4 px-2">
                  {/* Volume Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-foreground" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1.5 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                  </div>

                  {/* Playback Speed */}
                  <div className="flex items-center gap-1 bg-muted/30 rounded-lg p-1">
                    {[0.5, 1, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setPlaybackRate(rate)}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          playbackRate === rate
                            ? "bg-primary text-primary-foreground font-medium"
                            : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lyrics Display */}
          <div className="glow-card p-6 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
            <div className="sticky top-0 bg-card/95 backdrop-blur z-10 -mx-2 -mt-2 p-4 rounded-lg border-b border-border/50 mb-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-primary" />
                  <h3 className="font-heading text-lg text-gold-gradient">Lyrics</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 bg-muted/30 p-1 rounded-lg">
                    <button 
                      onClick={() => setScript('hindi')} 
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${script === 'hindi' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                    >
                      Hindi
                    </button>
                    <button 
                      onClick={() => setScript('telugu')} 
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${script === 'telugu' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
                    >
                      Telugu
                    </button>
                  </div>
                  <button
                    onClick={downloadPDF}
                    className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search verses..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="space-y-6">
              {filteredVerses.length > 0 ? (
                filteredVerses.map((verse) => (
                  <div
                    key={verse.originalIndex}
                    ref={(el) => (verseRefs.current[verse.originalIndex] = el)}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      currentVerse === verse.originalIndex
                        ? "bg-primary/20 border border-primary/40"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setCurrentVerse(verse.originalIndex)}
                  >
                    <p
                      className={`font-heading text-lg mb-2 ${
                        currentVerse === verse.originalIndex ? "text-gold-gradient" : "text-foreground/90"
                      }`}
                    >
                      {script === 'hindi' ? verse.hindi : verse.telugu}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {verse.english}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No verses found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanumanChalisa;
