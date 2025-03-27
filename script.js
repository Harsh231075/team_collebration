document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animation for team members on scroll
  const teamMembers = document.querySelectorAll('.team-member');
  const projectCards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  teamMembers.forEach(member => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(20px)';
    member.style.transition = 'all 0.6s ease-out';
    observer.observe(member);
  });

  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });

  // Join button interaction
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! This feature is coming soon.');
  });

  // Project view buttons
  document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function () {
      const projectName = this.parentElement.querySelector('h3').textContent;
      alert(`Viewing ${projectName}. This feature is coming soon.`);
    });
  });
});