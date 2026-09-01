// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Data Annotation for Machine Learning",
        excerpt: "Learn the fundamentals of data annotation and why it's crucial for training accurate ML models.",
        date: "September 1, 2026",
        category: "Data Annotation",
        content: "Data annotation is the process of labeling data to help machine learning models understand and learn from it. This comprehensive guide covers the fundamentals, best practices, and industry standards.\n\nKey Topics:\n- Fundamentals of data annotation\n- Importance in ML/AI development\n- Annotation methodologies\n- Quality assurance processes\n- Tools and platforms\n- Career opportunities"
    },
    {
        id: 2,
        title: "Essential ICT Skills Every Technician Should Know",
        excerpt: "An in-depth look at core technical skills required for ICT technicians in 2026.",
        date: "August 28, 2026",
        category: "ICT",
        content: "As an ICT technician, staying updated with essential technical skills is crucial for career growth. This guide covers must-have competencies.\n\nEssential Skills:\n- Network Administration\n- System Administration (Windows & Linux)\n- Hardware Maintenance\n- Cloud Services\n- Cybersecurity Fundamentals\n- Help Desk Support\n- Troubleshooting methodologies\n- Documentation practices"
    },
    {
        id: 3,
        title: "Mastering Image Annotation for Computer Vision",
        excerpt: "Explore advanced techniques for image annotation including bounding boxes and segmentation.",
        date: "August 25, 2026",
        category: "Data Annotation",
        content: "Image annotation is fundamental for computer vision projects. This article covers advanced techniques and best practices.\n\nAnnotation Techniques:\n- Bounding Box Annotation\n- Semantic Segmentation\n- Instance Segmentation\n- Keypoint Annotation\n- Polygon Annotation\n- Quality metrics\n- Common challenges and solutions"
    },
    {
        id: 4,
        title: "Audio Transcription Best Practices",
        excerpt: "Master accurate audio transcription for speech recognition systems and voice analysis.",
        date: "August 22, 2026",
        category: "Data Annotation",
        content: "Audio transcription is critical for speech recognition and voice analysis systems. Learn professional transcription techniques.\n\nTranscription Essentials:\n- Audio format optimization\n- Time-aligned transcription\n- Accent and dialect handling\n- Punctuation standards\n- Quality assurance methods\n- Efficiency techniques\n- Industry-standard tools"
    },
    {
        id: 5,
        title: "Network Administration 101: Setting Up Your First Server",
        excerpt: "A comprehensive guide to server setup and network infrastructure management.",
        date: "August 19, 2026",
        category: "ICT",
        content: "Network administration is core to ICT work. This guide walks through setting up and maintaining server infrastructure.\n\nServer Setup Process:\n1. Hardware selection and installation\n2. OS installation\n3. Network configuration\n4. User account management\n5. Security setup\n6. Backup and recovery\n7. Monitoring and maintenance\n\nProper setup ensures reliability and security."
    },
    {
        id: 6,
        title: "Video Annotation: Frame-by-Frame Guide",
        excerpt: "Learn complete video annotation for action recognition and activity detection.",
        date: "August 16, 2026",
        category: "Data Annotation",
        content: "Video annotation is increasingly important for AI and action recognition. This guide covers the complete process.\n\nVideo Annotation Process:\n- Frame selection and sampling\n- Action recognition\n- Temporal annotation\n- Multi-object tracking\n- Quality assurance\n- Annotation tools\n- Performance metrics\n\nEffective video annotation requires attention to detail and temporal understanding."
    }
];

// Load blog posts on homepage
function loadBlogHomepage() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    const recentPosts = blogPosts.slice(0, 3);
    blogGrid.innerHTML = recentPosts.map(post => `
        <div class="blog-card">
            <div class="blog-card-header">
                <div class="blog-card-title">${post.title}</div>
                <div class="blog-card-date">${post.date}</div>
            </div>
            <div class="blog-card-body">
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span class="blog-category">${post.category}</span>
                    <a href="blog.html#post-${post.id}" style="color: var(--accent-cyan); text-decoration: none; font-weight: 500;">Read More →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load all blog posts on blog page
function loadBlogPage() {
    const blogPostsSection = document.getElementById('blogPostsSection');
    if (!blogPostsSection) return;

    blogPostsSection.innerHTML = blogPosts.map(post => `
        <div class="blog-post" id="post-${post.id}">
            <h2>${post.title}</h2>
            <div class="blog-post-meta">
                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                <span class="blog-category">${post.category}</span>
            </div>
            <div class="blog-post-content">
                ${post.content.split('\n').map(para => para.trim() ? `<p>${para}</p>` : '').join('')}
            </div>
        </div>
    `).join('');
}

// Load content on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogHomepage();
    loadBlogPage();
});

console.log('✓ Blog script loaded');