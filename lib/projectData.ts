import { ProjectTemplate } from "@/types";

import newsA from "../app/images/news/imageA.png";
import newsB from "../app/images/news/imageB.png";
import newsC from "../app/images/news/imageC.png";
import newsD from "../app/images/news/imageD.png";
import newsE from "../app/images/news/imageE.png";

import budgetA from "../app/images/budgetPlanner/imageA.png";
import budgetB from "../app/images/budgetPlanner/imageB.png";
import budgetC from "../app/images/budgetPlanner/imageC.png";
import budgetD from "../app/images/budgetPlanner/imageD.png";
import budgetE from "../app/images/budgetPlanner/imageE.png";
import budgetF from "../app/images/budgetPlanner/imageF.png";
import budgetG from "../app/images/budgetPlanner/imageG.png";

import recipeA from "../app/images/recipeBlog/imageA.png";
// import recipeB from "../app/images/recipeBlog/imageB.png";
import recipeC from "../app/images/recipeBlog/imageC.png";
import recipeD from "../app/images/recipeBlog/imageD.png";
import recipeE from "../app/images/recipeBlog/imageE.png";
import recipeF from "../app/images/recipeBlog/imageF.png";
import recipeG from "../app/images/recipeBlog/imageG.png";
import recipeH from "../app/images/recipeBlog/imageH.png";
import recipeI from "../app/images/recipeBlog/imageI.png";

import cozyA from "../app/images/cozy/imageA.png";
import cozyB from "../app/images/cozy/imageB.png";
import cozyC from "../app/images/cozy/imageC.png";
import cozyD from "../app/images/cozy/imageD.png";
import cozyE from "../app/images/cozy/imageE.png";

// import weatherA from "../app/images/weather/imageA.png";
import weatherB from "../app/images/weather/imageB.png";
import weatherC from "../app/images/weather/imageC.png";

import todoA from "../app/images/todo/imageA.png";
import todoB from "../app/images/todo/imageB.png";
import todoC from "../app/images/todo/imageC.png";

import tipCalcA from "../app/images/tipCalc/imageA.png";
import tipCalcB from "../app/images/tipCalc/imageB.png";

// import femgymA from "../app/images/femgym/imageA.png";
// import femgymB from "../app/images/femgym/imageB.png";
// import femgymC from "../app/images/femgym/imageC.png";

import triviaA from "../app/images/trivia/imageA.png";

import calculatorA from "../app/images/calculator/imageA.png";

export const projectData: ProjectTemplate[] = [
  {
    title: "The Continental Post",
    languages: [
      {
        language: "TypeScript",
        className: "typescript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "TailwindCSS",
        className: "tailwind",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/the-continental-post",
        website: "https://the-continental-post-neelam.netlify.app/",
      },
    ],
    description: [
      "Uses Firebase Authentication to sign up, login, and logout",
      "Uses NewsAPI to get, post and delete news articles",
      "Search engine to explore specific topics, languages etc.",
      "Bookmark artcles and view them in your dashbaord",
      "Delete bookmarks",
    ],
    images: [
      { src: newsA, alt: "screenshot" },
      { src: newsB, alt: "screenshot" },
      { src: newsC, alt: "screenshot" },
      { src: newsD, alt: "screenshot" },
      { src: newsE, alt: "screenshot" },
    ],
  },
  {
    title: "Recipe Blog",
    languages: [
      {
        language: "TypeScript",
        className: "typescript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/recipe-blog",
        website: "https://recipe-blog-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "Uses Firebase Authentication to sign up, login, and logout",
      "Spoonacular API",
      "State management with localStorage",
      "Search recipes using both search bars",
      "Discover recipes on explore page",
      "View whole recipes including: name, ingredients, steps, and nutrition data",
      "Add and delete recipes of your own",
      "Bookmark recipes",
    ],
    images: [
      { src: recipeA, alt: "screenshot" },
      { src: recipeC, alt: "screenshot" },
      { src: recipeD, alt: "screenshot" },
      { src: recipeE, alt: "screenshot" },
      { src: recipeF, alt: "screenshot" },
      { src: recipeG, alt: "screenshot" },
      { src: recipeH, alt: "screenshot" },
      { src: recipeI, alt: "screenshot" },
    ],
  },
  {
    title: "Monthly Budget Planner",
    languages: [
      {
        language: "Laravel",
        className: "laravel",
      },
      {
        language: "mySQL",
        className: "mysql",
      },
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/budget-planner",
      },
    ],
    description: [
      "Uses Laravel Authentication to sign up, login, and logout",
      "State management with mySQL",
      "Track expenses, lesuirely purchases, and adding/tracking savings",
      "Edit, delete, and track dynamic data",
    ],
    images: [
      { src: budgetA, alt: "screenshot" },
      { src: budgetB, alt: "screenshot" },
      { src: budgetC, alt: "screenshot" },
      { src: budgetD, alt: "screenshot" },
      { src: budgetE, alt: "screenshot" },
      { src: budgetF, alt: "screenshot" },
      { src: budgetG, alt: "screenshot" },
    ],
  },
  {
    title: "Multiple Page Static Site",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/cozy",
        website: "https://cozy-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "Add and remove products to wishlist and cart",
      "Filter products",
    ],
    images: [
      { src: cozyA, alt: "screenshot" },
      { src: cozyB, alt: "screenshot" },
      { src: cozyC, alt: "screenshot" },
      { src: cozyD, alt: "screenshot" },
      { src: cozyE, alt: "screenshot" },
    ],
  },
  {
    title: "Weather Forecast",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "SASS/SCSS",
        className: "sass",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/weather",
        website: "https://weather-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "OpenWeather API",
      "Search cities, countries, and continents",
      "Light and dark mode based on the locations time of day",
      "View locations temperature, time, date, this week's forecast, and hourly updates",
    ],
    images: [
      { src: weatherB, alt: "screenshot" },
      { src: weatherC, alt: "screenshot" },
    ],
  },

  {
    title: "To Do List",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "React",
        className: "react",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/to-do-list",
        website: "https://to-do-list-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "Add tasks to todo list",
      "Add dates to tasks",
      "Sorted by most recent date",
      "Check AND delete tasks",
      "State management with localStorage",
    ],
    images: [
      { src: todoA, alt: "screenshot" },
      { src: todoB, alt: "screenshot" },
      { src: todoC, alt: "screenshot" },
    ],
  },

  {
    title: "Tip Calculator",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "SASS/SCSS",
        className: "sass",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/tip-calculator",
        website: "https://tip-calculator-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "Add amount of bill",
      "Decide what percentage you want to tip",
      "Spread it across as many people as you want",
      "Receive tip and total cost",
      "Tip and total cost for each person if more are added",
    ],
    images: [
      { src: tipCalcA, alt: "screenshot" },
      { src: tipCalcB, alt: "screenshot" },
    ],
  },

  // {
  //   title: "3 Page Static Site",
  //   languages: [
  //     {
  //       language: "JavaScript",
  //       className: "javascript",
  //     },
  //     {
  //       language: "CSS",
  //       className: "css",
  //     },
  //     {
  //       language: "SASS/SCSS",
  //       className: "sass",
  //     },
  //     {
  //       language: "HTML",
  //       className: "html",
  //     },
  //   ],
  //   links: [
  //     {
  //       gitHub: "https://github.com/neelamkhan123/femgym",
  //       website: "https://femgym-neelam-khan.netlify.app/",
  //     },
  //   ],
  //   description: ["Simple 3 page static site", "Testimonial slider"],
  //   images: [
  //     { src: femgymA, alt: "screenshot" },
  //     { src: femgymB, alt: "screenshot" },
  //     { src: femgymC, alt: "screenshot" },
  //   ],
  // },

  {
    title: "Trivia!",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "SASS/SCSS",
        className: "sass",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/trivia",
        website: "https://trivia-neelam-khan.netlify.app/",
      },
    ],
    description: [
      "The Trivia API",
      "Choose category and level of difficulty",
      "5 questions",
      "Final score",
    ],
    images: [{ src: triviaA, alt: "Alt" }],
  },

  {
    title: "Calculator",
    languages: [
      {
        language: "JavaScript",
        className: "javascript",
      },
      {
        language: "CSS",
        className: "css",
      },
      {
        language: "SASS/SCSS",
        className: "sass",
      },
      {
        language: "HTML",
        className: "html",
      },
    ],
    links: [
      {
        gitHub: "https://github.com/neelamkhan123/calculator",
        website: "https://calculator-neelam-khan.netlify.app/",
      },
    ],
    description: ["Standard functioning calculator", "Responsive Design"],
    images: [{ src: calculatorA, alt: "Alt" }],
  },
];
