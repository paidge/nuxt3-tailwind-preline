<template>
  <div>
    <div class="hello-scss">
      <div class="hello-scss__element text-2xl">Hello World !</div>
    </div>
    <div class="mb-10 p-4 pt-2">
      <h2 class="mb-2">Overlay 1</h2>
      <OverlayItem
        content-id="overlay-1"
        title="Overlay 1"
        content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc." />
    </div>
    <div class="mb-10">
      <h2 class="mb-2">Overlay 2</h2>
      <OverlayItem
        content-id="overlay-2"
        title="Overlay 2"
        content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc." />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hello-scss {
  &__element {
    @apply hover:text-green-400;
    @apply hover:cursor-pointer;
  }
}
</style>
