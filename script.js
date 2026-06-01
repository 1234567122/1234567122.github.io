const scrollTopBtn = document.getElementById('scrollTop');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');
const contactForm = document.getElementById('contactForm');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
        navbar.classList.add('scrolled');
    } else {
        scrollTopBtn.classList.remove('show');
        navbar.classList.remove('scrolled');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input, textarea');
    const message = {
        id: Date.now(),
        name: inputs[0].value,
        email: inputs[1].value,
        content: inputs[2].value,
        date: new Date().toLocaleString('zh-CN')
    };
    
    let messages = JSON.parse(localStorage.getItem('websiteMessages') || '[]');
    messages.push(message);
    localStorage.setItem('websiteMessages', JSON.stringify(messages));
    
    alert('感谢您的留言！我们会尽快回复您。');
    contactForm.reset();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.work-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
