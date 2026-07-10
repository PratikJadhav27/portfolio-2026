# Pratik Vijay Jadhav - Machine Learning Engineer Portfolio

A modern, responsive portfolio website showcasing expertise in Machine Learning, AI, Computer Vision, and NLP. Built with Next.js, TypeScript, and Tailwind CSS with smooth animations and professional design.

## 🚀 Features

- **Modern Design**: Clean and professional layout showcasing AI/ML expertise
- **Responsive**: Fully responsive design optimized for all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured data for ML engineer profile
- **Interactive**: Smooth scrolling and hover effects with project showcases
- **Education Section**: Academic background and professional certifications
- **Experience Timeline**: Detailed internship experiences and achievements
- **AI/ML Projects**: Comprehensive project portfolio with real metrics
- **Contact Form**: Functional contact form with validation

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🎯 Portfolio Highlights

- **AI/ML Expertise**: Showcases experience with TensorFlow, PyTorch, Computer Vision, NLP
- **Real Projects**: Features actual projects with measurable results (34% to 92% accuracy improvements)
- **Research Experience**: Agricultural AI research with RAG and RAFT fine-tuning
- **Industry Experience**: Internships at Alemeno, Joshnik AI Labs, and Cheslab
- **Academic Excellence**: 87.6% CGPA in Computer Science with Digital Transformation specialization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PratikJadhav27/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Content
The portfolio is pre-populated with Pratik's actual information:
- Personal information: `components/Hero.tsx`
- About section: `components/About.tsx` 
- Technical skills: `components/Skills.tsx`
- Education & certifications: `components/Education.tsx`
- Professional experience: `components/Experience.tsx`
- AI/ML projects: `components/Projects.tsx`
- Contact information: `components/Contact.tsx`

### Social Links
Update social media links in:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Update `next.config.js` for static export
2. Build: `npm run build`
3. Deploy the `out` folder

## 📧 Contact Form

The contact form is currently set up for frontend validation. To make it functional, you can:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Add a backend API** to handle form submissions
3. **Use serverless functions** (Vercel Functions, Netlify Functions)

## 🔧 Environment Variables

Create a `.env.local` file for any environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/PratikJadhav27/portfolio/issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: pratik.ja3456@gmail.com
- LinkedIn: [Pratik Jadhav](https://www.linkedin.com/in/pratik-jadhav07/)
- GitHub: [PratikJadhav27](https://github.com/PratikJadhav27)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!