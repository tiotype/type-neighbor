# Type Neighbor

Type Neighbor is a Gatsby 3 starter with a static type tester.

[https://typeneighbor.com](https://typeneighbor.com/)

![Type Neighbor](https://github.com/tiotype/type-neighbor/blob/3dab2e3d10e21027202d4739a964ed7d2eb26f88/src/assets/images/readme-screen.png)

## Purpose

Type Neighbor is meant for type designers or foundries who use React or Gatsby for their specimen sites or portfolios. Its initial state is built with six fonts from the Google Fonts library for demonstration purposes. You can easily add your own self-hosted web fonts, adjust the CSS, and customize the json data that forms the basis of each individual type tester. It currently supports static font families or single fonts. Variable font tools and full glyph sets should be added in the future.

## Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tiotype/type-neighbor)

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project. If you don't have the CLI installed already, see [Gastby instructions](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli).

```sh
gatsby new your-project-name https://github.com/tiotype/type-neighbor
```

2. **Start developing.**

Navigate into your new site's directory, install node modules, and start it up.

```sh
cd your-project-name
npm install
gatsby develop
```

3. **Open the code and start customizing.**

Your site is now running at `http://localhost:8000`.

## Add Fonts

1. **Add self-hosted fonts**

Add your own self-hosted fonts to the fonts folder.

```
└── src
    └── assets
        └── fonts
            └── open-sans-v18-latin-regular.woff
```

2. **Add @font-face declarations**

Add the @font-face declarations for your self-hosted fonts to \_webfonts.scss.

```
└── src
    └── assets
        └── scss
            └── _webfonts.scss
```

```css
@font-face {
  font-family: "Open Sans";
  src: url("../fonts/open-sans-v18-latin-regular.woff2") format("woff2"), url("../fonts/open-sans-v18-latin-regular.woff")
      format("woff");
}
```

3. **Add mixins**

Add font mixins to \_mixins.scss.

```css
@mixin open-sans-regular {
  font-family: "Open Sans", serif;
  font-weight: 400;
  font-style: normal;
}
```

4. **Add font classes**

Add font classes to \_collection.scss.

```css
.open-sans-regular {
  @include open-sans-regular;
}
```

## Customize Homepage

1. **Add your fonts to the homepage**

The homepage font list is controlled by fonts.json. Add each font's data to the "fonts" array.

```
└── src
    └── data
        └── fonts.json
```

```json
{
  "fonts": [
    {
      "fontName": "Open Sans",
      "route": "open-sans",
      "type": "family",
      "className": "open-sans-regular"
    }
  ]
}
```

## Customize Testers

1. **Add tester data for each font**

Each font page imports data from its own json array. Create a json file for each font page in the data folder. For each font within a font family, create a nested array.

```
└── src
    └── data
        └── openSans.json
```

```json
{
  "openSans": [
    {
      "fontName": "Open Sans",
      "singleName": "Regular",
      "route": "open-sans-regular",
      "type": "single",
      "className": "open-sans-regular",
      "textDefaultBig": "The meeting felt that…",
      "textBig": "The meeting felt that…",
      "textDefaultSmall": "Aa",
      "textSmall": "Aa",
      "sizeMinBig": "0.4",
      "sizeMaxBig": "15.0",
      "sizeValueDefaultBig": "6.0",
      "sizeValueBig": "6.0",
      "sizeStepBig": "0.05",
      "sizeMinSmall": "0.4",
      "sizeMaxSmall": "15.0",
      "sizeValueDefaultSmall": "6.0",
      "sizeValueSmall": "6.0",
      "sizeStepSmall": "0.05",
      "lineHeightMinBig": "0.8",
      "lineHeightMaxBig": "3.0",
      "lineHeightValueDefaultBig": "1.4",
      "lineHeightValueBig": "1.4",
      "lineHeightStepBig": "0.05",
      "lineHeightMinSmall": "0.8",
      "lineHeightMaxSmall": "3.0",
      "lineHeightValueDefaultSmall": "1.4",
      "lineHeightValueSmall": "1.4",
      "lineHeightStepSmall": "0.05"
    }
  ]
}
```
