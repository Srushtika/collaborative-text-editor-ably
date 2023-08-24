<template>
  <div class="text-white font-medium">
    <div class="mx-2 p-6 bg-white rounded-lg shadow dark:bg-gray-800">
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">How to try this demo</h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Open this app in a new tab or share it with friends.</p>
      <a href="https://github.com/ably-labs/collaborative-text-editor-ably" target="_blank" class="inline-flex items-center text-blue-600 hover:underline">
        See it on GitHub
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </div>
    <div class="mx-2 p-6 bg-white rounded-lg shadow dark:bg-gray-800">
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Powered by Ably Spaces SDK</h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        The Spaces SDK helps you build collaborative environments for your application to enable synchrnous collaboration between members.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
