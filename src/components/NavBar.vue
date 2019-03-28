<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="navbar-brand" to="/">TriviaApp</router-link>
          </li> 
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  li :hover {
    background-color: #111;
    color:rgb(201, 76, 31);
    text-decoration: none;
  }
</style>