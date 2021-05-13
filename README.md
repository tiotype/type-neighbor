# Type Neighbor

Type Neighbor is a Gatsby v3 starter with a static type tester.

[https://typeneighbor.com](https://typeneighbor.com/)

![Type Neighbor](https://github.com/tiotype/type-neighbor/blob/c2580fb3d0c3915060599e82c8fba48ebd533e1a/src/assets/images/readme-screen.png)

## Purpose

Type Neighbor is meant for type designers or foundries who use React or Gatsby for their specimen sites or portfolios. Its initial state is built with six fonts from the Google Fonts library for demonstration purposes. You can easily add your own self-hosted or hosted web fonts, adjust the CSS, and customize the json data that forms the basis of each individual type tester. It currently supports static font families or single fonts. Variable font tools and full glyph sets should be added in the future.

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

The following documentation is for self hosted web fonts. If you are using hosted fonts (such as Google Fonts or Adobe Fonts) simply @import the fonts in style.scss and continue to create your mixins and classes as referenced below.

1. **Self-hosted fonts**

Add your own self-hosted fonts to the fonts folder.

```
└── src
    └── assets
        └── fonts
            └── open-sans-v18-latin-regular.woff
```

2. **@font-face declarations**

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

3. **Mixins**

Add font mixins to \_mixins.scss.

```
└── src
    └── assets
        └── scss
            └── _mixins.scss
```

```css
@mixin open-sans-regular {
  font-family: "Open Sans", serif;
  font-weight: 400;
  font-style: normal;
}
```

4. **Font classes**

Add font classes to \_collection.scss.

```
└── src
    └── assets
        └── scss
            └── _collection.scss
```

```css
.open-sans-regular {
  @include open-sans-regular;
}
```

## Customize Homepage

1. **Add your fonts to the homepage**

The homepage font list is populated by data from fonts.json. Add each font's data to the fonts object in fonts.json.

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

Each font tester imports data from its own json object. Create these json objects in json files in the data folder. For each font within a font family, create an array in that object.

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

While all the properties can be customized, the list below is a reference for the properties that are most useful to adjust for each individual font within a family.

Type Neighbor uses breakpoints from Bootstrap 5. See [Bootstrap 5 Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).

```
// Font Info
fontName: The name of font family
singleName: The name of the individual font within family (e.g. weight or style)
route: The route for navigation
className: The class name of the individual font (referenced in _collection.scss)

// Specimen Text
textDefaultBig: The default specimen text used when tester is reset (on medium, large devices)
textBig: The initial specimen text used on tester page (on medium, large devices)
textDefaultSmall: The default specimen text used when tester is reset (on small devices)
textSmall: The initial specimen text used on tester page (on small devices)

// Font Size
sizeValueDefaultBig: The default specimen font size when tester is reset (on medium, large devices)
sizeValueBig: The initial specimen font size used on tester page (on medium, large devices)
sizeValueDefaultSmall: The default specimen font size when tester is reset (on small devices)
sizeValueSmall: The initial specimen font size used on tester page (on small devices)

```

2. **Add tester page for each font**

The properties in the json objects correspond to the controls on each font's type tester page.

```
└── src
    └── pages
        └── fonts
            └── open-sans.js
```

Map items from json object.

```javascript
useEffect(() => {
  setFonts(
    fontsData.openSans.map(item => ({
      ...item,
      overflow: true,
      alignmentBig: "text-left",
      alignmentSmall: "text-center",
    }))
  )
}, [])
```

Sample of font properties in font tester controls.

```html
<input
  type="range"
  name="line-height"
  min={item.lineHeightMinBig}
  max={item.lineHeightMaxBig}
  value={item.lineHeightValueBig}
  step={item.lineHeightStepBig}
  className="form-range range line-height"
  aria-label="Line Height"
  onChange={event => onLineHeightChangeBig(i, event)}
></input>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
