import { useParams } from "react-router-dom";

// Sample Movies Data
const movies = [
  {
    id: 1,
    title: "Superman (2025)",
    rating: 3,
    review: `The movie starts out of nowhere. I will spoil the movie because otherwise the rating wouldn't make sense. 
    Superman's origin has been changed from previous movies into a dumb harem nonsense. 
    Lex Luthor is a super genius able to make and create things that should be impossible. 
    Even in modern America they would need to kill Lex after what he has done in this movie, removing an important villain in Superman. 
    Superman's cousin is a partying and raving person that gets drunk, removing the superhero idea where most times we look up to become them. 
    A superhero is, in most cases, an idealistic view people should look to become — not just someone that just sins. 
    Now, I don’t want to judge, people should be free to do what they want, but superheroes have to be another story — something to strive to become, 
    not someone that is massively struggling in life... 

    Besides these parts, the movie was funny here and there… but James Gunn directing already popular characters? 
    Please, no more. I lost faith. Lex also kept an ex-prisoner in a pocket dimension, shot a random guy who has a family and kids. 
    The ex is almost implying a rape or Me Too situation that Lex is hiding — seriously? I am giving this a 2. 
    This is horrible — so bad I was laughing at it, enjoying it because it was just so bad. Is it worth seeing it for that? No, not really.`,
    poster:
      "https://resizing.flixster.com/SZJB_f6AKtKB1_i7hDLKFjloeuc=/206x305/v2/https://resizing.flixster.com/08R7NSRbZV4s8n5wlLgZLVyMrZ0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhZDkzNTk2LTk3MzktNDY0ZS1hN2NkLWFkMmQxMDc3MjAzOC5qcGc=",
    depth: `Parts I enjoyed: Mister Terrific and Guy Gardner — here we clearly see James Gunn can only direct characters that are not popular.
    I am not sure if he can even direct popular characters, but I am sure he can only direct characters that are obscure and generally unknown.

    Now we should mention the divisional rift in America, even when the citizens are feeling it. 
    This happened because of Lex Luthor—he killed many people and caused destruction, almost like what happened in Man of Steel. 
    This is, first of all, beyond ridiculous; as I said, Lex Luthor now deserves the death penalty because of this. 
    He might get a prison sentence in a maximum-security prison, but if he ever gets out again, they will just kill him after this, right?

    Superman might come up and try to protect him. I'm a bit curious to see what happens, but for me, this movie on its own is a 3 out of 10 — a 2 if based on a 5-star scale.
    I hope some TV show comes as a prequel, even though I usually hate those, just because of how random this movie is... pathetic.`
  },
  {
    id: 2,
    title: "Thunderbolts*",
    rating: 6,
    review: `It seems like Marvel now makes a bad movie, then an okay-ish one, then a bad one again, and then another okay-ish one. 
    This is the second okay-ish movie after Deadpool 3. It had its funny moments—I enjoyed it.

    The stakes weren’t really there; when you saw a child being taken away, you already knew they were going to come back—just like after Endgame. 
    The risks taken seemed so low, but I still enjoyed it.

    Red Guardian was the best part, and Terminator Winter Soldier was enjoyable—that really saved the movie for me. The rest was kind of predictable.`,
    poster:
      "https://resizing.flixster.com/KQ23z5FwNd3noiTHL68C1nOcl8Q=/206x305/v2/https://resizing.flixster.com/9GzvfSWe1iPtRk_vtcfpHIQGyCI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MzgyZDIyLWNjZmYtNGU5NS05ZjczLTYyZGE1ZGIyYzIxNC5qcGc=",
    depth: `I would rate this a 6 out of 10. and for a 5 star scale, a 3.`
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    rating: 7,
    review: `Deadpool & Wolverine is packed with so many references and callbacks that it quickly becomes overwhelming—and, frankly, 
    most of them aren’t particularly clever or satisfying. The movie feels more like a lengthy parade of Easter eggs and meta-jokes than an actual story, 
    with the references often standing in for real humor or emotional depth. The constant nods to other Marvel properties, past films, and pop culture start to wear thin, 
    and many moments feel like they exist only to get a reaction from fans rather than to tell a coherent narrative.

    Out of everything, the only part I genuinely enjoyed was seeing Captain America as the Human Torch—a fun nod to Chris Evans’ early Marvel role that actually worked for me. 
    Beyond that, the film’s relentless barrage of cameos and winking in-jokes mostly fell flat, and I found myself wishing for fewer references and a little more substance. 
    If you’re hoping for inventive comedy or meaningful character moments, 
    this movie is more likely to tire you out with its relentless “reference for reference’s sake” approach`,
    poster:
      "https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc=",
    depth: `I would rate this a 7 out of 10. and for a 5 star scale, a 3.5.`
  },
  {
    id: 4,
    title: "Punisher: War Zone",
    rating: 9,
    review: `Punisher: War Zone is an absolute mess—and I love every second of it. This movie is so over-the-top, so absurdly violent and ridiculous, 
    that it loops back around and becomes entertaining in all the wrong ways. The plot is paper-thin, the acting is cartoonish, 
    and the characters feel like they came straight out of a 90s video game cutscene. But that’s exactly why it’s fun.

    From Frank Castle blowing up parkour criminals mid-flip to the completely unhinged villain performances, this movie never tries to be subtle or grounded. 
    It’s full chaos, all the time. The dialogue? Hilariously bad. The logic? Non-existent. But somehow, it all just works—not as a great film, 
    but as peak “so bad it’s good” cinema.

    I can’t defend it as a well-made movie, but I can say it’s become one of my favorite bad movies of all time. 
    It's dumb, loud, and wildly entertaining in the worst best way possible. 
    If you're into outrageous action and unintentional comedy, Punisher: War Zone is a hidden gem of glorious trash.`,
    poster:
      "https://resizing.flixster.com/pvg2R3t3N575JLNS1cfsmUFYlXw=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176354_p_v10_ah.jpg",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 5,
    title: "Troll 2 (1990)",
    rating: 7,
    review: `Troll 2 (1990) is famously terrible—but that’s exactly why it’s so beloved as a “so bad it’s good” cult classic. 
    The movie’s baffling plot about a family vacationing in a town overrun by vegetarian goblins who want to turn them into plants is riddled with awkward dialogue, 
    strange acting, and nonsensical scenes that defy logic at every turn. 
    The production’s evident language barriers and low budget add to the charm of its unintentional hilarity.

    What truly makes Troll 2 unforgettable is its earnestness despite all its flaws. From the unintentionally hilarious performances to infamous lines that fans endlessly quote, 
    the movie captivates viewers with its sheer absurdity. It’s a cinematic train wreck you can’t look away from—equal parts baffling, creepy, and surprisingly endearing.

    If you love movies that are wildly entertaining because they’re so bafflingly bad, Troll 2 is a must-watch. 
    It’s earned its place as one of the most popular “worst movies ever made” and continues to attract fans who adore it for its curious blend of horror, kitsch, 
    and comedy gone wonderfully wrong.`,
    poster:
      "https://resizing.flixster.com/10H6UxroKpv2YuocLDVgKdiXvqc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14047_p_v10_aa.jpg",
    depth: `I would rate this a 7 out of 10. and for a 5 star scale, a 3.5.`
  },
  {
    id: 6,
    title: "Madame Web",
    rating: 8,
    review: `Madame Web is a textbook example of a "so bad it’s good" movie. From the start, it builds an intriguing mystique with a strong musical score, 
    but quickly unravels into a confusing, rushed story filled with awkward acting and baffling editing choices. 
    The film’s pacing and heavy use of close-up shots make it hard to follow, while the direction struggles to maintain coherence or emotional impact.

    Despite these flaws, Madame Web manages to entertain because of how wildly inconsistent and over-the-top it is. 
    The characters seem lost in the script, and the plot feels cluttered and clichéd, yet there’s something oddly charming about its misguided ambition. 
    The movie seems like it would work better as a TV series, where it could explore its ideas and characters more deeply.

    As a movie, it’s a mess—poorly executed, with wasted talent and a flat villain—yet strangely fun to watch because of that very chaos. 
    If you enjoy films where the spectacle and unintended humor outweigh the narrative, Madame Web will satisfy that craving. 
    It’s a wild ride of misplaced potential, awkward moments, and low-budget spectacle that earns a cult-like appeal precisely for being so problematic.`,
    poster:
      "https://resizing.flixster.com/v7ChpVedPRkyO6JenqveyvGr5DQ=/206x305/v2/https://resizing.flixster.com/zUIDgUBHepK7NGgrmXIvNnzvJaM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA5OWUxNjRlLTNlMmUtNDVhMS05YmEwLTQzZTAyN2I4ZWQxNy5qcGc=",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4.`
  },
  {
    id: 7,
    title: "Morbius",
    rating: 9,
    review: `Morbius “It’s Morbing time”—so bad it’s good in the most spectacularly awkward way. 
    Jared Leto’s brooding performance as Dr. Michael Morbius tries to carry the film, but the clunky script, confusing pacing, 
    and questionable CGI bats make it a chaotic mess that’s more entertaining for unintentional laughs than thrills. 
    The film’s earnest take on vampirism mixed with superhero origins gets overshadowed by slow-motion “morbing” sequences and a storyline that barely hangs together. 
    The dialogue and plot twists often feel random, with characters acting oddly serious amid some laughably bad special effects. 
    Watching Morbius struggle to contain his bloodlust somehow transforms from tense to unintentionally hilarious. Despite its flaws, 
    the movie embraces its own ridiculousness, making it a guilty pleasure for fans of campy, over-the-top superhero flicks. 
    If you’re in the mood for a movie that’s dramatically thrilling, yet hilariously offbeat in all the wrong ways, 
    Morbius delivers a weirdly entertaining experience—perfect for quoting “It’s Morbing time” at every awkward moment. Can't wait for Morbius 2: Morbing time.`,
    poster:
      "https://resizing.flixster.com/jhGVrotRTj9pPUziZ1QNhFCGfQU=/206x305/v2/https://resizing.flixster.com/QdgkXoEVBbSPngYBIEQorVt3QuY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg3OWQyOGE0LThmODItNDczNS04MDhjLThiZjQxYzM0YzYwZS5qcGc=",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 8,
    title: "Kraven the Hunter",
    rating: 7,
    review: `Kraven the Hunter is one of those “so bad it’s good” movies that you can’t help but laugh along with. 
    The plot is a confusing mess full of awkward dialogue and bad CGI that occasionally dips into absurdity, but somehow that makes it oddly entertaining. 
    Aaron Taylor-Johnson gives it his all, running around with animal-like agility and trying to bring some intensity to the role, 
    while Russell Crowe’s gruff presence adds a weirdly serious tone that clashes perfectly with the film’s chaotic vibe.

    The story jumps between excessive exposition and brutal, over-the-top action scenes—all mixed with characters whose motivations sometimes feel lost in translation. 
    The mystical potion, family drama, and superpowered hunts add to the film’s strange charm, even if none of it quite makes sense. 
    It’s one of those movies that works best if you turn off your brain, sit back, and enjoy the wild ride.

    If you loved tongue-in-cheek moments and unintentionally hilarious storytelling, Kraven the Hunter delivers plenty of “what did I just watch?” moments. 
    It’s a gloriously goofy, messy adventure where the fun comes from its flaws—and occasionally, it really feels like It’s Kraven time!`,
    poster:
      "https://resizing.flixster.com/p_50keg9Yv1yj9BAjTTvCpkcsLQ=/206x305/v2/https://resizing.flixster.com/mnV6FHsn27VI6-Eb9oBXgjQ-UI4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZkODgxZmZjLWU4ODUtNGQ2ZS1iZDIxLWI0N2MwNzBiZWVhOC5qcGc=",
    depth: `I would rate this a 7 out of 10. and for a 5 star scale, a 3.5.`
  },
  {
    id: 9,
    title: "Venom: The Last Dance",
    rating: 6,
    review: `Venom: The Last Dance is a perfect example of a "so bad it's good" movie that revels in its own chaotic charm. 
    The film doesn’t take itself seriously and embraces its messy, indulgent nature with gusto—often leading to wild, 
    over-the-top action sequences filled with multicolored goo and explosions. Tom Hardy’s performance as Eddie Brock/Venom remains entertaining, 
    especially as their quirky, sometimes ridiculous partnership finally clicks, delivering some of the movie’s best moments. 
    The plot is confusing and underdeveloped, with a B-story that feels largely meaningless. The pacing is uneven, 
    and the CGI—while occasionally impressive—sometimes veers into unintentionally goofy territory. 
    Yet these flaws become part of the fun. The movie is self-aware enough to lean into its campiness, 
    offering a messy but entertaining finale to the trilogy that doesn’t aim for nuance but rather a good time. 
    It’s a wild ride full of cringe, laughs, and surprisingly heartfelt moments—especially in the dynamic between Eddie and Venom. 
    If you go in expecting polished superhero storytelling, you’ll be disappointed. But if you’re ready to enjoy a messy, 
    outrageous spectacle with plenty of “morbing” energy and infectious enthusiasm, Venom: The Last Dance is a fun, imperfect romp worth watching.`,
    poster:
      "https://resizing.flixster.com/Xb-LkBRpufz5gB0Jp6fBki-yWfs=/206x305/v2/https://resizing.flixster.com/7pW-Wl_tjIUnlcPkLYudVsZS-00=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkYTQyZjkxLWZjYzItNGM5Yy1hN2FiLTA0YWQwMTAzNjVmZC5qcGc=",
    depth: `I would rate this a 6 out of 10. and for a 5 star scale, a 3.`
  },
  {
    id: 10,
    title: "Venom: Let There Be Carnage",
    rating: 6,
    review: `Venom: Let There Be Carnage is the definition of a “so bad it’s good” superhero movie—loud, ridiculous, 
    over-the-top, and somehow wildly entertaining in all the wrong (yet right) ways. The movie zips along at breakneck speed, rarely making sense, 
    but never boring. It’s chaotic from start to finish, with a script that feels like it was written during a sugar rush and dialogue that swings between oddly serious 
    and unintentionally hilarious.

    Tom Hardy continues to deliver a delightfully unhinged performance, essentially arguing with himself as Eddie and Venom bicker like an old married couple. 
    Their dysfunctional bromance is the heart of the film, and it’s so weird that it ends up feeling kind of endearing. Woody Harrelson as Carnage? 
    Completely unfiltered. He chews the scenery with cartoon villain energy, and it absolutely fits the movie’s wacky tone.

    Sure, the plot is thin, the villain motivations are rushed, and the CGI is a bit of a mess—but all of that just adds to the fun. 
    Let There Be Carnage is less of a coherent film and more of a chaotic fever dream with symbiotes. And honestly? That’s what makes it so enjoyable. 
    It’s not good, but it’s not trying to be—and that’s what makes it great in the weirdest way.`,
    poster:
      "https://resizing.flixster.com/-Y1UtiBmMYjgeeMfWUSIDq6dej4=/206x305/v2/https://resizing.flixster.com/9ROAHiR8ML6DU3j7yfWypNy2NxU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYwZGZhODY3LTI2YzktNGVkYy05YWJlLTVmMGNmMTY2YWZhNS5qcGc=",
    depth: `I would rate this a 6 out of 10. and for a 5 star scale, a 3.`
  },
];

// Helper to render star rating
const renderStars = (score, total = 10) => {
  return Array.from({ length: total }, (_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      fill={i < score ? "#facc15" : "#d1d5db"} // yellow-400 and gray-300
      viewBox="0 0 24 24"
      className="w-5 h-5 inline-block mr-1"
    >
      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.85L19.335 24 12 19.902 4.665 24 6 15.273 0 9.423l8.332-1.268z" />
    </svg>
  ));
};

const DynamicReview = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div className="p-6 text-red-500">Movie not found.</div>;
  }

  return (
    <section className="p-6 max-w-3xl mx-auto bg-[#E6F6E6]">
      <h1 className="text-3xl font-bold text-[#4DA96B] mb-4">{movie.title}</h1>

      <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
        {/* Poster */}
        <img
          src={movie.poster}
          alt={`Poster of ${movie.title}`}
          className="w-64 rounded shadow"
        />

        {/* Star Rating */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold mb-2">Rating:</p>
          <div role="img" aria-label={`${movie.rating} out of 10 stars`}>
            {renderStars(movie.rating, 10)}
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="text-gray-700 space-y-6">
        <p>{movie.review}</p>
        <p>{movie.depth}</p>
      </div>
    </section>
  );
};

export default DynamicReview;