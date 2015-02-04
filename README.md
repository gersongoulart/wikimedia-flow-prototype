# simplysocial

Building Wikimedia's "Flow" prototype in AngularJS and LESS CSS for fun and practice.


# See

The result of this work can be see online at gersongoulart.github.io/wikimedia-flow-prototype


# Build

Make sure you have `gulp-cli` installed globally.

- `npm install`
- `bower install`
- `gulp`

The solution will be serverd at http://localhost:8080


# Notes
- Created custom webfonts for icons (using icomoon.io/app)
- Using simplified version of BEM for CSS syntax
- Could be using SCSS for CSS (chose LESS for simplicity of running it with NodeJs withouth dependencies)
- Had a major performance problem with recursive responses resolved with the help of https://github.com/marklagendijk/angular-recursion
