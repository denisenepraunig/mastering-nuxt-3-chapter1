<script lang="ts" setup></script>

<template>
  <div>
    Page: index
  </div>
  <router-link to="/course" class=" rounded-md p-1 m-1 bg-blue-600">Course</router-link>
  <router-link to="/about">About</router-link>
  <pre>{{ $route.fullPath }}</pre>
</template>

<style scoped></style>
