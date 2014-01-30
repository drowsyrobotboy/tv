![Mark Three - Template](https://raw.github.com/maruthip25/three/master/images/logo.svg)
---
A set of files I usually use, everytime I start a project.

### Currently includes
- Normalize v2.1.3
- Bourbon (SASS dependant) v3.1.8
- jQuery v1.10.2
- AngularJS 1.2.10 with Route and Animate Modules

### CSS (SASS based)
- Edit style.scss
- Link style.css

#### Running SASS
- Point to the /css folder and run the following SASS command (just once)
```
sass --watch style.scss:style.css --style compressed
```

- or in WindowsPowerShell, run
```
.\sass
```

goto `// Declare Variables` in style.scss for default variables 

Optionally, run `myth` in the end
```
myth style.css style.css
```

### JS (Uglify based)
- Edit script.u.js
- Link script.js
#### Running Uglify.js

- From the project folder, run (after every update)
```
uglifyjs -o js/script.js js/script.u.js
```
- or in WindowsPowerShell, run
```
.\ujs
```


### Default Font
- Open Sans

