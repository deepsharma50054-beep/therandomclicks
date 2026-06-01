const collections = {
  mountains: {
    eyebrow: "Mt. Rainier Collection",
    title: "Mt. Rainier",
    description: "A photo story built around Mount Rainier's snowfields, volcanic silhouette, and shifting alpine weather.",
    story: {
      lead: "Mount Rainier rises above western Washington as one of the region's most recognizable landmarks. This collection follows the mountain through changing light, wide viewpoints, and the quiet scale that makes it feel both dramatic and deeply calm.",
      location: "Mount Rainier is in Mount Rainier National Park in Washington State, southeast of Seattle and Tacoma in the Cascade Range.",
      historicalFact: "Mount Rainier National Park was established in 1899, making it one of the earliest national parks in the United States.",
      interestingFact: "Mount Rainier is an active stratovolcano and also the most heavily glaciated peak in the contiguous United States, with dozens of named glaciers on its slopes.",
    },
    images: [
      ["Main View", "A clean opening frame of Mt. Rainier under broad alpine light.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958391/DSC01066_xkaex2.jpg"],
      ["Rainier Frame 01", "A close study of the mountain's mood and texture.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957002/DSC00914_fbp7kv.jpg"],
      ["Rainier Frame 02", "Layered atmosphere and elevation in a quieter moment.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957006/DSC00908_uh8p9a.jpg"],
      ["Rainier Frame 03", "A wider composition with glacial forms and open sky.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957021/DSC00919_hghqxc.jpg"],
      ["Rainier Frame 04", "Light and terrain shaping the mountain's profile.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957031/DSC00967_wrci31.jpg"],
      ["Rainier Frame 05", "A crisp alpine scene with depth across the ridgelines.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958309/DSC00984_u8pa36.jpg"],
      ["Rainier Frame 06", "A calmer view where sky and snow share the frame.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958314/DSC00987_wwjtlb.jpg"],
      ["Rainier Frame 07", "Changing weather and mountain color across the horizon.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958317/DSC00992_fj0rfy.jpg"],
      ["Rainier Frame 08", "A detailed landscape moment around the mountain basin.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958338/DSC01054_bnzqja.jpg"],
      ["Rainier Frame 09", "Light carving across the terrain beneath the summit.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958344/DSC01057_v4cw3e.jpg"],
      ["Rainier Frame 10", "A softer study of scale and alpine quiet.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958349/DSC01062_xvzwzp.jpg"],
      ["Rainier Frame 11", "The mountain appearing with stronger atmospheric contrast.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958407/DSC01082_rtzjnc.jpg"],
      ["Rainier Frame 12", "A late-series view with deeper texture and shadow.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958510/DSC01110_zerv43.jpg"],
      ["Rainier Frame 13", "A final tile that rounds out the full Mt. Rainier story.", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958522/DSC01134_ee2nqr.jpg"],
    ],
  },
  "city-life": {
    eyebrow: "City Life Collection",
    title: "City Life",
    description: "Architecture, streets, reflections, and motion from urban moments and skyline details.",
    images: [
      ["Bridge Lines", "Urban scale and strong geometry.", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"],
      ["Clock Tower", "Classic architecture and changing weather.", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"],
      ["Evening Grid", "City rhythm at the edge of night.", "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"],
      ["Glass Light", "Reflections across glass and steel.", "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"],
      ["Street Pulse", "Movement, signage, and layered streets.", "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"],
      ["Urban Blue", "Cool tones and skyline depth.", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80"],
    ],
  },
  beaches: {
    eyebrow: "Beaches Collection",
    title: "Beaches",
    description: "Open skies, sea light, shoreline textures, and calm horizons across coastal scenes.",
    images: [
      ["Sea Light", "Gentle color and a clean horizon.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"],
      ["Morning Tide", "Soft surf and pale coastal light.", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"],
      ["Blue Edge", "Water meeting sand in calm detail.", "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80"],
      ["Open Coast", "Wide shoreline and drifting clouds.", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"],
      ["Evening Shore", "Warm light fading into the sea.", "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80"],
      ["Quiet Break", "Repeating waves and pastel sky.", "https://images.unsplash.com/photo-1501959915551-4e8b96f9f1c5?auto=format&fit=crop&w=1200&q=80"],
    ],
  },
  "forest-trails": {
    eyebrow: "Forest Trails Collection",
    title: "Forest Trails",
    description: "Layered greens, woodland trails, filtered light, and immersive natural textures.",
    images: [
      ["Forest Glow", "Filtered sun through dense woodland.", "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"],
      ["Wild Path", "A trail disappearing into green depth.", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"],
      ["Quiet Pines", "Still forest atmosphere and soft detail.", "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1200&q=80"],
      ["Natural Layers", "Organic texture, mist, and depth.", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80"],
      ["Woodland Air", "Moody greens and soft highlights.", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"],
      ["Trail Light", "A calm opening through dense trees.", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"],
    ],
  },
};

const params = new URLSearchParams(window.location.search);
const key = params.get("collection") || "mountains";
const collection = collections[key] || collections.mountains;

document.getElementById("collectionEyebrow").textContent = collection.eyebrow;
document.getElementById("collectionTitle").textContent = collection.title;
document.getElementById("collectionDescription").textContent = collection.description;

const storySection = document.getElementById("collectionStory");
const storyGrid = document.getElementById("storyGrid");
const grid = document.getElementById("collectionGrid");

if (collection.story && storySection && storyGrid) {
  storySection.hidden = false;
  storyGrid.innerHTML = `
    <article class="story-card story-lead">
      <h2>Story of ${collection.title}</h2>
      <p>${collection.story.lead}</p>
    </article>
    <article class="story-card">
      <h3>Location</h3>
      <p>${collection.story.location}</p>
    </article>
    <article class="story-card">
      <h3>Historical Fact</h3>
      <p>${collection.story.historicalFact}</p>
    </article>
    <article class="story-card">
      <h3>Interesting Fact</h3>
      <p>${collection.story.interestingFact}</p>
    </article>
  `;
}

collection.images.forEach(([title, description, src]) => {
  const figure = document.createElement("figure");
  figure.className = "collection-tile";
  figure.innerHTML = `
    <img src="${src}" alt="${title}" loading="lazy" decoding="async">
    <figcaption>
      <h3>${title}</h3>
      <p>${description}</p>
    </figcaption>
  `;
  grid.appendChild(figure);
});
