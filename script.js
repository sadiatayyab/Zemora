"use strict";

const movies = [
    { 
        id: 1, 
        title: "Dune: Part Two", 
        year: 2024, 
        genre: "Adventure", 
        rating: 8.5, 
        duration: "2h 46m", 
        trailer: "U2Qp5pL3ovA", 
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", 
        backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", 
        description: "Paul Atreides joins Chani and the Fremen on a sweeping journey across Arrakis, where destiny and revenge collide.",
        popularity: 100, 
        featured: true 
    },
    { 
        id: 2, 
        title: "Inception", 
        year: 2010, 
        genre: "Sci-Fi", 
        rating: 8.8, 
        duration: "2h 28m", 
        trailer: "YoHD9XEInc0", 
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", 
        description: "A skilled thief enters dreams to plant an idea, but the deeper he goes, the more reality begins to slip.", 
        popularity: 98, 
        featured: false 
    },
    { 
        id: 3, 
        title: "Interstellar", 
        year: 2014, 
        genre: "Sci-Fi", 
        rating: 8.7, 
        duration: "2h 49m", 
        trailer: "zSWdZVtXT7E", 
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", 
        description: "A team of explorers travels beyond our galaxy to search for a future for humanity.", 
        popularity: 96, 
        featured: false 
    },
    { 
        id: 4, 
        title: "The Dark Knight", 
        year: 2008, 
        genre: "Action", 
        rating: 9.0, 
        duration: "2h 32m", 
        trailer: "EXeTwQWrcwY", 
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
        description: "Batman faces the Joker, a criminal mastermind determined to push Gotham into chaos.", 
        popularity: 95, 
        featured: false 
    },
    { 
        id: 5, 
        title: "Spider-Man: Across the Spider-Verse", 
        year: 2023, 
        genre: "Animation", 
        rating: 8.6, 
        duration: "2h 20m", 
        trailer: "cqGjhVJWtEg", 
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", 
        description: "Miles Morales leaps across the multiverse and meets a team of Spider-People protecting its future.", 
        popularity: 94, featured: false 
    },
    { 
        id: 6, 
        title: "Everything Everywhere All at Once", 
        year: 2022, 
        genre: "Adventure", 
        rating: 7.8, 
        duration: "2h 19m", 
        trailer: "wxN1T1uxQ2g", 
        poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", 
        description: "An exhausted laundromat owner discovers she may be the only person who can save the multiverse.", 
        popularity: 93, 
        featured: false 
    },
    { 
        id: 7, 
        title: "Barbie", 
        year: 2023, 
        genre: "Comedy", 
        rating: 6.8, 
        duration: "1h 54m", 
        trailer: "pBk4NYhWNMM", 
        poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", 
        description: "Barbie leaves her picture-perfect world on a colorful journey of self-discovery.", 
        popularity: 92, 
        featured: false 
    },
    { 
        id: 8, 
        title: "Oppenheimer", 
        year: 2023, 
        genre: "Drama", 
        rating: 8.6, 
        duration: "3h 00m", 
        trailer: "uYPbbksJxIg", 
        poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg", 
        description: "The life of physicist J. Robert Oppenheimer unfolds against the creation of the atomic bomb.", 
        popularity: 91, 
        featured: false 
    },
    { 
        id: 9, 
        title: "The Batman", 
        year: 2022, 
        genre: "Action", 
        rating: 7.8, 
        duration: "2h 56m", 
        trailer: "mqqft2x_Aa4", 
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", 
        description: "A young Batman follows a trail of clues left by a killer targeting Gotham's powerful elite.", 
        popularity: 90, 
        featured: false 
    },
    { 
        id: 10, 
        title: "Get Out", 
        year: 2017, 
        genre: "Horror", 
        rating: 7.8, 
        duration: "1h 44m", 
        trailer: "DzfpyUB60YY", 
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", 
        description: "A weekend visit with his girlfriend's family turns into a frightening discovery for a young photographer.", 
        popularity: 89, 
        featured: false 
    },
    { 
        id: 11, 
        title: "Whiplash", 
        year: 2014, 
        genre: "Drama", 
        rating: 8.5, 
        duration: "1h 47m", 
        trailer: "7d_jQycdQGo", 
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", 
        description: "A young drummer and his demanding instructor clash in a relentless pursuit of musical perfection.", 
        popularity: 88, 
        featured: false 
    },
    { 
        id: 12, 
        title: "La La Land", 
        year: 2016, 
        genre: "Romance", 
        rating: 8.0, 
        duration: "2h 08m", 
        trailer: "0pdqf4P9MB8", 
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", 
        description: "Two artists fall in love as ambition pulls them toward different futures in Los Angeles.", 
        popularity: 87, 
        featured: false 
    },
    { 
        id: 13, 
        title: "Parasite", 
        year: 2019, 
        genre: "Thriller", 
        rating: 8.5, 
        duration: "2h 12m", 
        trailer: "5xH0HfJHsaY", 
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", 
        description: "A struggling family enters the lives of a wealthy household in a sharp, surprising social thriller.", 
        popularity: 86, 
        featured: false 
    },
    { 
        id: 14, 
        title: "The Grand Budapest Hotel", 
        year: 2014, 
        genre: "Comedy", 
        rating: 8.1, 
        duration: "1h 39m", 
        trailer: "1Fg5iWmQjwk", 
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg", 
        description: "A devoted concierge and his young protégé race across Europe after a priceless painting disappears.", 
        popularity: 85, 
        featured: false 
    },
    { 
        id: 15, 
        title: "The Conjuring", 
        year: 2013, 
        genre: "Horror", 
        rating: 7.5, 
        duration: "1h 52m", 
        trailer: "k10ETZ41q5o", 
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", 
        description: "Paranormal investigators help a family facing a terrifying presence in their secluded farmhouse.", 
        popularity: 84, 
        featured: false 
    },
    { 
        id: 16, 
        title: "Coco", 
        year: 2017, 
        genre: "Animation", 
        rating: 8.4, 
        duration: "1h 45m", 
        trailer: "Rvr68u6k5sI", 
        poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", 
        description: "A young musician journeys into the Land of the Dead to uncover the story of his family.", 
        popularity: 83, 
        featured: false 
    },
    { 
        id: 17, 
        title: "Soul", 
        year: 2020, 
        genre: "Animation", 
        rating: 8.0, 
        duration: "1h 40m", 
        trailer: "xOsLIiBStEs", 
        poster: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", 
        description: "A jazz musician's unexpected journey leads him to rethink what makes a life meaningful.", 
        popularity: 82, 
        featured: false 
    },
    { 
        id: 18, 
        title: "Knives Out", 
        year: 2019, 
        genre: "Thriller", 
        rating: 7.9, 
        duration: "2h 10m", 
        trailer: "qGqiHJTsRkQ", 
        poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg", 
        description: "A clever detective investigates the death of a novelist in a house full of suspicious relatives.", 
        popularity: 81, 
        featured: false 
    },
    { 
        id: 19, 
        title: "Top Gun: Maverick", 
        year: 2022, 
        genre: "Action", 
        rating: 8.2, 
        duration: "2h 10m", 
        trailer: "giXco2jaZ_4", 
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", 
        description: "An expert pilot returns to train a new generation of aviators for a dangerous mission.", 
        popularity: 80, 
        featured: false 
    },
    { 
        id: 20, title: "The Matrix", 
        year: 1999, 
        genre: "Sci-Fi", 
        rating: 8.7, 
        duration: "2h 16m", 
        trailer: "vKQi3bBA1y8", 
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", 
        description: "A computer hacker discovers that his world is a simulation and joins a rebellion against its creators.", 
        popularity: 79, 
        featured: false 
    }
];

const storageKeys = {
    theme: "Zemora-theme",
    watchlist: "Zemora-watchlist",
    favorites: "Zemora-favorites"
};

const movieById = new Map(movies.map(movie => [movie.id, movie]));
let pendingTrailerUrl = "";

function loadSavedIds(storageKey) {
    try {
        const storedValue = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (!Array.isArray(storedValue)) return new Set();
        return new Set(storedValue.map(Number).filter(id => movieById.has(id)));
    } catch {
        return new Set();
    }
}

function saveIds(storageKey, idSet) {
    try {
        localStorage.setItem(storageKey, JSON.stringify([...idSet]));
        return true;
    } catch {
        return false;
    }
}

function loadTheme() {
    try {
        return localStorage.getItem(storageKeys.theme) === "light" ? "light" : "dark";
    } catch {
        return "dark";
    }
}

const watchlist = loadSavedIds(storageKeys.watchlist);
const favorites = loadSavedIds(storageKeys.favorites);
const state = { query: "", genre: "All", sort: "popularity" };

const elements = {
    themeToggle: document.getElementById("themeToggle"),
    navSearchForm: document.getElementById("navSearchForm"),
    navSearch: document.getElementById("navSearch"),
    movieSearch: document.getElementById("movieSearch"),
    clearSearch: document.getElementById("clearSearch"),
    sortSelect: document.getElementById("sortSelect"),
    genreFilters: document.getElementById("genreFilters"),
    resultsCount: document.getElementById("resultsCount"),
    movieGrid: document.getElementById("movieGrid"),
    watchlistGrid: document.getElementById("watchlistGrid"),
    favoritesGrid: document.getElementById("favoritesGrid"),
    movieModal: document.getElementById("movieModal"),
    playerModal: document.getElementById("playerModal"),
    playerFrame: document.getElementById("playerFrame"),
    playerLoader: document.getElementById("playerLoader"),
    toastContainer: document.getElementById("toastContainer")
};

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[character]));
}

function setActiveNavigation(sectionName) {
    document.querySelectorAll(".main-nav .nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.nav === sectionName);
    });
}

function closeMobileNavigation() {
    const navigation = document.getElementById("primaryNavigation");
    if (navigation.classList.contains("show") && window.bootstrap?.Collapse) {
        bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false }).hide();
    }
}

function makeFallbackPoster(movie) {
    const palettes = {
        Action: ["#151a35", "#b54d4c"], Adventure: ["#262035", "#ae7657"], Animation: ["#142d43", "#3d8caa"],
        Comedy: ["#3c2440", "#d06b70"], Drama: ["#192638", "#64819b"], Horror: ["#111927", "#77404b"],
        Romance: ["#39233a", "#b86d87"], "Sci-Fi": ["#12263c", "#597eac"], Thriller: ["#172a2d", "#749188"]
    };
    const [startColor, endColor] = palettes[movie.genre] || palettes.Drama;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${startColor}"/><stop offset="100%" stop-color="${endColor}"/></linearGradient></defs><rect width="600" height="900" fill="url(#g)"/><circle cx="450" cy="250" r="180" fill="#fff" fill-opacity=".08"/><text x="48" y="690" fill="#fff" font-family="Arial" font-size="46" font-weight="700">${escapeHtml(movie.title)}</text><text x="48" y="790" fill="#fff" font-family="Arial" font-size="24">${escapeHtml(movie.genre)} · ${movie.year}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function handlePosterError(event) {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.classList.contains("movie-poster") || image.dataset.fallbackApplied === "true") return;
    const movie = movieById.get(Number(image.dataset.movieId));
    if (!movie) return;
    image.dataset.fallbackApplied = "true";
    image.src = makeFallbackPoster(movie);
}

function applyTheme(theme, shouldSave = false) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.setAttribute("data-bs-theme", theme);
    elements.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    elements.themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (!shouldSave) return;
    try { localStorage.setItem(storageKeys.theme, theme); }
    catch { showToast("Your browser could not save the theme preference.", "warning"); }
}

function renderHero() {
    const featuredMovie = movies.find(movie => movie.featured) || movies[0];
    document.getElementById("heroTitle").textContent = featuredMovie.title;
    document.getElementById("heroDescription").textContent = featuredMovie.description;
    document.getElementById("heroRating").textContent = `★ ${featuredMovie.rating.toFixed(1)} / 10`;
    document.getElementById("heroYear").textContent = featuredMovie.year;
    document.getElementById("heroGenre").textContent = featuredMovie.genre;
    document.getElementById("heroDuration").textContent = featuredMovie.duration;
    document.getElementById("heroPosition").textContent = `01 / ${String(movies.length).padStart(2, "0")}`;

    const heroPoster = document.getElementById("heroPoster");
    heroPoster.dataset.movieId = featuredMovie.id;
    heroPoster.alt = `Poster for ${featuredMovie.title}`;
    heroPoster.src = featuredMovie.poster;

    document.getElementById("heroBackdrop").style.backgroundImage = `linear-gradient(90deg, rgba(7,10,17,.97), rgba(7,10,17,.76) 48%, rgba(7,10,17,.28)), url("${featuredMovie.backdrop || featuredMovie.poster}")`;
    ["heroPlayButton", "heroPosterPlay", "heroWatchlistButton", "heroDetailsButton"].forEach(id => {
        document.getElementById(id).dataset.id = featuredMovie.id;
    });
}

function renderGenreFilters() {
    const genres = ["All", ...new Set(movies.map(movie => movie.genre))].sort((a, b) => a === "All" ? -1 : a.localeCompare(b));
    elements.genreFilters.innerHTML = genres.map(genre => {
        const count = genre === "All" ? movies.length : movies.filter(movie => movie.genre === genre).length;
        return `<button class="genre-chip" type="button" data-genre="${escapeHtml(genre)}" aria-pressed="false">${escapeHtml(genre)} <span class="genre-chip-count">${count}</span></button>`;
    }).join("");
    updateGenreButtons();
}

function updateGenreButtons() {
    elements.genreFilters.querySelectorAll("[data-genre]").forEach(button => {
        const selected = button.dataset.genre === state.genre;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

function createMovieCard(movie) {
    const title = escapeHtml(movie.title);
    return `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <article class="movie-card">
                <div class="poster-frame" data-movie-id="${movie.id}" role="button" tabindex="0" aria-label="Play trailer for ${title}">
                    <img class="movie-poster" src="${escapeHtml(movie.poster)}" alt="Poster for ${title}" data-movie-id="${movie.id}" width="320" height="480" loading="lazy" decoding="async">
                    <div class="poster-scrim" aria-hidden="true"></div>
                    <span class="rating-pill">★ ${movie.rating.toFixed(1)}</span>
                    <button class="favorite-button" type="button" data-action="favorite" data-id="${movie.id}" aria-label="Add ${title} to favorites" aria-pressed="false">♥</button>
                    <button class="poster-play" type="button" data-action="play" data-id="${movie.id}" aria-label="Play trailer for ${title}"><span class="play-orb"><span class="play-triangle"></span></span></button>
                    <span class="poster-genre">${escapeHtml(movie.genre)}</span>
                </div>
                <div class="movie-info">
                    <div class="movie-title-row"><h3 class="movie-title">${title}</h3><span class="movie-year">${movie.year}</span></div>
                    <p class="movie-subtitle">${escapeHtml(movie.genre)}<span class="dot">•</span>${escapeHtml(movie.duration)}</p>
                    <p class="movie-description">${escapeHtml(movie.description)}</p>
                    <div class="movie-actions">
                        <button class="btn btn-play" type="button" data-action="play" data-id="${movie.id}"><span class="play-triangle light"></span> Play</button>
                        <div class="secondary-actions">
                            <button class="btn btn-detail" type="button" data-action="details" data-id="${movie.id}">Details ↗</button>
                            <button class="btn btn-save" type="button" data-action="watchlist" data-id="${movie.id}" aria-pressed="false"><span class="action-symbol">+</span><span class="action-label">Save</span></button>
                        </div>
                    </div>
                </div>
            </article>
        </div>`;
}

function sortMovies(movieList) {
    const sortedMovies = [...movieList];
    const byPopularity = (a, b) => b.popularity - a.popularity;
    if (state.sort === "rating-high") sortedMovies.sort((a, b) => b.rating - a.rating || byPopularity(a, b));
    else if (state.sort === "rating-low") sortedMovies.sort((a, b) => a.rating - b.rating || byPopularity(a, b));
    else if (state.sort === "newest") sortedMovies.sort((a, b) => b.year - a.year || byPopularity(a, b));
    else if (state.sort === "oldest") sortedMovies.sort((a, b) => a.year - b.year || byPopularity(a, b));
    else sortedMovies.sort(byPopularity);
    return sortedMovies;
}

function getVisibleMovies() {
    return sortMovies(movies.filter(movie => movie.title.toLowerCase().includes(state.query) && (state.genre === "All" || movie.genre === state.genre)));
}

function createEmptyState(icon, title, message, buttonHtml) {
    return `<div class="col-12"><div class="empty-state" role="status"><span class="empty-icon">${icon}</span><h3>${title}</h3><p>${message}</p>${buttonHtml}</div></div>`;
}

function renderDiscover() {
    const visibleMovies = getVisibleMovies();
    elements.resultsCount.textContent = `${visibleMovies.length} result${visibleMovies.length === 1 ? "" : "s"} found`;
    elements.movieGrid.innerHTML = visibleMovies.length
        ? visibleMovies.map(createMovieCard).join("")
        : createEmptyState("⌕", "No movies found", "Try another title or choose a different genre.", '<button class="btn btn-brand" type="button" data-action="reset-filters">Clear Filters</button>');
    elements.clearSearch.hidden = elements.movieSearch.value.length === 0;
    syncActionButtons();
}

function renderSavedCollection(grid, savedIds, collectionName) {
    const savedMovies = [...savedIds].reverse().map(id => movieById.get(id)).filter(Boolean);
    if (savedMovies.length) {
        grid.innerHTML = savedMovies.map(createMovieCard).join("");
        return;
    }
    grid.innerHTML = collectionName === "watchlist"
        ? createEmptyState("▣", "Your watchlist is empty.", "Discover a movie and save it for later.", '<a class="btn btn-brand" href="#discover" data-nav="discover">Browse Movies</a>')
        : createEmptyState("♡", "No favorites yet.", "Tap the heart on any movie to keep it here.", '<a class="btn btn-brand" href="#discover" data-nav="discover">Find a Favorite</a>');
}

function renderSavedCollections() {
    renderSavedCollection(elements.watchlistGrid, watchlist, "watchlist");
    renderSavedCollection(elements.favoritesGrid, favorites, "favorites");
    document.getElementById("watchlistCount").textContent = watchlist.size;
    document.getElementById("favoritesCount").textContent = favorites.size;
    syncActionButtons();
}

function updateStatistics() {
    const average = movies.reduce((total, movie) => total + movie.rating, 0) / movies.length;
    document.getElementById("statMovies").textContent = movies.length;
    document.getElementById("statGenres").textContent = new Set(movies.map(movie => movie.genre)).size;
    document.getElementById("statRating").textContent = `${average.toFixed(1)}/10`;
    document.getElementById("statSaved").textContent = watchlist.size;
    document.getElementById("navWatchlistCount").textContent = watchlist.size;
    document.getElementById("navFavoritesCount").textContent = favorites.size;
}

function syncActionButtons() {
    document.querySelectorAll('[data-action="watchlist"][data-id]').forEach(button => {
        const movie = movieById.get(Number(button.dataset.id));
        if (!movie) return;
        const saved = watchlist.has(movie.id);
        button.classList.toggle("is-active", saved);
        button.setAttribute("aria-pressed", String(saved));
        const symbol = button.querySelector(".action-symbol");
        const label = button.querySelector(".action-label");
        if (symbol) symbol.textContent = saved ? "✓" : "+";
        if (label) label.textContent = saved ? "Saved" : button.classList.contains("hero-save") ? "Watchlist" : button.classList.contains("modal-save") ? "Add to Watchlist" : "Save";
    });

    document.querySelectorAll('[data-action="favorite"][data-id]').forEach(button => {
        const movie = movieById.get(Number(button.dataset.id));
        if (!movie) return;
        const saved = favorites.has(movie.id);
        button.classList.toggle("is-active", saved);
        button.setAttribute("aria-pressed", String(saved));
        const label = button.querySelector(".action-label");
        if (label) label.textContent = saved ? "Remove Favorite" : "Add to Favorites";
    });
}

function openMovieDetails(movieId) {
    const movie = movieById.get(movieId);
    if (!movie || !window.bootstrap?.Modal) return;
    document.getElementById("modalTitle").textContent = movie.title;
    document.getElementById("modalYear").textContent = movie.year;
    document.getElementById("modalGenre").textContent = movie.genre;
    document.getElementById("modalDuration").textContent = movie.duration;
    document.getElementById("modalRating").textContent = `★ ${movie.rating.toFixed(1)} / 10`;
    document.getElementById("modalDescription").textContent = movie.description;
    const poster = document.getElementById("modalPoster");
    poster.dataset.movieId = movie.id;
    poster.dataset.fallbackApplied = "false";
    poster.alt = `Poster for ${movie.title}`;
    poster.src = movie.poster;
    ["modalPlayButton", "modalPosterPlay", "modalWatchlistButton", "modalFavoriteButton"].forEach(id => {
        document.getElementById(id).dataset.id = movie.id;
    });
    syncActionButtons();
    bootstrap.Modal.getOrCreateInstance(elements.movieModal).show();
}

function trailerUrl(trailerId) {
    return /^[A-Za-z0-9_-]{11}$/.test(trailerId)
        ? `https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
        : "";
}

function openPlayer(movieId) {
    const movie = movieById.get(movieId);
    const url = movie ? trailerUrl(movie.trailer) : "";
    if (!movie || !url || !window.bootstrap?.Modal) {
        showToast("This trailer cannot be played right now.", "warning");
        return;
    }

    pendingTrailerUrl = url;
    document.getElementById("playerTitle").textContent = movie.title;
    document.getElementById("playerFacts").textContent = `${movie.year} · ${movie.genre} · ${movie.duration} · ★ ${movie.rating.toFixed(1)}`;
    elements.playerFrame.title = `Official trailer for ${movie.title}`;
    elements.playerLoader.classList.remove("is-hidden");

    const detailsOpen = elements.movieModal.classList.contains("show");
    const showPlayer = () => bootstrap.Modal.getOrCreateInstance(elements.playerModal).show();
    if (detailsOpen) {
        elements.movieModal.addEventListener("hidden.bs.modal", showPlayer, { once: true });
        bootstrap.Modal.getOrCreateInstance(elements.movieModal).hide();
    } else {
        showPlayer();
    }
}

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast feedback-toast toast-${type}`;
    toast.setAttribute("role", "status");
    toast.innerHTML = `<div class="d-flex align-items-center"><span class="toast-symbol">${type === "favorite" ? "♥" : type === "warning" ? "!" : "✓"}</span><div class="toast-body"></div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close notification"></button></div>`;
    toast.querySelector(".toast-body").textContent = message;
    elements.toastContainer.appendChild(toast);
    if (window.bootstrap?.Toast) {
        toast.addEventListener("hidden.bs.toast", () => toast.remove());
        bootstrap.Toast.getOrCreateInstance(toast, { delay: 3200 }).show();
    } else {
        toast.classList.add("show");
        setTimeout(() => toast.remove(), 3200);
    }
}

function toggleWatchlist(movieId) {
    const movie = movieById.get(movieId);
    if (!movie) return;
    const wasSaved = watchlist.has(movieId);
    wasSaved ? watchlist.delete(movieId) : watchlist.add(movieId);
    const stored = saveIds(storageKeys.watchlist, watchlist);
    renderSavedCollections();
    updateStatistics();
    showToast(stored ? `${movie.title} ${wasSaved ? "removed from your watchlist." : "added to your watchlist."}` : "Watchlist changed, but browser storage is unavailable.", stored ? "success" : "warning");
}

function toggleFavorite(movieId) {
    const movie = movieById.get(movieId);
    if (!movie) return;
    const wasSaved = favorites.has(movieId);
    wasSaved ? favorites.delete(movieId) : favorites.add(movieId);
    const stored = saveIds(storageKeys.favorites, favorites);
    renderSavedCollections();
    updateStatistics();
    showToast(stored ? `${movie.title} ${wasSaved ? "removed from favorites." : "added to favorites."}` : "Favorites changed, but browser storage is unavailable.", stored ? "favorite" : "warning");
}

function updateSearch(value) {
    state.query = value.trim().toLowerCase();
    elements.movieSearch.value = value;
    elements.navSearch.value = value;
    renderDiscover();
}

function resetFilters() {
    state.genre = "All";
    state.sort = "popularity";
    elements.sortSelect.value = "popularity";
    updateSearch("");
    updateGenreButtons();
}

function setUpEvents() {
    document.addEventListener("error", handlePosterError, true);
    elements.themeToggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true));
    elements.movieSearch.addEventListener("input", event => updateSearch(event.target.value));
    elements.navSearch.addEventListener("input", event => updateSearch(event.target.value));
    elements.navSearchForm.addEventListener("submit", event => {
        event.preventDefault();
        document.getElementById("discover").scrollIntoView();
        setActiveNavigation("discover");
        closeMobileNavigation();
    });
    elements.clearSearch.addEventListener("click", () => { updateSearch(""); elements.movieSearch.focus(); });
    elements.sortSelect.addEventListener("change", event => { state.sort = event.target.value; renderDiscover(); });
    elements.genreFilters.addEventListener("click", event => {
        const button = event.target.closest("[data-genre]");
        if (!button) return;
        state.genre = button.dataset.genre;
        updateGenreButtons();
        renderDiscover();
        setActiveNavigation("genres");
    });

    document.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");
        if (button) {
            const movieId = Number(button.dataset.id);
            if (button.dataset.action === "play") openPlayer(movieId);
            if (button.dataset.action === "details") openMovieDetails(movieId);
            if (button.dataset.action === "watchlist") toggleWatchlist(movieId);
            if (button.dataset.action === "favorite") toggleFavorite(movieId);
            if (button.dataset.action === "reset-filters") resetFilters();
            return;
        }

        const poster = event.target.closest(".poster-frame");
        if (poster) openPlayer(Number(poster.dataset.movieId));
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "Enter") return;
        const poster = event.target.closest?.(".poster-frame");
        if (poster) openPlayer(Number(poster.dataset.movieId));
    });

    elements.playerModal.addEventListener("shown.bs.modal", () => {
        elements.playerFrame.src = pendingTrailerUrl;
    });
    elements.playerFrame.addEventListener("load", () => {
        if (elements.playerFrame.src) elements.playerLoader.classList.add("is-hidden");
    });
    elements.playerModal.addEventListener("hidden.bs.modal", () => {
        elements.playerFrame.src = "";
        elements.playerLoader.classList.remove("is-hidden");
    });

    document.querySelectorAll("a[data-nav]").forEach(link => link.addEventListener("click", () => { setActiveNavigation(link.dataset.nav); closeMobileNavigation(); }));
    document.querySelectorAll("[data-footer-genre]").forEach(link => link.addEventListener("click", () => {
        state.genre = link.dataset.footerGenre;
        updateGenreButtons();
        renderDiscover();
        setActiveNavigation("genres");
    }));
}

function initializeApp() {
    setUpEvents();
    applyTheme(loadTheme());
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    renderHero();
    renderGenreFilters();
    renderDiscover();
    renderSavedCollections();
    updateStatistics();
    syncActionButtons();
}

initializeApp();