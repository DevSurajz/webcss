 document.getElementById('year').textContent = new Date().getFullYear();

  
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn?.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
      // focus first link when opening
      if (!mobileMenu.classList.contains('hidden')) {
        const first = mobileMenu.querySelector('a');
        first?.focus();
        menuBtn.setAttribute('aria-label', 'Close menu');
      } else {
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.focus();
      }
    });

  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.focus();
      }
    });

    // Theme visual toggle (only visual accent — site remains optimized for dark mode by default)
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let lightMode = false;
    themeToggle?.addEventListener('click', () => {
      lightMode = !lightMode;
      if (lightMode) {
        // subtle lightening: add a class to body that will slightly change glass backgrounds
        document.body.classList.add('light-mode');
        themeIcon.innerHTML = '<path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="4" stroke-width="1.2"/>';
      } else {
        document.body.classList.remove('light-mode');
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });

  
    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        // collapse all other accordions
        document.querySelectorAll('.accordion-btn').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
        });
        btn.setAttribute('aria-expanded', String(!expanded));
      });
      // Enable keyboard open/close
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    
    document.getElementById('contactForm')?.addEventListener('submit', (ev) => {
      ev.preventDefault();
      // simple validation
      const name = ev.target.name.value.trim();
      const email = ev.target.email.value.trim();
      if (!name || !email) {
        alert('Please provide your name and work email.');
        return;
      }
      // Simulate submission feedback
      ev.target.querySelector('button[type="submit"]').textContent = 'Sending...';
      setTimeout(() => {
        ev.target.querySelector('button[type="submit"]').textContent = 'Send request';
        alert('Thanks — we will be in touch shortly!');
        ev.target.reset();
      }, 800);
    });