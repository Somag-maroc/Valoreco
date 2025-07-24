// Mobile Navigation Toggle - Move this to the top to ensure it works
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Marken Chat Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chatToggle');
    const chatPopup = document.getElementById('chatPopup');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatBody = document.querySelector('.chat-body');

    // Toggle chat popup
    if (chatToggle && chatPopup) {
        chatToggle.addEventListener('click', () => {
            chatPopup.classList.add('active');
            chatToggle.style.display = 'none';
        });

        chatClose.addEventListener('click', () => {
            chatPopup.classList.remove('active');
            chatToggle.style.display = 'flex';
        });
    }

    // Send chat message
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'chat-message user-message';
            userMessage.style.marginLeft = 'auto';
            userMessage.style.marginRight = '0';
            userMessage.style.background = 'var(--marken-accent)';
            userMessage.style.color = 'white';
            userMessage.innerHTML = `<p>${message}</p>`;
            chatBody.insertBefore(userMessage, chatBody.lastElementChild);

            // Clear input
            chatInput.value = '';

            // Simulate response
            setTimeout(() => {
                const response = document.createElement('div');
                response.className = 'chat-message';
                response.innerHTML = `<p>Merci pour votre message. Un de nos experts vous répondra dans les plus brefs délais.</p>`;
                chatBody.insertBefore(response, chatBody.lastElementChild);
                
                // Scroll to bottom
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    }

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (chatPopup && chatPopup.classList.contains('active')) {
            if (!chatPopup.contains(e.target) && !chatToggle.contains(e.target)) {
                chatPopup.classList.remove('active');
                chatToggle.style.display = 'flex';
            }
        }
    });
});

// Marken Header Hide/Show Scroll Effect
let lastScrollY = window.scrollY;
let isScrolling = false;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header.marken-style');
    
    if (header) {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class when scrolling down
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            header.classList.add('hidden');
            header.classList.remove('visible');
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show header
            header.classList.remove('hidden');
            header.classList.add('visible');
        }
        
        // Always show header at the top
        if (currentScrollY <= 50) {
            header.classList.remove('hidden');
            header.classList.add('visible');
        }
        
        lastScrollY = currentScrollY;
    }
});

// Marken Button Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const markenButtons = document.querySelectorAll('.marken-btn');
    
    markenButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Header "Demander un devis" button functionality
    const headerDevisBtn = document.querySelector('.nav-actions .btn-track');
    if (headerDevisBtn) {
        headerDevisBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // "Télécharger le catalogue" button functionality
    const catalogueBtn = document.querySelector('.btn-secondary.marken-btn[href="#"]');
    if (catalogueBtn) {
        catalogueBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Le catalogue sera bientôt disponible au téléchargement.');
        });
    }
    
    // Product search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchForm && searchInput && searchBtn) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleProductSearch();
        });
        
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleProductSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleProductSearch();
            }
        });
    }
    
    function handleProductSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Rediriger vers la page produits avec le terme de recherche
            window.location.href = `produits.html?search=${encodeURIComponent(searchTerm)}`;
        } else {
            // Si aucun terme de recherche, rediriger vers la page produits
            window.location.href = 'produits.html';
        }
    }
});

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !service || !message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Simulate form submission
            alert('Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.');
            this.reset();
        });
    }
});

// Dropdown Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Desktop hover functionality
        if (window.innerWidth > 900) {
            dropdown.addEventListener('mouseenter', () => {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            });
        }
        
        // Mobile click functionality
        if (window.innerWidth <= 900) {
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Initialize AOS (Animate On Scroll) - Only if available
try {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
} catch (error) {
    console.log('AOS not available, skipping animation initialization');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Novowood Showcase Rotation
let currentShowcaseIndex = 0;
const showcaseItems = document.querySelectorAll('.showcase-item');

function rotateShowcase() {
    showcaseItems.forEach(item => item.classList.remove('active'));
    showcaseItems[currentShowcaseIndex].classList.add('active');
    currentShowcaseIndex = (currentShowcaseIndex + 1) % showcaseItems.length;
}

// Start showcase rotation after 3 seconds
setTimeout(() => {
    setInterval(rotateShowcase, 4000);
}, 3000);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.service || !data.message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Message envoyé avec succès ! Nous vous contacterons bientôt.', 'success');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy loading for images (if real images are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Counter animation for statistics (if needed)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when section is visible
const counterSection = document.querySelector('.statistics');
if (counterSection) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counterObserver.observe(counterSection);
}

// Smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
}

// Add reveal animation styles
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Initialize reveal animation
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Preloader (if needed)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-green);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 66, 37, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 6px 25px rgba(0, 66, 37, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 4px 20px rgba(0, 66, 37, 0.3)';
    });
}

// Initialize back to top button
createBackToTopButton();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedRevealOnScroll = debounce(revealOnScroll, 10);
window.addEventListener('scroll', debouncedRevealOnScroll);

// Console welcome message
console.log(`
%cValoreco SARL
%cSolutions durables pour construction et agriculture
%cDéveloppé avec ❤️ pour l'excellence
`, 
'color: #004225; font-size: 24px; font-weight: bold;',
'color: #6c757d; font-size: 14px;',
'color: #004225; font-size: 12px;'
);

// Dynamic Counter Animation for Statistics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number based on the target
        let displayValue;
        if (target >= 1000 && target < 1000000) {
            displayValue = Math.floor(current / 1000) + 'K+';
        } else if (target >= 1000000) {
            displayValue = Math.floor(current / 1000000) + 'M+';
        } else if (target === 98) {
            displayValue = Math.floor(current) + '%';
        } else {
            displayValue = Math.floor(current) + '+';
        }
        
        element.textContent = displayValue;
    }, 16);
}

// Intersection Observer for Statistics Animation
function initStatisticsAnimation() {
    const statsSection = document.querySelector('.clients-stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValues = entry.target.querySelectorAll('.stat-value');
                
                statValues.forEach((statValue, index) => {
                    // Add a small delay for each stat to create a staggered effect
                    setTimeout(() => {
                        statValue.classList.add('counting');
                        
                        // Get the target number from the text content
                        const text = statValue.textContent;
                        let target;
                        
                        if (text.includes('K+')) {
                            target = parseInt(text.replace('K+', '')) * 1000;
                        } else if (text.includes('M+')) {
                            target = parseInt(text.replace('M+', '')) * 1000000;
                        } else if (text.includes('%')) {
                            target = parseInt(text.replace('%', ''));
                        } else {
                            target = parseInt(text.replace('+', ''));
                        }
                        
                        // Start the counter animation
                        animateCounter(statValue, target, 2000);
                    }, index * 300); // 300ms delay between each stat
                });
                
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(statsSection);
}

// Initialize statistics animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize statistics animation
    initStatisticsAnimation();
    
    // Create back to top button
    createBackToTopButton();
    
    // Initialize reveal animation
    revealOnScroll();
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 