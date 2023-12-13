<script setup lang="ts">
defineProps<{
  contentId: string;
  title: string;
  content: string;
}>();
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    :data-hs-overlay="`#${contentId}`">
    Open offcanvas
  </button>

  <div
    :id="contentId"
    class="hs-overlay hs-overlay-open:translate-x-0 fixed start-0 top-0 z-[60] hidden h-full w-full max-w-xs -translate-x-full transform border-e bg-white transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
    tabindex="-1">
    <div
      class="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
      <h3 class="font-bold text-gray-800 dark:text-white">
        {{ title }}
      </h3>
      <button
        type="button"
        class="flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        :data-hs-overlay="`#${contentId}`">
        <span class="sr-only">Close modal</span>
        <svg
          class="h-4 w-4 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
    <div class="p-4">
      <p class="text-gray-800 dark:text-gray-400">
        {{ content }}
      </p>
    </div>
  </div>
</template>
