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
  {
    id: 11,
    title: "Spider-Man 3",
    rating: 8,
    review: `Spider-Man 3 (2007) — So Bad It's Good?
    Spider-Man 3 starring Tobey Maguire is famous for being one of the most infamous "so bad it's good" superhero movies, and revisiting it years later, 
    it's easy to see why fans still have such a mixed—yet oddly affectionate—response.

    What Makes It "So Bad"?
    Overstuffed Plot: The biggest, most repeated criticism is the film is crammed with too many characters and storylines—Venom, Sandman, Harry’s double redemption arc, 
    the symbiote saga, and a Peter Parker/MJ/Gwen love triangle. All of these arcs get jumbled, resulting in a bloated movie.

    Odd Tonal Swings: The film is notorious for scenes that swing wildly between high drama and unintentional comedy. 
    Most legendary is "Emo Peter Parker"—Tobey Maguire as a dorky, vengeful Peter in a black suit, dancing awkwardly down the street and transforming 
    from lovable nerd to cringe-inducing edgelord. These moments go so far off the rails they become instantly meme-worthy.

    Forced Dialogue & Character Decisions: The script often pushes characters into melodrama, with stilted lines and nonsensical twists (notably Harry’s amnesia 
    subplot and the hasty Venom origin). Attempts at depth often land as accidental comedy, made even funnier by the cast’s committed performances.

    But... Why Is It Good Anyway?
    Unintentionally Hilarious: Few superhero movies deliver such a heavy dose of "what were they thinking?" entertainment. The earnestness with which Tobey Maguire 
    sells every scene—especially the infamous dance sequence—makes for laugh-out-loud moments perfectly suited to group rewatches.

    Spectacle & Heart Remain: Despite its excess and flaws, Spider-Man 3 boasts some impressive action set pieces and spectacular effects for its time. And at its core, 
    Sam Raimi’s direction keeps a kernel of the emotional sincerity that made the first two films beloved, especially in scenes with Aunt May and Sandman’s tragic backstory.

    A Cult Classic: Over time, what were once considered flaws have become the movie's enduring charm. Fans today pile praise on its rewatchability and meme status, 
    celebrating its wild ambition, quotable lines ("I'm gonna put some dirt in your eye"), and pure, chaotic energy.

    Final Verdict
    Spider-Man 3 is the bizarre, over-the-top finale of Raimi’s trilogy that’s just as enjoyable for its missteps as its successes. 
    It’s a trainwreck you can’t look away from—a film so earnest and weird it swings back around to being “so bad it’s good." Whether you’re watching for nostalgia, 
    comedy, or genuine superhero action, this is a blockbuster best enjoyed with friends and a sense of humor.`,
    poster:
      "https://resizing.flixster.com/BtYcCLpD6319Mya6Y2pJwV14SNY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159366_p_v10_at.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4.`
  },
  {
    id: 12,
    title: "Batman & Robin",
    rating: 8,
    review: `
    In the pantheon of cinematic disasters, Batman & Robin (1997) is the shimmering diamond (pun entirely intended) atop the frozen iceberg of 
    superhero excess—a movie so spectacularly misjudged that it loops all the way back to brilliance by pure accident. 
    Imagine if your childhood toy box exploded onto the big screen, but every action figure suddenly had rubber nipples, a credit card, and an existential crisis.

    From the glorious moment Arnold Schwarzenegger lumbers in as Mr. Freeze, it’s clear subtlety is trapped in a block of ice somewhere.
    Every single line he utters is a chilling avalanche of puns—“Let’s kick some ice!” “The Iceman cometh!”—delivered with all the gravitas of a dad at a barbecue 
    armed with a novelty apron. You half expect him to moonlight as a motivational speaker for refrigerators.

    George Clooney, meanwhile, plays Batman as if he’s angling for a Nespresso commercial rather than a war on crime, his Bat-credit card at the ready for any emergency, 
    like ordering takeout during a heist. Robin (Chris O'Donnell) and Batgirl (Alicia Silverstone) round out the crew with the sparkling chemistry of 
    siblings forced to share a back seat on a family road trip, and Uma Thurman’s Poison Ivy chews up what’s left of the scenery when not being upstaged by a guy in a 
    gorilla suit. And then there’s Bane—less criminal mastermind, more roided-out birthday party bouncer.

    The plot? Something about freezing Gotham, curing Alfred with love, and a plan so convoluted even the Bat-computer begs for mercy. 
    The sets are luminous with neon that could irradiate a small city, and the vehicles look like rejected prototypes from Hot Wheels. 
    It’s as if Joel Schumacher, fueled by a bad batch of paint fumes and Happy Meal toys, decided every aspect needed to be twice as loud and half as coherent as the last 
    Batman movie.

    And yet, like a garish Christmas sweater or a novelty mug shaped like a penguin, it’s impossible to look away. Batman & Robin is a triumph of questionable choices, 
    a monument to the 1990s belief that bigger, brighter, and weirder always meant better. It’s a fever dream in spandex, a slapstick opera performed entirely in DayGlo, 
    and, against all odds, a masterclass in entertainment born from unintentional self-parody.

    It’s so bad, it’s essential. Ice to meet you.`,
    poster:
      "https://resizing.flixster.com/xJGyHeE3d1oWhg-DEEV4Yk9nVM4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19491_p_v8_al.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4.`
  },
  {
    id: 13,
    title: "Fantastic Four (2015)",
    rating: 9,
    review: `
    Fantastic Four (2015)—or Fan4stic, as its stylized poster screams like a text message from a desperate studio exec—is the cinematic equivalent of a science experiment 
    gone wrong, where the only superpower you get is the ability to stare in disbelief for 100 minutes and still want your time back.

    From the moment the cast assembles—literally a dream team of talent forced into mandatory lab coats—it’s clear no amount of charisma can outshine the cardboard 
    dialogue and science montage logic. Miles Teller as Reed tries to invent personality along with interdimensional teleportation, 
    while Michael B. Jordan’s Johnny Storm is so cool he almost melts the script—almost. Kate Mara as Sue is present with the steely determination of someone who 
    knows she’ll never have to speak about this movie again in interviews.

    The film sometimes teases you with flashes of real body horror, genuinely unsettling moments as the team first mutates. For a split second, you think, 
    “Wait, is this actually interesting?” But then the pacing slams the brakes, and you’re left marooned in a wasteland of awkward edits, reshoot wigs, 
    and dialogue so unnatural it sounds like AI fan fiction. By the time they finally fight anything, 
    it’s Doctor Doom—looking like the unholy lovechild of a crash test dummy and a melted green crayon—trying to suck the Earth through a hole for reasons even 
    he can’t be bothered to explain.

    The special effects, sometimes promising, mostly resemble deleted scenes from a Syfy original. Action? Blink and you’ll miss it: the climax is a group wobble on a rock, 
    where “teamwork” seems to mean distracting the villain by being slightly off-camera. The alternate dimension looks like a gravel pit cosplaying as outer space, 
    and the only thing more lifeless is the script.

    Yet, like all misunderstood experiments, Fan4stic achieves something miraculous: it is fascinatingly, hypnotically awful. 
    It’s the superhero movie equivalent of an awkward family reunion slideshow. You watch, mouth agape, not to see if the heroes win, 
    but to marvel at each catastrophic decision. It’s a monument to what happens when ambition, reshoots, studio panic, and absolutely no fun collide at warp speed.

    You can’t look away. That’s its real power.`,
    poster:
      "https://resizing.flixster.com/u-vRV7GNlFBQjpI809gRt9c4_q8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854519_p_v13_ba.jpg",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 14,
    title: "R.I.P.D.",
    rating: 9,
    review: `
    R.I.P.D. (2013) is the cinematic equivalent of discovering a forgotten bag of Halloween candy—exciting in concept but terrifying in execution, 
    with Ryan Reynolds mugging gamely as Nick Walker, a recently-deceased cop drafted into the supernatural bureaucracy of the Rest In Peace Department. 
    Alongside Jeff Bridges’ Roy Pulsipher (who seems to have mistaken the afterlife for a saloon in True Grit), 
    Reynolds delivers his signature wisecracks with the enthusiasm of a man who knows Deadpool is only a few bad movies away.

    The film’s plot—a chaotic paranormal buddy-cop mission to stop evil “deados” from unleashing the apocalypse—is basically Men in Black left out in the sun too long, 
    reeking of expired CGI and comic book adaptation desperation. Bridges chews scenery as if it’s the only food in the afterlife, 
    while Ryan is left to shepherd the audience through plot holes so large not even ghostly bureaucracy could fill them. 
    Their avatars on Earth—a supermodel and an old Asian man—are a running gag that never gets off the ground, much like most of the script’s jokes.

    Special effects wobble between PlayStation 3 cutscene and chicken nugget nightmare, but hey, at least Kevin Bacon makes a hammy villain, 
    fully embracing the “I only cashed the check” school of acting. The tone ping-pongs from kid’s film slapstick to “how many souls does it take to greenlight this?” 
    existential dread.

    Yet, as the wise reviewer once said, sometimes a cinematic trainwreck is so dazzling you simply can’t avert your eyes. R.I.P.D. is popcorn cinema at its most 
    disastrously ambitious, a buddy-comedy fever dream where Ryan Reynolds valiantly tries to keep a straight face while ghost-hunting in a plot 
    that’s deader than his character. File under: “So bad, it’s hauntingly watchable”—especially with friends and a ghostly quantity of snacks.`,
    poster:
      "https://resizing.flixster.com/PJxDp4RI9g9K1D6S88i3pEOQE-c=/206x305/v2/https://resizing.flixster.com/hI4gi2cT2eWTvK4poD2fJze2Mo4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY3NzI2Yjc5LTAxNjEtNGE0Mi04Zjc1LWYwODU0NTQyYzJiZi5qcGc=",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 15,
    title: "R.I.P.D.",
    rating: 9,
    review: `
    Green Lantern (2011) with Ryan Reynolds is a neon-lit fever dream of superhero cinema where no CGI effect is left unstretched, and no plot thread is left untangled. 
    This is a movie so earnestly misguided it transcends its own flaws to become superhero comfort food—a glowing, ring-powered monument to the phrase “so bad it’s good.”

    Picture Reynolds as Hal Jordan, a cocky test pilot drafted into an intergalactic police force, delivering every line with that trademark Reynolds smirk that suggests 
    he knows just how green this all is. The ring lets him conjure anything he imagines—giant green race cars, machine guns, and occasionally, 
    the willpower to finish this script. His nemesis is Parallax, a swirling cloud of evil that looks like a haunted bowl of spaghetti left out at a fraternity house. 
    It threatens the entire universe with the power of yellow—a color so menacing that the film pauses multiple times to explain why “yellow” is, in fact, 
    the scariest thing in the cosmos.

    The supporting cast deserves medals for keeping straight faces. Blake Lively’s Carol is both love interest and plot device, cast mostly for luminous stares. 
    Mark Strong’s Sinestro sports a magenta forehead and all the gravitas of Hamlet trapped in a wig shop. Peter Sarsgaard as Hector Hammond goes full Cronenberg, 
    with a cranium swelling like a balloon at a children’s party and daddy issues to match.

    The effects are as green as the Lantern’s willpower, with CGI suits glued onto the actors like digital Saran Wrap. Each action sequence is an explosion of 
    cartoonish spectacle, and Oa—the Lantern homeworld—looks like the world’s most expensive screensaver.

    The plot hurls itself between Earth, space, and exposition with reckless abandon. Pacing is a concept trapped in a wormhole: just as things get interesting, 
    they screech to a halt for a pep talk or some more glowing mythology. By the climax, reality itself seems ready to walk out of the theater.

    Yet, amidst the chaos, Green Lantern is strangely mesmerizing—a joyous disaster that tries to squeeze three origin stories, a cosmic evil, and 
    Reynolds’ full charm offensive into two hours. Watch it for the spectacle, stay for moments so gloriously absurd you’ll wonder if secret sandwiches of 
    self-aware comedy are hidden beneath the CGI.

    Green Lantern: so dazed, so dazzlingly odd, you can’t look away. In brightest day, in blackest night, no viewer shall escape its campy light.`,
    poster:
      "https://resizing.flixster.com/g0kD-A9-1-KPqhnCcEjoOedICBk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8176346_p_v8_ai.jpg",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 16,
    title: "Daredevil (2003)",
    rating: 9,
    review: `
    Daredevil (2003) is what happens when you pour all the leather, nu-metal angst, and Blades-of-Glory slow-mo of the early 2000s superhero boom into a blender, 
    add a dash of Catholic guilt, and hit “pulse” until plot comes out lumpy. Ben Affleck’s turn as the “Man Without Fear” delivers a performance so stoic that you wonder 
    if he’s blind, brooding, or just really hoping no one recognizes him after the first screening.

    The film’s serious tone is hilariously undone by cartoony fight scenes and a soundtrack straight from a teenager’s worst “edgy” mixtape—Evanescence’s 
    “Bring Me to Life” pulses through its infamous playground flirt-fight between Matt and Elektra, a scene so awkward it’s legendary in cringe cinema. 
    CGI roof jumps and wire-fu brawls strive for comic-book cool but end closer to daytime soap histrionics. Colin Farrell’s Bullseye gleefully chews every available 
    prop (sometimes literally), while Michael Clarke Duncan’s Kingpin is imposing, but never allowed the menace of a comic villain—unless menacing means glowering while 
    bathed in blue lighting and sweat.

    The movie’s script can’t decide if Matt’s blindness is tragic, comic relief, or just an excuse for echo-location FX. Blind jokes abound, his friends are comfortable 
    tricking him, and courtroom drama gets bulldozed by absurd action setpieces. Plot points crash together: secret identities, Catholic allegory, melodramatic revenge, 
    and more mobster double-crosses than a telenovela.

    Yet, Daredevil is an absolute goldmine for the “so bad it’s good” crowd. Its sheer earnestness—trying so hard to be gritty and profound while tripping on its own 
    trench coat—turns every misfire into camp magic. The effects have aged like leftover cheese, the dialogue is perfect drinking-game fodder, 
    and the emotional beats hit with the subtlety of a ninja star to the forehead. Even its die-hard defenders admit Daredevil is a time-capsule of what superhero movies 
    desperately wanted to be, but mostly shouldn’t.

    It’s a disaster, an artifact, and a delightfully awkward spectacle. In a world where “serious” can swing back to hilarity, Daredevil 2003 stands tall: blind, 
    battered, and oh-so-strangely memorable. Bring popcorn—and maybe sunglasses.`,
    poster:
      "https://resizing.flixster.com/9CkZGkq8UH3lvToli1IKhgVQc-Q=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31328_p_v10_aa.jpg",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 17,
    title: "X-Men Origins: Wolverine",
    rating: 8,
    review: `
    X-Men Origins: Wolverine (2009) is widely recognized as a film that straddles the line between flawed yet oddly entertaining, making it a prime candidate for 
    "so bad it's good" status in superhero cinema. The movie attempts to explore Wolverine's dark and violent past with plenty of action, family drama, and revenge, 
    but often trips over a convoluted plot and inconsistent tone.

    Hugh Jackman’s portrayal of Wolverine remains the film’s anchor, delivering physicality and charisma that keep it watchable despite awkward dialogue and rushed 
    character development. Liev Schreiber as Sabretooth and Danny Huston as Colonel Stryker stand out with serious, committed performances that highlight the 
    movie's uneven quality, as the supporting cast often suffers from forced lines and underused roles.

    Critically, the film is known for its action sequences that sometimes feel choppy or overly rapid and a story that tries to juggle too many elements at once, 
    including Wolverine’s origins, team betrayals, and rogue mutant powers. The special effects are decent for the time but the overall tone swings between gritty and campy.

    The notorious "mutant powers reveal" scene involving Ryan Reynolds’ Deadpool character is often cited as a low point emblematic of the film’s odd choices, 
    contributing to its cult reputation for being entertainingly bad.

    In essence, X-Men Origins: Wolverine combines impressive moments with cringe-worthy ones, delivering a superhero origin tale that can be enjoyed with popcorn and a 
    sense of irony — a movie so flawed it has become a kind of guilty pleasure for fans who love to revel in its missteps as much as its strengths.

    If you'd like, I can craft a "so bad it's good" style review of X-Men Origins: Wolverine in the tone of the previous ones.`,
    poster:
      "https://resizing.flixster.com/IM-zvJfejSJ-e9zpNh3_xPDbX50=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p174924_p_v8_an.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4.`
  },
  {
    id: 18,
    title: "Masters of the Universe",
    rating: 9,
    review: `
    Masters of the Universe (1987) is a fascinating specimen of "so bad it's good" cinema, a film where earnest effort, campy charm, and 80s oddities collide in a way 
    that’s both bewildering and oddly endearing. The movie takes the vibrant, cosmic fantasy world of He-Man and transplants it clumsily onto Earth, leading to a 
    fish-out-of-water story that's part sci-fi, part outlandish adventure, and entirely a product of its time.

    Dolph Lundgren’s He-Man is less the heroic muscle man of the cartoon and more a brooding, somewhat perplexed warrior navigating the grim realities of 1980s Earth. 
    Frank Langella’s Skeletor stands out as the film’s saving grace—his sinister charm and theatrical menace elevate the material beyond the typical B-movie villainy, 
    giving the film its rare moments of gravitas. The dialogue often drifts into over-the-top territory and the special effects are dated, yet the practical effects and 
    charmingly low-budget sets give it a tangible quirky feel.

    The story is a patchwork of sci-fi and fantasy tropes: Skeletor’s scheme revolves around a Cosmic Key that can open portals between Eternia and Earth, 
    leading to bizarre Earth-bound escapades including interactions with humans like Courteney Cox’s Julie, who treats the key like a musical instrument. 
    The fight scenes are methodical rather than flashy, sometimes feeling oddly restrained for a movie about muscle-bound heroes and sorcery.

    It’s also notable how the film’s modest budget necessitated creative choices, resulting in a strange hybrid of sword and sorcery with contemporary Earth settings, 
    which often feels jarring but in a way fuels its cult appeal. Fans revisit it for its retro aesthetic, earnest performances, and the oddball mix of camp and sincerity. 
    Though critics have dubbed it a “slapdash adaptation” lacking a clear purpose, Masters of the Universe has carved out a niche as a cult classic cherished for 
    its bizarre charm, nostalgic 80s style, and Frank Langella’s memorable Skeletor.

    In sum, it’s a cinematic oddity where the flaws—awkward dialogue, uneven tone, and budget constraints—become part of the magic. 
    It’s a film you watch not despite its failings but because of them, a retro adventure that lives by the power of camp and nostalgia. 
    Masters of the Universe is so gloriously unpolished and weird, it demands a place in the “so bad it’s good” hall of fame. By the power of Grayskull, 
    you can’t look away.`,
    poster:
      "https://resizing.flixster.com/CmefM0IvobPVqYGyJi6Gx7Dv27s=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10248_p_v8_aj.jpg",
    depth: `I would rate this a 9 out of 10. and for a 5 star scale, a 4.5.`
  },
  {
    id: 19,
    title: "Howard the Duck",
    rating: 8,
    review: `
    Howard the Duck (1986) is a quintessential "so bad it's good" cult classic—a movie whose ambitious mix of comedy, sci-fi, and comic book adaptation spectacularly 
    misses the mark but wins fascination through sheer oddity and earnestness. The film features a humanoid duck (played in a cumbersome suit and voiced by Chip Zien) 
    thrust from his home planet, "Duckworld," into the unlikeliest of places on Earth (Cleveland), where he befriends a woman rocker and battles a bizarre, 
    villainous alien entity.

    The movie suffers from an uneven tone, stumbling awkwardly between slapstick humor, cheesy one-liners (some duck-related puns even draw groans), 
    and sci-fi elements that feel clumsily patched together. Howard himself is softened dramatically from his sardonic comic origins into a more family-friendly figure, 
    which some critics feel saps the character's original charm. The special effects and visuals appear aging and occasionally jarring, 
    and the storytelling is tonally muddled, with moments that range from bizarre to painfully awkward. Dialogue often comes off corny, acting is hit-or-miss, 
    and the film’s attempts at humor fall flat for many viewers.

    However, the spectacle of a full suit Howard physically present on set (as opposed to CGI or animation) lends an authenticity that some fans appreciate, 
    alongside a quirky 1980s aesthetic and earnest performances that contribute to its nostalgic charm. Its failure to find a broad audience or critical approval 
    (receiving harsh criticism at release and branded a flop) only fuels its "so bad it's good" reputation, making it a curious, entertaining watch for those who enjoy 
    eccentric B-movies with heaps of camp and nostalgia.

    In sum, Howard the Duck is a wildly flawed yet hypnotically watchable film whose awkward blend of genres, cheesy humor, and oddball charm make it a standout cult 
    favorite. Its "so bad it's good" magic lies in a genuine — if misguided — attempt to bring a bizarre comic character to life in a delightfully peculiar 1980s package. 
    Watch it for the duck puns, the sheer weirdness, and the nostalgia trip you didn’t know you needed.

    Howard the Duck: a cosmic quack of confusion that’s impossible to ignore.`,
    poster:
      "https://resizing.flixster.com/hFtCGTdq38etM2EZRkN5WgTeYPc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9432_p_v8_af.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4`
  },
  {
    id: 20,
    title: "Catwoman",
    rating: 8,
    review: `
    Catwoman (2004) is a prime example of a "so bad it's good" movie—a bizarre superhero flick that misses every mark but delivers an unintentionally hilarious experience 
    that keeps viewers watching out of disbelief and amusement. Halle Berry stars as Patience Phillips, a meek graphic designer who, after being killed, 
    is resurrected by mystical cats and gains cat-like powers, which she uses to fight the evil cosmetics company that framed her.

    The film is notorious for its awful plot, terrible dialogue, and misguided direction by Pitof, combining a confused storyline about a corrosive anti-aging cream and a 
    transformation powered by an immortal cat. One of the movie’s standout “so bad it's good” moments is Berry’s awkward portrayal of Catwoman, complete with strange, 
    un-graceful movements that look nothing like any feline strut. The costume design, especially the main Catwoman suit, has been widely criticized for being 
    unflattering and lacking sex appeal despite its intentions.

    Beyond the lead, the supporting cast’s performances, including Benjamin Bratt's detective and Sharon Stone as the villain, contribute to the campy tone—Stone’s 
    villainous character and certain over-the-top scenes like a one-on-one basketball game involving Catwoman flips add to the surreal feel. 
    The special effects are dated and overly digital, and the narrative is filled with clichés, odd pacing, and unconvincing action sequences.

    What makes Catwoman oddly watchable, despite all these flaws, is its unintentional humor and the sheer earnestness with which it plays out. 
    Fans of "so bad it's good" cinema appreciate it for these qualities, treating it as a kind of cinematic trainwreck akin to The Room or other cult disasters, 
    where each misstep adds to its charm rather than detracting from it.

    In summary, Catwoman (2004) is a film so flawed—because of its clumsy plot, weird character choices, and awkward execution—that it becomes entertaining. 
    It's a guilty pleasure for those who enjoy superhero movies that go spectacularly off the rails, with enough laughs and baffling moments that you can't look away.

    Catwoman: a super-powered misfire with unintentional comedy and a charm all its own. So bad it's good, indeed.`,
    poster:
      "https://resizing.flixster.com/gCrZKEEQh_CwMKseH0g2I5T7TKQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34578_p_v13_ab.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4`
  },
  {
    id: 21,
    title: "Ghost Rider",
    rating: 8,
    review: `
    Ghost Rider (2007) starring Nicolas Cage is a prime example of a "so bad it's good" superhero movie, blending over-the-top performances, corny dialogue, 
    and flashy but sometimes awkward CGI into an unintentionally amusing package. Cage delivers one of his quirkier, unrestrained performances, 
    including memorable moments like eating jellybeans out of a martini glass and a wild fiery skull transformation laugh-cry-scream that feel without a clear roadmap 
    but are oddly entertaining. The story, involving a deal with the devil and Ghost Rider tracking down demons, is confusing and dragged out, 
    with the flaming skeleton transformation not even appearing until 40 minutes in, creating pacing issues that make the movie feel longer than necessary.

    The villain is underwhelming, and much of the dialogue is melodramatic and cheesy, often delivered in a clunky manner by Cage. 
    Despite this, the movie embraces its silliness, and the stunning design of Ghost Rider himself, with cool motorcycles and fire effects, 
    provides a visual spectacle that keeps viewers engaged. Eva Mendes as the love interest brings some charm despite being underwritten, and some moments, 
    like the chaotic chase scenes where the Ghost Rider flips off cops and rides up buildings, are pure campy fun.

    In essence, Ghost Rider (2007) is a flawed but entertaining spectacle that embraces its camp and eccentricities, making it perfect for fans who enjoy superhero movies 
    that are entertainingly ridiculous and unpolished. Its combination of cheesy dialogue, bizarre character choices, and Cage's wild energy makes it a cult 
    favorite in the "so bad it's good" category.

    Ghost Rider: a fiery, flaming skull spectacle that’s delightfully off the rails and impossible to look away from.`,
    poster:
      "https://resizing.flixster.com/amraerOYGrY5axKSlcJWYq4diSo=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159753_p_v8_aq.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4`
  },
   {
    id: 22,
    title: "Ghost Rider: Spirit of Vengeance",
    rating: 8,
    review: `
    Ghost Rider: Spirit of Vengeance (2011) is a spectacularly wild and chaotic sequel that fits perfectly in the “so bad it’s good” category thanks to its over-the-top action, 
    Nicolas Cage’s unhinged performance, and frenetic direction that never lets up on the insanity. Cage returns as Johnny Blaze, whose inner Ghost Rider is now darker and 
    more dangerous, portrayed as a fiery force of vengeful mayhem rather than a traditional hero. The movie ditches subtlety in favor of non-stop pyrotechnics, 
    wild bike chases, and a careening camera style that’s both dizzying and exhilarating—all shot with a style reminiscent of the directors’ previous kinetic films like Crank.

    The story is minimal and sometimes confusing, involving Blaze protecting a boy prophesied to defeat the devil himself. Dialogue and character development take a 
    backseat to the sheer spectacle, which includes bizarre and sometimes hilarious moments that underline its campy charm. Supporting cast members like Idris Elba and 
    Ciarán Hinds add some gravitas but don’t detract from the film’s furious pace and chaos.

    Visually, the film impresses with fiery skull effects, a gruesome redesign of the Ghost Rider character—featuring a burnt, craggy skull and charred clothing—and some 
    hilariously intense sound design, especially the bike’s ominous roar before Blaze arrives. The quick cuts, shaky camera work, and heavy editing are divisive; 
    some find it energizing and fitting for the movie’s tone, others find it annoying.

    Critics largely panned it, but many fans find it delightful in its lunacy—embracing its flaws as part of its manic personality. It’s described as a 
    “crazy version” of a revenge flick, less a traditional superhero film and more a fast-paced, chaotic thrill ride with a nutty hero who never takes himself seriously.

    In summary, Ghost Rider: Spirit of Vengeance is a ridiculously entertaining spectacle: short, dumb, loud, and fueled by Nicolas Cage's wild energy. 
    It’s a perfect midnight movie and cult favorite for those who love superhero movies that are gloriously absurd and “so bad they’re good.”

    Ghost Rider: Spirit of Vengeance is a fiery, flaming-head spectacle that’s hilariously off the rails and impossible to look away from, 
    especially if you enjoy over-the-top action and Nicolas Cage at his most unhinged.`,
    poster:
      "https://resizing.flixster.com/7BJPm848O7Cm4Sliaw3z2pUxopg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8786426_p_v8_bh.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4`
  },
  {
    id: 23,
    title: "The Amazing Spider-Man 2",
    rating: 8,
    review: `
    The Amazing Spider-Man 2 (2014) is a prime candidate for a "so bad it's good" review due to its wildly overstuffed plot, tonal whiplash, and a parade of underwhelming 
    villains that never really land as genuine threats. The movie juggles multiple convoluted storylines—from Peter’s complicated family history and breakup with 
    Gwen Stacey to the origins of several villains like Electro, Rhino, and Harry Osborne—which ends up feeling more like a series of disjointed episodes than a 
    cohesive narrative. This sprawling structure makes the film feel bloated and exhausting, often swinging abruptly between drama, brooding moments, awkward humor, 
    and loud action sequences.

    Andrew Garfield’s Spider-Man is earnest and charismatic, but the script doesn’t help him, with villains who come across as one-dimensional or oddly 
    unconvincing—a delusional Electro, a greasy, undeveloped Harry, and a Rhino who’s basically a joke. The film seems desperate to set up future franchises, 
    weighing down the story with excessive exposition and characters, many of whom never get enough development to matter. At times, the tone feels all over the place: 
    some scenes play for emotional weight but fall flat due to an uneven script, while others veer into campy spectacle.

    Visually, the film has some strong points, with decent effects and memorable action moments, particularly the over-the-top final power plant showdown that embraces a campy, 
    dramatic style. But even these flashes of fun are often overshadowed by the film’s unevenness and length. The soundtrack and the pacing contribute to dragging out 
    the experience, adding to the impression of a movie that bit off more than it could chew.

    The overall effect is a film that’s frustratingly messy yet somehow engaging enough to watch because of its sheer ambition and moments of unintentionally amusing excess. 
    It fits the "so bad it's good" category for viewers who enjoy superhero movies that try very hard but implode under their own weight, 
    delivering a spectacle that’s as exhausting as it is oddly hypnotic.

    The Amazing Spider-Man 2 is a sprawling, tonal mess of a superhero movie that falters under its own ambitions with laughably bad villains and a confusing plot, 
    yet it remains entertaining because it can’t help but be over-the-top and spectacularly uneven. A guilty pleasure for viewers who delight in 
    big-budget cinematic trainwrecks.

    So bad it's good? Absolutely — you can’t look away.`,
    poster:
      "https://resizing.flixster.com/7TkmDMsD8_9ZWHvcbvKUU7ev3-8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9957538_p_v12_ad.jpg",
    depth: `I would rate this a 8 out of 10. and for a 5 star scale, a 4`
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