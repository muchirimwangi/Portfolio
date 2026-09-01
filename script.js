// Loads content.json and renders the page. Edit content.json to update site text — no HTML editing needed.

async function loadContent() {
  try {
    const res = await fetch('content.json');
    const data = await res.json();
    render(data);
  } catch (err) {
    console.error('Could not load content.json', err);
  }
}

function render(data) {
  document.getElementById('hero-name').textContent = data.name;
  document.getElementById('about-text').textContent = data.about;
  document.getElementById('footer-text').textContent = data.footer;

  // Typing effect for tagline
  typeText('hero-tagline', data.tagline);

  // Skills
  const skillsEl = document.getElementById('skills-list');
  skillsEl.innerHTML = data.skills
    .map(skill => `<span class="skill-badge">${skill}</span>`)
    .join('');

  // Projects
  const projectsEl = document.getElementById('projects-list');
  projectsEl.innerHTML = data.projects
    .map(p => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ''}
      </div>
    `)
    .join('');

  // Contact links
  const contactEl = document.getElementById('contact-list');
  contactEl.innerHTML = data.contact
    .map(c => `<a href="${c.url}" target="_blank" rel="noopener">${c.label}</a>`)
    .join('');
}

function typeText(elId, text, speed = 50) {
  const el = document.getElementById(elId);
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Dark/light mode toggle, remembers choice in memory for this session
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

loadContent();
