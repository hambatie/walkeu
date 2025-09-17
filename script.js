const route = [
  {
    country: "Belgium",
    flag: "🇧🇪",
    landmark: "Atomium launch pad",
    symbol: "🧇",
    description:
      "We boot up in Brussels with waffles, neon sneakers, and the first Solana-fueled strides of the $walkeu highway."
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    landmark: "Kinderdijk windmills",
    symbol: "🌷",
    description:
      "Skating past canals and spinning turbines, the Dutch pit stop powers our memes with tulip-bright vibes."
  },
  {
    country: "Luxembourg",
    flag: "🇱🇺",
    landmark: "Fortress old town",
    symbol: "🛡️",
    description:
      "Cliffside fortifications echo every Solana transaction—compact, fortified, and fast."
  },
  {
    country: "France",
    flag: "🇫🇷",
    landmark: "Eiffel Tower",
    symbol: "🗼",
    description:
      "Parisian lights turn the highway chic as croissant energy fuels the next leg east."
  },
  {
    country: "Monaco",
    flag: "🇲🇨",
    landmark: "Monte Carlo strip",
    symbol: "🎰",
    description:
      "High-roller memes and hairpin turns keep the pace slick around the principality."
  },
  {
    country: "Andorra",
    flag: "🇦🇩",
    landmark: "Pyrenees passes",
    symbol: "⛰️",
    description:
      "Snowy ridges and duty-free spirits recharge the caravan above the clouds."
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    landmark: "Sagrada Família",
    symbol: "💃",
    description:
      "Tapas, flamenco, and Gaudí geometry stamp our ledgers with Iberian style."
  },
  {
    country: "Portugal",
    flag: "🇵🇹",
    landmark: "Belém Tower",
    symbol: "⛵",
    description:
      "Atlantic breezes and pastel de nata sugar rushes refuel the walkers in Lisbon."
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    landmark: "Cliffs of Moher",
    symbol: "☘️",
    description:
      "Emerald cliffs, trad fiddles, and Solana speedruns spark a lucky checkpoint."
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    landmark: "Big Ben",
    symbol: "🕰️",
    description:
      "Tea-fueled memes meet double-decker hype while Big Ben keeps our beats per block."
  },
  {
    country: "Iceland",
    flag: "🇮🇸",
    landmark: "Blue Lagoon",
    symbol: "❄️",
    description:
      "Glacial saunas, geothermal glow, and aurora arcs freeze-frame our next collectible."
  },
  {
    country: "Norway",
    flag: "🇳🇴",
    landmark: "Geirangerfjord",
    symbol: "🛳️",
    description:
      "A fjord of memes echoes with Viking horns as we climb icy gradients."
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    landmark: "Gamla Stan",
    symbol: "🌌",
    description:
      "Nordic minimalism meets neon gradients; fika breaks keep the chain synced."
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    landmark: "Lapland auroras",
    symbol: "🎿",
    description:
      "Sauna vibes and northern lights forge a calm but relentless segment."
  },
  {
    country: "Estonia",
    flag: "🇪🇪",
    landmark: "Tallinn old town",
    symbol: "🧪",
    description:
      "E-residency magic, medieval walls, and digital ID memes boost our cyber stride."
  },
  {
    country: "Latvia",
    flag: "🇱🇻",
    landmark: "Freedom Monument",
    symbol: "🗽",
    description:
      "Riga's Art Nouveau skyline turns our parade into a crimson-and-white celebration."
  },
  {
    country: "Lithuania",
    flag: "🇱🇹",
    landmark: "Hill of Crosses",
    symbol: "✝️",
    description:
      "Thousands of crosses, thousands of holders—spiritual momentum unlocked."
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    landmark: "Wawel Castle",
    symbol: "🐉",
    description:
      "Dragon legends and pierogi fuel the mainnet march through Kraków."
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    landmark: "Brandenburg Gate",
    symbol: "🎡",
    description:
      "Autobahn tempo and techno plazas turn the highway into a rave of efficiency."
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    landmark: "Little Mermaid",
    symbol: "🧜‍♀️",
    description:
      "Copenhagen bicycles and hygge gradients soften the stride before the Baltic."
  },
  {
    country: "Czechia",
    flag: "🇨🇿",
    landmark: "Charles Bridge",
    symbol: "🌉",
    description:
      "Bohemian crystals sparkle across the Vltava as our ledger keeps ticking."
  },
  {
    country: "Slovakia",
    flag: "🇸🇰",
    landmark: "High Tatras",
    symbol: "⛰️",
    description:
      "Mountain switchbacks and castle silhouettes guide the step counter upward."
  },
  {
    country: "Austria",
    flag: "🇦🇹",
    landmark: "Schönbrunn Palace",
    symbol: "🎻",
    description:
      "Mozart mode engaged—waltzing through Vienna with green-laser orchestration."
  },
  {
    country: "Switzerland",
    flag: "🇨🇭",
    landmark: "Matterhorn",
    symbol: "🏔️",
    description:
      "Precision clocks and alpine peaks keep our timing sharp and altitude high."
  },
  {
    country: "Liechtenstein",
    flag: "🇱🇮",
    landmark: "Vaduz Castle",
    symbol: "🏰",
    description:
      "Microstate magic—tiny but mighty, like a perfectly timed meme pump."
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    landmark: "Colosseum",
    symbol: "🏟️",
    description:
      "Gelato cooldowns and Roman ruins turn hodlers into gladiators of fun."
  },
  {
    country: "San Marino",
    flag: "🇸🇲",
    landmark: "Guaita Tower",
    symbol: "🛡️",
    description:
      "The triple towers salute our unstoppable legwork across sovereign hilltops."
  },
  {
    country: "Vatican City",
    flag: "🇻🇦",
    landmark: "St. Peter's Basilica",
    symbol: "⛪",
    description:
      "Sacred memes and cathedral echoes sanctify the blockchain pilgrimage."
  },
  {
    country: "Malta",
    flag: "🇲🇹",
    landmark: "Grand Harbour",
    symbol: "⚓",
    description:
      "Mediterranean breezes and honeyed limestone anchor the convoy mid-sea."
  },
  {
    country: "Slovenia",
    flag: "🇸🇮",
    landmark: "Lake Bled",
    symbol: "🛶",
    description:
      "Emerald waters mirror the neon highway as alpine bells ring in new holders."
  },
  {
    country: "Croatia",
    flag: "🇭🇷",
    landmark: "Dubrovnik walls",
    symbol: "🧿",
    description:
      "Adriatic sunbeams and fortified walls guard the meme fleet in Dalmatia."
  },
  {
    country: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    landmark: "Stari Most",
    symbol: "🌉",
    description:
      "Bridge-diving cheers echo through Mostar as we vault into the Balkans."
  },
  {
    country: "Montenegro",
    flag: "🇲🇪",
    landmark: "Bay of Kotor",
    symbol: "🏞️",
    description:
      "Fiery sunsets over fjord-like bays paint the highway orange and gold."
  },
  {
    country: "Serbia",
    flag: "🇷🇸",
    landmark: "Kalemegdan Fortress",
    symbol: "🎺",
    description:
      "Belgrade brass bands sync with Solana beats for an all-night stride."
  },
  {
    country: "Kosovo",
    flag: "🇽🇰",
    landmark: "Newborn monument",
    symbol: "✨",
    description:
      "Fresh independence energy and murals add graffiti flair to the march."
  },
  {
    country: "Albania",
    flag: "🇦🇱",
    landmark: "Skanderbeg Square",
    symbol: "🦅",
    description:
      "Eagle flags ripple through Tirana as dancers guide us toward the Ionian Sea."
  },
  {
    country: "North Macedonia",
    flag: "🇲🇰",
    landmark: "Lake Ohrid",
    symbol: "💧",
    description:
      "Ancient lakeside monasteries cast shimmering reflections on our pace."
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    landmark: "Parthenon",
    symbol: "🏛️",
    description:
      "Mythic columns and gyro refuels unleash the power of legendary walkers."
  },
  {
    country: "Bulgaria",
    flag: "🇧🇬",
    landmark: "Rila Monastery",
    symbol: "🎠",
    description:
      "Rose valleys and Balkan choirs resonate with harmonic meme energy."
  },
  {
    country: "Romania",
    flag: "🇷🇴",
    landmark: "Bran Castle",
    symbol: "🧛",
    description:
      "Transylvanian nights keep the convoy awake—fangs out, wallets ready."
  },
  {
    country: "Moldova",
    flag: "🇲🇩",
    landmark: "Cricova cellars",
    symbol: "🍷",
    description:
      "Labyrinthine wine caves toast the meme march with sparkling vintages."
  },
  {
    country: "Hungary",
    flag: "🇭🇺",
    landmark: "Chain Bridge",
    symbol: "🌉",
    description:
      "Thermal baths and paprika goulash stoke the Budapest checkpoint."
  },
  {
    country: "Belarus",
    flag: "🇧🇾",
    landmark: "Mir Castle",
    symbol: "🏰",
    description:
      "Gothic towers and dense forests wrap the road in misty mystery."
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
    landmark: "Aphrodite's Rock",
    symbol: "🪨",
    description:
      "Mediterranean myths and sunlit coves script a seaside chapter."
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    landmark: "Hagia Sophia",
    symbol: "🕌",
    description:
      "Istanbul bridges continents as baklava boosts the final leg east."
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    landmark: "Tbilisi sulphur baths",
    symbol: "🍇",
    description:
      "Caucasus peaks, wine country, and warm baths keep the memes flowing."
  },
  {
    country: "Armenia",
    flag: "🇦🇲",
    landmark: "Mount Ararat",
    symbol: "⛰️",
    description:
      "Stone monasteries and apricot skies write lore across the blockchain."
  },
  {
    country: "Azerbaijan",
    flag: "🇦🇿",
    landmark: "Flame Towers",
    symbol: "🔥",
    description:
      "Baku's flame-lit skyline marks the triumphant finale of our continental trek."
  }
];

const roadFeed = document.querySelector(".roadmap-feed");
const markerLayer = document.querySelector(".marker-layer");
const roadSurface = document.querySelector(".road-surface");
const walker = document.querySelector(".walker");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const stops = route.map((stop, index) => {
  const card = createStopCard(stop, index);
  const marker = createMarker(stop, index);
  return { ...stop, index, card, marker };
});

const state = {
  targetProgress: 0,
  currentProgress: 0,
  lastActiveIndex: -1,
  roadHeight: computeRoadHeight()
};

function createStopCard(stop, index) {
  const article = document.createElement("article");
  article.className = "stop-card";
  article.dataset.index = index;
  article.dataset.order = `Stop ${String(index + 1).padStart(2, "0")}`;
  article.tabIndex = 0;
  article.innerHTML = `
    <header class="stop-card__header">
      <span class="stop-card__flag" role="img" aria-label="${stop.country} flag">${stop.flag}</span>
      <div>
        <h3 class="stop-card__title">${stop.country}</h3>
        <div class="stop-card__landmark">${stop.landmark}</div>
      </div>
    </header>
    <p class="stop-card__description">${stop.description}</p>
    <div class="stop-card__symbol"><span>${stop.symbol}</span><span>${stop.landmark}</span></div>
  `;
  article.addEventListener("click", () => scrollToCard(index));
  article.addEventListener("mouseenter", () => setTargetProgress(index));
  article.addEventListener("focusin", () => setTargetProgress(index));
  roadFeed.appendChild(article);
  return article;
}

function createMarker(stop, index) {
  const marker = document.createElement("button");
  marker.className = "road-marker";
  marker.type = "button";
  marker.dataset.index = index;
  marker.innerHTML = `
    <div class="road-marker__sign">
      <span class="road-marker__flag" role="img" aria-hidden="true">${stop.flag}</span>
      <div class="road-marker__label">
        <strong>${stop.country}</strong>
        <span>${stop.landmark}</span>
      </div>
    </div>
    <div class="road-marker__pin"></div>
    <div class="road-marker__base"></div>
  `;
  marker.setAttribute("aria-label", `${stop.country} — ${stop.landmark}`);
  marker.addEventListener("click", () => {
    setTargetProgress(index);
    scrollToCard(index);
  });
  markerLayer.appendChild(marker);
  return marker;
}

function scrollToCard(index) {
  const card = stops[index].card;
  const offset = card.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.25;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function setTargetProgress(index) {
  state.targetProgress = clamp(index / (stops.length - 1 || 1), 0, 1);
}

function computeRoadHeight() {
  const rect = roadSurface.getBoundingClientRect();
  return rect.height || 600;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function onScroll() {
  const start = roadFeed.offsetTop - window.innerHeight * 0.3;
  const end = roadFeed.offsetTop + roadFeed.offsetHeight - window.innerHeight * 0.7;
  const raw = (window.scrollY - start) / (end - start || 1);
  state.targetProgress = clamp(raw, 0, 1);
}

function onResize() {
  state.roadHeight = computeRoadHeight();
  updateMarkers(state.currentProgress);
}

function highlightActive(progress) {
  const index = Math.round(progress * (stops.length - 1));
  if (index === state.lastActiveIndex) return;
  state.lastActiveIndex = index;
  stops.forEach((stop, idx) => {
    if (idx === index) {
      stop.card.classList.add("is-active");
      stop.card.setAttribute("aria-current", "true");
      stop.marker.classList.add("is-active");
    } else {
      stop.card.classList.remove("is-active");
      stop.card.removeAttribute("aria-current");
      stop.marker.classList.remove("is-active");
    }
  });
}

function updateWalker(progress) {
  const roadHeight = state.roadHeight;
  const walkerHeight = walker.getBoundingClientRect().height || 140;
  const available = roadHeight - walkerHeight * 0.6;
  const positionY = clamp(available * progress + walkerHeight * 0.15, 40, roadHeight - walkerHeight * 0.2);
  const depth = (0.5 - progress) * 140;
  walker.style.transform = `translate3d(-50%, ${positionY}px, ${depth}px)`;
  roadSurface.style.setProperty("--road-offset", progress.toFixed(4));
}

function updateMarkers(progress) {
  const roadHeight = state.roadHeight;
  const visibleRange = roadHeight * 0.7;
  stops.forEach((stop) => {
    const position = stop.index / (stops.length - 1 || 1);
    const relative = position - progress;
    const y = relative * visibleRange + roadHeight * 0.45;
    const offsetX = stop.index % 2 === 0 ? -110 : 70;
    const scale = clamp(1.1 - Math.abs(relative) * 0.45, 0.7, 1.15);
    const opacity = clamp(1 - Math.abs(relative) * 1.2, 0.2, 1);

    if (y < -160 || y > roadHeight + 160) {
      stop.marker.dataset.hidden = "true";
      stop.marker.style.setProperty("--marker-opacity", "0");
    } else {
      stop.marker.removeAttribute("data-hidden");
      stop.marker.style.setProperty("--marker-offset-x", `${offsetX}px`);
      stop.marker.style.setProperty("--marker-offset-y", `${y.toFixed(2)}px`);
      stop.marker.style.setProperty("--marker-scale", scale.toFixed(3));
      stop.marker.style.setProperty("--marker-opacity", opacity.toFixed(3));
    }
  });
}

function animationLoop() {
  if (prefersReducedMotion) {
    state.currentProgress = state.targetProgress;
  } else {
    state.currentProgress += (state.targetProgress - state.currentProgress) * 0.085;
  }
  const progress = clamp(state.currentProgress, 0, 1);
  highlightActive(progress);
  updateWalker(progress);
  updateMarkers(progress);
  requestAnimationFrame(animationLoop);
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onResize);

// Prime the layout once the fonts render to keep the road aligned.
window.addEventListener("load", () => {
  state.roadHeight = computeRoadHeight();
  updateMarkers(state.targetProgress);
});

highlightActive(0);
updateMarkers(0);
requestAnimationFrame(animationLoop);
