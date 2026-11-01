const d=window.PORTFOLIO;const app=document.getElementById('app');const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const im=(url,cls='')=>{if(!url)return '<div class="empty-image">Add an image in content.js</div>';if(/\.mp4(?:$|\?)/i.test(url))return `<video class="${cls}" controls preload="metadata" playsinline><source src="${esc(url)}" type="video/mp4"></video>`;return `<img class="${cls}" src="${esc(url)}" alt="Project photograph" loading="lazy" onerror="this.outerHTML='<div class=&quot;empty-image&quot;>Image unavailable</div>'">`;};
const projCard=(p,i)=>`<a class="project-card" href="#/project/${encodeURIComponent(p.id)}"><div class="thumb">${im(p.images?.[0])}<span class="arrow">↗</span></div><div class="card-meta"><div><h3>${esc(p.title)}</h3><p>${esc(p.category)}${p.year?' · '+esc(p.year):''}</p></div><span class="num">${String(i+1).padStart(2,'0')}</span></div></a>`;
let filter='All';function work(home=false){app.innerHTML=`${home?`<section class="hero"><div class="eyebrow">Independent engineering portfolio
     / 2026</div><div class="hero-bottom"><p>
     ${esc(d.intro)}</p><span class="scroll-note">Scroll to explore ↓</span></div></section>`:`<section class="hero" style="padding-bottom:45px"><div class="eyebrow">Selected & archived projects</div><h1>Projects<span style="color:var(--accent)">.</span></h1></section>`}<section id="work"><div class="section-head"><h2>Selected projects</h2><span>${d.projects.length} projects / 03 categories</span></div><div class="filters" id="filters"></div><div class="grid" id="projects"></div></section>`;let cats=['All','Penn Electric Racing','Personal Projects','Course Work'];document.getElementById('filters').innerHTML=cats.map(c=>`<button class="filter ${c===filter?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');document.getElementById('projects').innerHTML=d.projects.filter(p=>filter==='All'||p.category===filter).map(projCard).join('');document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;work(home);document.getElementById('work').scrollIntoView({block:'start'})});}
function detail(id){let idx=d.projects.findIndex(p=>p.id===id);if(idx<0){work();return}let p=d.projects[idx],next=d.projects[(idx+1)%d.projects.length];app.innerHTML=`<section class="project-hero"><a class="back" href="#/Project">← All projects</a><div class="micro">${esc(p.category)} ${p.year?' / '+esc(p.year):''}</div><h1>${esc(p.title)}</h1><div class="project-sub"><span>${esc(p.subtitle)}</span><span>${esc(p.year)}</span></div></section><div class="project-cover">${im(p.images?.[0])}</div><section class="project-body"><div class="micro">01 / The project</div><div class="description">${p.description.map(t=>`<p>${esc(t)}</p>`).join('')}</div></section>${p.images.length>1?`<div class="section-head"><h2>Gallery</h2></div><section class="gallery">${p.images.slice(1).map(u=>im(u)).join('')}</section>`:''}<a class="next" href="#/project/${encodeURIComponent(next.id)}"><span><span class="micro">Next project</span><br>${esc(next.title)}</span><span>↗</span></a>`;}


function about() {
  app.innerHTML = `
    <section class="about-page">

      <div class="about-heading">
        <div class="eyebrow">A little about me</div>
      </div>

      <div class="about-content-layout">
        <img
          src="assets/images/profile.jpg"
          alt="Samuel Vasington"
          class="profile-portrait"
        >

        <div class="about-copy">
          ${d.about.map(p => `<p>${esc(p)}</p>`).join('')}

          <h3>Areas of focus</h3>
          <p>Mechanical design · Mechatronics · Design for manufacturing · Robotics · CAD · Simulation</p>

          <h3>Connect</h3>
          <div class="links">
            ${d.linkedin ? `<a href="${esc(d.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ''}
            ${d.resume ? `<a href="${esc(d.resume)}" target="_blank" rel="noopener">Resume ↗</a>` : ''}
          </div>
        </div>
      </div>

    </section>
  `;
}

function route(){let path=decodeURIComponent(location.hash.slice(1)||'/');document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));if(path.startsWith('/project/'))detail(path.split('/')[2]);else if(path==='/about'){about();document.querySelector('[data-nav=about]').classList.add('active')}else{work(path!=='/work');document.querySelector('[data-nav=work]').classList.add('active')}document.getElementById('resumeLink').href=d.resume||'#/about';document.getElementById('resumeLink').target=d.resume?'_blank':'_self';window.scrollTo(0,0)}
document.getElementById('yr').textContent=new Date().getFullYear();window.addEventListener('hashchange',route);route();
