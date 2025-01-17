
# Calculator using [Tailwind CSS](https://tailwindcss.com/)


A brief description of what this project does and who it's for


## Deployment

To deploy this project run

## Tailwind CLI

`Terminal`
```bash
    npm init -y
```
### Install Tailwind CSS

Install `tailwindcss` via npm, and create your `tailwind.config.js` file.

`Terminal`
```
    npm install -D tailwindcss
```

```
    npx tailwindcss init
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

`src/input.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.

`Terminal`
```
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Start using Tailwind in your HTML

Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.

`src/index.html`
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```