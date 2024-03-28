<template>
  <div>
    <h2>LESSON SLUG</h2>
    <!-- <h2>{{ chapterTitle }}</h2>
  <p>{{ chapterDescription }}</p> -->
    <p>Chapter slug {{ $route.params.chapterSlug }}</p>
    <p>Lesson slug {{ $route.params.lessonSlug }}</p>

    <!-- <div>
    <h3>Lessons</h3>
    <ul>
      <li v-for="(lesson, index) in lessons" :key="lesson.title">
        <router-link :to="`/course/chapter/${chapterSlug}/lesson/lesson-${index + 1}`">{{ lesson.title
          }}</router-link><br />
        {{ lesson.description }}
      </li>
    </ul>
  </div> -->
    <LessonCompleteButton :model-value="isLessonCompleted" @update:model-value="toggleComplete" />
  </div>
</template>

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

// write a function that turns lesson-2 into a number 2
function reverseFormatLessonTitle(title) {
  return parseInt(title.split('-')[1]);
}

const chapterIndex = findChapterIndex(course, chapterTitle);
// console.log(chapterIndex);
const lessons = course[chapterIndex].lessons;
// console.log(lessons);
const chapterDescription = course[chapterIndex].description;

const lessonIndex = reverseFormatLessonTitle(route.params.lessonSlug) - 1;
// those didn't want to work?!
// const title = computed(() => chapterTitle);
// const description = computed(() => chapterDescription);

useHead({
  title: chapterTitle,
  meta: [
    {
      name: 'description',
      content: chapterDescription,
    },
  ],
});

// destroyed when navigating obviously
// const progress = ref(false);

const progress = useState('progress', () => {
  return [];
});

const isLessonCompleted = computed(() => {
  if (!progress.value[chapterIndex]) {
    return false;
  }

  if (!progress.value[chapterIndex][lessonIndex]) {
    return false;
  }

  return progress.value[chapterIndex][lessonIndex];
});

const toggleComplete = () => {
  if (!progress.value[chapterIndex]) {
    progress.value[chapterIndex] = [];
  }

  progress.value[chapterIndex][lessonIndex] = !isLessonCompleted.value;
};
</script>