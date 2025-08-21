// Blog SEO Optimizer - JavaScript

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        // Randomly assign orange or blue color
        if (Math.random() > 0.5) {
            particle.style.setProperty('--particle-color', '#00B2FF');
            particle.style.background = '#00B2FF';
        }
        
        particlesContainer.appendChild(particle);
    }
}

// Text rotator functionality
function initTextRotator() {
    const textSets = document.querySelectorAll('.text-set');
    let currentIndex = 0;

    function rotateText() {
        textSets.forEach(set => set.classList.remove('active'));
        textSets[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % textSets.length;
    }

    // Rotate every 3 seconds
    setInterval(rotateText, 3000);
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Active navigation highlighting
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                const currentNav = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (currentNav) currentNav.classList.add('active');
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNav();
    });

    // Initial active nav update
    updateActiveNav();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Feature tabs functionality
function initFeatureTabs() {
    const tabs = document.querySelectorAll('.tab-item');
    const panels = document.querySelectorAll('.content-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding panel
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// SEO Optimization Demo
function initSEODemo() {
    const seoForm = document.getElementById('seoForm');
    const demoResult = document.getElementById('demoResult');

    seoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const htmlInput = document.getElementById('htmlInput').value;
        const keywordInput = document.getElementById('keywordInput').value;
        const seoScoreInput = document.getElementById('seoScoreInput').value;

        if (!htmlInput || !keywordInput || !seoScoreInput) {
            alert('Lütfen tüm alanları doldurun!');
            return;
        }

        // Show loading state
        const submitButton = seoForm.querySelector('.demo-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Optimize Ediliyor...';
        submitButton.disabled = true;

        try {
            // Simulate API call (replace with actual backend call)
            const result = await simulateSEOOptimization(htmlInput, keywordInput, parseInt(seoScoreInput));
            
            // Display results
            displayResults(result);
            
            // Show result section
            demoResult.style.display = 'block';
            demoResult.scrollIntoView({ behavior: 'smooth' });
            
        } catch (error) {
            alert('Optimizasyon sırasında bir hata oluştu: ' + error.message);
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Real SEO optimization with API
async function simulateSEOOptimization(htmlCode, focusKeyword, currentScore) {
    try {
        // API endpoint (replace with your actual API URL)
        const apiUrl = 'https://blog-seo-optimizer-9b5r.vercel.app/api/optimize';
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                html_code: htmlCode,
                focus_keyword: focusKeyword,
                seo_score: currentScore,
                categories: ['Blog'],
                tags: [],
                image: '',
                schema: 'Article'
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success) {
            return {
                scoreBefore: result.data.seo_score_before,
                scoreAfter: result.data.seo_score_after,
                improvement: result.data.improvement,
                optimizedHTML: result.data.optimized_html_wordpress
            };
        } else {
            throw new Error(result.error || 'Optimization failed');
        }
        
    } catch (error) {
        console.error('API Error:', error);
        
        // Fallback to simulation if API is not available
        console.log('Using fallback simulation...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const improvement = Math.floor(Math.random() * 30) + 15;
        const newScore = Math.min(currentScore + improvement, 100);
        const optimizedHTML = generateOptimizedHTML(htmlCode, focusKeyword);
        
        return {
            scoreBefore: currentScore,
            scoreAfter: newScore,
            improvement: improvement,
            optimizedHTML: optimizedHTML
        };
    }
}

// Generate optimized HTML (simplified version)
function generateOptimizedHTML(htmlCode, focusKeyword) {
    // This is a simplified version - in real implementation, use the actual SEO optimizer
    let optimized = htmlCode;
    
    // Add title tag if missing
    if (!optimized.includes('<title>')) {
        const title = `<title>${focusKeyword} Rehberi 2025 - Kapsamlı Kılavuz</title>`;
        optimized = optimized.replace('<head>', `<head>\n    ${title}`);
    }
    
    // Add meta description if missing
    if (!optimized.includes('name="description"')) {
        const metaDesc = `<meta name="description" content="${focusKeyword} konusunda kapsamlı rehber. 2025 güncel bilgiler ve uzman danışmanlık hizmetleri.">`;
        optimized = optimized.replace('<head>', `<head>\n    ${metaDesc}`);
    }
    
    // Add focus keyword to first paragraph if not present
    if (!optimized.toLowerCase().includes(focusKeyword.toLowerCase())) {
        const firstPIndex = optimized.indexOf('<p>');
        if (firstPIndex !== -1) {
            const insertIndex = firstPIndex + 3;
            optimized = optimized.slice(0, insertIndex) + 
                       `${focusKeyword} konusunda ` + 
                       optimized.slice(insertIndex);
        }
    }
    
    return optimized;
}

// Display optimization results
function displayResults(result) {
    document.getElementById('scoreBefore').textContent = result.scoreBefore;
    document.getElementById('scoreAfter').textContent = result.scoreAfter;
    document.getElementById('improvement').textContent = `+${result.improvement} puan iyileştirme!`;
    document.getElementById('optimizedHtml').textContent = result.optimizedHTML;
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition effect
        html.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            html.style.transition = '';
        }, 300);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initTextRotator();
    initMobileMenu();
    initNavigation();
    initSmoothScrolling();
    initFeatureTabs();
    initSEODemo();
    initThemeToggle();
    
    console.log('🚀 Blog SEO Optimizer - Web sitesi başlatıldı!');
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${x * 360}deg)`;
    });
});

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
