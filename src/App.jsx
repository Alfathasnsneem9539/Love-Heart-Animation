
import { useEffect, useRef, useState } from "react";
import "./App.css";

const messages = [
  "I love you",
  "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു",
  "मैं तुमसे प्यार करता/करती हूँ",
  "நான் உன்னை காதலிக்கிறேன்",
  "నేను నిన్ను ప్రేమిస్తున్నాను",
  "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ",
  "আমি তোমাকে ভালোবাসি",
  "أحبك",
  "Je t’aime",
  "Te amo",
  "Eu te amo",
  "Ti amo",
  "Ich liebe dich",
  "Ik hou van jou",
  "Jag älskar dig",
  "Jeg elsker deg",
  "Jeg elsker dig",
  "Rakastan sinua",
  "Ég elska þig",
  "Tá grá agam duit",
  "Rwy’n dy garu di",
  "Σ’ αγαπώ",
  "Я тебя люблю",
  "Я тебе кохаю",
  "Kocham cię",
  "Miluji tě",
  "Ľúbim ťa",
  "Ljubim te",
  "Volim te",
  "Волим те",
  "Обичам те",
  "Te iubesc",
  "Szeretlek",
  "Të dua",
  "Aš tave myliu",
  "Es tevi mīlu",
  "Ma armastan sind",
  "Seni seviyorum",
  "دوستت دارم",
  "אני אוהב/אוהבת אותך",
  "Mən səni sevirəm",
  "Мен сені жақсы көремін",
  "Би чамд хайртай",
  "我爱你",
  "我愛你",
  "愛してる",
  "사랑해",
  "ฉันรักคุณ",
  "Anh yêu em",
  "Em yêu anh",
  "Aku cinta kamu",
  "Saya cintakan awak",
  "Mahal kita",
  "မင်းကိုချစ်တယ်",
  "ខ្ញុំស្រឡាញ់អ្នក",
  "ຂ້ອຍຮັກເຈົ້າ",
  "म तिमीलाई माया गर्छु",
  "මම ඔයාට ආදරෙයි",
  "Nakupenda",
  "እወድሃለሁ",
  "Waan ku jeclahay",
  "Mo nífẹ̀ẹ́ rẹ",
  "A hụrụ m gị n’anya",
  "Ngiyakuthanda",
  "Ndiyakuthanda",
  "Ndinokuda",
  "Ndagukunda",
  "Tiako ianao",
  "Nalingi yo",
  "Dama la bëgg",
  "Mi amas vin",
  "Mwen renmen ou",
  "Aroha ahau ki a koe",
  "Aloha au iā ʻoe",
  "Ou te alofa ia te oe",
  "ʻOku ou ʻofa atu kiate koe",
  "Au domoni iko",
  "Kuyayki",
  "Rohayhu",
  "Maite zaituz",
  "T’estimo",
  "Quérote",
  "Ech hunn dech gär",
  "Ek is lief vir jou",
  "Men seni sevaman",
  "Мен сени сүйөм",
  "Ман туро дӯст медорам",
  "Ez ji te hez dikim",
  "Ես քեզ սիրում եմ",
  "მე შენ მიყვარხარ",
  "زه تا سره مینه لرم",
  "Aku tresna karo kowe",
  "Abdi bogoh ka anjeun",
  "Ke a u rata",
  "Ndimakukonda",
  "愛しています",
  "Te quiero",
  "Je t’adore",
  "Ich hab dich lieb",
  "Ik hou van je",
  "Ti voglio bene",
  "Я кохаю тебе",
  "Mahal na mahal kita",
  "Iniibig kita",
  "Aku tresno karo kowe",
  "Mi ta stimabo",
  "Mon amour",
  "Ya tebya lyublyu",
  "Ya tebya kokhayu",
  "Main tumse mohabbat karta/karti hoon",
  "Hum tumse pyaar karte hain",
  "मैं तुझसे प्यार करता/करती हूँ",
  "હું તને પ્રેમ કરું છું",
  "ਮੈਂ ਤੁਹਾਨੂੰ ਪਿਆਰ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ",
  "ମୁଁ ତୁମକୁ ଭଲ ପାଏ",
  "মই তোমাক ভাল পাওঁ",
  "अहं त्वां प्रेम करोमि",
  "Ndagukunda cyane",
  "Ngiyakuthanda kakhulu",
  "Nakupenda sana",
  "Te amo mucho",
  "Je t’aime beaucoup",
  "Ti amo tanto",
  "Ich liebe dich sehr",
];

export default function App() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let progress = 0;
    let offset = 0;
    let lastWidth = 0;
    let lastHeight = 0;

    function draw() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      const time = performance.now();

      if (W !== lastWidth || H !== lastHeight) {
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;

        lastWidth = W;
        lastHeight = H;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Original black background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);

      // Original large centered heart
      const heartW = Math.min(
        W * 0.99,
        (H - 40) * 1.08,
        1200
      );

      const heartH = heartW * 0.92;
      const left = (W - heartW) / 2;
      const top = (H - heartH) / 2 + 5;

      function heartPath() {
        ctx.beginPath();

        ctx.moveTo(
          left + heartW * 0.5,
          top + heartH * 0.92
        );

        ctx.bezierCurveTo(
          left + heartW * 0.40,
          top + heartH * 0.82,
          left + heartW * 0.02,
          top + heartH * 0.56,
          left + heartW * 0.02,
          top + heartH * 0.30
        );

        ctx.bezierCurveTo(
          left + heartW * 0.02,
          top + heartH * 0.02,
          left + heartW * 0.36,
          top,
          left + heartW * 0.5,
          top + heartH * 0.23
        );

        ctx.bezierCurveTo(
          left + heartW * 0.64,
          top,
          left + heartW * 0.98,
          top + heartH * 0.02,
          left + heartW * 0.98,
          top + heartH * 0.30
        );

        ctx.bezierCurveTo(
          left + heartW * 0.98,
          top + heartH * 0.56,
          left + heartW * 0.60,
          top + heartH * 0.82,
          left + heartW * 0.5,
          top + heartH * 0.92
        );

        ctx.closePath();
      }

      const fontSize = Math.max(
        9,
        Math.min(14, heartW / 48)
      );

      const lineHeight = fontSize * 1.5;

      ctx.font = `bold ${fontSize}px "Noto Sans", "Noto Sans Malayalam", "Noto Sans Devanagari", sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";

      const widths = messages.map(
        (message) => ctx.measureText(message).width
      );

      const gapWidth = ctx.measureText(" ♥ ").width;

      // Gentle heartbeat glow
      const beat = (Math.sin(time / 700) + 1) / 2;
      const pulse = 1 + Math.pow(beat, 8) * 0.28;
      const glow = 8 * pulse;
      const opacity = 0.85 + beat * 0.15;

      // Clip text inside the heart
      ctx.save();
      heartPath();
      ctx.clip();

      const startIndex =
        Math.floor(offset / 0.12) % messages.length;

      let rowNumber = 0;

      for (
        let py = top + fontSize;
        py < top + heartH;
        py += lineHeight
      ) {
        const rowStart =
          (startIndex + rowNumber * 3) % messages.length;

        let x =
          left - ((offset * 8 + rowNumber * 17) % 90);

        let index = rowStart;

        ctx.fillStyle = "#ff1744";
        ctx.shadowColor = "#ff003c";
        ctx.shadowBlur = glow;
        ctx.globalAlpha = opacity;

        while (x < left + heartW) {
          ctx.fillText(messages[index], x, py);
          x += widths[index];

          ctx.fillText(" ♥ ", x, py);
          x += gapWidth;

          index = (index + 1) % messages.length;
        }

        rowNumber++;
      }

      ctx.restore();

      // Reveal the heart slowly from left to right
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = "#fff";
      ctx.fillRect(
        0,
        0,
        left + heartW * progress,
        H
      );
      ctx.restore();

      if (progress < 1) {
        progress = Math.min(1, progress + 0.0007);
      } else {
        offset += 0.025;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Play or pause background music
  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }

    audio.volume = 0.35;

    try {
      await audio.play();
      setMusicOn(true);
    } catch (error) {
      console.error("Unable to play music:", error);
      setMusicOn(false);
    }
  }

  return (
    <main className="screen">
      <canvas ref={canvasRef} />

      <audio
        ref={audioRef}
        src="/romantic-piano.mp3"
        loop
        preload="auto"
        onEnded={() => setMusicOn(false)}
        onPause={() => setMusicOn(false)}
        onPlay={() => setMusicOn(true)}
      />

      <button
        type="button"
        className="music-button"
        onClick={toggleMusic}
        aria-label={musicOn ? "Pause music" : "Play music"}
      >
        {musicOn ? "♫❤️" : "❤️"}
      </button>
    </main>
  );
}
