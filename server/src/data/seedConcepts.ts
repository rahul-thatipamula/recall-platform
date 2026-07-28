import { ConceptDoc } from '../models/Concept';

type SeedConcept = Omit<ConceptDoc, '_id'>;

export const seedConcepts: SeedConcept[] = [
  // ---------- HTML ----------
  {
    topic: 'HTML',
    level: 'Beginner',
    title: 'HTML Page Structure & Metadata',
    tutorial:
      'Every HTML5 page consists of two primary sections: <head> and <body>. The <head> contains document metadata such as character encoding (<meta charset="utf-8">), page title (<title>), scripts, and external CSS links. The <body> contains the visible web page content. The document begins with <!doctype html> to specify the HTML5 standard. Comments are written as <!-- comment -->.',
    recognition: {
      prompt: 'Which part of an HTML document is strictly used to specify metadata, scripts, and CSS references?',
      options: [
        'The <body> section',
        'The <head> section',
        'The <footer> tag',
        'The <!doctype> declaration',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the boilerplate structure of an HTML5 document, detailing the distinct roles of the <!doctype html>, <head>, and <body> tags.',
    rubricKeywords: ['doctype', 'head', 'body', 'metadata', 'title', 'meta charset', 'boilerplate'],
  },
  {
    topic: 'HTML',
    level: 'Beginner',
    title: 'Headings, Paragraphs & Semantic Emphasis',
    tutorial:
      'HTML supports six heading levels <h1> to <h6> for document hierarchy. Paragraphs are defined with <p>, which automatically create block-level breaks. For styling text, modern semantic HTML recommends <strong> for strong importance (rendered bold) and <em> for structural emphasis (rendered italic), replacing legacy presentation-only tags <b> and <i>.',
    recognition: {
      prompt: 'Which semantic HTML tag should be used to give strong structural importance to text?',
      options: ['<b>', '<strong>', '<i>', '<bold>'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain why modern HTML prefers <strong> and <em> over legacy <b> and <i> tags, and describe how <p> handles block text.',
    rubricKeywords: ['h1', 'paragraph', 'p tag', 'strong', 'em', 'semantic', 'legacy', 'b tag', 'i tag'],
  },
  {
    topic: 'HTML',
    level: 'Beginner',
    title: 'Ordered, Unordered & Nested Lists',
    tutorial:
      'HTML provides <ol> for numbered ordered lists and <ul> for bulleted unordered lists, with individual items defined inside <li> tags. Lists can be nested inside each other to form hierarchical structures (e.g. an unordered list placed inside an ordered list item).',
    recognition: {
      prompt: 'Which tag combination correctly creates a bulleted list in HTML?',
      options: ['<ol> with <li>', '<ul> with <li>', '<list> with <item>', '<dl> with <dd>'],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe how to construct an ordered list containing a nested unordered list, specifying the parent and child tags required.',
    rubricKeywords: ['ol', 'ul', 'li', 'ordered', 'unordered', 'nested', 'bullet', 'numbers'],
  },
  {
    topic: 'HTML',
    level: 'Intermediate',
    title: 'Block vs Inline Containers (Div & Span)',
    tutorial:
      '<div> is a block-level element that takes up the full width available and starts on a new line, used for grouping major structural blocks. <span> is an inline element that wraps around small inline content without forcing a new line break. Both tags are primarily used alongside CSS classes for styling.',
    recognition: {
      prompt: 'What is the key difference between a <div> tag and a <span> tag?',
      options: [
        '<div> is inline and <span> is block-level',
        '<div> is a block-level container and <span> is an inline container',
        '<div> only works with JavaScript while <span> works with CSS',
        'There is no functional difference',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the line-break and layout differences between <div> and <span>, giving a practical use case for each.',
    rubricKeywords: ['block level', 'inline', 'div', 'span', 'line break', 'full width', 'grouping', 'css'],
  },
  {
    topic: 'HTML',
    level: 'Intermediate',
    title: 'Attributes, Images & Hyperlinks',
    tutorial:
      'Attributes supply extra metadata to HTML tags. The <img> tag is a self-closing element that requires a `src` attribute (file/URL location) and an `alt` attribute for fallback text. The anchor tag <a> creates hyperlinks using the `href` attribute to navigate to internal pages or external URLs.',
    recognition: {
      prompt: 'What is the purpose of the `alt` attribute in an <img> tag?',
      options: [
        'To specify the visual alignment of the image',
        'To provide alternative text if the image fails to load or for accessibility',
        'To set the absolute path of the image source file',
        'To make the image automatically responsive',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Write out and explain the HTML code for displaying an image with fallback text and a hyperlink pointing to an external website.',
    rubricKeywords: ['img tag', 'src', 'alt', 'anchor tag', 'href', 'self closing', 'hyperlink', 'attribute'],
  },
  {
    topic: 'HTML',
    level: 'Intermediate',
    title: 'HTML Tables & Data Grid Structure',
    tutorial:
      'Tabular data is structured using <table>. <thead> defines the header section containing <th> (table header cells), while <tr> defines table rows and <td> defines standard data cells. Optional attributes like `border="1"` draw visual grid lines around table cells.',
    recognition: {
      prompt: 'Which HTML tag defines a table header cell?',
      options: ['<td>', '<tr>', '<th>', '<head>'],
      correctIndex: 2,
    },
    recallPrompt:
      'Walk through how to build a complete 2-row HTML table with header columns for Name, Email, and Role.',
    rubricKeywords: ['table', 'thead', 'tr', 'th', 'td', 'row', 'column', 'header cell', 'data cell'],
  },
  {
    topic: 'HTML',
    level: 'Advanced',
    title: 'Forms, Input Types & Label Accessibility',
    tutorial:
      '<form action="..." method="..."> wraps user input controls. The <input> tag supports types such as `text`, `email`, `password`, `checkbox`, `radio`, and `submit`. `placeholder` displays temporary guide text inside the input. Using <label for="input_id"> binds readable text to the target control, enabling click focus and accessibility.',
    recognition: {
      prompt: 'How does an HTML <label> tag explicitly connect to an <input> element?',
      options: [
        'By matching the label`s `for` attribute with the input`s `id` attribute',
        'By putting the label tag inside the input tag',
        'By matching the label`s `name` attribute with the input`s `value` attribute',
        'By placing them on the same line in code',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain how <form>, <input>, and <label> work together, including input types (radio vs checkbox) and why <label for="..."> is critical for UX.',
    rubricKeywords: ['form', 'input', 'label', 'for attribute', 'id', 'placeholder', 'radio', 'checkbox', 'submit'],
  },
  {
    topic: 'HTML',
    level: 'Advanced',
    title: 'Dropdowns, Textarea & HTML5 Validations',
    tutorial:
      '<select> with nested <option> tags creates single or multi-select dropdown menus. <textarea rows="8" cols="80"> creates multi-line text fields. HTML5 natively enforces validation via attributes like `required`, automatic email formatting checks, and custom regular expression patterns using `pattern=".{5,10}"`.',
    recognition: {
      prompt: 'Which HTML attribute enforces that an input must be filled out before submitting a form?',
      options: ['validate', 'required', 'pattern', 'mandatory'],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe how to build a form containing a dropdown selection, a multi-line feedback box, and native regex pattern validation.',
    rubricKeywords: ['select', 'option', 'textarea', 'dropdown', 'required', 'pattern', 'regex', 'validation'],
  },

  // ---------- CSS ----------
  {
    topic: 'CSS',
    level: 'Beginner',
    title: 'CSS Inclusion Methods & Comments',
    tutorial:
      'CSS can be included in 3 ways: Inline (`style="..."`), Internal (`<style>` in `<head>`), or External (<link rel="stylesheet" href="...">). External stylesheets promote modularity and code reusability across multiple HTML pages. CSS comments are written using `/* comment */`.',
    recognition: {
      prompt: 'Which CSS inclusion method is best practice for maintaining scalable multi-page web applications?',
      options: ['Inline styles', 'Internal <style> tags', 'External CSS file via <link> tag', 'HTML attributes'],
      correctIndex: 2,
    },
    recallPrompt:
      'Compare inline, internal, and external CSS, explaining why external stylesheets are the industry standard for maintainability.',
    rubricKeywords: ['inline', 'internal', 'external', 'link tag', 'stylesheet', 'reusability', 'style tag', 'comments'],
  },
  {
    topic: 'CSS',
    level: 'Beginner',
    title: 'Element, ID & Class Selectors',
    tutorial:
      'CSS rules target HTML elements. Element selectors target all instances of a tag (`p { color: blue; }`). ID selectors target a single unique element using a hash prefix (`#special { ... }`). Class selectors target any number of elements sharing a class name using a dot prefix (`.highlight { ... }`).',
    recognition: {
      prompt: 'Which CSS selector correctly targets an HTML element with `id="main-title"`?',
      options: ['.main-title', '#main-title', 'main-title', '*main-title'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how to write element, ID (`#`), and class (`.`) selectors in CSS, including when to use an ID versus a Class.',
    rubricKeywords: ['element selector', 'id selector', 'class selector', 'hash', 'dot', 'unique', 'reusable', 'syntax'],
  },
  {
    topic: 'CSS',
    level: 'Intermediate',
    title: 'Advanced CSS Selectors & Combinators',
    tutorial:
      'Advanced selectors allow precise element targeting: Universal (`*`), Descendant (`li a` targets <a> inside <li>), Adjacent Sibling (`div + p` targets <p> directly after <div>), Attribute (`input[type="password"]`), and Pseudo-classes like `:nth-of-type(n)`, `:hover`, `:visited`, and `:checked`.',
    recognition: {
      prompt: 'What does the CSS selector `div + p` select?',
      options: [
        'All <p> tags nested inside a <div>',
        'Any <p> tag that directly follows a <div> element',
        'All <div> and <p> tags on the page',
        'The first <p> child inside a <div>',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the behavior of descendant (`A B`), adjacent sibling (`A + B`), attribute (`[attr=val]`), and `:nth-of-type()` selectors in CSS.',
    rubricKeywords: ['universal', 'descendant', 'adjacent sibling', 'attribute selector', 'nth-of-type', 'pseudo class', 'hover', 'combinator'],
  },
  {
    topic: 'CSS',
    level: 'Intermediate',
    title: 'CSS Specificity & Inheritance',
    tutorial:
      'Styles defined on parent elements automatically inherit down to children (e.g. `color` or `font-family` on `body`). When multiple CSS rules conflict on the same element, CSS Specificity determines precedence: Inline style (1000) > ID selector (100) > Class/Attribute/Pseudo-class (10) > Element selector (1).',
    recognition: {
      prompt: 'If an element has styles applied via an ID selector, a Class selector, and an Element selector, which rule takes precedence?',
      options: [
        'Element selector',
        'Class selector',
        'ID selector',
        'Whichever was defined first in the stylesheet',
      ],
      correctIndex: 2,
    },
    recallPrompt:
      'Describe how CSS specificity rules resolve conflicts when an element matches an ID selector, a Class selector, and an Element selector.',
    rubricKeywords: ['inheritance', 'specificity', 'cascade', 'precedence', 'override', 'inline style', 'id selector', 'class selector', 'element selector'],
  },
  {
    topic: 'CSS',
    level: 'Intermediate',
    title: 'Color Formats & Background Styling',
    tutorial:
      'Colors in CSS can be specified using Hex codes (`#3b82f6`), RGB (`rgb(59, 130, 246)`), or RGBA (`rgba(59, 130, 246, 0.5)`) where the 4th parameter controls alpha transparency (0.0 transparent to 1.0 opaque). Backgrounds are styled using `background-color`, `background-image: url(...)`, `background-repeat: no-repeat`, and `background-size: cover`.',
    recognition: {
      prompt: 'What does the 4th value in `rgba(0, 0, 0, 0.5)` represent?',
      options: [
        'Red intensity',
        'Green intensity',
        'Blue intensity',
        'Alpha channel transparency (0.0 to 1.0)',
      ],
      correctIndex: 3,
    },
    recallPrompt:
      'Explain the difference between RGB and RGBA color formats, and describe how `background-repeat` and `background-size` control background image presentation.',
    rubricKeywords: ['hex code', 'rgb', 'rgba', 'alpha transparency', 'background-color', 'background-image', 'background-repeat', 'background-size'],
  },
  {
    topic: 'CSS',
    level: 'Advanced',
    title: 'The CSS Box Model',
    tutorial:
      'Every rendered HTML element is a rectangular box composed of four concentric layers: Content Edge (width/height), Padding Edge (inner space between content and border), Border Edge (the outer boundary stroke), and Margin Edge (outer clearance separating adjacent elements). Padding adds space inside the border; margin adds space outside.',
    recognition: {
      prompt: 'Which layer of the CSS Box Model creates space outside the element border to push away neighboring elements?',
      options: ['Content', 'Padding', 'Border', 'Margin'],
      correctIndex: 3,
    },
    recallPrompt:
      'Diagram or list the four concentric layers of the CSS Box Model from innermost to outermost, explaining how padding differs from margin.',
    rubricKeywords: ['box model', 'content', 'padding', 'border', 'margin', 'inner space', 'outer space', 'concentric'],
  },
  {
    topic: 'CSS',
    level: 'Intermediate',
    title: 'Borders & Border Shorthand',
    tutorial:
      'Borders can be set via individual properties (`border-color`, `border-width`, `border-style`: `solid`, `dashed`, `dotted`, `groove`, `double`) or concise shorthand: `border: 5px solid red;`. Individual sides can also be targeted separately (e.g. `border-bottom: 2px solid blue;`).',
    recognition: {
      prompt: 'Which CSS declaration uses valid shorthand syntax to create a 3px solid red border?',
      options: [
        'border: 3px solid red;',
        'border-style: 3px red solid;',
        'border-box: red 3px solid;',
        'border: solid(3px, red);',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Write out the CSS shorthand syntax for creating a border and list four valid `border-style` keyword values.',
    rubricKeywords: ['border', 'border-width', 'border-style', 'border-color', 'shorthand', 'solid', 'dashed', 'dotted', 'groove'],
  },
  {
    topic: 'CSS',
    level: 'Advanced',
    title: 'Typography, Sizing & Web Fonts',
    tutorial:
      'CSS typography is controlled via `font-family` (font stacks with fallbacks), `font-size` (`px` absolute vs `em` relative units where 2em = double parent size), `font-weight` (100-900 / bold), `line-height` (vertical line spacing), `text-align` (left/center/right/justify), `text-decoration` (underline/line-through), and custom web fonts imported from Google Fonts.',
    recognition: {
      prompt: 'If an element`s parent has a font-size of 16px, what size is `1.5em` on the child element?',
      options: ['1.5px', '16.5px', '24px', '32px'],
      correctIndex: 2,
    },
    recallPrompt:
      'Explain how `em` font sizing works relative to parent font size, and detail how to import and use a custom font from Google Fonts in CSS.',
    rubricKeywords: ['font-family', 'font-size', 'em unit', 'font-weight', 'line-height', 'text-align', 'google fonts', 'text-decoration'],
  },

  // ---------- Bootstrap ----------
  {
    topic: 'Bootstrap',
    level: 'Beginner',
    title: 'Bootstrap Setup & Containers',
    tutorial:
      'Bootstrap is a popular front-end framework providing pre-styled CSS components and JavaScript utilities. It can be linked via CDN (<link rel="stylesheet" href="...">) or downloaded locally. Content is wrapped inside `.container` (fixed responsive width with auto margins) or `.container-fluid` (100% full-width span across viewport).',
    recognition: {
      prompt: 'Which Bootstrap container class spans 100% of the viewport width across all screen sizes?',
      options: ['.container', '.container-fluid', '.container-full', '.box-container'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how to connect Bootstrap to an HTML page via CDN, and compare `.container` versus `.container-fluid`.',
    rubricKeywords: ['bootstrap', 'cdn', 'container', 'container-fluid', 'viewport', 'full width', 'fixed width'],
  },
  {
    topic: 'Bootstrap',
    level: 'Intermediate',
    title: 'Button Classes & States',
    tutorial:
      'Bootstrap styles `<a>`, `<button>`, and `<input>` elements using `.btn` along with contextual classes like `.btn-success`, `.btn-primary`, `.btn-danger`, etc. Button sizes are adjusted with `.btn-lg` or `.btn-sm`, while state classes like `.active` and attribute `disabled="disabled"` control interactivity.',
    recognition: {
      prompt: 'Which combination of classes creates a large green success button in Bootstrap?',
      options: ['class="btn-green btn-large"', 'class="btn btn-success btn-lg"', 'class="button button-success lg"', 'class="btn-primary large"'],
      correctIndex: 1,
    },
    recallPrompt:
      'Write out the HTML markup for a Bootstrap large success button in both active and disabled states.',
    rubricKeywords: ['btn', 'btn-success', 'btn-lg', 'active', 'disabled', 'btn-primary', 'button'],
  },
  {
    topic: 'Bootstrap',
    level: 'Intermediate',
    title: 'Form Group & Form Control',
    tutorial:
      'Bootstrap form layout relies on `.form-group` to provide vertical spacing between form fields, and `.form-control` to make `<input>`, `<textarea>`, and `<select>` elements full-width (100%), rounded, and styled with smooth focus borders. `.form-inline` arranges form controls side-by-side.',
    recognition: {
      prompt: 'What effect does applying the `.form-control` class have on an HTML <input> tag in Bootstrap?',
      options: [
        'It centers the text inside the input',
        'It makes the element width 100% and applies standard Bootstrap field styling',
        'It converts the text input into a submit button',
        'It disables the input field',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe the purpose of `.form-group` and `.form-control` in Bootstrap form development.',
    rubricKeywords: ['form-group', 'form-control', 'form-inline', 'spacing', 'full width', '100%', 'input styling'],
  },
  {
    topic: 'Bootstrap',
    level: 'Advanced',
    title: 'Navbar Structure & Responsive Collapse',
    tutorial:
      'Navbars use `<nav class="navbar navbar-default">`. `.navbar-header` holds the brand link (`.navbar-brand`) and hamburger toggle button (`.navbar-toggle collapsed`). Nav items are organized in `<ul>` with `.nav .navbar-nav` (and `.navbar-right`). Collapsible sections are wrapped in `<div class="collapse navbar-collapse" id="...">` triggered via `data-toggle="collapse"`. Fixed navbars use `.navbar-fixed-top` and `.navbar-inverse` for dark styling.',
    recognition: {
      prompt: 'Which data attributes are required on a navbar hamburger button to trigger responsive menu collapse in Bootstrap?',
      options: [
        'data-toggle="collapse" and data-target="#menu-id"',
        'data-show="navbar" and data-bind="#menu-id"',
        'data-trigger="click" and data-menu="slide"',
        'data-open="true" and data-nav="mobile"',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain how a responsive Bootstrap navbar handles brand placement, link alignment, and mobile hamburger menu collapsing.',
    rubricKeywords: ['navbar', 'navbar-brand', 'navbar-toggle', 'collapse navbar-collapse', 'data-toggle', 'navbar-fixed-top', 'navbar-inverse'],
  },
  {
    topic: 'Bootstrap',
    level: 'Advanced',
    title: '12-Column Grid System & Screen Tiers',
    tutorial:
      'Bootstrap divides layout into a 12-column grid system inside `.row`. Columns use `.col-{tier}-{size}` syntax (e.g. `.col-lg-3`, `.col-md-4`, `.col-sm-6`, `.col-xs-12`). Tiers target screen widths: `lg` (large desktops), `md` (laptops), `sm` (tablets), `xs` (mobile phones), and `xl` (extra-large screens in v4). Column numbers per row must sum to 12.',
    recognition: {
      prompt: 'In a Bootstrap 12-column grid, how many columns will a div with class `.col-md-4` occupy per row?',
      options: ['4 out of 12 columns (3 elements per row)', '3 out of 12 columns (4 elements per row)', '6 out of 12 columns (2 elements per row)', '12 out of 12 columns (full width)'],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain how the 12-column grid system works, detailing column math, screen size tiers (lg, md, sm, xs), and responsive wrapping.',
    rubricKeywords: ['grid system', '12 columns', 'row', 'col-lg', 'col-md', 'col-sm', 'col-xs', 'responsive'],
  },
  {
    topic: 'Bootstrap',
    level: 'Intermediate',
    title: 'Nested Grids & Icon Integration',
    tutorial:
      'Grids can be nested by creating a new `<div class="row">` inside an existing grid column (`.col-*`). Bootstrap 3 includes Glyphicons (<span class="glyphicon glyphicon-camera"></span>), and supports FontAwesome icons (<i class="fas fa-camera"></i>) imported via CDN.',
    recognition: {
      prompt: 'How do you create a nested grid inside an existing Bootstrap column?',
      options: [
        'Place a new <div class="row"> inside the column element',
        'Add class="nested-grid" to the existing column',
        'Create a <grid> tag inside <col>',
        'Bootstrap does not support grid nesting',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain how to construct a nested grid in Bootstrap and how to integrate FontAwesome or Glyphicon icons.',
    rubricKeywords: ['nested grid', 'row', 'column', 'glyphicon', 'fontawesome', 'fa-camera'],
  },

  // ---------- JavaScript ----------
  {
    topic: 'JavaScript',
    level: 'Beginner',
    title: 'Developer Console & 5 Primitive Data Types',
    tutorial:
      'JavaScript defines 5 core primitive data types: Number (both integer and float), String (text in quotes), Boolean (`true`/`false`), `null` (intentional absence of value), and `undefined` (uninitialized variable). Type checking is performed using `typeof x`. Developer tools console (Inspect -> Console) is used for instant code execution.',
    recognition: {
      prompt: 'What does `typeof undefined` return in JavaScript?',
      options: ['"object"', '"undefined"', '"null"', '"number"'],
      correctIndex: 1,
    },
    recallPrompt:
      'List the 5 primitive data types in JavaScript, explaining `null` versus `undefined` and how `typeof` is used.',
    rubricKeywords: ['number', 'string', 'boolean', 'null', 'undefined', 'typeof', 'primitive', 'console'],
  },
  {
    topic: 'JavaScript',
    level: 'Beginner',
    title: 'Variable Declarations & Dynamic Typing',
    tutorial:
      'Variables store data values using `var` (or `let`/`const`). JavaScript is dynamically typed — a variable can hold a number and later be reassigned a string or boolean without explicit type declarations. Variable names typically follow CamelCase (`studentMobileNumber`), SnakeCase (`student_mobile_number`), or KebabCase (`student-mobile-number`).',
    recognition: {
      prompt: 'Why is JavaScript classified as a dynamically typed language?',
      options: [
        'Variables require static type definitions at compile time',
        'Variables do not require explicit type definitions and can change data types at runtime',
        'All variables are converted to strings automatically',
        'It only supports numeric data types',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain dynamic typing in JavaScript with code examples showing variable declaration, reassignment, and naming conventions.',
    rubricKeywords: ['var', 'dynamic typing', 'reassignment', 'camelCase', 'snake_case', 'kebab-case', 'variable'],
  },
  {
    topic: 'JavaScript',
    level: 'Beginner',
    title: 'Core Built-In Functions: alert, console.log & prompt',
    tutorial:
      'JavaScript provides 3 primary built-in interaction functions: `alert("msg")` displays pop-up notifications to users; `console.log("msg")` prints developer debug output to the browser console; `prompt("Enter value:")` prompts users for text input, returning the string entered (or `null` if cancelled).',
    recognition: {
      prompt: 'Which built-in JavaScript function displays a pop-up dialog that captures user text input?',
      options: ['alert()', 'console.log()', 'prompt()', 'input()'],
      correctIndex: 2,
    },
    recallPrompt:
      'Compare `alert()`, `console.log()`, and `prompt()`, explaining their parameters, return values, and primary use cases.',
    rubricKeywords: ['alert', 'console.log', 'prompt', 'pop up', 'debug console', 'user input', 'return value'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Equality Operators: == vs === & Type Coercion',
    tutorial:
      'The abstract equality operator `==` performs implicit type coercion (converting operands to a common type before comparing, e.g. `10 == "10"` is `true`). The strict equality operator `===` compares both value AND type without coercion (`10 === "10"` is `false`). Strict equality is strongly recommended to prevent unexpected bugs.',
    recognition: {
      prompt: 'What is the result of `10 === "10"` in JavaScript?',
      options: ['true', 'false', 'undefined', 'TypeError'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain implicit type coercion and why `===` (strict equality) is preferred over `==` (abstract equality) in JavaScript.',
    rubricKeywords: ['==', '===', 'type coercion', 'strict equality', 'abstract equality', 'comparison', 'value and type'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Logical Operators, NaN & Falsy Rules',
    tutorial:
      'Logical operators evaluate boolean conditions: `&&` (AND), `||` (OR), and `!` (NOT). In JS, `0`, `""` (empty string), `null`, `undefined`, and `NaN` (Not a Number, result of invalid math like `0/0`) are all falsy values; all other values are truthy. Note: `NaN == NaN` evaluates to `false`.',
    recognition: {
      prompt: 'What is the result of `NaN == NaN` in JavaScript?',
      options: ['true', 'false', 'undefined', 'NaN'],
      correctIndex: 1,
    },
    recallPrompt:
      'List the falsy values in JavaScript, explain what `NaN` represents, and describe the truth table for `&&` and `||`.',
    rubricKeywords: ['logical operators', '&&', '||', '!', 'NaN', 'falsy', 'truthy', 'null', 'undefined'],
  },
  {
    topic: 'JavaScript',
    level: 'Beginner',
    title: 'Conditional Statements (if, else if, else)',
    tutorial:
      'Conditional statements execute distinct code blocks based on boolean condition checks: `if (condition) { ... } else if (otherCondition) { ... } else { ... }`. Expressions inside `if` statements evaluate truthy or falsy values to determine execution flow.',
    recognition: {
      prompt: 'Which block executes when an `if` condition evaluates to `false` and an `else` block is present?',
      options: ['The `if` block', 'The `else` block', 'Neither block', 'Both blocks'],
      correctIndex: 1,
    },
    recallPrompt:
      'Write a JavaScript program using `if-else if-else` to check whether a given number is positive, negative, or zero.',
    rubricKeywords: ['if', 'else if', 'else', 'conditional', 'execution flow', 'boolean expression', 'truthy'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Iterative Loops & DRY Principle (while & for)',
    tutorial:
      'Iterative loops repeat execution without code duplication (DRY: Don`t Repeat Yourself). `while (condition) { ... }` loops as long as a condition remains true (ideal when iteration count is unknown). `for (init; check; step) { ... }` is used when iteration count is known in advance.',
    recognition: {
      prompt: 'When should a developer prefer a `for` loop over a `while` loop?',
      options: [
        'When the number of iterations is known in advance',
        'When the loop must run infinitely',
        'When working with asynchronous code only',
        'When manipulating HTML DOM nodes',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain the DRY principle and compare `while` versus `for` loops in JavaScript, providing syntax examples for both.',
    rubricKeywords: ['while loop', 'for loop', 'dry principle', 'iteration', 'initialization', 'condition check', 'increment'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Function Declarations, Default Args & Return Values',
    tutorial:
      'Functions encapsulate reusable logic: `function name(arg1, arg2) { return result; }`. Arguments act as local variables inside the body. ES6 supports default parameters (`function wish(name="Guest")`). The `return` statement sends a value back to the caller and immediately terminates function execution.',
    recognition: {
      prompt: 'What happens to statements written directly after a `return` statement inside a function?',
      options: [
        'They are executed before the return value is sent',
        'They are unreachable and will never execute',
        'They throw a syntax error at runtime',
        'They execute asynchronously',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Write a JavaScript function with default parameters that calculates and returns the square of a number or sum of two numbers.',
    rubricKeywords: ['function', 'arguments', 'default arguments', 'return statement', 'reusability', 'encapsulation'],
  },
  {
    topic: 'JavaScript',
    level: 'Advanced',
    title: 'Higher-Order Functions & setInterval',
    tutorial:
      'Higher-order functions accept other functions as arguments or return functions. `setInterval(fn, ms)` repeatedly executes `fn` every specified milliseconds, returning an interval ID that can be stopped using `clearInterval(id)`. Nameless functions passed directly (`function(){ ... }`) are called anonymous functions.',
    recognition: {
      prompt: 'Which function is used to stop a running `setInterval()` timer in JavaScript?',
      options: ['stopInterval()', 'clearInterval()', 'cancelTimer()', 'endInterval()'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain higher-order and anonymous functions in JavaScript using `setInterval` and `clearInterval` as concrete examples.',
    rubricKeywords: ['higher order function', 'setinterval', 'clearinterval', 'anonymous function', 'milliseconds', 'callback'],
  },
  {
    topic: 'JavaScript',
    level: 'Advanced',
    title: 'Global vs Local Scope & Variable Precedence',
    tutorial:
      'Global scope variables are declared outside functions and are accessible everywhere. Local scope variables are declared inside a function (`var x = 10`) and accessible only within that function. If local and global variables share the same name, the local variable takes precedence inside the function.',
    recognition: {
      prompt: 'What happens if a function reads a variable name that exists in both its local scope and the global scope?',
      options: [
        'The global variable value is used',
        'The local variable value takes precedence',
        'A ReferenceError is thrown',
        'Both values are concatenated',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain JavaScript variable scoping rules (global vs local) and describe what happens when local and global variables share the same name.',
    rubricKeywords: ['global scope', 'local scope', 'precedence', 'variable scope', 'function scope', 'shadowing'],
  },
  {
    topic: 'JavaScript',
    level: 'Beginner',
    title: 'Arrays & Fundamental Indexing',
    tutorial:
      'An array is an ordered 0-indexed collection of elements: `var numbers = [10, 20, 30]`. Elements are accessed or updated via bracket notation (`arr[0]`). Unlike some languages, JavaScript arrays can store heterogeneous elements (`["text", 100, true, null]`) and automatically resize.',
    recognition: {
      prompt: 'What is the index of the first element in a JavaScript array?',
      options: ['0', '1', '-1', 'null'],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain how JavaScript array indexing works, detailing how to retrieve, update, and add elements by index.',
    rubricKeywords: ['array', 'indexing', '0-indexed', 'heterogeneous', 'bracket notation', 'length', 'elements'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Array Mutation Methods (push, pop, shift, unshift, splice)',
    tutorial:
      'JavaScript provides mutating array methods: `push(val)` adds to end; `pop()` removes and returns last element; `unshift(val)` adds to start; `shift()` removes and returns first element; `indexOf(val)` returns first matching index (or -1); `slice(begin, end)` extracts a copy section; `splice(index, count)` removes elements at index.',
    recognition: {
      prompt: 'Which array method removes and returns the LAST element of an array?',
      options: ['shift()', 'pop()', 'unshift()', 'splice()'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare `push`/`pop` versus `shift`/`unshift`, and explain how `splice(index, count)` deletes elements from an array.',
    rubricKeywords: ['push', 'pop', 'shift', 'unshift', 'indexof', 'slice', 'splice', 'array mutation'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'Array Iteration (for, for-of & forEach)',
    tutorial:
      'Arrays can be iterated using traditional `for` loops, `while` loops, `for (let item of array)` (convenient element iteration), or `array.forEach(function(item){ ... })`. Unlike `for` loops, `forEach()` moves strictly forward and cannot be terminated early with `break`.',
    recognition: {
      prompt: 'Which loop construct directly iterates over the elements of an array without managing index counters manually?',
      options: ['for (let i = 0; ...)', 'while (i < len)', 'for (let item of array)', 'do-while'],
      correctIndex: 2,
    },
    recallPrompt:
      'Compare traditional `for` loops with `for-of` and `forEach()`, detailing direction control and break capabilities.',
    rubricKeywords: ['for loop', 'for-of', 'foreach', 'array iteration', 'callback', 'index', 'forward direction'],
  },
  {
    topic: 'JavaScript',
    level: 'Intermediate',
    title: 'JavaScript Objects & Property Access',
    tutorial:
      'Objects represent key-value pairs: `var obj = { name: "John", age: 30 }`. Properties are accessed via dot notation (`obj.name`) or bracket notation (`obj["name"]`). Keys can be iterated using `for (let key in obj) { console.log(key, obj[key]); }`. Unlike arrays, object keys do not guarantee order.',
    recognition: {
      prompt: 'Which syntax correctly accesses the property `hero` on an object `movie` using bracket notation?',
      options: ['movie[hero]', 'movie["hero"]', 'movie->hero', 'movie.(hero)'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare arrays versus objects in JavaScript, detailing key-value structure, access syntax (dot vs bracket), and `for-in` iteration.',
    rubricKeywords: ['object', 'key-value', 'dot notation', 'bracket notation', 'for-in loop', 'properties'],
  },
  {
    topic: 'JavaScript',
    level: 'Advanced',
    title: 'Object Methods & the `this` Keyword',
    tutorial:
      'Object properties can hold functions called methods: `var obj = { wish: function() { ... } }`. Inside an object method, the `this` keyword refers to the calling object instance (`this.name`). External named functions can also be assigned as object methods.',
    recognition: {
      prompt: 'Inside an object method, what does the `this` keyword refer to?',
      options: ['The global window object always', 'The object instance on which the method was invoked', 'The function argument list', 'The DOM document'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how object methods are defined and how `this` keyword provides access to sibling object properties.',
    rubricKeywords: ['object method', 'this keyword', 'property access', 'context', 'binding', 'method invocation'],
  },

  // ---------- DOM ----------
  {
    topic: 'DOM',
    level: 'Beginner',
    title: 'DOM Tree Architecture & Node Types',
    tutorial:
      'The Document Object Model (DOM) acts as an interface between JavaScript and HTML/CSS. Browsers construct a tree representation of the HTML document where the root is `document`. Node types include Document, Root element (`<html>`), Elements (`<h1>`, `<p>`), Attributes (`href`), and Text nodes.',
    recognition: {
      prompt: 'What is the root node of the DOM tree constructed by web browsers?',
      options: ['window.body', 'document', 'html.root', 'element.base'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what the DOM is, how browsers build the DOM tree, and name the main node types (Element, Attribute, Text).',
    rubricKeywords: ['dom', 'document object model', 'tree architecture', 'root node', 'element node', 'attribute node', 'text node'],
  },
  {
    topic: 'DOM',
    level: 'Beginner',
    title: 'Important DOM Properties (document.body, URL, links)',
    tutorial:
      'The global `document` object provides direct access properties: `document.URL` (returns current page URL string), `document.body` (returns `<body>` element node), `document.head` (returns `<head>` element node), and `document.links` (returns HTMLCollection of all page `<a>` links).',
    recognition: {
      prompt: 'Which DOM property returns an HTMLCollection of all anchor hyperlink tags on the page?',
      options: ['document.urls', 'document.links', 'document.anchors()', 'document.getLinks()'],
      correctIndex: 1,
    },
    recallPrompt:
      'List and describe four essential properties available directly on the global `document` object.',
    rubricKeywords: ['document.url', 'document.body', 'document.head', 'document.links', 'dom properties', 'htmlcollection'],
  },
  {
    topic: 'DOM',
    level: 'Intermediate',
    title: 'Query Methods (getElementById vs querySelector)',
    tutorial:
      'DOM element selection methods include legacy query methods (`getElementById("id")`, `getElementsByClassName("class")`, `getElementsByTagName("tag")`) and modern CSS selector methods (`querySelector("selector")` which returns the first matching node, and `querySelectorAll("selector")` which returns a NodeList of all matching nodes).',
    recognition: {
      prompt: 'Which method returns the FIRST element matching a CSS selector string like `".highlight"`?',
      options: ['document.getElementsByClassName("highlight")', 'document.querySelector(".highlight")', 'document.querySelectorAll(".highlight")', 'document.getElementById("highlight")'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare `getElementById` vs `querySelector` vs `querySelectorAll`, explaining syntax differences and return types.',
    rubricKeywords: ['getelementbyid', 'getelementsbyclassname', 'queryselector', 'queryselectorall', 'nodelist', 'css selector'],
  },
  {
    topic: 'DOM',
    level: 'Intermediate',
    title: 'Content Manipulation (textContent vs innerHTML)',
    tutorial:
      '`textContent` sets or returns plain text inside an element (ignoring HTML tags). `innerHTML` parses and updates raw HTML markup inside an element (e.g. `el.innerHTML = "<strong>text</strong>"`). Passing HTML strings into `textContent` renders literal tags as plain text.',
    recognition: {
      prompt: 'Which DOM property should be used to render formatted HTML elements inside a target div?',
      options: ['textContent', 'innerHTML', 'innerText', 'value'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the security and rendering differences between `textContent` and `innerHTML` when updating DOM node content.',
    rubricKeywords: ['textcontent', 'innerhtml', 'plain text', 'html parsing', 'dom content', 'formatting'],
  },
  {
    topic: 'DOM',
    level: 'Intermediate',
    title: 'Attribute Methods (getAttribute & setAttribute)',
    tutorial:
      'DOM element attributes are manipulated via methods: `element.getAttribute("href")` returns the current string value of an attribute; `element.setAttribute("href", "http://...")` updates an existing attribute or adds a new attribute value. Inline styles are updated via `element.style.color = "red"`.',
    recognition: {
      prompt: 'Which DOM method changes the `src` URL attribute of an `<img>` element dynamically?',
      options: ['img.changeSrc("url")', 'img.setAttribute("src", "url")', 'img.updateAttribute("src", "url")', 'img.src.set("url")'],
      correctIndex: 1,
    },
    recallPrompt:
      'Write out JavaScript code to select an anchor link and dynamically change its `href` attribute, text content, and inline style color.',
    rubricKeywords: ['getattribute', 'setattribute', 'attribute manipulation', 'style property', 'href', 'src', 'inline style'],
  },
  {
    topic: 'DOM',
    level: 'Advanced',
    title: 'Event Handling with addEventListener',
    tutorial:
      '`element.addEventListener(eventType, handlerFunction)` attaches event listeners to DOM elements without modifying HTML attributes. Common mouse events include `"click"`, `"dblclick"`, `"mouseover"` (mouse enters node), and `"mouseout"` (mouse leaves node). Handlers receive event objects and execute interactive logic.',
    recognition: {
      prompt: 'Which event type fires when a user moves their mouse pointer onto a DOM element?',
      options: ['"click"', '"mouseover"', '"mouseout"', '"mouseenter"'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how `addEventListener` works in Vanilla JS, providing a code example that changes heading text on `mouseover` and restores it on `mouseout`.',
    rubricKeywords: ['addeventlistener', 'event type', 'click', 'dblclick', 'mouseover', 'mouseout', 'event handler'],
  },

  // ---------- jQuery ----------
  {
    topic: 'jQuery',
    level: 'Beginner',
    title: 'jQuery Setup & $ Selector Syntax',
    tutorial:
      'jQuery is a fast, lightweight JS library ("Write less, do more") offering cross-browser DOM selection, animations, and event handling. Included via CDN or local file. The `$` symbol acts as a shorthand wrapper for `querySelectorAll`: `$("h1")` selects all `<h1>` tags, `$("#id")` selects by ID, and `$(".class")` selects by class.',
    recognition: {
      prompt: 'In jQuery, what is the `$` symbol equivalent to in Vanilla JavaScript?',
      options: ['document.getElementById()', 'document.querySelectorAll()', 'console.log()', 'window.onload'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the purpose of jQuery, how to include it via CDN, and how the `$` selector function works.',
    rubricKeywords: ['jquery', '$ symbol', 'write less do more', 'queryselectorall', 'cdn', 'selectors', 'cross browser'],
  },
  {
    topic: 'jQuery',
    level: 'Intermediate',
    title: 'Target Filtering (:first, :last, :nth-of-type)',
    tutorial:
      'jQuery extends selectors with positioning pseudo-filters: `$("p:first")` or `$("p").first()` selects the first paragraph; `$("p:last")` selects the last paragraph; `$("li:nth-of-type(2)")` selects the 2nd `<li>` element.',
    recognition: {
      prompt: 'Which jQuery expression selects only the first matching `<li>` tag on the page?',
      options: ['$("li:first")', '$("li[0]")', '$("li").top()', '$("li:initial")'],
      correctIndex: 0,
    },
    recallPrompt:
      'Write jQuery selectors to target: (1) the first h1 tag, (2) the last button on page, (3) every even numbered li tag.',
    rubricKeywords: ['first', 'last', 'nth-of-type', 'pseudo filter', 'jquery selection', 'target filtering'],
  },
  {
    topic: 'jQuery',
    level: 'Intermediate',
    title: 'CSS Manipulation with css() Method',
    tutorial:
      'The `.css()` method gets or sets CSS properties on matched elements. Single property: `$("h1").css("color", "red")`. Multiple properties pass an object: `$("h1").css({ color: "white", background: "blue", border: "1px solid red" })`. Inside jQuery event handlers, `$(this)` wraps the target element.',
    recognition: {
      prompt: 'How do you set multiple CSS properties simultaneously on an element using jQuery `.css()`?',
      options: [
        'Pass multiple string parameters sequentially',
        'Pass a JavaScript object containing key-value property pairs',
        'Call .css() once for each property name',
        'Pass a single CSS rule string like "color: red; bg: blue;"',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how the `.css()` method works in jQuery for single versus multiple style property assignments, including the role of `$(this)`.',
    rubricKeywords: ['css method', 'single property', 'multiple properties', 'style object', '$(this)', 'jquery styling'],
  },
  {
    topic: 'jQuery',
    level: 'Intermediate',
    title: 'Content & Form Methods (text, html, attr, val)',
    tutorial:
      'jQuery methods follow getter/setter paradigms: `.text()` gets/sets plain text; `.html()` gets/sets HTML content; `.attr("src")` gets attribute while `.attr("src", "new.jpg")` sets attribute; `.val()` gets/sets form input/select values (e.g. `$("input").val()` retrieves entered text).',
    recognition: {
      prompt: 'Which jQuery method is used to get or set the value of form inputs and select dropdowns?',
      options: ['.text()', '.html()', '.val()', '.attr()'],
      correctIndex: 2,
    },
    recallPrompt:
      'Explain the getter/setter behavior of `.text()`, `.html()`, `.attr()`, and `.val()` in jQuery.',
    rubricKeywords: ['text()', 'html()', 'attr()', 'val()', 'getter setter', 'form input', 'attribute'],
  },
  {
    topic: 'jQuery',
    level: 'Intermediate',
    title: 'Class Manipulation (addClass, removeClass, toggleClass)',
    tutorial:
      'jQuery simplifies class switching on DOM elements: `.addClass("highlight")` adds class; `.removeClass("highlight")` removes class; `.toggleClass("highlight")` adds the class if absent, or removes it if already set.',
    recognition: {
      prompt: 'Which jQuery method automatically adds a class if it is missing, or removes it if it is already present?',
      options: ['.switchClass()', '.toggleClass()', '.changeClass()', '.modifyClass()'],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe how `.addClass()`, `.removeClass()`, and `.toggleClass()` manage element classes in jQuery.',
    rubricKeywords: ['addclass', 'removeclass', 'toggleclass', 'class manipulation', 'jquery classes'],
  },
  {
    topic: 'jQuery',
    level: 'Advanced',
    title: 'Event Binding with click(), keypress() & on()',
    tutorial:
      'jQuery binds event listeners via shorthand methods like `$("h1").click(fn)` and `$("input").keypress(fn)` (tracking keycodes via `event.which`). The versatile `.on()` method binds any event type: `$("h1").on("mouseover", fn)`. Inside handler callbacks, `$(this)` references the triggering element.',
    recognition: {
      prompt: 'In a jQuery `keypress` event handler, which event property contains the ASCII keycode of the pressed key?',
      options: ['event.keyCode', 'event.which', 'event.keyChar', 'event.code'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare `click()`, `keypress()`, and `.on()` in jQuery, explaining keycode tracking with `event.which`.',
    rubricKeywords: ['click()', 'keypress()', 'on()', 'event.which', 'keycode', '$(this)', 'event binding'],
  },
  {
    topic: 'jQuery',
    level: 'Advanced',
    title: 'Fading Effects (fadeOut, fadeIn, fadeToggle)',
    tutorial:
      'jQuery provides built-in fading animation methods: `.fadeOut(speed, callback)` fades element to transparent; `.fadeIn(speed)` restores visibility; `.fadeToggle(speed)` toggles fade state. Speed is specified in milliseconds (e.g. 2000ms = 2s). Optional completion callback functions run after animation finishes.',
    recognition: {
      prompt: 'What happens when `.fadeToggle(1000)` is called on a visible jQuery element?',
      options: ['It immediately deletes the element', 'It smoothly fades out to transparent over 1 second', 'It slides the element up', 'Nothing happens'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how `.fadeOut()`, `.fadeIn()`, and `.fadeToggle()` work, detailing duration parameters and completion callbacks.',
    rubricKeywords: ['fadeout', 'fadein', 'fadetoggle', 'milliseconds', 'completion callback', 'fading effects', 'animation'],
  },
  {
    topic: 'jQuery',
    level: 'Advanced',
    title: 'Sliding Effects (slideUp, slideDown, slideToggle)',
    tutorial:
      'Sliding animation methods reveal or hide elements with vertical motion: `.slideUp(speed)` collapses height to 0; `.slideDown(speed)` expands element downward; `.slideToggle(speed)` toggles slide state. Optional callback functions execute upon slide completion.',
    recognition: {
      prompt: 'Which jQuery method hides matched elements using a vertical sliding motion?',
      options: ['.slideUp()', '.slideDown()', '.slideToggle()', '.fadeOut()'],
      correctIndex: 0,
    },
    recallPrompt:
      'Compare sliding effects (`slideUp`, `slideDown`, `slideToggle`) with fading effects in jQuery.',
    rubricKeywords: ['slideup', 'slidedown', 'slidetoggle', 'sliding effects', 'vertical animation', 'duration'],
  },
  {
    topic: 'Java',
    level: 'Intermediate',
    title: 'Garbage Collection',
    tutorial:
      'The JVM heap is split into generations. Most objects die young, so the young generation is collected often and cheaply (minor GC); objects that survive several collections are promoted to the old generation, which is collected less often but more expensively (major GC). An object becomes eligible for collection once nothing reachable from a GC root still references it.',
    recognition: {
      prompt: 'Which statement about the JVM garbage collector is correct?',
      options: [
        'It reclaims memory used by objects with no reachable references',
        'It runs only when the developer calls System.gc() explicitly',
        'It manages memory for both the heap and the OS file descriptors',
        'It prevents all memory leaks in a Java application',
      ],
      correctIndex: 0,
    },
    recallPrompt:
      'Explain, in your own words, how the JVM decides an object is eligible for garbage collection and how generational GC uses that to stay efficient.',
    rubricKeywords: ['reachability', 'root', 'young generation', 'old generation', 'minor gc', 'major gc', 'heap'],
  },
  {
    topic: 'Java',
    level: 'Intermediate',
    title: 'HashMap Internals',
    tutorial:
      'A HashMap stores entries in buckets chosen by hashCode(). When two keys land in the same bucket (a collision), Java chains them in a linked list, or as a balanced tree once a bucket gets large enough. When the map\'s load factor is exceeded, it resizes by doubling the bucket array and rehashing everything.',
    recognition: {
      prompt: 'What happens inside a HashMap when two keys produce the same hash bucket?',
      options: [
        'The second key silently overwrites the first value',
        'A collision occurs and entries are chained (or tree-ified) in that bucket',
        'The HashMap throws a ConcurrentModificationException',
        'The map automatically resizes to avoid the collision',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Walk through what happens step by step when you call put() on a HashMap, including how collisions and resizing are handled.',
    rubricKeywords: ['hashcode', 'bucket', 'collision', 'linked list', 'treeify', 'load factor', 'resize', 'equals'],
  },
  {
    topic: 'Java',
    level: 'Beginner',
    title: 'Checked vs Unchecked Exceptions',
    tutorial:
      'Checked exceptions (like IOException) extend Exception and must either be caught or declared in a throws clause — the compiler enforces handling. Unchecked exceptions extend RuntimeException and represent programmer errors or conditions you typically don\'t recover from, so the compiler doesn\'t force you to handle them.',
    recognition: {
      prompt: 'Which of these is a checked exception in Java?',
      options: ['NullPointerException', 'IllegalArgumentException', 'IOException', 'ArrayIndexOutOfBoundsException'],
      correctIndex: 2,
    },
    recallPrompt:
      'Explain the difference between checked and unchecked exceptions, and how that difference affects method signatures and error-handling strategy.',
    rubricKeywords: ['compile time', 'runtimeexception', 'throws clause', 'recoverable', 'unchecked', 'checked'],
  },
  {
    topic: 'Java',
    level: 'Advanced',
    title: 'Volatile and the Java Memory Model',
    tutorial:
      'volatile guarantees that a write to a variable is immediately visible to other threads (no stale cached copies) and prevents the compiler/CPU from reordering instructions around that access. It does not make compound operations like increment atomic — for that you still need a lock or an atomic class.',
    recognition: {
      prompt: 'What does the `volatile` keyword guarantee?',
      options: [
        'Atomic compound operations like increment',
        'Visibility of writes across threads and prevention of instruction reordering around it',
        'Mutual exclusion, like a lock',
        'The variable is stored only in CPU cache, never memory',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what problem `volatile` solves in multithreaded Java code, and why it is not a substitute for synchronization when you need atomicity.',
    rubricKeywords: ['visibility', 'happens-before', 'reordering', 'atomicity', 'thread', 'cache'],
  },

  // ---------- Spring Boot ----------
  {
    topic: 'Spring Boot',
    level: 'Intermediate',
    title: 'Bean Lifecycle',
    tutorial:
      'A Spring bean goes through instantiation, dependency injection (constructor/setter/field), then any @PostConstruct or InitializingBean callback, after which it is ready for use. On shutdown, @PreDestroy or DisposableBean callbacks run. BeanPostProcessors can hook in before and after initialization to wrap or modify beans.',
    recognition: {
      prompt: 'Which order correctly reflects a Spring bean\'s lifecycle?',
      options: [
        'Destroy → Instantiate → Populate properties → Initialize',
        'Instantiate → Populate properties → Initialize → Ready for use → Destroy',
        'Initialize → Instantiate → Populate properties → Destroy',
        'Populate properties → Destroy → Instantiate → Initialize',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe the full lifecycle of a Spring bean from container startup to shutdown, naming the extension points (annotations/interfaces) available at each stage.',
    rubricKeywords: [
      'instantiation',
      'dependency injection',
      'postconstruct',
      'initializingbean',
      'predestroy',
      'applicationcontext',
      'beanpostprocessor',
    ],
  },
  {
    topic: 'Spring Boot',
    level: 'Beginner',
    title: 'Dependency Injection Types',
    tutorial:
      'Spring supports constructor, setter, and field injection. Constructor injection is preferred because it lets fields be final (immutable), makes dependencies explicit and easy to unit test without the container, and fails fast at startup if a circular dependency exists rather than at some later runtime point.',
    recognition: {
      prompt: 'Which form of dependency injection does the Spring team recommend for mandatory dependencies?',
      options: ['Field injection', 'Constructor injection', 'Setter injection', 'Static factory injection'],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare constructor, setter, and field injection in Spring, and explain why constructor injection is generally preferred.',
    rubricKeywords: ['immutability', 'testability', 'circular dependency', 'final field', 'autowired', 'mandatory'],
  },
  {
    topic: 'Spring Boot',
    level: 'Advanced',
    title: 'Transactional Propagation',
    tutorial:
      '@Transactional propagation controls how a method\'s transaction relates to a caller\'s existing transaction. REQUIRED (the default) joins the existing transaction if one is present. REQUIRES_NEW suspends the caller\'s transaction and starts an independent one with its own commit/rollback — useful for things like audit logging that must persist even if the outer transaction rolls back.',
    recognition: {
      prompt: 'With `Propagation.REQUIRES_NEW`, what happens when a method is called from within an existing transaction?',
      options: [
        'It joins the existing transaction',
        'It suspends the existing transaction and starts a new, independent one',
        'It throws an exception because nesting isn\'t allowed',
        'It ignores transactionality entirely',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how @Transactional propagation works in Spring, contrasting REQUIRED and REQUIRES_NEW, and give a real scenario where you would choose REQUIRES_NEW.',
    rubricKeywords: ['propagation', 'suspend', 'rollback', 'proxy', 'required', 'requires_new', 'commit'],
  },
  {
    topic: 'Spring Boot',
    level: 'Intermediate',
    title: 'Auto-configuration',
    tutorial:
      'Spring Boot scans AutoConfiguration.imports (or the older spring.factories) for candidate configuration classes, then applies each one conditionally — @ConditionalOnClass, @ConditionalOnMissingBean, and similar annotations decide whether it actually activates based on what\'s on the classpath and what beans you\'ve already defined. That\'s how adding a starter dependency "just works" without manual bean declarations.',
    recognition: {
      prompt: 'How does Spring Boot decide which auto-configuration classes to apply at startup?',
      options: [
        'It applies every configuration class found on the classpath unconditionally',
        'It uses conditional annotations (like @ConditionalOnClass) to enable configs based on what\'s present',
        'It requires every bean to be manually declared in application.properties',
        'It only works with beans annotated @Primary',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how Spring Boot auto-configuration works under the hood, including the role of @Conditional annotations and spring.factories / AutoConfiguration.imports.',
    rubricKeywords: ['conditionalonclass', 'conditionalonmissingbean', 'classpath', 'spring.factories', 'autoconfiguration.imports', 'starter'],
  },

  // ---------- SQL ----------
  {
    topic: 'SQL',
    level: 'Beginner',
    title: 'Indexing',
    tutorial:
      'An index is typically a B-tree structure that lets the database find rows matching a WHERE clause without scanning the whole table. It dramatically speeds up reads on the indexed column(s), but every write (INSERT/UPDATE/DELETE) now has to update the index too, so indexes trade write speed and storage for read speed.',
    recognition: {
      prompt: 'What is the main trade-off of adding an index to a frequently-updated column?',
      options: [
        'Indexes only help SELECT * queries',
        'Faster reads on that column, but slower writes since the index must be maintained',
        'Indexes make writes faster but reads slower',
        'There is no trade-off, indexes are always beneficial',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how a B-tree index speeds up a lookup, and why adding indexes everywhere is not a free performance win.',
    rubricKeywords: ['b-tree', 'lookup', 'write overhead', 'storage', 'read performance', 'maintain'],
  },
  {
    topic: 'SQL',
    level: 'Intermediate',
    title: 'JOIN Types & Execution Plans',
    tutorial:
      'INNER JOIN returns only rows with matches in both tables; LEFT JOIN keeps every row from the left table and fills unmatched right-side columns with NULL. The query planner decides join strategy (nested loop, hash join, merge join) based on table sizes and available indexes — reading an EXPLAIN plan tells you which strategy was chosen and where the cost is going.',
    recognition: {
      prompt: 'If you LEFT JOIN orders to customers and a customer has no orders, what happens to that customer\'s row?',
      options: [
        'It is excluded from the result entirely',
        'It appears once with NULLs in the order columns',
        'The query throws an error',
        'It appears once per column in the orders table',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between INNER JOIN and LEFT JOIN, and describe what an execution plan tells you about how a JOIN was actually performed.',
    rubricKeywords: ['inner join', 'left join', 'null', 'execution plan', 'nested loop', 'hash join', 'index'],
  },
  {
    topic: 'SQL',
    level: 'Advanced',
    title: 'Transactions & Isolation Levels',
    tutorial:
      'ACID transactions guarantee atomicity, consistency, isolation, and durability. Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) trade consistency guarantees for concurrency — lower isolation allows dirty reads or phantom reads but scales better, while Serializable prevents all of that at the cost of more locking/blocking.',
    recognition: {
      prompt: 'Which isolation level allows a "phantom read" (a query returning different rows on re-execution within the same transaction)?',
      options: ['Serializable', 'Repeatable Read (in most databases) and lower', 'None, phantom reads are impossible in SQL', 'Only Read Uncommitted'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what ACID means, and walk through how the standard isolation levels differ in what anomalies (dirty read, non-repeatable read, phantom read) they permit.',
    rubricKeywords: ['atomicity', 'consistency', 'isolation', 'durability', 'dirty read', 'phantom read', 'serializable', 'repeatable read'],
  },

  // ---------- Redis ----------
  {
    topic: 'Redis',
    level: 'Beginner',
    title: 'Core Data Structures',
    tutorial:
      'Redis is not just a key-value string store: it natively supports lists, hashes, sets, and sorted sets, each with its own O(1)/O(log n) operations. Picking the right structure (e.g. a sorted set for a leaderboard, a hash for an object\'s fields) avoids re-implementing that logic in application code.',
    recognition: {
      prompt: 'Which Redis data structure would you use to implement a leaderboard ranked by score?',
      options: ['String', 'List', 'Sorted Set', 'Hash'],
      correctIndex: 2,
    },
    recallPrompt:
      'Describe the main Redis data structures and give a realistic use case for each one.',
    rubricKeywords: ['string', 'list', 'hash', 'set', 'sorted set', 'leaderboard', 'o(1)'],
  },
  {
    topic: 'Redis',
    level: 'Intermediate',
    title: 'Caching Strategies',
    tutorial:
      'Cache-aside (lazy loading) has the app check the cache first and populate it on a miss; write-through updates the cache and DB together on every write. TTLs expire stale entries automatically, and eviction policies like LRU decide what to remove when the cache is full. Choosing the wrong strategy causes either stale data or excessive cache misses.',
    recognition: {
      prompt: 'In the cache-aside pattern, what happens on a cache miss?',
      options: [
        'The request fails until the cache is manually refreshed',
        'The app reads from the database, then writes the result into the cache',
        'The cache automatically pulls from the database in the background',
        'The database is bypassed entirely',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare cache-aside and write-through caching strategies, and explain what TTL and eviction policy (like LRU) each solve.',
    rubricKeywords: ['cache-aside', 'write-through', 'ttl', 'eviction', 'lru', 'stale', 'cache miss'],
  },
  {
    topic: 'Redis',
    level: 'Advanced',
    title: 'Persistence: RDB vs AOF',
    tutorial:
      'RDB takes point-in-time snapshots of the dataset at intervals — fast to restore but can lose recent writes since the last snapshot. AOF logs every write operation and replays it on restart — more durable, configurable fsync frequency, but a larger file and slightly slower to restore. Production Redis often runs both together.',
    recognition: {
      prompt: 'Which persistence method logs every write operation so it can be replayed on restart?',
      options: ['RDB snapshotting', 'AOF (Append Only File)', 'Neither — Redis is purely in-memory', 'Replication'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between RDB and AOF persistence in Redis, including the durability vs performance trade-off of each.',
    rubricKeywords: ['rdb', 'snapshot', 'aof', 'append only', 'durability', 'fsync', 'restart'],
  },

  // ---------- Kafka ----------
  {
    topic: 'Kafka',
    level: 'Beginner',
    title: 'Topics & Partitions',
    tutorial:
      'A Kafka topic is split into partitions, each an ordered, append-only log. Partitioning is what enables parallelism — different consumers can read different partitions concurrently — but ordering is only guaranteed within a single partition, not across the whole topic.',
    recognition: {
      prompt: 'Within a single Kafka partition, what ordering guarantee does Kafka provide?',
      options: [
        'No ordering guarantee at all',
        'Strict order of messages as they were produced',
        'Ordering only across the entire topic, not per partition',
        'Ordering only if consumers use the same client library',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain what a Kafka partition is, why topics are split into multiple partitions, and what ordering guarantees do and do not hold.',
    rubricKeywords: ['partition', 'ordered log', 'parallelism', 'append-only', 'per-partition order'],
  },
  {
    topic: 'Kafka',
    level: 'Intermediate',
    title: 'Consumer Groups & Offsets',
    tutorial:
      'Each consumer in a consumer group is assigned a subset of a topic\'s partitions, so the group as a whole processes every partition exactly once in parallel. Kafka tracks each group\'s offset (its read position) per partition, so consumers can resume from where they left off after a restart or rebalance.',
    recognition: {
      prompt: 'If two consumers in the same consumer group are subscribed to a topic with 4 partitions, what typically happens?',
      options: [
        'Both consumers read every partition, duplicating all messages',
        'Partitions are split between them so each message is processed once by the group',
        'Only one consumer is allowed to be active at a time',
        'Kafka rejects the second consumer',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how consumer groups divide up partition reads, and what an offset is used for when a consumer restarts or a rebalance happens.',
    rubricKeywords: ['consumer group', 'partition assignment', 'offset', 'rebalance', 'exactly once per group'],
  },
  {
    topic: 'Kafka',
    level: 'Advanced',
    title: 'Delivery Guarantees',
    tutorial:
      'Kafka can be configured for at-most-once, at-least-once, or exactly-once delivery. At-least-once (the common default) means consumers may see duplicate messages if an offset commit happens before processing finishes; exactly-once semantics require idempotent producers and transactional writes across produce-and-commit to eliminate duplicates.',
    recognition: {
      prompt: 'With at-least-once delivery, what can happen to a consumer if it crashes after processing a message but before committing its offset?',
      options: [
        'The message is lost forever',
        'The message may be reprocessed as a duplicate after restart',
        'Kafka automatically deduplicates it',
        'The consumer group is permanently disabled',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain the difference between at-most-once, at-least-once, and exactly-once delivery in Kafka, and what mechanisms enable exactly-once semantics.',
    rubricKeywords: ['at-most-once', 'at-least-once', 'exactly-once', 'idempotent producer', 'transactional', 'offset commit', 'duplicate'],
  },

  // ---------- AWS ----------
  {
    topic: 'AWS',
    level: 'Beginner',
    title: 'EC2 vs Lambda',
    tutorial:
      'EC2 gives you a persistent virtual machine you manage and pay for continuously, suited for long-running or stateful workloads. Lambda runs your code on-demand in response to events, scales automatically, and you only pay per invocation/duration — but it\'s stateless and has execution time limits, making it a better fit for short, event-driven tasks.',
    recognition: {
      prompt: 'Which workload is generally a better fit for AWS Lambda than EC2?',
      options: [
        'A long-running stateful game server',
        'A short, event-triggered image-resize function',
        'A workload that needs a persistent local filesystem',
        'A process that must run continuously 24/7 at high, steady load',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Compare EC2 and Lambda in terms of billing model, scaling, and the kinds of workloads each is best suited for.',
    rubricKeywords: ['ec2', 'lambda', 'event-driven', 'pay per invocation', 'stateless', 'scaling', 'persistent'],
  },
  {
    topic: 'AWS',
    level: 'Intermediate',
    title: 'Load Balancing & Auto Scaling',
    tutorial:
      'An Application Load Balancer distributes incoming traffic across healthy instances in a target group, removing unhealthy ones via health checks. Auto Scaling Groups watch metrics (like CPU utilization) and add or remove instances to match demand, so the two work together to keep the app both available and cost-efficient.',
    recognition: {
      prompt: 'What is the role of health checks in an Application Load Balancer setup?',
      options: [
        'They encrypt traffic between the load balancer and instances',
        'They detect and stop routing traffic to unhealthy instances',
        'They automatically scale the number of instances',
        'They are only used for logging, not routing decisions',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how an Application Load Balancer and an Auto Scaling Group work together to handle variable traffic, including the role of health checks and scaling metrics.',
    rubricKeywords: ['load balancer', 'health check', 'target group', 'auto scaling', 'cpu utilization', 'availability'],
  },
  {
    topic: 'AWS',
    level: 'Advanced',
    title: 'S3 Consistency & Storage Classes',
    tutorial:
      'S3 now provides strong read-after-write consistency for all operations. Storage classes (Standard, Infrequent Access, Glacier, etc.) trade retrieval latency and cost for storage price — Glacier is far cheaper per GB but retrieval can take minutes to hours, so choosing a class is about matching access patterns to cost.',
    recognition: {
      prompt: 'Which S3 storage class is best suited for data you rarely access but need retrievable within minutes to hours at low storage cost?',
      options: ['S3 Standard', 'S3 Glacier', 'S3 Intelligent-Tiering only', 'S3 Standard-IA only'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain S3\'s read-after-write consistency guarantee and describe how you would choose between storage classes based on access pattern and cost.',
    rubricKeywords: ['read-after-write', 'consistency', 'storage class', 'glacier', 'infrequent access', 'retrieval cost', 'access pattern'],
  },

  // ---------- Behavioral ----------
  {
    topic: 'Behavioral',
    level: 'Beginner',
    title: 'The STAR Method',
    tutorial:
      'STAR structures a behavioral answer as Situation (context), Task (your responsibility), Action (what you specifically did), and Result (the outcome, ideally with a measurable impact). It keeps answers concrete and prevents rambling into vague generalities that don\'t show what you actually did.',
    recognition: {
      prompt: 'In the STAR method, what does the "A" stand for?',
      options: ['Assessment', 'Action', 'Approach', 'Alignment'],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain each part of the STAR method and why interviewers prefer it over a free-form answer to a behavioral question.',
    rubricKeywords: ['situation', 'task', 'action', 'result', 'concrete', 'measurable impact'],
  },
  {
    topic: 'Behavioral',
    level: 'Intermediate',
    title: 'Handling Conflict with a Teammate',
    tutorial:
      'A strong answer here names a specific, real disagreement, focuses on the reasoning and communication used to resolve it (not just "we talked it out"), and is honest about a compromise or a time you were wrong. Vague, conflict-free answers read as either inexperience or an unwillingness to engage with the question.',
    recognition: {
      prompt: 'What tends to make a "describe a conflict with a teammate" answer weak in an interview?',
      options: [
        'Naming a specific, real disagreement and how it was resolved',
        'Being vague about the disagreement or claiming you never have conflicts',
        'Explaining the reasoning behind each side\'s position',
        'Describing the concrete outcome and what you\'d do differently',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Describe how you would structure an answer about a real conflict with a teammate, and what specifically makes such an answer credible versus generic.',
    rubricKeywords: ['specific example', 'resolution', 'compromise', 'communication', 'credible', 'reasoning'],
  },
  {
    topic: 'Behavioral',
    level: 'Advanced',
    title: 'Justifying a Technical Trade-off',
    tutorial:
      'When explaining a design decision, name the alternatives you actually considered, the constraint that drove the choice (latency, cost, team familiarity, deadline), and what you gave up. Interviewers are testing whether you can reason about trade-offs under real constraints, not whether you picked the "textbook correct" answer.',
    recognition: {
      prompt: 'When asked to justify a past technical decision, what is most important to include?',
      options: [
        'Only the final choice, without discussing alternatives',
        'The alternatives considered, the constraint that drove the decision, and what was traded away',
        'A defense that the decision was objectively the only correct one',
        'A list of every technology you know',
      ],
      correctIndex: 1,
    },
    recallPrompt:
      'Explain how you would structure an answer justifying a past architecture or technology decision, including how you would talk about trade-offs and constraints.',
    rubricKeywords: ['alternatives', 'constraint', 'trade-off', 'reasoning', 'context', 'decision'],
  },
];
