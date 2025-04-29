<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

h1,
h2,
h3,
h4 {
  text-align: center;
  margin-top: 15px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  padding: 20px;
}

input {
  padding: 5px;
  border-radius: 5px;
}

button {
  border: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
}

.deleteButton {
  background-color: #cf4d4d;
}
.saveButton {
  background-color: #dbb211;
}
.editButton {
  background: #3498db;
}

.createButton {
  background-color: #34aa40;
}

.cancelButton {
  background-color: #a1a1a1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
