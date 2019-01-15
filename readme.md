# react-image-tooltip

> Image tooltip for React (WIP)

[![NPM](https://img.shields.io/npm/v/react-image-tooltip.svg)](https://www.npmjs.com/package/react-image-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Build Status](https://travis-ci.org/Jezfx/react-image-tooltip.svg?branch=master)](https://travis-ci.org/Jezfx/react-image-tooltip)



## Install

```bash
npm install --save react-image-tooltip
```

## Usage

```jsx
import React, { Component } from 'react'
import ohYeah from './oh-yeah.gif'

import ReactImageTooltip from 'react-image-tooltip'

class Example extends Component {
  render () {
    return (
      <ReactImageTooltip image={ohYeah}>
          <Link to="https://www.linkedin.com/in/jezwilliams/">
              LinkedIn
          </Link>
      </ReactImageTooltip>
    )
  }
}
```

## License

MIT © [Jezfx](https://github.com/Jezfx)
