import './about.css';

export function About() {
  const main = document.querySelector('main');
  const aboutSection = document.createElement('section');
  main.id = 'about';
  aboutSection.className = 'about';

  aboutSection.innerHTML = `
    <div class="bento-about">
      <div class="bento-box quote">
        <p>
          "I create <span class="highlight">unique and meaningful experiences</span>. 
          Nature inspires me, and I find energy in moments of pause. 
          When I'm not building, I’m into <span class="highlight">games</span>, 
          <span class="highlight">music</span>, and <span class="highlight">sneakers</span>."
        </p>
      </div>
      

      <div class="bento-box-avatar">
        <img src="/images/yoo.webp" alt="Sergio Agulla" class="yo" />
      </div>

      <div class="bento-box interests">
        <ul>
          <li><a href = "https://www.twitch.tv/serxa92">Watch me gaming here <img src="icons/enlace.png" alt="enlace externo"/></a></li>
          <li><a href = "https://www.instagram.com/4orty6icks/">Sneakers IG <img src="icons/enlace.png" alt="enlace externo"/></a></li>
          <li><a href = "https://open.spotify.com/user/serxa92?si=b592a9858f8e42ba">My Spotify profile <img src="icons/enlace.png" alt="enlace externo"/></a></li>
        </ul>
      </div>
      
    
  `;

  main.appendChild(aboutSection);
}
