# Sanskriti Singh --- Portfolio Design & Build Specification

## 1. Project Overview

Build a highly polished, interactive personal portfolio for **Sanskriti
Singh**, a final-year B.Tech Information Technology student and aspiring
Software Engineer.

The portfolio should feel like a premium creative developer portfolio
rather than a traditional student resume website.

### Primary design reference

Reference the interaction quality, editorial typography, motion,
whitespace, project presentation, and immersive feeling of:

https://renaudrohlinger.com/

IMPORTANT: - Use the reference only for inspiration and interaction
quality. - Do NOT copy its exact layout, text, graphics, illustrations,
assets, or branding. - The final portfolio must have its own visual
identity centered around Sanskriti's engineering + ML + DevOps + design
background.

### Main objective

Create a portfolio that immediately communicates:

> "I am an engineer who builds intelligent products and understands both
> systems and design."

The portfolio should be impressive enough for: - Software Engineer / SDE
applications - Backend engineering roles - Applied ML roles - DevOps /
cloud-oriented roles - Product-oriented technical roles

------------------------------------------------------------------------

# 2. Brand / Personal Positioning

## Name

Sanskriti Singh

## Primary title

Software Engineer & Builder

## Secondary positioning

Machine Learning × Full-Stack × DevOps × Design

## Hero statement

Use a concise editorial statement similar in spirit to:

> I build intelligent products at the intersection of software, machine
> learning, and design.

Do not make the hero sound like a generic AI-generated portfolio.

The writing should be confident, simple, technical, and human.

------------------------------------------------------------------------

# 3. Visual Direction

## Overall aesthetic

Create a:

**Minimal Editorial Engineering Portfolio**

The visual language should combine: - premium editorial website -
creative developer portfolio - modern software engineering interface -
subtle industrial/technical details - high-quality motion design

## Colors

Prefer a light visual system.

Primary: - warm/off-white background - near-black typography - muted
gray secondary text - very subtle borders

Suggested palette:

``` text
Background: #F5F5F2
Primary text: #111111
Secondary text: #666666
Muted text: #8A8A8A
Border: #D9D9D5
Surface: #FFFFFF
```

Avoid: - neon gradients - purple AI gradients - excessive
glassmorphism - glowing cards - generic dark developer-dashboard
aesthetic - excessive shadows

Use color sparingly.

## Typography

Use a premium modern sans-serif.

Preferred: - Inter - Geist - Neue Montreal if available -
Helvetica/Arial fallback

Large editorial typography is important.

Use: - very large headings - tight typography - generous whitespace -
small uppercase metadata labels - monospace typography for technical
details where useful

Suggested technical font: - JetBrains Mono

------------------------------------------------------------------------

# 4. Core Experience

The portfolio should feel like one continuous interactive experience.

Do NOT make it look like:

``` text
Navbar
Hero
Skills cards
Project cards
Resume
Contact
```

Instead, make it feel like an editorial story.

The user should scroll through: 1. Identity 2. Introduction 3. Selected
work 4. Technical depth 5. Design/leadership 6. About 7. Contact

------------------------------------------------------------------------

# 5. Navigation

Create a minimal sticky navigation.

Left:

``` text
SANSKRITI
```

Center/right:

``` text
Work
About
Contact
```

Optional small availability indicator:

``` text
● OPEN TO OPPORTUNITIES
```

Navigation should be minimal and disappear/reappear intelligently on
scroll if this can be implemented without hurting usability.

Mobile navigation: - clean menu button - animated menu overlay - large
navigation typography

------------------------------------------------------------------------

# 6. Hero Section

The hero is the most important section.

## Layout

Large typography with lots of whitespace.

Example structure:

``` text
SANSKRITI SINGH

SOFTWARE
ENGINEER
& BUILDER

I build intelligent products at the intersection
of software, machine learning, and design.

[GitHub] [LinkedIn] [Email]
```

Do not use a generic profile photo as the centerpiece.

## Hero animation

On page load:

1.  Background fades in.
2.  Small metadata appears.
3.  Main name/title reveals upward.
4.  Words animate with slight stagger.
5.  Supporting paragraph fades in.
6.  Social links appear last.

Animation should feel: - smooth - deliberate - premium - fast enough to
not annoy the user

Use Framer Motion or GSAP.

Avoid excessive bouncing.

------------------------------------------------------------------------

# 7. Cursor Interaction

Desktop should have subtle custom cursor interactions.

Possible behavior:

Normal: - small cursor dot

Hovering interactive elements: - cursor expands - label can appear such
as: - VIEW - OPEN - EXPLORE

Project hover: - project preview follows cursor slightly.

Important: - disable/reduce custom cursor effects on mobile - never
block normal clicking - respect prefers-reduced-motion

------------------------------------------------------------------------

# 8. Selected Work

This is the main portfolio section.

Title:

``` text
SELECTED WORK
```

Supporting line:

``` text
A selection of systems, products, and experiments I've built.
```

Projects should NOT look like ordinary 3-column cards.

Prefer: - large editorial project rows - large project previews -
asymmetric layouts - large project numbers - technical metadata - hover
interactions

------------------------------------------------------------------------

# 9. Featured Projects

Use these four projects.

## PROJECT 01 --- OpsMonitor

### Title

OpsMonitor

### Subtitle

Server Health & API Uptime Monitor

### Positioning

A real-time engineering operations dashboard for monitoring server
health and API availability.

### Technology

``` text
React
Node.js
Express
MongoDB
Docker
Kubernetes
Terraform
```

### Key capabilities

-   CPU monitoring
-   RAM monitoring
-   disk monitoring
-   API uptime monitoring
-   endpoint management
-   uptime history
-   operational dashboard
-   backend monitoring services
-   MongoDB persistence
-   containerized deployment
-   Kubernetes deployment

### Visual treatment

This should be the FIRST / most prominent project.

On hover: - show an animated miniature monitoring dashboard - animate
CPU/RAM/Disk numbers - animate a small telemetry chart - show API
status - subtle pulse on operational status - preview should slightly
follow cursor

Concept:

``` text
CPU      RAM      DISK
23%      68%      54%

      ╱╲
 ────╱──╲────╱╲────

API STATUS
● OPERATIONAL
```

Clicking the project should open a detailed project view or modal/page.

------------------------------------------------------------------------

## PROJECT 02 --- AI Workplace Stress Monitoring

### Title

AI Workplace Stress Monitoring

### Description

An end-to-end web application for assessing and monitoring workplace
stress using machine learning and physiological data.

### Technology

``` text
Python
Flask
Machine Learning
OpenAI API
SQLite
Chart.js
Google Fit API
```

### Features

-   RandomForest stress prediction
-   approximately 90% model accuracy
-   questionnaire-based inputs
-   physiological data
-   Google Fit integration
-   heart-rate anomaly detection
-   automated email alerts
-   OpenAI-powered chatbot
-   mood detection
-   conversational memory
-   interactive dashboards

### Visual treatment

Show a clean analytical interface.

Hover: - chart line animates - stress score changes - small data points
appear - dashboard preview slides in

------------------------------------------------------------------------

## PROJECT 03 --- CBSE Answer Sheet Evaluation System

### Title

CBSE Answer Sheet Evaluation

### Subtitle

AI-assisted handwritten answer evaluation

### Technology

``` text
Python
Flask
OpenCV
OCR
Machine Learning
NLP
```

### Features

-   handwritten answer processing
-   OCR pipeline
-   image preprocessing
-   marking scheme comparison
-   predicted scores
-   explainable scoring
-   discrepancy detection
-   web upload/results interface

### Visual treatment

Create an animated document/OCR visual.

Example:

``` text
HANDWRITTEN ANSWER
        ↓
IMAGE PROCESSING
        ↓
OCR
        ↓
KEY POINT MATCHING
        ↓
SCORE: 8.5 / 10
```

Make this visual subtle and editorial, not like a generic AI graphic.

------------------------------------------------------------------------

## PROJECT 04 --- AgriVision

### Title

AgriVision

### Subtitle

Smart Crop Recommendation System

### Technology

``` text
Python
XGBoost
Flask
OpenWeatherMap API
REST APIs
```

### Features

-   crop recommendation
-   fertilizer recommendation
-   soil nutrient inputs
-   environmental parameters
-   real-time weather data
-   ML prediction pipeline
-   Flask REST API

### Visual treatment

Use a data-driven crop/weather visualization.

Keep it sophisticated and minimal.

------------------------------------------------------------------------

# 10. Project Interaction Pattern

Each project should have three states.

## State 1 --- Default

Large project title + metadata.

Example:

``` text
01

OPSMONITOR
Server Health & API Uptime Monitor

React / Node / MongoDB / Docker
```

## State 2 --- Hover

Project preview appears.

Use: - image/visual reveal - cursor-following preview - slight scale -
typography movement - metadata transition

## State 3 --- Open

Show a detailed project page or full-screen project overlay.

Structure:

``` text
Project title
↓
Short description
↓
Technology
↓
Problem
↓
What I built
↓
Architecture / visual
↓
Key features
↓
Outcome
↓
GitHub / Demo
```

Do NOT invent project outcomes, metrics, GitHub URLs, or demos that are
not available.

Use placeholders if needed.

------------------------------------------------------------------------

# 11. Scroll Animations

Scrolling should feel premium.

Use: - fade-up - clip-path reveal - text mask reveal - staggered
elements - horizontal movement - subtle parallax - image scale
transitions

Avoid: - huge spinning objects - excessive 3D - distracting particle
backgrounds - constant movement

## Section transitions

When entering a new section: - title reveals from below - divider line
animates across - content follows with a short stagger

------------------------------------------------------------------------

# 12. Technical Identity Section

Create a section showing Sanskriti's engineering stack.

Title:

``` text
I LIKE BUILDING
FROM THE MODEL
TO THE SYSTEM.
```

Then show categories.

### Languages

Python\
C\
C++\
Java\
JavaScript

### Core CS

Data Structures & Algorithms\
OOP\
System Design\
DBMS\
Operating Systems\
Computer Architecture

### Web

React\
Flask\
REST APIs\
HTML\
CSS

### Machine Learning

Pandas\
NumPy\
Scikit-learn\
XGBoost\
OpenCV\
OCR

### DevOps & Cloud

Docker\
Kubernetes\
Jenkins\
CI/CD\
GitHub Actions\
Terraform\
AWS

### Databases

SQL\
Oracle SQL\
SQLite

Do not turn every skill into a colorful pill.

Instead, use elegant typography/list layouts.

------------------------------------------------------------------------

# 13. About Section

Keep it personal but concise.

Suggested direction:

``` text
ABOUT

I'm Sanskriti, a final-year Information Technology
student who enjoys turning complicated problems
into useful software.

My work spans machine learning, full-stack
development, backend systems, and DevOps.

I also come from a design background, which means
I care about how a product works — and how it feels.
```

Do not fabricate personal stories.

------------------------------------------------------------------------

# 14. Design / Leadership Section

This is an important differentiator.

Sanskriti is:

``` text
Design Head
Dream Merchants Club
VIT
```

Include a section:

``` text
BEYOND CODE
```

Show: - Design leadership - Event branding - Figma - Cross-functional
collaboration - Technical + creative work - Agile coordination

Relevant events/projects include: - Stochastic - Dream Team -
technical/finance-focused events

Use visual thumbnails/placeholders if actual images are not available.

Do not fabricate event statistics.

------------------------------------------------------------------------

# 15. Experience / Education

Keep this section minimal.

Education:

``` text
Vellore Institute of Technology
B.Tech — Information Technology
2023 — Present
CGPA: 8.69
```

School:

``` text
Kennedy High The Global School
Senior Secondary — 94%

Vishwa Bharati School
Secondary — 98%
```

Use a clean timeline or editorial list.

------------------------------------------------------------------------

# 16. Certifications

Keep certifications compact.

Include:

-   Decoding DevOps: From Basics to Advanced Projects --- Udemy, 2025
-   DevOps Fundamentals --- IBM Career Education Program, 2025
-   DevOps, Agile and Design Thinking --- IBM Career Education Program,
    2025

Do not make these huge cards.

------------------------------------------------------------------------

# 17. Contact Section

Final section should feel like a strong ending.

Large text:

``` text
LET'S BUILD
SOMETHING
USEFUL.
```

Then:

``` text
sans.vbps@gmail.com
```

Links:

``` text
GitHub
LinkedIn
LeetCode
```

Use the actual URLs available in the resume.

Add a simple email CTA:

``` text
GET IN TOUCH →
```

Button should have a subtle magnetic/hover interaction.

------------------------------------------------------------------------

# 18. Footer

Minimal footer:

``` text
© 2026 Sanskriti Singh

Built with React
Designed & engineered by Sanskriti
```

Optional:

``` text
Back to top ↑
```

------------------------------------------------------------------------

# 19. Animation System

Use animations consistently.

## Page load

Timeline:

``` text
0.0s → background
0.1s → navigation
0.2s → small metadata
0.3s → main heading
0.5s → description
0.7s → links
```

Keep total major hero animation under approximately 1.2 seconds.

## Hover

Use: - transform - opacity - clip-path - slight scale - cursor
interaction

Avoid giant transitions.

## Scroll

Use viewport-triggered animations.

Animations should happen once unless a repeated interaction genuinely
benefits from replay.

------------------------------------------------------------------------

# 20. Motion Principles

The portfolio should feel:

**Intentional \> flashy**

Use: - smooth easing - short delays - natural movement - subtle physics

Avoid: - bounce everywhere - excessive blur - neon glow - random
floating objects - constant parallax

Use `prefers-reduced-motion` and provide a reduced-motion experience.

------------------------------------------------------------------------

# 21. Responsive Design

Must work beautifully on:

-   1440px desktop
-   1280px laptop
-   1024px tablet
-   768px tablet
-   390px mobile
-   375px mobile

Mobile is NOT an afterthought.

On mobile: - disable custom cursor - reduce animation complexity - stack
project layouts - keep typography dramatic but readable - make
navigation easy - maintain generous whitespace

------------------------------------------------------------------------

# 22. Performance

Performance is important.

Rules:

-   lazy load project images
-   optimize images
-   avoid huge video backgrounds
-   avoid unnecessary Three.js
-   avoid massive JavaScript animation loops
-   use GPU-friendly transforms
-   avoid layout thrashing
-   keep Lighthouse performance strong
-   animations should not cause visible lag

------------------------------------------------------------------------

# 23. Accessibility

Implement:

-   semantic HTML
-   keyboard navigation
-   visible focus states
-   alt text
-   sufficient contrast
-   reduced-motion support
-   accessible buttons
-   accessible navigation

Do not sacrifice accessibility for animation.

------------------------------------------------------------------------

# 24. SEO

Add:

``` text
title:
Sanskriti Singh — Software Engineer & Builder

description:
Portfolio of Sanskriti Singh, a software engineer and builder working across machine learning, full-stack development, DevOps, and design.
```

Add appropriate Open Graph metadata.

------------------------------------------------------------------------

# 25. Technology

Use the existing project setup if already available.

Preferred:

``` text
React
Vite
Tailwind CSS
Framer Motion
GSAP (only where useful)
Lenis (optional)
Lucide React
```

Do not install unnecessary libraries.

If the existing project already has a working stack, adapt it instead of
rebuilding unnecessarily.

------------------------------------------------------------------------

# 26. Code Quality

Use reusable components.

Suggested structure:

``` text
src/
  components/
    Navbar.jsx
    Hero.jsx
    SectionHeading.jsx
    ProjectShowcase.jsx
    ProjectPreview.jsx
    About.jsx
    Skills.jsx
    Leadership.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx

  data/
    projects.js

  pages/
    Home.jsx
    ProjectDetail.jsx

  hooks/
    useMousePosition.js
    useScrollProgress.js

  styles/
    globals.css
```

Keep content data separate from UI components where practical.

------------------------------------------------------------------------

# 27. Important Content Rules

Never invent:

-   internships
-   job titles
-   achievements
-   project metrics
-   GitHub repositories
-   demo links
-   awards
-   clients
-   users
-   revenue
-   deployment statistics

If a URL or asset is unavailable, use a clear placeholder.

Do not make false claims.

------------------------------------------------------------------------

# 28. Portfolio Personality

The portfolio should communicate:

``` text
Technical
Curious
Precise
Creative
Systems-minded
Product-minded
Confident
Minimal
```

It should NOT communicate:

``` text
Generic
Template-like
Overly corporate
AI-generated
Neon hacker
Overloaded
```

------------------------------------------------------------------------

# 29. Final Design Rule

The website should make a recruiter think:

> "This person doesn't just know technologies. They know how to build
> and present things."

The combination of:

``` text
Software Engineering
+
Machine Learning
+
DevOps
+
Design
```

is the core identity.

Make that combination visually obvious.

------------------------------------------------------------------------

# 30. Build Priority for Deadline

The portfolio must be finished by tomorrow at 12 PM.

Prioritize in this order:

## P0 --- Must have

1.  Hero
2.  Navigation
3.  Featured projects
4.  OpsMonitor project
5.  AI Stress project
6.  CBSE Evaluator project
7.  AgriVision project
8.  About
9.  Skills
10. Contact
11. Responsive design
12. Smooth animations

## P1 --- Add if time allows

1.  Detailed project pages
2.  Cursor-following previews
3.  Advanced project transitions
4.  Design/leadership gallery
5.  Scroll-based typography effects

## P2 --- Only if everything is stable

1.  Three.js
2.  Complex WebGL
3.  Experimental effects
4.  Heavy page transitions

Do NOT sacrifice a working portfolio for fancy effects.

------------------------------------------------------------------------

# 31. Final Acceptance Criteria

Before considering the project complete:

-   [ ] npm run dev works
-   [ ] npm run build works
-   [ ] no console errors
-   [ ] all navigation links work
-   [ ] all project sections work
-   [ ] mobile layout works
-   [ ] desktop layout works
-   [ ] animations are smooth
-   [ ] reduced motion is supported
-   [ ] no broken images
-   [ ] no fake information
-   [ ] GitHub link works
-   [ ] LinkedIn link works
-   [ ] email link works
-   [ ] project content is readable
-   [ ] OpsMonitor is prominently featured
-   [ ] portfolio does not look like a generic template
-   [ ] final visual polish is consistent across every section

------------------------------------------------------------------------

# 32. Implementation Philosophy

Do not attempt to build every advanced animation immediately.

First build:

``` text
STRUCTURE
↓
CONTENT
↓
VISUAL DESIGN
↓
CORE ANIMATIONS
↓
PROJECT INTERACTIONS
↓
RESPONSIVENESS
↓
POLISH
```

The final result should feel like a carefully art-directed engineering
portfolio, not a collection of UI components.
