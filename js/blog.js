// Sample Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Data Annotation for Machine Learning",
        excerpt: "Learn the fundamentals of data annotation and why it's crucial for training accurate ML models. Discover best practices and tools used in the industry.",
        date: "September 1, 2026",
        category: "Data Annotation",
        content: "Data annotation is the process of labeling data to help machine learning models understand and learn from it. In this article, we'll explore the basics of data annotation, its importance, and how to get started. Whether you're annotating text, images, video, or audio, the principles remain the same: accuracy, consistency, and quality.\n\nKey points covered:\n- What is data annotation?\n- Why is it important?\n- Best practices for annotation\n- Tools and platforms used in the industry\n- Career opportunities in data annotation"
    },
    {
        id: 2,
        title: "Essential ICT Skills Every Technician Should Know",
        excerpt: "An in-depth look at the core technical skills required for ICT technicians in 2026. From network management to cybersecurity basics, we cover it all.",
        date: "August 28, 2026",
        category: "ICT",
        content: "As an ICT technician, staying up-to-date with essential technical skills is crucial for career growth and providing excellent support to users. This comprehensive guide covers the skills every technician should master.\n\nEssential ICT Skills:\n- Network Administration and Troubleshooting\n- System Administration (Windows & Linux)\n- Hardware Maintenance and Repair\n- Cloud Services and Virtualization\n- Cybersecurity Fundamentals\n- Help Desk Support and Documentation\n- Problem Solving and Critical Thinking\n\nIn today's digital landscape, ICT technicians are more valuable than ever, and continuous learning is key to success."
    },
    {
        id: 3,
        title: "Mastering Image Annotation for Computer Vision",
        excerpt: "Explore advanced techniques for image annotation including bounding boxes, semantic segmentation, and object detection labeling.",
        date: "August 25, 2026",
        category: "Data Annotation",
        content: "Image annotation is one of the most common types of data labeling in computer vision projects. This article delves into different annotation techniques and best practices.\n\nImage Annotation Techniques:\n- Bounding Box Annotation: Drawing rectangles around objects\n- Semantic Segmentation: Pixel-level classification\n- Instance Segmentation: Combining object detection with segmentation\n- Keypoint Annotation: Marking specific points on objects\n- Polygon Annotation: Complex shape outlining\n\nAccuracy is paramount in image annotation as it directly impacts model performance. Learn pro tips and common pitfalls to avoid."
    },
    {
        id: 4,
        title: "Audio Transcription Best Practices",
        excerpt: "Master the art of accurate audio transcription for speech recognition and voice analysis. Learn techniques, challenges, and quality assurance methods.",
        date: "August 22, 2026",
        category: "Data Annotation",
        content: "Audio transcription is a critical component of audio annotation for machine learning. Accurate transcription ensures better speech recognition models and voice analysis systems.\n\nAudio Transcription Essentials:\n- Understanding audio formats and quality\n- Time-aligned transcription methods\n- Handling accents and regional dialects\n- Punctuation and capitalization conventions\n- Quality assurance and verification\n- Tools for audio transcription\n\nThis guide provides practical tips for improving transcription accuracy and efficiency."
    },
    {
        id: 5,
        title: "Network Administration 101: Setting Up Your First Server",
        excerpt: "A beginner's guide to network administration and server setup. Learn how to configure, secure, and maintain network infrastructure.",
        date: "August 19, 2026",
        category: "ICT",
        content: "Network administration is a core responsibility of ICT technicians. This guide walks you through setting up your first server and establishing a solid foundation for network management.\n\nServer Setup Process:\n1. Hardware Selection and Installation\n2. Operating System Installation (Windows/Linux)\n3. Network Configuration\n4. User Account Management\n5. Security Configuration\n6. Backup and Disaster Recovery\n7. Monitoring and Maintenance\n\nProper server setup ensures reliability, security, and optimal performance for your entire network."
    },
    {
        id: 6,
        title: "Video Annotation: Frame-by-Frame Guide",
        excerpt: "Learn the complete process of video annotation for action recognition and activity detection. Discover tools, techniques, and quality metrics.",
        date: "August 16, 2026",
        category: "Data Annotation",
        content: "Video annotation is increasingly important for action recognition, activity detection, and video understanding in AI. This comprehensive guide covers everything you need to know.\n\nVideo Annotation Process:\n- Frame Selection and Sampling\n- Action Recognition and Classification\n- Temporal Annotation Techniques\n- Multi-object Tracking\n- Quality Assurance in Video Annotation\n- Tools for Video Annotation\n- Performance Metrics\n\nEffective video annotation requires attention to detail and understanding of temporal relationships between frames."
    }
];

// Function to load blog posts on homepage
function loadBlogHomepage() {
    const blogGrid = document.getElementById('blog-grid');
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
                    <a href="blog.html#post-${post.id}" style="color: var(--secondary-color); text-decoration: none; font-weight: 500;">Read More →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to load all blog posts on blog page
function loadBlogPage() {
    const blogPosts_section = document.getElementById('blog-posts');
    if (!blogPosts_section) return;

    blogPosts_section.innerHTML = blogPosts.map(post => `
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

// Load appropriate content on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blog-grid')) {
        loadBlogHomepage();
    }
    if (document.getElementById('blog-posts')) {
        loadBlogPage();
    }
});