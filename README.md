# 2018 Honda Accord

Sample landing page I built for the 2018 Honda Accord as part of a job interview. (Yes, I got the job!)

## Notable Features

- The "Art of Evolution" cards change order inside their flexbox depending on screen width. This way, the image is always on top when stacked vertically, but on the right when side-by-side.
- Header height is adjusted to include nav at the bottom of the page no matter what viewport size.
- If the background video in the header doesn't load, there is a fallback image.

## Things I Would Do Better Today:

- Use text instead of a PNG logo for the word "Accord" in the H1, for SEO reasons.
- fadeInRight each button ONE AT A TIME, after a delay. (DO NOT use Waypoints, as there is no need to trigger something on scroll that is at the top of the page.)
- Contain navbar contents inside a custom 1920px-wide, centered container.
- Have contact form cover only half of the image on large screens.
- Use Honda's preferred Avenir font for everything. (I didn't know about brand compliance before taking this job.)