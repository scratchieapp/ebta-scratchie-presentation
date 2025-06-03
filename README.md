# EBTA Scratchie Safety Excellence Presentation

A professional React-based presentation showcasing how Scratchie aligns with EBTA's Next Gear philosophy for enhanced safety culture on the Eastern Freeway project.

## 🔒 Security Features

This presentation includes **password protection** to ensure confidential business information remains secure:

- **Login Authentication**: Professional login screen with credential validation
- **Session Management**: Secure session storage for authenticated users
- **Environment Variables**: Credentials stored in `.env` file (not committed to git)
- **Auto-logout**: Session expires when browser is closed

## 🎯 Overview

This presentation demonstrates how Scratchie's instant recognition platform and Convo Card hazard reporting system can amplify EBTA's existing safety excellence. Built as an interactive, slide-based presentation with modern UI components and data visualizations.

## ✨ Features

- **🔐 Password Protection**: Secure login system for authorized access
- **Interactive Presentation**: 10 comprehensive slides with smooth navigation
- **ROI Calculator**: Dynamic investment calculator with workforce ramp-up modeling
- **Professional Design**: Modern UI with gradients, animations, and responsive layout
- **Modular Architecture**: Each slide is a separate, reusable component
- **Real Data**: Based on actual construction industry metrics and case studies

## 🏗️ Slides Overview

1. **Title Slide** - Introduction with project background imagery
2. **Safety Leadership** - EBTA's current innovations and values
3. **The Opportunity** - Gaps and improvement potential
4. **Scratchie Overview** - Platform features and benefits
5. **Perfect Alignment** - Integration with EBTA systems
6. **Proven Results** - Real construction industry outcomes
7. **Implementation** - Phased rollout approach
8. **Vision Expansion** - North East Link growth strategy
9. **Investment & ROI** - Interactive calculator with workforce modeling
10. **Call to Action** - Next steps and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ebta-scratchie-presentation.git
cd ebta-scratchie-presentation
```

2. **Create environment file** (REQUIRED for password protection):
```bash
# Create .env file in the root directory
touch .env

# Add these variables to your .env file:
VITE_PRESENTATION_USERNAME=ebta_admin
VITE_PRESENTATION_PASSWORD=EBTA2024Safety!
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### 🔑 Default Login Credentials

- **Username**: `ebta_admin`
- **Password**: `EBTA2024Safety!`

> ⚠️ **Important**: Change these credentials in your `.env` file for production use!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Login.jsx                 # Password protection component
│   ├── Presentation.jsx          # Main presentation container
│   └── slides/                   # Individual slide components
│       ├── index.js              # Slide exports
│       ├── TitleSlide.jsx
│       ├── SafetyLeadershipSlide.jsx
│       ├── OpportunitySlide.jsx
│       ├── ScratchieOverviewSlide.jsx
│       ├── AlignmentSlide.jsx
│       ├── ProvenResultsSlide.jsx
│       ├── ImplementationSlide.jsx
│       ├── ExpansionVisionSlide.jsx
│       ├── InvestmentROISlide.jsx
│       └── CallToActionSlide.jsx
├── App.jsx                       # Main app with auth flow
├── main.jsx
└── index.css
```

## 🎨 Key Technologies

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **Interactive Components** - Custom sliders and visualizations
- **Environment Variables** - Secure credential management

## 🔐 Security Implementation

### Authentication Flow
1. **Login Screen**: Professional gradient UI with form validation
2. **Credential Verification**: Against environment variables
3. **Session Storage**: Maintains authentication during browser session
4. **Protected Routes**: Presentation only accessible after login
5. **Auto-logout**: Session clears when browser closes

### Environment Variables
```bash
# .env file (never committed to git)
VITE_PRESENTATION_USERNAME=your_username
VITE_PRESENTATION_PASSWORD=your_secure_password
```

### Customizing Credentials
To change login credentials:
1. Edit the `.env` file
2. Update `VITE_PRESENTATION_USERNAME` and `VITE_PRESENTATION_PASSWORD`
3. Restart the development server

## 📊 Interactive Features

### ROI Calculator (Slide 9)
- Dynamic workforce ramp-up modeling
- Real-time investment calculations
- Visual bell curve representation
- Adjustable reward budgets ($0-$100/worker/month)
- Project timeline visualization (16-month lifecycle)

### Navigation
- Slide indicators with click-to-navigate
- Previous/Next navigation
- Keyboard support
- Progress tracking

## 🎯 Target Audience

- **EBTA Leadership Team** - James Smith and executives
- **Construction Safety Managers** - Site supervisors and HSE teams
- **Project Stakeholders** - Laing O'Rourke, Symal, WSP/Arcadis partners

## 📈 Business Impact

The presentation demonstrates potential:
- **3-6x ROI** within 12 months
- **15% reduction** in safety incidents
- **28% improvement** in safety attitudes
- **96% worker preference** for Scratchie-enabled sites

## 🚀 Deployment

### Production Deployment
1. **Set Environment Variables** on your hosting platform:
   ```
   VITE_PRESENTATION_USERNAME=production_username
   VITE_PRESENTATION_PASSWORD=secure_production_password
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy** the `dist` folder to your hosting service

### Recommended Hosting
- **Vercel** - Automatic deployments with environment variable support
- **Netlify** - Easy setup with environment variables
- **AWS S3 + CloudFront** - Enterprise-grade security and performance

## 🔒 Security Best Practices

- ✅ **Environment Variables**: Credentials never committed to git
- ✅ **Session Storage**: Authentication cleared on browser close
- ✅ **HTTPS Only**: Always deploy with SSL certificates
- ✅ **Strong Passwords**: Use complex, unique passwords
- ✅ **Regular Updates**: Change credentials periodically
- ✅ **Access Control**: Limit distribution of credentials

## 🤝 Contributing

This presentation is specifically tailored for EBTA. For modifications:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/update-slide`)
3. Make your changes
4. Commit (`git commit -am 'Update slide content'`)
5. Push to the branch (`git push origin feature/update-slide`)
6. Create a Pull Request

## 📞 Contact

**Garry Mansfield, Co-Founder & COO**
- Email: garry@scratchie.com
- Phone: 0414 228 820

## 📄 License

This project is proprietary and confidential. © 2024 Scratchie Pty Ltd.

---

**Note**: This presentation contains confidential business information and is intended solely for EBTA and authorized stakeholders.
