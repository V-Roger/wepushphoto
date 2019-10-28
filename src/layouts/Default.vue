<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background: var(--color-white);
  font-family: Raleway, sans-serif;
}

:root {
  --color-primary: #b42e41;
  --color-black: #1d1d1b;
  --color-white: #f6f6f6;
  --color-gray: #888;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

hr {
  overflow: visible; /* For IE */
  display: block;
  padding: 0;
  border: none;
  border-top: 2px solid var(--color-gray);
  text-align: center;
  margin: 3em 0;
}

hr:after {
  content: "◀▶";
  display: inline-block;
  color: var(--color-primary);
  position: relative;
  top: -0.75em;
  font-size: 1em;
  padding: 0 0.5em;
  letter-spacing: -1px;
  background: var(--color-white);
}

pre,
code {
  font-family: 'Fira Code', monospace;
}
</style>
