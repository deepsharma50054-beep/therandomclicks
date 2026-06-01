const buildItems = (entries, category, collection, metaLabel, baseKeywords) =>
  entries.map(([title, image, keywords = ""]) => ({
    title,
    meta: `${metaLabel}`,
    category,
    collection,
    keywords: `${baseKeywords} ${keywords}`.trim(),
    image,
  }));

const homepageItems = [
  {
    title: "Silent Valley",
    meta: "Landscape • Main Gallery",
    category: "landscape",
    collection: "mountains",
    keywords: "valley mountain alpine blue quiet stillness main gallery",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blue Horizon",
    meta: "Travel • Main Gallery",
    category: "travel",
    collection: "beaches",
    keywords: "blue horizon coast sea water breeze travel main gallery",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Night City",
    meta: "Night • Main Gallery",
    category: "night",
    collection: "city-life",
    keywords: "city skyline urban lights evening street night main gallery",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Still Water",
    meta: "Nature • Main Gallery",
    category: "nature",
    collection: "forest-trails",
    keywords: "water reflection still lake calm nature minimal main gallery",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Road Story",
    meta: "Travel • Main Gallery",
    category: "travel",
    collection: "mountains",
    keywords: "road travel landscape journey mountains open road main gallery",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wild Bloom",
    meta: "Nature • Main Gallery",
    category: "nature",
    collection: "forest-trails",
    keywords: "flowers bloom wild detail spring field nature main gallery",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Forest Breath",
    meta: "Nature • Main Gallery",
    category: "nature",
    collection: "forest-trails",
    keywords: "forest woods trail green breath woodland trees main gallery",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Color Trail",
    meta: "Landscape • Main Gallery",
    category: "landscape",
    collection: "skagit-valley",
    keywords: "sky color trail sunset landscape minimal horizon main gallery",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  },
];

const rainierItems = buildItems(
  [
    ["Main View", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958391/DSC01066_xkaex2.jpg", "rainier mountain snow alpine opening frame"],
    ["Rainier Frame 01", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957002/DSC00914_fbp7kv.jpg", "rainier forest stillness trees silence"],
    ["Rainier Frame 02", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957006/DSC00908_uh8p9a.jpg", "rainier trail distance atmosphere"],
    ["Rainier Frame 03", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957021/DSC00919_hghqxc.jpg", "rainier glacier sky wide composition"],
    ["Rainier Frame 04", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775957031/DSC00967_wrci31.jpg", "rainier slope light ridge"],
    ["Rainier Frame 05", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958309/DSC00984_u8pa36.jpg", "rainier alpine ridgelines crisp air"],
    ["Rainier Frame 06", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958314/DSC00987_wwjtlb.jpg", "rainier snow sky calm"],
    ["Rainier Frame 07", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958317/DSC00992_fj0rfy.jpg", "rainier weather horizon color"],
    ["Rainier Frame 08", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958338/DSC01054_bnzqja.jpg", "rainier basin path landscape"],
    ["Rainier Frame 09", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958344/DSC01057_v4cw3e.jpg", "rainier sunlight terrain summit"],
    ["Rainier Frame 10", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958349/DSC01062_xvzwzp.jpg", "rainier scale quiet study"],
    ["Rainier Frame 11", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958407/DSC01082_rtzjnc.jpg", "rainier contrast summit atmospheric"],
    ["Rainier Frame 12", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958510/DSC01110_zerv43.jpg", "rainier shadow texture late series"],
    ["Rainier Frame 13", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775958522/DSC01134_ee2nqr.jpg", "rainier final frame mountain story"],
  ],
  "landscape",
  "mountains",
  "Landscape • Mt. Rainier Collection",
  "mt rainier mount rainier mountain washington national park alpine glacier landscape calm quiet silence wonder stillness scenic trail snow forest sky"
);

const skagitItems = buildItems(
  [
    ["Skagit Valley Main View", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959826/IMG_3782_mmbano.jpg", "skagit valley open light calm atmosphere"],
    ["Skagit Valley Frame 01", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959883/IMG_3827_zckhkz.jpg", "skagit morning fields light"],
    ["Skagit Valley Frame 02", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959876/IMG_3814_nehao0.jpg", "skagit roadside story"],
    ["Skagit Valley Frame 03", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959869/IMG_4057_lirgvv.jpg", "skagit layers distance"],
    ["Skagit Valley Frame 04", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959862/IMG_4054_vtivod.jpg", "skagit wide open fields"],
    ["Skagit Valley Frame 05", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959856/IMG_4055_ppepak.jpg", "skagit clouds fields northwest"],
    ["Skagit Valley Frame 06", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959850/IMG_3786_tsm3bx.jpg", "skagit field horizon"],
    ["Skagit Valley Frame 07", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959843/IMG_3783_aj6rm7.jpg", "skagit steady land"],
    ["Skagit Valley Frame 08", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959837/IMG_3785_qxteag.jpg", "skagit gentle colors"],
    ["Skagit Valley Frame 09", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959832/IMG_3781_lpaqfy.jpg", "skagit soft light"],
    ["Skagit Valley Frame 10", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959819/IMG_4042_qnwvfo.jpg", "skagit field sky distance"],
    ["Skagit Valley Frame 11", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959812/IMG_3740_tjgjtt.jpg", "skagit calm horizon"],
    ["Skagit Valley Frame 12", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959806/IMG_3739_zahwym.jpg", "skagit quiet weather"],
    ["Skagit Valley Frame 13", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959796/IMG_3729_ag3itf.jpg", "skagit color land"],
    ["Skagit Valley Frame 15", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959784/IMG_3812_movrmx.jpg", "skagit field edge"],
    ["Skagit Valley Frame 16", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959777/IMG_3689_p9fm7a.jpg", "skagit smaller view"],
    ["Skagit Valley Frame 17", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959770/IMG_3777_zuezph.jpg", "skagit distance contrast"],
    ["Skagit Valley Frame 18", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959661/IMG_3620_leh0m4.jpg", "skagit early series quiet"],
    ["Skagit Valley Frame 19", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959675/IMG_3636_xddu7d.jpg", "skagit edges time"],
    ["Skagit Valley Frame 20", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959680/IMG_3634_un1n1r.jpg", "skagit subtle tones"],
    ["Skagit Valley Frame 21", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959684/IMG_3643_ztuf9o.jpg", "skagit open sky fields"],
    ["Skagit Valley Frame 22", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959690/IMG_3639_f8jkou.jpg", "skagit repetition calm"],
    ["Skagit Valley Frame 23", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959695/IMG_3644_srahb6.jpg", "skagit pacific light"],
    ["Skagit Valley Frame 24", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959701/IMG_3677_gmiffe.jpg", "skagit space field lines"],
    ["Skagit Valley Frame 25", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959707/IMG_3645_vvcvcw.jpg", "skagit gentle layers"],
    ["Skagit Valley Frame 26", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959712/IMG_3669_urhxny.jpg", "skagit restrained color"],
    ["Skagit Valley Frame 27", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959723/IMG_3688_sr7fda.jpg", "skagit breathing distance"],
    ["Skagit Valley Frame 28", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959729/IMG_3679_q6bcxx.jpg", "skagit open edges"],
    ["Skagit Valley Frame 29", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959734/IMG_3680_oodv5y.jpg", "skagit low horizon"],
    ["Skagit Valley Frame 30", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959740/IMG_3684_vo1rqs.jpg", "skagit pause spacing"],
    ["Skagit Valley Frame 31", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959745/IMG_3685_p45ivd.jpg", "skagit understated detail"],
    ["Skagit Valley Frame 32", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959751/IMG_3682_rmvrez.jpg", "skagit silence room"],
    ["Skagit Valley Frame 33", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959757/IMG_3713_gzlk9x.jpg", "skagit light company"],
    ["Skagit Valley Frame 34", "https://res.cloudinary.com/dfoirz0ps/image/upload/v1775959764/IMG_3775_hnbfkg.jpg", "skagit final frame"],
  ],
  "landscape",
  "skagit-valley",
  "Landscape • Skagit Valley Collection",
  "skagit valley washington farmland river plains fields landscape pacific northwest calm quiet peaceful soft open airy rural road countryside sky field mood"
);

const cityLifeItems = buildItems(
  [
    ["Bridge Lines", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80", "bridge geometry urban"],
    ["Clock Tower", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80", "clock tower architecture"],
    ["Evening Grid", "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80", "grid skyline evening"],
    ["Glass Light", "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80", "glass reflections steel"],
    ["Street Pulse", "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80", "street signage movement"],
    ["Urban Blue", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80", "blue skyline city"],
  ],
  "street",
  "city-life",
  "Street • City Life Collection",
  "city life architecture streets reflections skyline urban street night downtown cityscape motion lights modern buildings energy mood"
);

const beachItems = buildItems(
  [
    ["Sea Light", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", "sea light horizon"],
    ["Morning Tide", "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80", "morning tide surf"],
    ["Blue Edge", "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80", "blue edge sand"],
    ["Open Coast", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80", "open coast clouds"],
    ["Evening Shore", "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80", "evening shore warm light"],
    ["Quiet Break", "https://images.unsplash.com/photo-1501959915551-4e8b96f9f1c5?auto=format&fit=crop&w=1200&q=80", "quiet break waves pastel"],
  ],
  "travel",
  "beaches",
  "Travel • Beaches Collection",
  "beaches coast shoreline sea water coastal travel horizon calm peaceful blue ocean sand waves sunset shore mood"
);

const forestItems = buildItems(
  [
    ["Forest Glow", "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80", "forest glow sunlight woodland"],
    ["Wild Path", "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80", "wild path trail"],
    ["Quiet Pines", "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1200&q=80", "quiet pines still"],
    ["Natural Layers", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80", "natural layers mist"],
    ["Woodland Air", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", "woodland air moody greens"],
    ["Trail Light", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", "trail light dense trees"],
  ],
  "nature",
  "forest-trails",
  "Nature • Forest Trails Collection",
  "forest trails woodland green trees path nature filtered light calm quiet peaceful trail woods moss atmosphere mood"
);

window.galleryItems = [
  ...homepageItems,
  ...rainierItems,
  ...skagitItems,
  ...cityLifeItems,
  ...beachItems,
  ...forestItems,
];
