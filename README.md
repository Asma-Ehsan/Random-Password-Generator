# Random Password Generator

A simple and beginner-friendly JavaScript project to generate random passwords and practice core JS concepts.

## Live Demo
Try it live here: [Random Password Generator](https://asma-ehsan.github.io/Random-Password-Generator/)

## Features
- Generates random passwords including uppercase, lowercase, numbers, and symbols.
- Copy password to clipboard with one click.
- Demonstrates use of:
  - Random value generation: `password += upperCase[Math.floor(Math.random() * upperCase.length)];`
  - Old clipboard method: `passwordBox.select(); document.execCommand("copy");`
  - Modern clipboard method: `navigator.clipboard.writeText(passwordBox.value);`

## How to Use
1. Open `index.html` in your browser.
2. Click the **Generate Password** button to create a random password.
3. Click the **copy** icon or button to copy the password to your clipboard.

## What I Learned
- Working with DOM elements in JavaScript.
- Using functions and events to interact with the browser.
- Handling strings, arrays, and randomization.
- Copying text using both `execCommand` and `navigator.clipboard.writeText`.
- Importance of small projects to strengthen the basics.
