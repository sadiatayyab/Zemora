Zemora — Movie Discovery Website

Zemora is a modern, responsive front-end movie discovery website designed to help users discover movies, watch official trailers, view movie details, and organize movies into personal watchlists and favorites.

The project is built with HTML5, CSS3, and vanilla JavaScript, with Bootstrap 5.3.3 used for responsive layout and UI components.

Features

🎬 Featured movie hero section

🔎 Movie search

🎭 Genre-based filtering

↕️ Movie sorting by:

Popularity

Rating — High to Low

Rating — Low to High

Newest

Oldest

⭐ Movie ratings and metadata

▶️ Official movie trailer playback

📋 Movie details modal

➕ Personal watchlist

❤️ Favorites collection

💾 Persistent watchlist and favorites using browser localStorage

🌙 Dark mode

☀️ Light mode

📊 Collection statistics

📱 Responsive design for desktop, tablet, and mobile

🔔 Toast notifications for user actions

🖼️ Poster fallback when an external poster image fails to load

♿ Accessibility features such as keyboard interaction, focus states, ARIA labels, and a skip-to-content link

📌 Sticky navigation with active-section highlighting

Technologies Used

Frontend

HTML5

CSS3

JavaScript (ES6+)

Bootstrap 5.3.3

External Resources

Google Fonts — DM Sans and Outfit

TMDB image URLs for movie posters/backdrops

YouTube trailer embeds using the privacy-enhanced youtube-nocookie.com player

Project Structure

Zemora/
│
├── index.html      # Main website structure and UI
├── style.css       # Complete visual styling and responsive design
├── script.js       # Movie data, application logic and interactions
└── README.md       # Project documentation

How to Run

Zemora is a static front-end project and does not require a backend, database, Node.js installation, or build process.

Option 1 — Open Directly

Download or clone the project.

Keep index.html, style.css, and script.js in the same folder.

Open index.html in a modern web browser.

Option 2 — Use VS Code Live Server

Open the project folder in Visual Studio Code.

Install the Live Server extension.

Right-click index.html.

Select Open with Live Server.

The website will open in your browser.

How It Works

The movie collection is stored as a JavaScript array inside script.js. Each movie contains information such as:

ID

Title

Release year

Genre

Rating

Duration

Trailer ID

Poster URL

Backdrop URL

Description

Popularity value

The application filters and sorts this collection in the browser without requiring a server-side database.

Search and Filtering

Users can search the movie collection using either:

The search field in the navigation bar

The main movie search field

Search results update dynamically as the user types.

Movies can also be filtered by genre using the genre chips displayed in the Discover section.

Sorting

The Discover section supports multiple sorting options:

Popularity
Rating: High to Low
Rating: Low to High
Newest
Oldest

Watchlist and Favorites

Zemora provides two separate personal collections:

Watchlist

Users can save movies they want to watch later.

Favorites

Users can mark movies as favorites using the heart button.

Both collections are stored in browser localStorage, so saved movies remain available after refreshing or reopening the page in the same browser.

The application uses the following storage keys:

Zemora-theme
Zemora-watchlist
Zemora-favorites

Theme Switching

The website supports both dark and light themes.

The selected theme is saved in localStorage, allowing the user's preference to persist between visits.

Trailer Player

Movie trailers are opened in a Bootstrap modal and loaded through YouTube's privacy-enhanced embedded player.

The trailer URL is generated from each movie's YouTube trailer ID.

Example format:

https://www.youtube-nocookie.com/embed/TRAILER_ID

Movie Details

Selecting Details opens a modal containing:

Movie title

Release year

Genre

Duration

Rating

Description

Trailer button

Watchlist button

Favorites button

Responsive Design

The interface is designed to work across:

Desktop

Laptop

Tablet

Mobile devices

Bootstrap's responsive grid is combined with custom CSS media queries to adapt the layout to different screen sizes.

Accessibility

The project includes several accessibility-focused features:

Semantic HTML elements

ARIA labels

Keyboard-accessible movie poster interactions

Visible focus states

Skip-to-content link

Accessible buttons and form controls

Live result-count updates

Alternative text for movie posters

Reduced reliance on mouse-only interactions

Error Handling

Zemora includes client-side handling for common failures.

If a movie poster cannot be loaded from its external image URL, JavaScript generates a fallback SVG poster based on the movie's genre and information.

If browser storage is unavailable, the application displays a warning notification rather than crashing.

If a trailer cannot be generated or played, the application displays a warning message.

Data and External Dependencies

This project does not contain a backend database or external movie API integration.

The movie data is currently stored directly in script.js.

Movie poster and backdrop images are loaded from TMDB image URLs, while trailers are embedded from YouTube. Therefore, an internet connection may be required for external images, fonts, Bootstrap CDN resources, and trailers to load correctly.

Customization

Add a New Movie

Open script.js and add another movie object to the movies array.

Example:

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

Make sure the movie ID is unique.

Change the Website Theme

Most colors and visual variables are defined near the beginning of style.css using CSS custom properties.

The project includes separate variables for:

Dark theme

Light theme

Accent colors

Text colors

Backgrounds

Borders

Shadows

Focus states

Browser Compatibility

Zemora is intended for modern browsers that support:

ES6 JavaScript

CSS custom properties

CSS Grid/Flexbox

localStorage

Modern DOM APIs

Recommended browsers include:

Google Chrome

Microsoft Edge

Mozilla Firefox

Safari

Limitations

Movie information is currently static.

There is no backend database.

There is no user authentication system.

Watchlists and favorites are stored locally in the browser.

Movie images depend on external TMDB image URLs.

Trailer playback depends on YouTube availability and embedding permissions.

The project does not currently provide real-time movie data or personalized recommendations.

Future Enhancements

Possible improvements include:

Integration with a live movie API

User authentication

Cloud-synchronized watchlists

Personalized movie recommendations

Pagination or infinite scrolling

Advanced filters such as language, runtime, and release date

Movie cast and crew information

Multiple streaming-provider links

User reviews and ratings

Backend database integration

Progressive Web App (PWA) support

Credits

Bootstrap

Used for responsive layout, navigation, modals, buttons, and other interface components.

Google Fonts

The project uses:

DM Sans

Outfit

TMDB

Movie poster and backdrop images are loaded from TMDB image URLs.

YouTube

Official movie trailers are embedded using YouTube's privacy-enhanced player.

License

This project is intended for educational and front-end development purposes.

Movie titles, posters, trailers, and related media belong to their respective copyright holders.