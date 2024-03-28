<template>
  <div class="p-12 bg-red-300 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">Course:</span>
        {{ name }}
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
        <h3>Chapters</h3>
        <ul>
          <li v-for="chapter in course" :key="chapter.title">
            <NuxtLink :to="`/course/chapter/${formatChapterTitle(chapter.title)}`">
              {{ chapter.title }}
            </NuxtLink>
            <ul>
              <li v-for="(lesson, index) in chapter.lessons" :key="lesson.title">
                <NuxtLink :to="`/course/chapter/${formatChapterTitle(chapter.title)}/lesson/lesson-${index + 1}`">
                  {{ lesson.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
        <NuxtPage :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const name = 'Nuxt.js Course';
const { course } = useCourse();
function formatChapterTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/ /g, '-');
}
</script>

<style scoped>
.router-link-active {
  @apply text-blue-500;
}
</style>