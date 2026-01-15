# GridGuard Presentation Application

## Overview
A web-based presentation application that displays a 9-slide professional presentation deck about GridGuard, an AI-powered system for detecting power theft and meter anomalies. The presentation is designed for the TechSprint Manipur 1.0 hackathon with a formal, executive fintech dashboard aesthetic inspired by American Express analytics UI.

## Features

### Presentation Navigation
- Navigate through 9 slides using next/previous buttons or keyboard arrows
- Slide counter showing current position (e.g., "3 / 9")
- Executive fintech dashboard design with minimalist styling

### Slide Content
The application displays the following 9 slides with predefined content:

1. **Title Slide** - Project name "GridGuard", team "Daevis", member "Daevis.W", and TechSprint Manipur 1.0 details
2. **Problem Statement** - Issues with current power theft detection methods, including how threshold-based filters are predictable and easily bypassed by experienced thieves
3. **Proposed Solution** - GridGuard's AI-based approach, emphasizing reuse of existing MDMS data and infrastructure without new hardware requirements
4. **Use of AI & Adaptive Learning** - Technical details about adaptive learning, integration of external signals, and operational efficiency for DISCOMs with limited inspection staff
5. **Technology Stack** - Technical implementation details
6. **Processing Pipeline / System Flow** - Pipeline and workflow visualization using clean boxes, arrows, and lines
7. **Impact & Value** - Benefits and value proposition
8. **Feasibility & Scalability** - Implementation considerations and scalability factors
9. **Blank Slide** - Final slide with solid black background containing a centered minimal smile face ":)" in light gold

### Design Specifications
- Color scheme: Black, silver, and gold throughout all slides
- Executive fintech dashboard aesthetic inspired by American Express analytics UI
- Clean, minimalist layout with no illustrations, stock photos, or decorative images
- Typography optimized for professional executive presentation format
- All textual elements use light-colored text (white, silver, or light gold) for maximum contrast on dark backgrounds
- Semi-transparent dark or gold-tinted highlight backgrounds behind text elements for improved readability
- Consistent font sizes and alignment maintained across all slides
- Minimal use of shapes, dividers, and icons only where essential
- Responsive design that works on different screen sizes

### User Interactions
- Click navigation buttons to move between slides
- Keyboard support (arrow keys) for slide navigation
- Smooth transitions between slides
- Full-screen presentation mode capability

## Technical Requirements
- Frontend-only application (no backend data storage required)
- All slide content is static and predefined
- Presentation state (current slide) maintained in frontend only
- No user authentication required
- No data persistence needed
- App content language: English
