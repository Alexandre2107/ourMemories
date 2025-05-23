const DailyMessage: React.FC = () => {
  const messages: string[] = [
   "You are the reason my heart beats a little faster every day.❤️",
  "I didn’t believe in soulmates until I found you.❤️❤️",
  "With you, every moment feels like magic.❤️❤️❤️",
  "You’re not just part of my life, you are my life.❤️",
  "I fall in love with you a little more every single day.❤️❤️",
  "You’re my favorite place to go when my mind searches for peace.❤️❤️",
  "My world begins and ends with you.❤️",
  "I never knew what love really meant until you looked at me that way.❤️",
  "If I had to choose again, I’d still choose you every time.❤️❤️",
  "In your arms, I’ve found my home.❤️",
  "Loving you is the most beautiful feeling I’ve ever known.❤️❤️",
  "You make ordinary days feel like fairy tales.❤️❤️",
  "Even a lifetime with you would never be enough.❤️",
  "Every love song suddenly makes perfect sense since I met you.❤️❤️",
  "You’re my heart’s most precious melody.❤️❤️",
  "The best part of my day is always the part I spend with you.❤️",
  "You’re the calm to my storm, the light in my darkest hour.❤️❤️❤️❤️",
  "I never get tired of being in love with you.❤️❤️❤️❤️",
  "Your smile is the sunshine my soul needed.❤️❤️❤️❤️",
  "I found myself when I found you.❤️❤️❤️❤️❤️",
  "You’re not a chapter in my life, you’re the whole book.❤️❤️❤️❤️❤️❤️❤️",
  "Just knowing you're mine brings peace to my entire being.❤️❤️",
  "You are the dream I never want to wake up from.❤️",
  "Your love has painted my world in the most beautiful colors.❤️❤️",
  "Being with you is the closest thing to heaven I’ve ever known.❤️",
  "You make love feel easy, safe, and infinite.❤️",
  "Forever wouldn’t be long enough with you.❤️",
  "You’re not just my love, you are my forever and always.❤️❤️",
  "With you, love feels like the greatest adventure.❤️❤️❤️",
  "I love the way your eyes speak the words your lips don’t need to.❤️❤️",
  "You are the missing piece I didn’t know I was searching for.❤️",
  "Life with you is my favorite kind of story.❤️❤️",
  "Even on bad days, loving you feels like the easiest thing.❤️❤️❤️❤️❤️",
  "I choose you, again and again, in every version of this life.❤️❤️❤️❤️❤️",
  "You fill every empty space in my heart perfectly.❤️❤️",
  "Being yours is my favorite blessing.❤️",
  "You're the sweetest hello and the hardest goodbye.❤️❤️❤️",
  "I see my future every time I look into your eyes.❤️❤️❤️❤️❤️",
  "Your love wraps around me like a blanket on a cold night.❤️❤️❤️❤️❤️",
  "You're not just someone I love, you’re everything I need.❤️❤️❤️❤️",
  "You turned my life into something I never dared to dream of.❤️❤️❤️",
  "I feel safest when I'm with you.❤️",
  "You’re the first person I want to see every morning and the last at night.❤️",
  "You give me a reason to smile, even on the hardest days.❤️❤️",
  "I’ll never stop being grateful that you exist.❤️❤️",
  "You and I are written in the stars.❤️❤️❤️❤️",
  "Loving you feels like breathing, natural, essential, and eternal.❤️❤️❤️❤️",
  "You taught me what real love feels like, and now I never want to let go.❤️❤️",
  "My heart beats your name in every moment of silence.❤️❤️",
  "With every heartbeat, I love you more than words can ever say.❤️",
  ];

  const dayOfYear = (): number => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const message = messages[dayOfYear() % messages.length];

  return <p className="text-center italic">{message}</p>;
};

export default DailyMessage;
