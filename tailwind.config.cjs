/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/main.js"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./images/bg-intro-mobile.svg')",
        desktop: "url('./images/bg-intro-desktop.svg')",
        "btn-gradient": "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%);",
        "nav-gradient":
          "linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%);",
      },
      backgroundPosition: {
        "top-shift": "center top -75px",
        "top-shift-desktop": "right -571px top -260px",
      },
      borderRadius: {
        five: "5px",
        "twenty-two": "22px",
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "light-gray": "hsl(223, 18%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        primary: "Public Sans",
      },
      fontSize: {
        ten: ["0.625rem", "1.125rem"],
        thirteen: ["0.8125rem", "1.125rem"],
        fifteen: ["0.9375rem", "1.5625rem"],
        "thirty-two": ["2rem", "2.375rem"],
        forty: ["2.5rem", "2.9375rem"],
        "forty-desktop": ["2.5rem", "4rem"],
        "fifty-six": ["3.5rem", "4rem"],
      },
      gap: {
        thirty: "1.875rem",
      },
      height: {
        "two-hundred": "12.5rem",
      },
      margin: {
        "twenty-six": "1.625rem",
        "thirty-one": "1.9375rem",
        "forty-one": "2.5625rem",
        "seventy-two": "4.5rem",
        "eighty-eight": "5.5rem",
      },
      letterSpacing: {
        "article-description": "-0.203125px",
        "article-title": "-0.285714px",
        author: "-0.15625px",
        "main-heading": "-0.714286px",
        nav: "-0.138462px;",
        "nav-desktop": "-0.107692px",
        paragraph: "-0.234375px",
        "paragraph-desktop": "-0.28125px",
        reason: "-0.357143px",
        "reason-paragraph": "-0.25px",
        "section-heading": "-0.571429px",
      },
      lineHeight: {
        "twenty-one": "1.3125rem",
        "twenty-six": "1.625rem",
      },
      padding: {
        eighteen: "1.125rem",
        "twenty-two": "1.375rem",
        "twenty-five": "1.5625rem",
        "thirty-one": "1.9375rem",
        "thirty-three": "2.0625rem",
        "thirty-four": "2.125rem",
        "eighty-eight": "5.5rem",
        "ninety-four": "5.875rem",
      },
      width: {
        "container-mobile": "87.2%",
        "container-desktop": "min(77.08333%, 1110px)",
        "reason-paragraph": "min(100%, 635px)",
        intro: "min(100%, 447px)",
      },
    },
  },
  plugins: [],
};
