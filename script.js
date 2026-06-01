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
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 点击页面其他地方关闭导航栏
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navList.classList.contains('active')) {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        const messageData = {
            id: Date.now(),
            name: inputs[0].value,
            phone: inputs[1].value,
            email: inputs[2].value,
            subject: inputs[3].value,
            content: inputs[4].value,
            date: new Date().toLocaleString('zh-CN')
        };

        let messages = JSON.parse(localStorage.getItem('websiteMessages') || '[]');
        messages.push(messageData);
        localStorage.setItem('websiteMessages', JSON.stringify(messages));

        alert('感谢您的留言！我们会尽快与您联系。');
        contactForm.reset();
    });
}

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

document.querySelectorAll('.feature-card, .showcase-item, .value-card, .strength-item, .product-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

if (filterBtns.length > 0 && productItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}
