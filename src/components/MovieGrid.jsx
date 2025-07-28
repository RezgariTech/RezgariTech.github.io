import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Superman (2025)",
    description: "The 2025 version of ruining superman.",
    poster:
      "https://resizing.flixster.com/SZJB_f6AKtKB1_i7hDLKFjloeuc=/206x305/v2/https://resizing.flixster.com/08R7NSRbZV4s8n5wlLgZLVyMrZ0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBhZDkzNTk2LTk3MzktNDY0ZS1hN2NkLWFkMmQxMDc3MjAzOC5qcGc=",
  },
  {
    id: 2,
    title: "Thunderbolts*",
    description: "Okeyish movie with some good parts.",
    poster: "https://resizing.flixster.com/KQ23z5FwNd3noiTHL68C1nOcl8Q=/206x305/v2/https://resizing.flixster.com/9GzvfSWe1iPtRk_vtcfpHIQGyCI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2MzgyZDIyLWNjZmYtNGU5NS05ZjczLTYyZGE1ZGIyYzIxNC5qcGc=",
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    description: "Good enough and funny movie.",
    poster: "https://resizing.flixster.com/OBCMbeYEWS5tI2QhErFskxKyEa0=/206x305/v2/https://resizing.flixster.com/mPJp85eApHd8ih9XF5E9d3-2LbM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxODlkZDE1LTQyYjUtNDg5ZS05NjZmLWMxZDk1YWZhN2E1ZC5qcGc=",
  },
  {
    id: 4,
    title: "Punisher: War Zone",
    description: "So bad it's good. Funny and entertaining.",
    poster: "https://resizing.flixster.com/pvg2R3t3N575JLNS1cfsmUFYlXw=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176354_p_v10_ah.jpg",
  },
  {
    id: 5,
    title: "Troll 2 (1990)",
    description: "So bad it's good. Weird plot but funny.",
    poster: "https://resizing.flixster.com/10H6UxroKpv2YuocLDVgKdiXvqc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14047_p_v10_aa.jpg",
  },
  {
    id: 6,
    title: "Madame Web",
    description: "A Sony gem. So bad it's good.",
    poster: "https://resizing.flixster.com/v7ChpVedPRkyO6JenqveyvGr5DQ=/206x305/v2/https://resizing.flixster.com/zUIDgUBHepK7NGgrmXIvNnzvJaM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA5OWUxNjRlLTNlMmUtNDVhMS05YmEwLTQzZTAyN2I4ZWQxNy5qcGc=",
  },
  {
    id: 7,
    title: "Morbius",
    description: "It's morbing time. So bad it's good.",
    poster: "https://resizing.flixster.com/jhGVrotRTj9pPUziZ1QNhFCGfQU=/206x305/v2/https://resizing.flixster.com/QdgkXoEVBbSPngYBIEQorVt3QuY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg3OWQyOGE0LThmODItNDczNS04MDhjLThiZjQxYzM0YzYwZS5qcGc=",
  },
  {
    id: 8,
    title: "Kraven the Hunter",
    description: "So bad it's good. A Sony gem.",
    poster: "https://resizing.flixster.com/p_50keg9Yv1yj9BAjTTvCpkcsLQ=/206x305/v2/https://resizing.flixster.com/mnV6FHsn27VI6-Eb9oBXgjQ-UI4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZkODgxZmZjLWU4ODUtNGQ2ZS1iZDIxLWI0N2MwNzBiZWVhOC5qcGc=",
  },
  {
    id: 9,
    title: "Venom: The Last Dance",
    description: "The third Venom movie. Bad and barely good",
    poster: "https://resizing.flixster.com/Xb-LkBRpufz5gB0Jp6fBki-yWfs=/206x305/v2/https://resizing.flixster.com/7pW-Wl_tjIUnlcPkLYudVsZS-00=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkYTQyZjkxLWZjYzItNGM5Yy1hN2FiLTA0YWQwMTAzNjVmZC5qcGc=",
  },
  {
    id: 10,
    title: "Venom: Let There Be Carnage",
    description: "The second Venom movie. Bad but funny.",
    poster: "https://resizing.flixster.com/-Y1UtiBmMYjgeeMfWUSIDq6dej4=/206x305/v2/https://resizing.flixster.com/9ROAHiR8ML6DU3j7yfWypNy2NxU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYwZGZhODY3LTI2YzktNGVkYy05YWJlLTVmMGNmMTY2YWZhNS5qcGc=",
  },
  {
    id: 11,
    title: "Spider-Man 3",
    description: "Tobey Maguire's third Spider-man movie.",
    poster: "https://resizing.flixster.com/BtYcCLpD6319Mya6Y2pJwV14SNY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159366_p_v10_at.jpg",
  },
  {
    id: 12,
    title: "Batman & Robin",
    description: "Classic Arnold Schwarzenegger with Batman & Robin.",
    poster: "https://resizing.flixster.com/xJGyHeE3d1oWhg-DEEV4Yk9nVM4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19491_p_v8_al.jpg",
  },
  {
    id: 13,
    title: "Fantastic Four (2015)",
    description: "Fan4stic reboot that is so bad it's good.",
    poster: "https://resizing.flixster.com/u-vRV7GNlFBQjpI809gRt9c4_q8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854519_p_v13_ba.jpg",
  },
  {
    id: 14,
    title: "R.I.P.D.",
    description: "Ryan Reynolds and Jeff Bridges in a supernatural cop movie.",
    poster: "https://resizing.flixster.com/PJxDp4RI9g9K1D6S88i3pEOQE-c=/206x305/v2/https://resizing.flixster.com/hI4gi2cT2eWTvK4poD2fJze2Mo4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY3NzI2Yjc5LTAxNjEtNGE0Mi04Zjc1LWYwODU0NTQyYzJiZi5qcGc=",
  },
  {
    id: 15,
    title: "Green Lantern",
    description: "Another bad movie by Ryan Reynold.",
    poster: "https://resizing.flixster.com/g0kD-A9-1-KPqhnCcEjoOedICBk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8176346_p_v8_ai.jpg",
  },
  {
    id: 16,
    title: "Daredevil (2003)",
    description: "So bad it's good. A classic early 2000s superhero movie.",
    poster: "https://resizing.flixster.com/9CkZGkq8UH3lvToli1IKhgVQc-Q=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31328_p_v10_aa.jpg",
  },
  {
    id: 17,
    title: "X-Men Origins: Wolverine",
    description: "Deadpool's first appearance in a bad movie.",
    poster: "https://resizing.flixster.com/IM-zvJfejSJ-e9zpNh3_xPDbX50=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p174924_p_v8_an.jpg",
  },
  {
    id: 18,
    title: "Masters of the Universe",
    description: "Dolph Lundgren’s He-Man. So bad it's good.",
    poster: "https://resizing.flixster.com/CmefM0IvobPVqYGyJi6Gx7Dv27s=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10248_p_v8_aj.jpg",
  },
  {
    id: 19,
    title: "Howard the Duck",
    description: "So bad it's good. A cult classic.",
    poster: "https://resizing.flixster.com/hFtCGTdq38etM2EZRkN5WgTeYPc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9432_p_v8_af.jpg",
  },
  {
    id: 20,
    title: "Catwoman",
    description: "So bad it's good. A classic early 2000s superhero movie.",
    poster: "https://resizing.flixster.com/gCrZKEEQh_CwMKseH0g2I5T7TKQ=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p34578_p_v13_ab.jpg",
  },
   {
    id: 21,
    title: "Ghost Rider",
    description: "So bad it's good. A classic Nicolas Cage movie.",
    poster: "https://resizing.flixster.com/amraerOYGrY5axKSlcJWYq4diSo=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p159753_p_v8_aq.jpg",
  },
  {
    id: 22,
    title: "Ghost Rider: Spirit of Vengeance",
    description: "The Second Ghost Rider. A classic Nicolas Cage movie.",
    poster: "https://resizing.flixster.com/7BJPm848O7Cm4Sliaw3z2pUxopg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8786426_p_v8_bh.jpg",
  },
   {
    id: 23,
    title: "The Amazing Spider-Man 2",
    description: "A mess of a movie that's very funny.",
    poster: "https://resizing.flixster.com/7TkmDMsD8_9ZWHvcbvKUU7ev3-8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9957538_p_v12_ad.jpg",
  },
];

const MovieGrid = () => (
  <section className="px-8 py-12 bg-[#F0F0F0]">
    <h2 className="text-3xl font-bold text-[#4DA96B] mb-6">Movie Library</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className="aspect-[2/3] w-full overflow-hidden bg-black">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-[#4DA96B]">
              {movie.title}
            </h3>
            <p className="text-xs text-gray-600">{movie.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default MovieGrid;