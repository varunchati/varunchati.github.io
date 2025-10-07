# Personal Academic Portfolio Website

A clean, modern, and interactive portfolio website for showcasing quantitative research and data science projects. Built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Mathematical Typesetting**: Beautiful LaTeX equations with MathJax
- **Interactive Elements**: Toggle-able code snippets and dynamic visualizations
- **Modern Aesthetic**: Clean design with artistic and mathematical themes
- **Project Showcases**: Highlight research with methodology and results
- **Hobbies Section**: Personal interests with professional presentation

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive elements and smooth animations
- **MathJax**: Beautiful mathematical notation
- **Font Awesome**: Professional icons
- **Google Fonts**: Modern typography (Inter + Playfair Display)

## 📁 Project Structure
yourusername.github.io/
- index.html # Main website file
- ev-dashboard.html # Interactive EV policy dashboard
- style.css # All styling and responsive design
- script.js # Interactive functionality
- README.md # This file
- Resume.pdf # Your resume (replace with yours)
- ScholarlyPaper.pdf # Research paper (replace with yours)
- assets/ # Optional: images and other assets
   - images/
   - documents/


## 🚀 Quick Start

### For Your Own Portfolio:

1. **Fork this repository** or create a new one named `yourusername.github.io`
2. **Customize the content** in `index.html`:
   - Replace personal information (name, email, bio)
   - Update project descriptions and links
   - Modify the skills and methodologies sections
   - Add your own research papers and resume

3. **Customize the styling** in `style.css`:
   - Update color scheme in `:root` variables
   - Modify fonts and typography
   - Adjust layout and spacing as needed

4. **Add your own projects**:
   - Follow the project card structure in the HTML
   - Include interactive elements like code snippets
   - Add links to your papers, code, or dashboards

5. **Deploy on GitHub Pages**:
   - Push your code to the main branch
   - GitHub automatically publishes it at `https://yourusername.github.io`

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Dark blue-gray */
    --secondary-color: #e74c3c;  /* Red for accents */
    --accent-color: #3498db;     /* Blue for links */
    --math-color: #8e44ad;       /* Purple for mathematical elements */
    --art-color: #e67e22;        /* Orange for artistic accents */
}
```
Adding New Projects
Use this template in index.html:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Title</h3>
        <span class="project-org">Organization</span>
    </div>
    <div class="project-content">
        <p>Project description...</p>
        <div class="project-tools">
            <span class="tool-tag">Tool 1</span>
            <span class="tool-tag">Tool 2</span>
        </div>
    </div>
    <div class="project-links">
        <a href="#" class="btn-link"><i class="fas fa-link"></i> Live Demo</a>
        <a href="#" class="btn-link"><i class="fab fa-github"></i> Code</a>
    </div>
</div>
```
Adding Interactive Elements
Use the toggle code pattern:

```html
<button class="code-toggle" onclick="toggleCode('unique-id')">
    <i class="fas fa-code"></i> View Code
</button>
<div id="unique-id" class="code-snippet">
    <!-- Your code content here -->
</div>
```
📊 Interactive Dashboards
The repository includes an example EV policy dashboard (ev-dashboard.html) that demonstrates:

Chart.js integration for data visualization

Interactive filters and controls

Responsive chart layouts

Research findings presentation

To create your own dashboard:

Study the ev-dashboard.html structure

Replace with your own data and charts

Customize the styling to match your theme

🌐 GitHub Pages Setup
Create a repository named yourusername.github.io

Upload all your website files to the main branch

Go to Settings → Pages

Ensure source is set to Deploy from main branch

Your site will be live at https://yourusername.github.io

📱 Responsive Design
The website is fully responsive and works on:

Desktop (1200px+)

Tablet (768px - 1199px)

Mobile (< 768px)

Key breakpoints in CSS:

```css
@media (max-width: 768px) {
    /* Mobile-specific styles */
}
```
🔧 Browser Support
Brave (recommended)

Firefox

Safari

📄 License
This project is open source and available under the MIT License.

🤝 Contributing
Feel free to fork this project and adapt it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

📞 Support
If you need help customizing this portfolio:

Check the code comments for guidance

Review the HTML structure for placement

Examine the CSS for styling options

Built with ❤️ by Varun Chati

Adapt this template to showcase your own research and projects!
