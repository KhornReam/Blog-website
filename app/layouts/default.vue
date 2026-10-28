<template>
  <!-- id="top" powers the footer's back-to-top link. -->
  <div id="top" class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
