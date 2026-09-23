# 🎬 Zemora — Movie Discovery Website

> **Discover. Explore. Save. Watch.**

>Zemora is a modern, responsive movie discovery website built with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.3.3**. It allows users to explore movies, search and filter by genre, sort by ratings and release date, watch official trailers, view detailed movie information, and build personalized watchlists and favorites.

---

## ✨ Overview

Zemora was designed as a polished front-end experience rather than a simple movie listing page.

The application combines a modern cinematic interface with practical features such as:

* 🎬 Featured movie hero section
* 🔎 Real-time movie search
* 🎭 Genre-based discovery
* ↕️ Multiple sorting options
* ⭐ Ratings and movie metadata
* ▶️ Official trailer playback
* 📋 Detailed movie information
* ➕ Personal watchlist
* ❤️ Favorites collection
* 💾 Persistent browser storage
* 🌙 Dark mode
* ☀️ Light mode
* 📊 Collection statistics
* 🔔 Toast notifications
* 📱 Responsive layouts
* ♿ Accessibility-focused interactions
* 🖼️ Automatic poster fallback handling

---

## 🎥 Key Features

### 🔎 Smart Movie Discovery

Users can quickly find movies through:

* Navigation search
* Main discovery search
* Real-time filtering
* Genre chips
* Dynamic result counts

Search results update instantly without requiring a page reload.

### 🎭 Genre Filtering

Movies can be filtered using genre-based navigation, allowing users to quickly explore categories such as:

* Action
* Adventure
* Comedy
* Drama
* Horror
* Sci-Fi
* Thriller
* Romance

### ↕️ Flexible Sorting

The Discover section supports:

| Sorting Option       | Description                |
| -------------------- | -------------------------- |
| Popularity           | Most popular movies first  |
| Rating — High to Low | Highest-rated movies first |
| Rating — Low to High | Lowest-rated movies first  |
| Newest               | Latest releases first      |
| Oldest               | Earliest releases first    |

---

## ❤️ Personal Collections

Zemora provides two independent movie collections.

### ➕ Watchlist

Save movies that you want to watch later.

### ❤️ Favorites

Mark movies that you particularly like and want to keep in your personal collection.

Both collections persist between sessions using **browser localStorage**.

### Local Storage

Zemora uses:

```text
Zemora-theme
Zemora-watchlist
Zemora-favorites
```

This allows the application to remember:

* Theme preference
* Watchlist
* Favorite movies

even after refreshing or reopening the website.

---

## 🌙 Theme System

Zemora includes both:

**Dark Mode**

Designed around a cinematic viewing experience.

**Light Mode**

Provides a brighter alternative for users who prefer a lighter interface.

The selected theme is stored locally so the preference persists between visits.

---

## ▶️ Trailer Experience

Users can watch official movie trailers directly from the application.

Trailers are displayed inside a responsive Bootstrap modal and loaded through YouTube's privacy-enhanced player:

```text
youtube-nocookie.com
```

The trailer URL is dynamically generated from the movie's YouTube video ID.

---

## 📋 Movie Details

Each movie provides a dedicated details experience containing:

* 🎬 Movie title
* 📅 Release year
* 🎭 Genre
* ⏱️ Duration
* ⭐ Rating
* 📝 Description
* ▶️ Trailer action
* ➕ Watchlist action
* ❤️ Favorite action

This keeps the main discovery interface clean while allowing users to explore individual movies in more detail.

---

## 📊 Collection Statistics

Zemora provides collection-level statistics so users can quickly see information about their saved movies.

The interface dynamically reflects changes when movies are:

* Added to the watchlist
* Removed from the watchlist
* Added to favorites
* Removed from favorites

---

## 🖼️ Image Error Handling

External movie artwork can occasionally fail to load.

Instead of displaying a broken image, Zemora automatically generates a **fallback SVG poster** containing movie-related information.

This keeps the interface visually consistent even when external image resources are unavailable.

---

## ♿ Accessibility

Accessibility was considered throughout the interface.

The project includes:

* Semantic HTML
* ARIA labels
* Keyboard-accessible interactions
* Visible focus states
* Skip-to-content navigation
* Accessible buttons and form controls
* Alternative text for movie posters
* Live result-count updates
* Reduced dependence on mouse-only interactions

---

## 📱 Responsive Design

Zemora is designed for multiple screen sizes:

| Device      | Experience                           |
| ----------- | ------------------------------------ |
| 🖥️ Desktop | Full cinematic dashboard             |
| 💻 Laptop   | Adaptive multi-column layout         |
| 📱 Tablet   | Responsive content grid              |
| 📱 Mobile   | Mobile-friendly navigation and cards |

Bootstrap's responsive grid is combined with custom CSS media queries to provide adaptive layouts.

---

# 🛠️ Technologies Used

## Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge\&logo=bootstrap\&logoColor=white)

### Core Technologies

* **HTML5** — Semantic structure
* **CSS3** — Custom styling, responsive layouts, themes
* **JavaScript ES6+** — Application logic and DOM interactions
* **Bootstrap 5.3.3** — Responsive components and UI utilities
* **localStorage** — Client-side persistence

---

# 🧩 How the Application Works

The movie catalog is stored as a JavaScript array inside `script.js`.

Each movie object contains information such as:

```javascript
{
    id: 21,
    title: "Your Movie",
    year: 2025,
    genre: "Drama",
    rating: 8.2,
    duration: "2h 00m",
    trailer: "YOUTUBE_VIDEO_ID",
    poster: "POSTER_URL",
    backdrop: "BACKDROP_URL",
    description: "Short movie description.",
    popularity: 78,
    featured: false
}
```

The application processes this data directly in the browser.

There is no server-side database or backend API.

---

# 📂 Project Structure

```text
Zemora/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Responsibilities

| File         | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| `index.html` | Website structure and UI                             |
| `style.css`  | Visual design, themes and responsive styling         |
| `script.js`  | Movie data, filtering, sorting and application logic |
| `README.md`  | Project documentation                                |

---

# 🚀 Getting Started

Zemora is a static front-end application.

No backend, database, Node.js installation, or build process is required.

## Option 1 — Run Directly

### 1. Clone the repository

```bash
git clone https://github.com/sadiatayyab/Zemora.git
```

### 2. Open the project

```text
Zemora/
```

### 3. Launch

Open:

```text
index.html
```

in a modern web browser.

---

## Option 2 — VS Code Live Server

For the best development experience:

1. Open the project in **Visual Studio Code**
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Select **Open with Live Server**
5. The website will launch in your browser

---

# 🌐 External Resources

Zemora uses several external resources:

### Google Fonts

* DM Sans
* Outfit

### TMDB

Movie posters and backdrop artwork are loaded using TMDB image URLs.

### YouTube

Official movie trailers are embedded using YouTube's privacy-enhanced player.

### Bootstrap CDN

Bootstrap 5.3.3 is loaded through a CDN.

> An internet connection may therefore be required for fonts, Bootstrap resources, movie artwork, and trailers.

---

# ⚠️ Current Limitations

Zemora is intentionally implemented as a front-end project, so it currently has some limitations:

* Movie information is static
* No backend server
* No database
* No authentication
* Watchlists are browser-specific
* Favorites are browser-specific
* Movie artwork depends on external resources
* Trailer availability depends on YouTube
* No real-time movie data
* No personalized recommendation engine

---

# 🔮 Future Enhancements

The architecture can be extended with:

### 🎬 Movie Data

* Live movie API integration
* Real-time movie releases
* Cast and crew information
* Movie recommendations
* Advanced discovery filters

### 👤 User Accounts

* Authentication
* Cloud-synchronized watchlists
* Cross-device favorites
* User profiles

### ⭐ Social Features

* User reviews
* Personal ratings
* Movie discussions
* Shared watchlists

### 📺 Streaming Discovery

* Streaming-provider availability
* Watch-provider links
* Region-based availability

### 🚀 Platform Improvements

* Pagination
* Infinite scrolling
* Progressive Web App support
* Backend database integration
* Personalized recommendation system

---

# 🧠 What I Learned

Building Zemora provided practical experience with:

* DOM manipulation
* JavaScript event handling
* Array filtering and sorting
* Dynamic UI rendering
* Modal-based interfaces
* Browser localStorage
* Responsive web design
* CSS custom properties
* Dark/light theme systems
* Error handling
* Accessibility
* External media integration
* Front-end application architecture

---

# 🎯 Project Goals

Zemora was developed to demonstrate how a modern movie discovery interface can be built using **core front-end technologies without relying on a JavaScript framework or backend**.

The project focuses on:

> **Clean UI + Interactive JavaScript + Responsive Design + Practical UX**

---

# 📌 Project Status

**Status:** ✅ Completed

**Type:** Front-End Web Application

**Architecture:** Static Client-Side Application

**Backend:** None

**Database:** None

---

# 👩‍💻 Author

### Sadia Tayyab


## 📄 License

This project is intended for **educational and front-end development purposes**.

Movie titles, posters, trailers, artwork, and related media belong to their respective copyright holders.

---

⭐ **If you found Zemora interesting, consider giving the repository a star!**
