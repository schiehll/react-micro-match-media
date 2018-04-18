# react-micro-match-media

> zero dependencies, ~1kb render prop wrapper of window.matchMedia

[![travis build](https://img.shields.io/travis/schiehll/react-micro-match-media.svg?style=flat-square)](https://travis-ci.org/schiehll/react-micro-match-media)
[![version](https://img.shields.io/npm/v/react-micro-match-media.svg?style=flat-square)](http://npm.im/react-micro-match-media)

# Instalation

```bash
$ npm install --save react-micro-match-media
```

## Peer dependencies

This package expect `react@^16.3.0` as a peer dependency.

# Usage

You just pass in the query that you want to be listening and render your components accordingly.

```js
import React, { Component } from 'react'
import MatchMedia from 'react-micro-match-media'

const App = () => (
  <MatchMedia query={`(max-width: 600px)`}>
    {matches => {
      if (matches) return 'will be rendered if viewport is <= 600'
      return 'will be rendered if viewport is > 600'
    }}
  </MatchMedia>
)
```

## Smart usage

You can also do things like:

```js
import React, { Component } from 'react'
import MatchMedia from 'react-micro-match-media'

const Portrait = ({ children, ...props }) => (
  <MatchMedia {...props} query={`(orientation: portrait)`}>
    {isPortrait => (isPortrait ? children : null)}
  </MatchMedia>
)

const App = () => (
  <Portrait>will render only if orientation is portrait</Portrait>
)
```
