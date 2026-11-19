 "use client";

import { useMemo, useState } from "react";
import { brandName, brandTagline } from "./brand";

type Lang = "en" | "mr" | "hi";

const copy = {
  en: {
    nav: ["Home", "Treks", "Camping", "Tours", "About", "Contact"],
    eyebrow: "YOUR NEXT STORY STARTS OUTSIDE",
    headline: "Find your trail.\nFeel the adventure.",
    intro: "Discover the forts, forests, waterfalls and wild places of Maharashtra with thoughtfully planned group adventures.",
    explore: "Explore adventures",
    whatsapp: "Enquire on WhatsApp",
    searchTitle: "Find your next adventure",
    destination: "Destination or trek",
    category: "Adventure type",
    date: "Travel date",
    search: "Search trips",
    categoriesTitle: "Choose your kind of adventure",
    popular: "Popular Maharashtra trails",
    viewAll: "View all adventures",
    why: "Adventure, thoughtfully planned",
    whyText: "Clear trip information, experienced trip leaders and a community that respects the outdoors.",
    whyItems: ["Safety-led planning", "Small-group experiences", "Responsible travel", "Friendly local support"],
    cta: "The mountains are calling.",
    ctaText: "Tell us what kind of adventure you are dreaming about. We’ll help you find a trip that fits.",
    contact: "Talk to our team",
    footer: "Adventure starts with a step. Take yours.",
    sample: "Sample listing · Confirm dates and prices before publishing",
    categories: ["Fort treks", "Camping", "Waterfall trails", "Backpacking"],
    categoryDesc: ["Walk through Maharashtra’s living history.", "Sleep under the stars and wake up in nature.", "Follow forest paths to seasonal cascades.", "Go further with multi-day journeys."],
    tripNames: ["Kalsubai Peak", "Rajmachi Fort Trail", "Harishchandragad"],
    tripMeta: ["Bari Village · 1 day · Moderate", "Lonavala region · 1–2 days", "Ahmednagar region · 1–2 days"],
    tripTags: ["Mountain trek", "Fort & nature", "Sahyadri classic"],
    from: "From",
    price: "Price to be confirmed",
  },
  mr: {
    nav: ["मुख्यपृष्ठ", "ट्रेक्स", "कॅम्पिंग", "टूर्स", "आमच्याबद्दल", "संपर्क"],
    eyebrow: "तुमचा पुढचा अनुभव निसर्गात सुरू होतो",
    headline: "नवी वाट शोधा.\nसाहस अनुभवा.",
    intro: "महाराष्ट्रातील किल्ले, जंगले, धबधबे आणि निसर्गरम्य ठिकाणे नियोजनबद्ध ग्रुप अ‍ॅडव्हेंचरमधून अनुभवूया.",
    explore: "साहस शोधा",
    whatsapp: "WhatsApp वर चौकशी",
    searchTitle: "तुमचा पुढचा ट्रेक शोधा",
    destination: "ठिकाण किंवा ट्रेक",
    category: "साहसाचा प्रकार",
    date: "प्रवासाची तारीख",
    search: "ट्रिप शोधा",
    categoriesTitle: "तुमच्या आवडीचे साहस निवडा",
    popular: "महाराष्ट्रातील लोकप्रिय ट्रेक्स",
    viewAll: "सर्व साहसे पहा",
    why: "नियोजनबद्ध आणि जबाबदार साहस",
    whyText: "स्पष्ट माहिती, अनुभवी ट्रेक लीडर्स आणि निसर्गाचा आदर करणारा प्रवास.",
    whyItems: ["सुरक्षिततेला प्राधान्य", "लहान ग्रुप अनुभव", "जबाबदार पर्यटन", "स्थानिक मदत"],
    cta: "डोंगर तुम्हाला बोलावत आहेत.",
    ctaText: "तुम्हाला कोणते साहस अनुभवायचे आहे ते सांगा. योग्य ट्रिप निवडण्यात आम्ही मदत करू.",
    contact: "आमच्याशी बोला",
    footer: "साहसाची सुरुवात एका पावलाने होते.",
    sample: "नमुना लिस्टिंग · प्रकाशित करण्यापूर्वी तारीख व किंमत निश्चित करा",
    categories: ["किल्ले ट्रेक", "कॅम्पिंग", "धबधबा ट्रेल्स", "बॅकपॅकिंग"],
    categoryDesc: ["महाराष्ट्राचा इतिहास पायवाटांवरून अनुभवा.", "ताऱ्यांच्या साक्षीने निसर्गात मुक्काम करा.", "जंगलवाटांनी हंगामी धबधब्यांपर्यंत पोहोचा.", "अनेक दिवसांच्या प्रवासात आणखी पुढे जा."],
    tripNames: ["कळसूबाई शिखर", "राजमाची किल्ला ट्रेल", "हरिश्चंद्रगड"],
    tripMeta: ["बारी गाव · १ दिवस · मध्यम", "लोणावळा परिसर · १–२ दिवस", "अहमदनगर परिसर · १–२ दिवस"],
    tripTags: ["डोंगर ट्रेक", "किल्ला व निसर्ग", "सह्याद्री क्लासिक"],
    from: "पासून",
    price: "किंमत निश्चित करायची आहे",
  },
  hi: {
    nav: ["होम", "ट्रेक", "कैंपिंग", "टूर", "हमारे बारे में", "संपर्क"],
    eyebrow: "आपकी अगली कहानी बाहर शुरू होती है",
    headline: "अपनी राह चुनें।\nरोमांच महसूस करें।",
    intro: "महाराष्ट्र के किलों, जंगलों, झरनों और खूबसूरत जगहों को सुनियोजित ग्रुप एडवेंचर के साथ खोजें।",
    explore: "एडवेंचर देखें",
    whatsapp: "WhatsApp पर पूछताछ",
    searchTitle: "अपना अगला एडवेंचर खोजें",
    destination: "जगह या ट्रेक",
    category: "एडवेंचर का प्रकार",
    date: "यात्रा की तारीख",
    search: "ट्रिप खोजें",
    categoriesTitle: "अपना एडवेंचर चुनें",
    popular: "महाराष्ट्र के लोकप्रिय ट्रेल्स",
    viewAll: "सभी एडवेंचर देखें",
    why: "सोच-समझकर बनाया गया एडवेंचर",
    whyText: "स्पष्ट जानकारी, अनुभवी ट्रेक लीडर और प्रकृति का सम्मान करने वाला सफर।",
    whyItems: ["सुरक्षा-केंद्रित योजना", "छोटे ग्रुप का अनुभव", "जिम्मेदार पर्यटन", "स्थानीय सहायता"],
    cta: "पहाड़ आपको बुला रहे हैं।",
    ctaText: "बताइए आप किस तरह का एडवेंचर करना चाहते हैं। सही ट्रिप चुनने में हम मदद करेंगे।",
    contact: "हमारी टीम से बात करें",
    footer: "एडवेंचर की शुरुआत एक कदम से होती है।",
    sample: "नमूना लिस्टिंग · प्रकाशित करने से पहले तारीख और कीमत तय करें",
    categories: ["किला ट्रेक", "कैंपिंग", "झरना ट्रेल", "बैकपैकिंग"],
    categoryDesc: ["महाराष्ट्र के इतिहास को पगडंडियों पर महसूस करें।", "सितारों के नीचे प्रकृति के बीच रात बिताएं।", "जंगल के रास्तों से मौसमी झरनों तक पहुंचें।", "कई दिनों की यात्राओं में और आगे बढ़ें।"],
    tripNames: ["कलसूबाई शिखर", "राजमाची किला ट्रेल", "हरिश्चंद्रगढ़"],
    tripMeta: ["बारी गांव · 1 दिन · मध्यम", "लोणावला क्षेत्र · 1–2 दिन", "अहमदनगर क्षेत्र · 1–2 दिन"],
    tripTags: ["माउंटेन ट्रेक", "किला और प्रकृति", "सह्याद्री क्लासिक"],
    from: "शुरुआती",
    price: "कीमत तय होनी बाकी है",
  },
};

const categoryImages = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=85",
];
const tripImages = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [destination, setDestination] = useState("");
  const [kind, setKind] = useState("Any adventure");
  const [date, setDate] = useState("");
  const t = copy[lang];
  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(`Hello! I would like to enquire about an adventure trip.${destination ? ` Destination: ${destination}.` : ""}${kind !== "Any adventure" ? ` Type: ${kind}.` : ""}${date ? ` Date: ${date}.` : ""}`);
    return `https://wa.me/?text=${message}`;
  }, [destination, kind, date]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Home">
          <span className="brand-mark">✦</span>
          <span><strong>{brandName}</strong><small>{brandTagline}</small></span>
        </a>
        <nav className="desktop-nav">
          {t.nav.map((item, i) => <a key={item} href={["#home", "#trips", "#categories", "#trips", "#about", "#contact"][i]}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <select aria-label="Choose language" value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
            <option value="en">EN</option><option value="mr">मराठी</option><option value="hi">हिन्दी</option>
          </select>
          <a className="button button-small" href="#trips">{t.explore}</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow"><i /> {t.eyebrow}</span>
          <h1>{t.headline.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.intro}</p>
          <div className="hero-buttons">
            <a className="button" href="#trips">{t.explore} <span>↗</span></a>
            <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">◉ {t.whatsapp}</a>
          </div>
          <div className="hero-note"><span>✦</span> SAHYADRI · MAHARASHTRA · BEYOND</div>
        </div>
        <div className="hero-side-label">GO BEYOND THE EVERYDAY</div>
      </section>

      <section className="search-wrap">
        <div className="search-card">
          <div className="search-heading"><span className="search-icon">⌕</span><div><h2>{t.searchTitle}</h2><p>Choose a place, date and experience.</p></div></div>
          <div className="search-fields">
            <label><span>{t.destination}</span><input value={destination} onChange={e => setDestination(e.target.value)} placeholder="e.g. Kalsubai, Rajmachi" /></label>
            <label><span>{t.category}</span><select value={kind} onChange={e => setKind(e.target.value)}><option>Any adventure</option><option>Trekking</option><option>Camping</option><option>Backpacking</option><option>Corporate trip</option></select></label>
            <label><span>{t.date}</span><input type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
            <a className="button search-button" href={whatsappUrl} target="_blank" rel="noreferrer">{t.search} ↗</a>
          </div>
          <p className="microcopy">Enquiries are sent to WhatsApp. Online booking and payments will be connected in the next development phase.</p>
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="section-heading"><div><span className="eyebrow dark">FIND YOUR OUTDOORS</span><h2>{t.categoriesTitle}</h2></div><span className="section-number">01 / 03</span></div>
        <div className="category-grid">
          {t.categories.map((name, i) => <a className="category-card" href="#trips" key={name}>
            <img src={categoryImages[i]} alt="" /><span className="category-overlay" />
            <span className="category-index">0{i + 1}</span><span className="category-name">{name}</span><span className="category-desc">{t.categoryDesc[i]}</span><span className="card-arrow">↗</span>
          </a>)}
        </div>
      </section>

      <section className="section trips-section" id="trips">
        <div className="section-heading"><div><span className="eyebrow dark">THE SAHYADRI IS WAITING</span><h2>{t.popular}</h2><p className="section-intro">A first look at the experiences we plan to offer. Trip schedules and prices will be added after confirmation.</p></div><a className="text-link" href="#contact">{t.viewAll} ↗</a></div>
        <div className="trip-grid">
          {t.tripNames.map((name, i) => <article className="trip-card" key={name}>
            <div className="trip-image"><img src={tripImages[i]} alt={name} /><span className="trip-tag">{t.tripTags[i]}</span><button className="heart" aria-label="Save trip">♡</button></div>
            <div className="trip-info"><div className="trip-meta">{t.tripMeta[i]}</div><h3>{name}</h3><div className="trip-bottom"><span>{t.price}</span><a href={`https://wa.me/?text=${encodeURIComponent(`Hello, I am interested in ${name}. Please share details.`)}`} target="_blank" rel="noreferrer">Enquire ↗</a></div></div>
          </article>)}
        </div>
        <p className="sample-note">{t.sample}</p>
      </section>

      <section className="about-band" id="about">
        <div className="about-photo"><img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85" alt="Mountain landscape under a starry sky" /></div>
        <div className="about-copy"><span className="eyebrow">OUR WAY OF ADVENTURE</span><h2>{t.why}</h2><p>{t.whyText}</p><div className="promise-grid">{t.whyItems.map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div></div>
      </section>

      <section className="cta-section" id="contact">
        <span className="eyebrow">LET'S PLAN YOUR NEXT ESCAPE</span><h2>{t.cta}</h2><p>{t.ctaText}</p>
        <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">{t.contact} ↗</a>
      </section>

      <footer className="footer">
        <div><a className="brand brand-footer" href="#"><span className="brand-mark">✦</span><span><strong>{brandName}</strong><small>{brandTagline}</small></span></a><p>{t.footer}</p></div>
        <div className="footer-right"><span>MAHARASHTRA · INDIA</span><span>Instagram&nbsp;&nbsp; Facebook&nbsp;&nbsp; WhatsApp</span><small>© {new Date().getFullYear()} {brandName}. Replace placeholder brand details before launch.</small></div>
      </footer>
    </main>
  );
}