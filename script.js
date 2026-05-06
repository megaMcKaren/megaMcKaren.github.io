// Photo Exhibit script — implements sorting, gallery, featured home, and lightbox

const photos = [
  { src: 'assets/photos/cow1.jpeg', alt: 'Cow crossing road', category: 'animals' },
  { src: 'assets/photos/animals1.jpg', alt: 'Lion resting', category: 'animals' },
  { src: 'assets/photos/animals2.jpg', alt: 'Bird in flight', category: 'animals' },
  { src: 'assets/photos/flowers1.jpg', alt: 'Purple tulip', category: 'flowers' },
  { src: 'assets/photos/flowers2.jpg', alt: 'Yellow daisy', category: 'flowers' },
  { src: 'assets/photos/scenery1.jpg', alt: 'Mountain lake', category: 'scenery' },
  { src: 'assets/photos/scenery2.jpg', alt: 'Sunset hills', category: 'scenery' },
  { src: 'assets/photos/misc1.jpg', alt: 'Vintage camera', category: 'miscellaneous' },
  { src: 'assets/photos/misc2.jpg', alt: 'City alleyway', category: 'miscellaneous' }
];

const CATEGORY_PRIORITY = {
  miscellaneous: 0,
  animals: 1,
  flowers: 2,
  scenery: 3
};

const CATEGORIES = Object.keys(CATEGORY_PRIORITY);

// DOM references
const gallery = document.getElementById('gallery');
const emptyMsg = document.getElementById('emptyMsg');
const pills = Array.from(document.querySelectorAll('.pill'));
const allPill = document.getElementById('filter-all');

const navHome = document.getElementById('nav-home');
const navGallery = document.getElementById('nav-gallery');
const homeSection = document.getElementById('home');
const featImage = document.querySelector('.feat-image');
const featLabel = document.querySelector('.feat-label');
const featPrev = document.querySelector('.feat-prev');
const featNext = document.querySelector('.feat-next');

// State
let active = new Set(CATEGORIES); // all active by default
let sortedPhotos = [];
let visibleIndices = []; // indices into sortedPhotos currently visible

// Lightbox state
let currentSource = []; // array of indices (into sortedPhotos) that lightbox navigates
let lightboxCursor = -1;
let lightbox = null;

// Featured set (first 5 of sortedPhotos by default)
let featuredIndices = [];
let featuredCursor = 0;

function sortPhotos() {
  sortedPhotos = [...photos].sort((a, b) => {
    const pa = CATEGORY_PRIORITY[a.category] ?? Number.MAX_SAFE_INTEGER;
    const pb = CATEGORY_PRIORITY[b.category] ?? Number.MAX_SAFE_INTEGER;
    if (pa !== pb) return pa - pb;
    const fa = a.src.split('/').pop().toLowerCase();
    const fb = b.src.split('/').pop().toLowerCase();
    return fa.localeCompare(fb);
  });
}

function createLightbox() {
  if (lightbox) return lightbox;
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.hidden = true;
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close image viewer">×</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>
    <div class="lightbox-content">
      <img class="lightbox-image" alt="" />
      <div class="lightbox-label"></div>
    </div>
    <button class="lightbox-nav lightbox-next" aria-label="Next image">›</button>
  `;
  document.body.appendChild(overlay);

  const lb = {
    overlay,
    image: overlay.querySelector('.lightbox-image'),
    label: overlay.querySelector('.lightbox-label'),
    closeBtn: overlay.querySelector('.lightbox-close'),
    prevBtn: overlay.querySelector('.lightbox-prev'),
    nextBtn: overlay.querySelector('.lightbox-next')
  };

  // handlers
  lb.prevBtn.addEventListener('click', showPrev);
  lb.nextBtn.addEventListener('click', showNext);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.closest('.lightbox-close')) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!overlay || overlay.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  lightbox = lb;
  return lb;
}

function buildGallery() {
  gallery.innerHTML = '';
  sortedPhotos.forEach((p, index) => {
    const fig = document.createElement('figure');
    fig.className = 'photo';
    const img = document.createElement('img');
    img.setAttribute('data-index', String(index));
    img.setAttribute('data-category', p.category);
    img.alt = p.alt || '';
    // placeholder white SVG
    const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3C/svg%3E";
    img.src = PLACEHOLDER;
    img.classList.add('placeholder');

    // lazy load actual image
    const loader = new Image();
    loader.onload = () => { img.src = p.src; img.classList.remove('placeholder'); };
    loader.onerror = () => { img.classList.add('placeholder'); };
    loader.src = p.src;

    fig.appendChild(img);
    gallery.appendChild(fig);
  });
}

function computeVisibleIndices() {
  visibleIndices = [];
  sortedPhotos.forEach((p, idx) => {
    if (active.has(p.category)) visibleIndices.push(idx);
  });
}

function render() {
  computeVisibleIndices();
  const imgs = Array.from(gallery.querySelectorAll('img'));
  imgs.forEach(img => {
    const idx = Number(img.dataset.index);
    const show = visibleIndices.includes(idx);
    img.parentElement.style.display = show ? '' : 'none';
  });

  emptyMsg.hidden = visibleIndices.length > 0;

  // update pills UI
  pills.forEach(b => {
    const f = b.dataset.filter;
    if (f === 'all') return;
    b.classList.toggle('active', active.has(f));
  });
  const allActive = CATEGORIES.every(c => active.has(c));
  allPill.classList.toggle('active', allActive);
}

function toggleCategory(cat) {
  if (cat === 'all') {
    const allActive = CATEGORIES.every(c => active.has(c));
    if (allActive) active.clear(); else CATEGORIES.forEach(c=>active.add(c));
  } else {
    if (active.has(cat)) active.delete(cat); else active.add(cat);
  }
  render();
}

function openLightbox(indexInSource, sourceArray) {
  const lb = createLightbox();
  currentSource = Array.isArray(sourceArray) ? sourceArray.slice() : visibleIndices.slice();
  lightboxCursor = indexInSource;
  lb.overlay.hidden = false;
  document.body.classList.add('modal-open');
  updateLightbox();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.overlay.hidden = true;
  document.body.classList.remove('modal-open');
}

function showPrev() {
  if (!currentSource || currentSource.length <= 1) return;
  lightboxCursor = (lightboxCursor - 1 + currentSource.length) % currentSource.length;
  updateLightbox();
}

function showNext() {
  if (!currentSource || currentSource.length <= 1) return;
  lightboxCursor = (lightboxCursor + 1) % currentSource.length;
  updateLightbox();
}

function updateLightbox() {
  if (!lightbox || lightboxCursor < 0 || !currentSource || currentSource.length === 0) return;
  const photoIndex = currentSource[lightboxCursor];
  const photo = sortedPhotos[photoIndex];
  lightbox.image.src = photo.src;
  lightbox.image.alt = photo.alt || '';
  lightbox.label.textContent = `${photo.alt || 'Untitled'} • ${photo.category}`;
  const single = currentSource.length <= 1;
  lightbox.prevBtn.disabled = single;
  lightbox.nextBtn.disabled = single;
}

function setupListeners() {
  // pills
  pills.forEach(b => {
    b.addEventListener('click', () => { toggleCategory(b.dataset.filter); });
    b.addEventListener('keydown', (e) => { if (e.key==='Enter' || e.key===' ') { e.preventDefault(); b.click(); } });
  });

  // gallery click
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest && e.target.closest('img');
    if (!img) return;
    const idx = Number(img.dataset.index);
    // if clicked image not in visibleIndices (shouldn't happen) find position
    const pos = visibleIndices.indexOf(idx);
    if (pos === -1) return;
    openLightbox(pos, visibleIndices);
  });

  // Home/Featured navigation
  navHome.addEventListener('click', () => { showHome(); });
  navGallery.addEventListener('click', () => { showGallery(); });

  featPrev.addEventListener('click', () => { featuredCursor = (featuredCursor-1+featuredIndices.length)%featuredIndices.length; showFeatured(); });
  featNext.addEventListener('click', () => { featuredCursor = (featuredCursor+1)%featuredIndices.length; showFeatured(); });
  featImage.addEventListener('click', () => { openLightbox(featuredCursor, featuredIndices); });
}

function showHome() {
  homeSection.hidden = false;
  gallery.hidden = true;
  navHome.classList.add('active');
  navGallery.classList.remove('active');
  showFeatured();
}

function showGallery() {
  homeSection.hidden = true;
  gallery.hidden = false;
  navGallery.classList.add('active');
  navHome.classList.remove('active');
}

function computeFeatured() {
  featuredIndices = sortedPhotos.map((_,i)=>i).slice(0,5);
  featuredCursor = 0;
}

function showFeatured() {
  if (!featuredIndices.length) return;
  const idx = featuredIndices[featuredCursor];
  const photo = sortedPhotos[idx];
  const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23ffffff'/%3E%3C/svg%3E";
  featImage.src = PLACEHOLDER;
  featImage.alt = photo.alt || '';
  featLabel.textContent = `${photo.alt || 'Untitled'} • ${photo.category}`;
  const loader = new Image();
  loader.onload = () => featImage.src = photo.src;
  loader.onerror = () => featImage.src = PLACEHOLDER;
  loader.src = photo.src;
}

// Init
sortPhotos();
computeFeatured();
buildGallery();
setupListeners();
render();
// Start on Home
showHome();

// Expose for debugging
window.__photoExhibit = { sortedPhotos, active };
