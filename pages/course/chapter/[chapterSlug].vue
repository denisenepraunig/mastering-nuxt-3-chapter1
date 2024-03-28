<script setup>
const { course } = useCourse();

function reverseFormatChapterTitle(title) {
  let parts = title.split('-');
  let chapterNumber = parts[1];
  let chapterTitle = parts.slice(2).join(' ').replace(/(^|\s)(\w)/g, function (_, p1, p2) {
    return p1 + p2.toUpperCase();
  });
  return `Chapter ${chapterNumber} - ${chapterTitle}`;
}

const route = useRoute();
const chapterSlug = route.params.chapterSlug;
// const chapterTitle = "Chapter 1 - Building our MVP";
const chapterTitle = reverseFormatChapterTitle(chapterSlug);
// console.log(chapterTitle);

function findChapterIndex(courseArray, title) {
  return courseArray.findIndex(chapter => chapter.title.toLowerCase() === title.toLowerCase());
}

const chapterIndex = findChapterIndex(course, chapterTitle);
// console.log(chapterIndex);
const lessons = course[chapterIndex].lessons;
// console.log(lessons);
const chapterDescription = course[chapterIndex].description;

const lessonSlug = route.params.lessonSlug;
let lessionTitle = "DUMMY TITLE";
let lessionDescription = "DUMMY DESCRIPTION";

if (lessonSlug) {
  const lessonNumber = extractLessonNumber(lessonSlug);
  const lesson = findLessonIndex(lessons, lessonNumber);

  if (lesson) {
    lessionTitle = lesson.title;
    lessionDescription = lesson.description;
  }
}
// write a function that converts 'lesson-1' to 1
function extractLessonNumber(lessonSlug) {
  return parseInt(lessonSlug.split('-')[1]);
}

function findLessonIndex(chapterArray, number) {
  return chapterArray[number - 1];
}
</script>

<template>
  <div class="prose" v-if="$route.params.lessonSlug">{{ chapterTitle }} / {{ $route.params.lessonSlug }}
    <h3>{{ lessionTitle }}</h3>
    <p>{{ lessionDescription }}</p>
  </div>
  <!-- <div v-else>No lesson slug</div> -->
  <div v-if="!$route.params.lessonSlug">
    <h2>{{ chapterTitle }}</h2>
    <p>{{ chapterDescription }}</p>
  </div>
  <!-- <p>Chapter slug {{ $route.params.chapterSlug }}</p> -->
  <NuxtPage :key="$route.fullPath" />

  <div v-if="!$route.params.lessonSlug">
    <h3>Lessons</h3>
    <ul>
      <li v-for="(lesson, index) in lessons" :key="lesson.title">
        <router-link :to="`/course/chapter/${chapterSlug}/lesson/lesson-${index + 1}`">{{ lesson.title
          }}</router-link><br />
        {{ lesson.description }}
      </li>
    </ul>
  </div>

</template>
