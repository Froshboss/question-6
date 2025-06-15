PALINDROME CHECKER

A beautiful and interactive Palindrome Checker that allows users to input any sentence and check if it reads the same forwards and backwards
ignoring punctuation, spaces, and case. Built using HTML, CSS, and JavaScript with a responsive and user-friendly design.



  FEATURES

Clean and modern interface with smooth animation.
Real-time result clearing on user input.
Input cleaning to ignore spaces, punctuation, and case.
Accurate palindrome detection with instant feedback.
Fully responsive design that works on mobile and desktop.

PREVIEW

![preview](https://github.com/user-attachments/assets/372d9b7f-0ec4-450f-bbd5-13ce10c157fd)


  TECHNOLOGIES USED
  
HTML5 – Layout and form structure.
CSS3 – Responsive styling with animations and gradient backgrounds.
JavaScript (Vanilla) – Palindrome logic and DOM interaction.


  INPUT SANITIZATION
  
The checker:
Converts all characters to lowercase.
Removes all non-alphanumeric characters.

```JS
  function cleanText(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
} 
```
