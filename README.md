# Frontend Mentor - Skilled e-learning landing page solution

This is a solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- TailWindCss
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

This simple project was designed to reinforce my foundations in React and Tailwind CSS, allowing me to build upon my existing knowledge.

During the project, I learned about the importance of folder structure and asset handling.

I encountered an issue when uploading to Netlify, where my SVGs were not being displayed and resulted in a 404 error.

After investigating, I discovered that assets used in the source code need to be imported, rather than linking to them through a data.js file as I was originally doing. This solution worked locally, but not with a Vite build. All assets stored in the source code must be imported into the relevant files.


---- 

"I wanted to loop through the data stored in a JavaScript file and display each item in its own container.

Using the .map() method worked perfectly for me."

```js
  const courses = Data.map(e => { 
    return(
        <CoursesType 
        key={e.id}
        {...e}
        /> 
    )
   })
```






### Continued development

I plan to build on my react foundations as well as my tailwind css. I found that both of these frameworks together is really empowering. 

I also want to learn better practices for media queries with tailwind. This is my first project using a tablet size, I believe it worked great but could always improve. 

### Useful resources

https://tailwindcss.com/ was really great for me to learn 


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)




