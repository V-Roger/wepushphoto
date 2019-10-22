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

<style>
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
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
