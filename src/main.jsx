import React,{useState,useEffect} from 'react';
import{createRoot}from'react-dom/client';
import{ArrowRight,CalendarDays,ShieldCheck,CreditCard,RefreshCw,ClipboardCheck,ReceiptText,Menu,X,Mail,Phone,Instagram,ExternalLink,CheckCircle2,ChevronDown,MapPin,ArrowUpRight}from'lucide-react';
import details from './serviceDetails.json';
import './style.css';
const icons=[ShieldCheck,CreditCard,RefreshCw,ClipboardCheck,ReceiptText];
const services=[{title:'Insurance Verification',desc:'Detailed eligibility, benefits, and plan limitations verified for your team.',id:'insurance'},{title:'Payment Posting',desc:'Organized EOB posting, payment tracking, and reporting support.',id:'posting'},{title:'Deposit Reconciliation',desc:'Accurate matching of EFTs, deposits, and billing records.',id:'eft'},{title:'Predetermination Support',desc:'Structured case follow-up and status updates for your clinic.',id:'predetermination'},{title:'Billing Support',desc:'Administrative billing support tailored to your practice.',id:'billing'}];
function Wave({reverse=false}){return <div className={'wave '+(reverse?'reverse':'')} aria-hidden="true"><svg viewBox="0 0 1440 110" preserveAspectRatio="none"><path d="M0 68 C250 -25 420 135 740 52 S1180 -10 1440 54"/><path className="thin" d="M0 85 C320 10 480 124 770 71 S1220 2 1440 75"/></svg></div>}


function App(){
  const theme = 'blue';
  const [menu,setMenu] = useState(false);
  const [active,setActive] = useState('insurance');

  useEffect(()=>{
    function hash(){
      let id = location.hash.slice(1);
      if(details.some(d=>d.id===id)) setActive(id);
    }
    window.addEventListener('hashchange',hash);
    hash();
    return ()=>window.removeEventListener('hashchange',hash);
  },[]);

  const selectDetail = id=>{
    setActive(id);
    document.getElementById('details')?.scrollIntoView({behavior:'smooth'});
    history.replaceState(null,'','#'+id);
  };

  return <div className={'site theme-'+theme}>



<main>
   
   
   
    <section className="hero-image-section" id="home" aria-label="DCO Dental Care Office — Your Back-Office Partner for Dental Offices"><picture><source media="(max-width: 600px)" srcSet={theme==='light'?'/assets/light-mobile.png':'/assets/dark-mobile.png'}/><source media="(max-width: 1050px)" srcSet={theme==='light'?'/assets/light-tablet.png':'/assets/dark-tablet.png'}/><img className="hero-art" src={theme==='light'?'/assets/light-desktop.jpg':'/assets/dark-desktop.png'} alt="DCO Dental Care Office. Your Back-Office Partner for Dental Offices. Insurance verification, payment posting, deposit reconciliation, predetermination and billing support."/></picture><nav className="hero-hit-nav" aria-label="Main navigation"><a href="#home" aria-label="Home"/><a href="#services" aria-label="Services"/><a href="#details" aria-label="Details"/><a href="#reviews" aria-label="Reviews"/><a href="#contact" aria-label="Contact Us"/></nav><a className="hero-hit-request-top" href="#contact" aria-label="Request Service"/><a className="hero-hit-request" href="#contact" aria-label="Request Service"/><a className="hero-hit-details" href="#details" aria-label="View Details"/><button className="hero-hit-menu" aria-label="Open menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}></button>{menu&&<nav className="image-mobile-nav" aria-label="Mobile navigation">{[['Home','home'],['Services','services'],['Details','details'],['Reviews','reviews'],['Contact Us','contact']].map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{label}</a>)}</nav>}</section>
<section id="services" className="section services-section">
    <div className="section-head"><div className="kicker">WHAT WE DO</div>
    <h2>Exceptional support.<br/><span>Every step of the way.</span>
    </h2><p>Thoughtful administrative solutions that give your dental team more time for what matters most: patients.</p>
    </div>
    <div className="service-grid">{services.map((s,i)=>{const Icon=icons[i];return <button className="service-card" key={s.id} onClick={()=>selectDetail(s.id)}><span className="service-number">0{i+1}</span>
    <div className="service-icon"><Icon size={29}/></div><h3>{s.title}</h3><p>{s.desc}</p><span className="card-link">Explore service <ArrowUpRight size={17}/></span></button>})}</div></section><Wave/>



<section id="details" className="section details-section">
    <div className="section-head"><div className="kicker">SERVICE DETAILS & PRICING</div>
    <h2>Solutions built around<br/><span>your practice.</span></h2>
    <p>Explore the scope of each service and our transparent pricing options.</p>
    </div>
    <div className="details-layout">
        <aside className="details-tabs">{details.map((d,i)=>{const Icon=icons[i];return <button key={d.id} className={active===d.id?'active':''} onClick={()=>setActive(d.id)}><Icon size={20}/><span>{d.title}</span><ArrowRight size={16}/></button>})}<div className="aside-note">Need a custom package?<a href="#contact">Let's talk <ArrowUpRight size={16}/></a></div></aside><div className="detail-panel" key={active}>{details.filter(d=>d.id===active).map(d=><React.Fragment key={d.id}><div className="panel-kicker">{d.subtitle}</div><h3>{d.title}</h3><div className="original-detail" dangerouslySetInnerHTML={{__html:d.html}}/></React.Fragment>)}</div></div></section><Wave reverse/>



<section className="why-section">
    <div className="why-inner"><div>
        <div className="kicker">THE DCO ADVANTAGE</div>
        <h2>Less paperwork.<br/><em>More possibilities.</em></h2>
        <p>Behind every great patient experience is a well-supported team. We help simplify your daily administrative workflow.</p><a className="button primary" href="#contact">Partner With DCO <ArrowRight size={19}/></a></div><div className="why-points">{['Structured insurance information for clinical interpretation','Support for verification, posting, reconciliation, and billing','Designed for U.S. dental office workflows','Volume-based pricing for growing practices'].map((x,i)=><div key={x}><span>0{i+1}</span><CheckCircle2 size={23}/><p>{x}</p></div>)}</div></div></section>



<section id="reviews" className="section review-section">
    <div className="section-head"><div className="kicker">CLIENT EXPERIENCE</div>
    <h2>Relationships built<br/><span>on reliability.</span></h2><p>Supporting real dental practices with a more organized workflow.</p></div><div className="review-card"><img src="/assets/pearly.png" alt="Pearly Smiles Dental practice exterior"/><div className="review-copy"><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“DCO helped simplify our insurance verification and payment posting workflow. Tasks that previously took our staff hours every day are now completed faster and more efficiently.”</blockquote><div className="review-attribution"><strong>Pearly Smiles Dental</strong><span>Aurora, Illinois</span></div></div></div></section><Wave/>



<section id="contact" className="contact-section">
    <div className="contact-shell"><div className="kicker">LET'S WORK TOGETHER</div>
    <h2>Ready to elevate<br/><em>your back office?</em></h2><p>Tell us what your practice needs. Our team is ready to discuss services and custom volume pricing.</p><div className="contact-actions"><a href="mailto:dco.assistance@gmail.com" className="button primary"><Mail size={20}/> Email Our Team</a><a href="https://wa.me/16309995743" target="_blank" rel="noreferrer" className="button outline">Chat on WhatsApp <ArrowUpRight size={19}/></a></div><div className="contact-small"><a href="tel:+16309995743"><Phone size={16}/> +1 (630) 999-5743</a><a href="mailto:dco.assistance@gmail.com"><Mail size={16}/> dco.assistance@gmail.com</a></div></div></section></main>




<footer className="footer"><div className="footer-top"><div className="footer-brand">
    <img src="/assets/logo2.png" alt="DCO logo"/>
    <p>Expert dental administrative support. Built around your practice, focused on your success.</p>
    <div className="social-links"><a href="https://www.instagram.com/dco2_026/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20}/></a>
    <a href="https://wa.me/16309995743" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone size={19}/></a>
    </div></div><div className="footer-column">
        <h4>Explore</h4><a href="#home">Home</a><a href="#services">Our Services</a>
        <a href="#details">Services & Pricing</a>
        <a href="#reviews">Client Reviews</a></div>
        <div className="footer-column"><h4>Services</h4>{services.map(s=><a key={s.id} href={'#'+s.id} onClick={e=>{e.preventDefault();selectDetail(s.id)}}>{s.title}</a>)}</div>
        <div className="footer-column"><h4>Get in touch</h4>
        <a href="mailto:dco.assistance@gmail.com">dco.assistance@gmail.com</a>
        <a href="tel:+16309995743">+1 (630) 999-5743</a><a href="https://wa.me/16309995743" target="_blank" rel="noreferrer">WhatsApp <ExternalLink size={13}/></a>
        <a href="https://www.instagram.com/dco2_026/" target="_blank" rel="noreferrer">Instagram <ExternalLink size={13}/></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} DCO Dental Care Office. All rights reserved.</span><span>Dental Administrative Support · United States</span><a href="#home">Back to top ↑</a></div><div className="footer-watermark" aria-hidden="true">DCO<span>.</span></div></footer><a className="whatsapp-float" href="https://wa.me/16309995743" target="_blank" rel="noreferrer" aria-label="Chat with DCO on WhatsApp"><img src="/assets/whatsapp.png" alt="" /></a></div>}
createRoot(document.getElementById('root')).render(<App/>);
