const requests = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: "fetchNetflixOriginals",
    isLargeRow: true,
  },
  {
    title: "Trending now",
    fetchUrl: "fetchTrending",
    isLargeRow: false,
  },
  {
    title: "Top Rated",
    fetchUrl: "fetchTopRated",
    isLargeRow: false,
  },
  {
    title: "Action Movies",
    fetchUrl: "fetchActionMovies",
    isLargeRow: false,
  },
  {
    title: "Comedy Movies",
    fetchUrl: "fetchComedyMovies",
    isLargeRow: false,
  },
  {
    title: "Horror Movies",
    fetchUrl: "fetchHorrorMovies",
    isLargeRow: false,
  },
  {
    title: "Romance Movies",
    fetchUrl: "fetchRomanceMovies",
    isLargeRow: false,
  },
  {
    title: "Documentaries",
    fetchUrl: "fetchDocumentaries",
    isLargeRow: false,
  },
];

export { requests };
