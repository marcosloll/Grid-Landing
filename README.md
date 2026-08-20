# Grid Landing Page

This is my solution to the **Grid Landing Page** challenge on [Frontend Mentor](https://www.frontendmentor.io/).

## Overview

### The challenge

The goal of this challenge was to build a responsive landing page as close as possible to the provided design.

Users should be able to:

- View the optimal layout depending on their device's screen size
- Open and close the navigation menu
- See hover states for interactive elements

### Screenshot

Add your desktop and mobile screenshots here if you want.

### Links

- Solution URL: [Add your Frontend Mentor solution URL here]
- Live Site URL: [Add your GitHub Pages URL here]

## My process

### Built with

- Semantic HTML5
- CSS custom styling
- Flexbox
- CSS Grid
- Responsive design with media queries
- JavaScript
- Google Fonts

### What I learned

This challenge helped me practice CSS Grid and understand better how parent and child elements work together when building layouts.

I used Grid to create the main desktop layout and another Grid for the statistics section:

```css
main {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}