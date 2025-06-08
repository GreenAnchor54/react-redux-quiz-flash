🚀 Quiz-Flash: The Ready-to-Go React Quiz 🚀
<p align="center">
<em>A stunning, ready-to-use quiz app built with React, Redux, and TypeScript.</em>
</p>
React | Redux Toolkit | TypeScript | Vite

Ever wanted a cool, modern quiz on your website but groaned at the thought of building it from scratch? Yeah, me too.

This is Quiz-Flash, a fun little hobby project that turned into a fully functional, beautiful, and ready-to-use quiz application. It's designed for anyone who wants to drop a great-looking quiz onto their site, or for developers who want a solid, modern React/Redux template to learn from or build upon.

No fuss, no headaches. Just questions, answers, and a slick UI.
✨ What's Inside? (The Cool Features)

This isn't just a barebones quiz. It comes packed with features to make it feel professional and fun to use:

    🎨 Stunning Dark & Light Modes: A beautiful, clean UI that looks amazing in both light and dark themes. The user can toggle it with a button!

    🌐 Bilingual Ready: Comes pre-configured for English and Slovak. Adding more languages is a breeze.

    📱 Fully Responsive: Looks fantastic on both desktop and mobile devices.

    🧠 Easy Question Database: All questions live in one simple file. No complex databases needed. Just edit the text to make the quiz your own!

    📊 Animated Progress Bar: A sleek bar at the top shows players how far along they are in the quiz.

    🔧 Built with Modern Tech: Uses the latest standards like React, Redux Toolkit, Vite, and TypeScript for a fast, stable, and scalable app.

🛠️ How to Use It

There are two ways to use this project: running it as-is, or customizing it with your own awesome questions.
1. Just Running the Project

Want to see it in action on your own machine? It's super simple.
 Clone the repository:



```node
git clone https://github.com/GreenAnchor54/react-redux-quiz-flash.git
cd your-repo-name
```
Install all the packages:
```node
npm install
```
Run the development server:
```node
npm run dev
```

And that's it! Your browser will open, and you'll be greeted with the Quiz-Flash settings screen.
2. Adding Your OWN Questions (The Fun Part!)

This is probably why you're here. You want a quiz about your stuff. Making it your own is the easiest part.
    Navigate to the magic file:
    Open the project in your code editor and go to src/data/questions.ts.
    Look at the structure:
    Inside, you'll see a big list of question objects that look like this:

```js
{
  // The category for the dropdown menu
  category: "Geography",
  // How hard is it? (easy, medium, hard)
  difficulty: "easy",
  // The actual question text, in both languages
  question: { en: "What is the capital of France?", sk: "Aké je hlavné mesto Francúzska?" },
  // The answer options, also in both languages
  options: {
    en: ["Paris", "London", "Berlin", "Rome"],
    sk: ["Paríž", "Londýn", "Berlín", "Rím"]
  },
  // The one and only correct answer
  correct_answer: { en: "Paris", sk: "Paríž" }
},
```
Copy, Paste, and Edit!
Simply copy one of those question objects, paste it at the end of the list, and change the text to whatever you want. You can create hundreds of questions this way. The app will handle the rest!

📜 License & Final Words

This project is completely open-source and free to use for whatever you want. Feel free to fork it, change it, or drop it into your own website.

This started as a fun side project for me to get better at React and Redux. My hope is that it can save someone else a bit of time or help them learn something new.

If this code helps you out, that's awesome. Happy coding
