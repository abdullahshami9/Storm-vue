<template>
  <div>
    <header>
      <div class="logo">
        <img src="../assets/login/logo.png" alt="Logo" id="logo">
      </div>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="dropdown">
            <a href="#">Dropdown <font-awesome-icon icon="caret-down" /></a>
            <ul class="dropdown-menu">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </li>
          <li>
            <router-link to="/logout">Logout</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Your main content -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  // Your Vue component options
  name:'SFHeader',
};
</script>

<style>
/* Header styles */
header {
  background-color: #fff;
  color: darkgray;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  width: 100vw;
}

#logo {
  width: 200px;
  height: 40px;
  margin: 10px;
  margin-left: 15vw;
}

.logo img {
  width: 50px;
  height: 50px;
}

.menu {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

nav {
  margin-right: 15vw;

}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: darkgray;
  text-decoration: none;
  padding: 10px;
}

nav ul li a:hover {
  color: darkgray;
  text-decoration: none;
  padding: 10px;
}

/* Dropdown menu styles */
.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 5px 0;
}

.dropdown-menu li a {
  color: #333;
  text-decoration: none;
  padding: 5px;
  display: block !important;
}

.dropdown-menu li a:hover {
  background-color: #ddd;
  display: block;
}
</style>
