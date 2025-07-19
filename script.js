// BookHaven JavaScript Application

// Data
const booksData = {
  "books": [
    {
      "id": "1",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "isbn": "9780743273565",
      "price": 12.99,
      "originalPrice": 15.99,
      "category": "Classic Literature",
      "description": "A timeless American classic about the Jazz Age, wealth, and the American Dream. Set in the summer of 1922, it tells the story of Jay Gatsby's pursuit of Daisy Buchanan.",
      "rating": 4.2,
      "reviews": 1247,
      "publishedDate": "1925-04-10",
      "pages": 180,
      "language": "English",
      "publisher": "Scribner",
      "inStock": true,
      "stockQuantity": 45,
      "coverImage": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      "tags": ["classic", "american literature", "romance", "tragedy"],
      "featured": true,
      "bestseller": true
    },
    {
      "id": "2",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "isbn": "9780061120084",
      "price": 13.99,
      "originalPrice": 16.99,
      "category": "Classic Literature",
      "description": "A gripping tale of racial injustice and childhood innocence in Depression-era Alabama. Winner of the Pulitzer Prize.",
      "rating": 4.5,
      "reviews": 2156,
      "publishedDate": "1960-07-11",
      "pages": 281,
      "language": "English",
      "publisher": "J.B. Lippincott & Co.",
      "inStock": true,
      "stockQuantity": 32,
      "coverImage": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      "tags": ["classic", "social justice", "coming of age", "pulitzer prize"],
      "featured": true,
      "bestseller": true
    },
    {
      "id": "3",
      "title": "1984",
      "author": "George Orwell",
      "isbn": "9780451524935",
      "price": 11.99,
      "originalPrice": 14.99,
      "category": "Science Fiction",
      "description": "A dystopian masterpiece about totalitarianism, surveillance, and the power of language. More relevant than ever in our digital age.",
      "rating": 4.3,
      "reviews": 1893,
      "publishedDate": "1949-06-08",
      "pages": 328,
      "language": "English",
      "publisher": "Secker & Warburg",
      "inStock": true,
      "stockQuantity": 28,
      "coverImage": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      "tags": ["dystopian", "science fiction", "political", "classic"],
      "featured": true,
      "bestseller": false
    },
    {
      "id": "4",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "isbn": "9780141439518",
      "price": 10.99,
      "originalPrice": 13.99,
      "category": "Romance",
      "description": "A witty and romantic novel about love, marriage, and social expectations in Regency England. Austen's most beloved work.",
      "rating": 4.4,
      "reviews": 1672,
      "publishedDate": "1813-01-28",
      "pages": 432,
      "language": "English",
      "publisher": "T. Egerton",
      "inStock": true,
      "stockQuantity": 51,
      "coverImage": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      "tags": ["romance", "classic", "regency", "social commentary"],
      "featured": false,
      "bestseller": true
    },
    {
      "id": "5",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "isbn": "9780316769174",
      "price": 12.49,
      "originalPrice": 15.49,
      "category": "Coming of Age",
      "description": "A controversial and influential novel following Holden Caulfield's journey through New York City and his struggles with growing up.",
      "rating": 3.9,
      "reviews": 1234,
      "publishedDate": "1951-07-16",
      "pages": 277,
      "language": "English",
      "publisher": "Little, Brown and Company",
      "inStock": true,
      "stockQuantity": 19,
      "coverImage": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      "tags": ["coming of age", "controversial", "american literature", "bildungsroman"],
      "featured": false,
      "bestseller": false
    },
    {
      "id": "6",
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "isbn": "9780747532699",
      "price": 14.99,
      "originalPrice": 17.99,
      "category": "Fantasy",
      "description": "The magical story that started it all. Follow Harry Potter as he discovers he's a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
      "rating": 4.7,
      "reviews": 3456,
      "publishedDate": "1997-06-26",
      "pages": 223,
      "language": "English",
      "publisher": "Bloomsbury",
      "inStock": true,
      "stockQuantity": 87,
      "coverImage": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      "tags": ["fantasy", "magic", "young adult", "adventure"],
      "featured": true,
      "bestseller": true
    },
    {
      "id": "7",
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "isbn": "9780544003415",
      "price": 19.99,
      "originalPrice": 24.99,
      "category": "Fantasy",
      "description": "The epic fantasy trilogy that defined the genre. Follow Frodo and the Fellowship on their quest to destroy the One Ring and save Middle-earth.",
      "rating": 4.6,
      "reviews": 2789,
      "publishedDate": "1954-07-29",
      "pages": 1216,
      "language": "English",
      "publisher": "Allen & Unwin",
      "inStock": true,
      "stockQuantity": 34,
      "coverImage": "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
      "tags": ["fantasy", "epic", "adventure", "trilogy"],
      "featured": true,
      "bestseller": true
    },
    {
      "id": "8",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "isbn": "9780547928227",
      "price": 11.99,
      "originalPrice": 14.99,
      "category": "Fantasy",
      "description": "The charming prequel to The Lord of the Rings. Join Bilbo Baggins on his unexpected journey to the Lonely Mountain.",
      "rating": 4.5,
      "reviews": 1987,
      "publishedDate": "1937-09-21",
      "pages": 304,
      "language": "English",
      "publisher": "Allen & Unwin",
      "inStock": true,
      "stockQuantity": 42,
      "coverImage": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      "tags": ["fantasy", "adventure", "prequel", "children's literature"],
      "featured": false,
      "bestseller": true
    },
    {
      "id": "9",
      "title": "Dune",
      "author": "Frank Herbert",
      "isbn": "9780441013593",
      "price": 16.99,
      "originalPrice": 19.99,
      "category": "Science Fiction",
      "description": "A science fiction masterpiece about politics, religion, and ecology on the desert planet Arrakis. Winner of the Hugo and Nebula Awards.",
      "rating": 4.3,
      "reviews": 1654,
      "publishedDate": "1965-08-01",
      "pages": 688,
      "language": "English",
      "publisher": "Chilton Books",
      "inStock": true,
      "stockQuantity": 29,
      "coverImage": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      "tags": ["science fiction", "space opera", "politics", "hugo award"],
      "featured": true,
      "bestseller": false
    },
    {
      "id": "10",
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "isbn": "9780385490818",
      "price": 13.99,
      "originalPrice": 16.99,
      "category": "Dystopian Fiction",
      "description": "A haunting dystopian novel about a totalitarian society where women's rights have been stripped away. Increasingly relevant in modern times.",
      "rating": 4.1,
      "reviews": 2134,
      "publishedDate": "1985-08-17",
      "pages": 311,
      "language": "English",
      "publisher": "McClelland & Stewart",
      "inStock": true,
      "stockQuantity": 37,
      "coverImage": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      "tags": ["dystopian", "feminism", "political", "contemporary"],
      "featured": false,
      "bestseller": true
    },
    {
      "id": "11",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "isbn": "9780062315007",
      "price": 12.99,
      "originalPrice": 15.99,
      "category": "Philosophy",
      "description": "A philosophical novel about following your dreams and finding your personal legend. A modern spiritual classic.",
      "rating": 4.0,
      "reviews": 1876,
      "publishedDate": "1988-01-01",
      "pages": 163,
      "language": "English",
      "publisher": "HarperCollins",
      "inStock": true,
      "stockQuantity": 55,
      "coverImage": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      "tags": ["philosophy", "spiritual", "self-help", "adventure"],
      "featured": false,
      "bestseller": true
    },
    {
      "id": "12",
      "title": "Sapiens",
      "author": "Yuval Noah Harari",
      "isbn": "9780062316097",
      "price": 17.99,
      "originalPrice": 21.99,
      "category": "History",
      "description": "A brief history of humankind, exploring how Homo sapiens came to dominate the world. Thought-provoking and accessible.",
      "rating": 4.4,
      "reviews": 1432,
      "publishedDate": "2011-01-01",
      "pages": 443,
      "language": "English",
      "publisher": "Harper",
      "inStock": true,
      "stockQuantity": 41,
      "coverImage": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      "tags": ["history", "anthropology", "non-fiction", "bestseller"],
      "featured": true,
      "bestseller": true
    }
  ],
  "categories": [
    {"id": "1", "name": "Classic Literature", "count": 4},
    {"id": "2", "name": "Science Fiction", "count": 2},
    {"id": "3", "name": "Fantasy", "count": 3},
    {"id": "4", "name": "Romance", "count": 1},
    {"id": "5", "name": "Coming of Age", "count": 1},
    {"id": "6", "name": "Dystopian Fiction", "count": 1},
    {"id": "7", "name": "Philosophy", "count": 1},
    {"id": "8", "name": "History", "count": 1}
  ]
};

// Global state
let currentBooks = booksData.books;
let currentCategory = 'all';
let currentSearchTerm = '';
let cart = [];
let currentSort = 'default';

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryPills = document.getElementById('categoryPills');
const booksContainer = document.getElementById('booksContainer');
const noResults = document.getElementById('noResults');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartContent = document.getElementById('cartContent');
const cartEmpty = document.getElementById('cartEmpty');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const bookModal = document.getElementById('bookModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const bookDetail = document.getElementById('bookDetail');
const featuredCarousel = document.getElementById('featuredCarousel');
const sectionTitle = document.getElementById('sectionTitle');
const sortSelect = document.getElementById('sortSelect');
const backToTop = document.getElementById('backToTop');
const browseBtn = document.getElementById('browseBtn');
const toastContainer = document.getElementById('toastContainer');
const continueShopping = document.getElementById('continueShopping');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderCategoryPills();
    renderFeaturedCarousel();
    renderBooks();
    setupEventListeners();
    updateCartUI();
    setupScrollToTop();
}

function setupEventListeners() {
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Search
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    searchBtn.addEventListener('click', handleSearch);
    
    // Cart
    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openCart();
    });
    cartClose.addEventListener('click', closeCart);
    
    // Modal
    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    
    // Sort
    sortSelect.addEventListener('change', handleSort);
    
    // Browse button
    browseBtn.addEventListener('click', () => {
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Continue shopping buttons
    if (continueShopping) {
        continueShopping.addEventListener('click', closeCart);
    }
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', closeCart);
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Close modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCart();
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                nav.classList.remove('active');
            }
        });
    });
}

function toggleMobileMenu() {
    nav.classList.toggle('active');
}

function renderCategoryPills() {
    const allPill = categoryPills.querySelector('[data-category="all"]');
    
    booksData.categories.forEach(category => {
        const pill = document.createElement('button');
        pill.className = 'category-pill';
        pill.setAttribute('data-category', category.name);
        pill.textContent = `${category.name} (${category.count})`;
        pill.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            filterByCategory(category.name);
        });
        categoryPills.appendChild(pill);
    });
    
    allPill.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        filterByCategory('all');
    });
}

function filterByCategory(category) {
    currentCategory = category;
    currentSearchTerm = '';
    searchInput.value = '';
    
    // Update active pill
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Filter books
    if (category === 'all') {
        currentBooks = booksData.books;
        sectionTitle.textContent = 'All Books';
    } else {
        currentBooks = booksData.books.filter(book => book.category === category);
        sectionTitle.textContent = category;
    }
    
    applySorting();
    renderBooks();
}

function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    currentSearchTerm = searchTerm;
    
    if (searchTerm === '') {
        filterByCategory(currentCategory);
        return;
    }
    
    currentBooks = booksData.books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm) ||
               book.author.toLowerCase().includes(searchTerm) ||
               book.isbn.includes(searchTerm) ||
               book.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    });
    
    if (currentCategory !== 'all') {
        currentBooks = currentBooks.filter(book => book.category === currentCategory);
    }
    
    sectionTitle.textContent = `Search Results for "${searchTerm}"`;
    applySorting();
    renderBooks();
}

function handleSort() {
    currentSort = sortSelect.value;
    applySorting();
    renderBooks();
}

function applySorting() {
    switch (currentSort) {
        case 'price-low':
            currentBooks.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentBooks.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            currentBooks.sort((a, b) => b.rating - a.rating);
            break;
        case 'title':
            currentBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            // Default sorting: featured first, then bestsellers, then by rating
            currentBooks.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                if (a.bestseller && !b.bestseller) return -1;
                if (!a.bestseller && b.bestseller) return 1;
                return b.rating - a.rating;
            });
    }
}

function renderFeaturedCarousel() {
    const featuredBooks = booksData.books.filter(book => book.featured).slice(0, 4);
    
    featuredCarousel.innerHTML = featuredBooks.map(book => `
        <div class="carousel-item" data-book-id="${book.id}">
            <img src="${book.coverImage}" alt="${book.title}">
            <h4>${book.title}</h4>
            <p>by ${book.author}</p>
        </div>
    `).join('');
    
    // Add event listeners to carousel items
    featuredCarousel.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            openBookDetail(bookId);
        });
    });
}

function renderBooks() {
    if (currentBooks.length === 0) {
        booksContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    booksContainer.style.display = 'grid';
    noResults.style.display = 'none';
    
    booksContainer.innerHTML = currentBooks.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            ${book.featured ? '<div class="book-card__badge">Featured</div>' : ''}
            ${book.bestseller && !book.featured ? '<div class="book-card__badge book-card__badge--bestseller">Bestseller</div>' : ''}
            
            <img src="${book.coverImage}" alt="${book.title}" class="book-card__image">
            
            <h4 class="book-card__title">${book.title}</h4>
            <p class="book-card__author">by ${book.author}</p>
            
            <div class="book-card__rating">
                <span class="stars">${generateStars(book.rating)}</span>
                <span class="rating-text">${book.rating} (${book.reviews} reviews)</span>
            </div>
            
            <div class="book-card__price">
                <span class="price-current">$${book.price}</span>
                ${book.originalPrice > book.price ? `<span class="price-original">$${book.originalPrice}</span>` : ''}
            </div>
            
            <div class="book-card__actions">
                <button class="btn--add-to-cart" data-book-id="${book.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to book cards and buttons
    booksContainer.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if button was clicked
            if (e.target.classList.contains('btn--add-to-cart')) {
                return;
            }
            const bookId = this.getAttribute('data-book-id');
            openBookDetail(bookId);
        });
    });
    
    booksContainer.querySelectorAll('.btn--add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const bookId = this.getAttribute('data-book-id');
            addToCart(bookId);
        });
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

function openBookDetail(bookId) {
    const book = booksData.books.find(b => b.id === bookId);
    if (!book) return;
    
    bookDetail.innerHTML = `
        <div class="book-detail__image">
            <img src="${book.coverImage}" alt="${book.title}">
        </div>
        
        <div class="book-detail__info">
            <h2>${book.title}</h2>
            <p class="book-detail__author">by ${book.author}</p>
            
            <div class="book-detail__rating">
                <span class="stars">${generateStars(book.rating)}</span>
                <span class="rating-text">${book.rating} (${book.reviews} reviews)</span>
            </div>
            
            <div class="book-detail__price">
                <span class="price-current">$${book.price}</span>
                ${book.originalPrice > book.price ? `<span class="price-original">$${book.originalPrice}</span>` : ''}
            </div>
            
            <p class="book-detail__description">${book.description}</p>
            
            <div class="book-detail__meta">
                <div class="meta-item">
                    <span class="meta-label">Pages</span>
                    <span class="meta-value">${book.pages}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Language</span>
                    <span class="meta-value">${book.language}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Publisher</span>
                    <span class="meta-value">${book.publisher}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Published</span>
                    <span class="meta-value">${new Date(book.publishedDate).getFullYear()}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">ISBN</span>
                    <span class="meta-value">${book.isbn}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Stock</span>
                    <span class="meta-value">${book.stockQuantity} available</span>
                </div>
            </div>
            
            <div class="book-detail__actions">
                <div class="quantity-selector">
                    <button class="quantity-btn" id="quantityMinus">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" max="${book.stockQuantity}" id="quantityInput">
                    <button class="quantity-btn" id="quantityPlus">+</button>
                </div>
                
                <button class="btn btn--primary" id="addToCartModal" data-book-id="${book.id}">
                    Add to Cart
                </button>
                
                <button class="btn btn--secondary" id="buyNowBtn" data-book-id="${book.id}">
                    Buy Now
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners to modal buttons
    const quantityInput = document.getElementById('quantityInput');
    const quantityMinus = document.getElementById('quantityMinus');
    const quantityPlus = document.getElementById('quantityPlus');
    const addToCartModal = document.getElementById('addToCartModal');
    const buyNowBtn = document.getElementById('buyNowBtn');
    
    quantityMinus.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    quantityPlus.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        const maxValue = parseInt(quantityInput.max);
        if (currentValue < maxValue) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    addToCartModal.addEventListener('click', () => {
        const bookId = addToCartModal.getAttribute('data-book-id');
        const quantity = parseInt(quantityInput.value);
        addToCart(bookId, quantity);
    });
    
    buyNowBtn.addEventListener('click', () => {
        const bookId = buyNowBtn.getAttribute('data-book-id');
        const quantity = parseInt(quantityInput.value);
        addToCart(bookId, quantity);
        closeModal();
        handleCheckout();
    });
    
    bookModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    bookModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCart(bookId, quantity = 1) {
    const book = booksData.books.find(b => b.id === bookId);
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: bookId,
            title: book.title,
            author: book.author,
            price: book.price,
            coverImage: book.coverImage,
            quantity: quantity
        });
    }
    
    updateCartUI();
    showToast(`Added "${book.title}" to cart!`);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCartUI();
    renderCartItems();
    showToast('Item removed from cart');
}

function updateCartQuantity(bookId, newQuantity) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(bookId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            renderCartItems();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'block';
        cartFooter.style.display = 'block';
        renderCartItems();
    }
}

function renderCartItems() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.coverImage}" alt="${item.title}" class="cart-item__image">
            <div class="cart-item__info">
                <h4 class="cart-item__title">${item.title}</h4>
                <p class="cart-item__author">by ${item.author}</p>
                <div class="cart-item__controls">
                    <div class="cart-item__quantity">
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <span class="cart-item__price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button class="cart-item__remove" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
    `).join('');
}

function openCart() {
    cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Simulate checkout process
    showToast('Proceeding to checkout...');
    setTimeout(() => {
        showToast('Thank you for your purchase!');
        cart = [];
        updateCartUI();
        closeCart();
    }, 2000);
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function setupScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('active')) {
        closeCart();
    }
});