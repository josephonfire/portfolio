<template>
  <div style="width: 100vw; position: relative; background-color: black; margin: 0; padding: 0; overflow-x: hidden;">
    <!-- Violet Storm Background with Top Glow -->
    <div
      style="position: fixed; inset: 0; z-index: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000;"
    />
    
    <!-- Your Content/Components -->
    <div style="position: relative; z-index: 10; width: 100%;">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Additional styles can be added here */
</style> 