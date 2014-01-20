## Mark Three - Template
---
A set of files I usually use, everytime I start a project.

### Currently includes
- Normalize v2.1.3
- Bourbon (SASS dependant) v3.1.8
- jQuery v1.10.2

### CSS (SASS based)
- Edit style.scss
- Link style.css

Point to the /css folder and run the following SASS command (just once)
```
sass --watch style.scss:style.css --style compressed
```

goto `// Declare Variables` in style.scss for default variables 

Optionally, run `myth` in the end
```
myth style.css style.css
```

### JS (Uglify based)
- Edit script.u.js
- Link script.js

From the project folder, run (after every update)

```
uglifyjs -o js/script.js js/script.u.js
```

### Default Font
- Open Sans

