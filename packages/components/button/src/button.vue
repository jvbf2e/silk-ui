<template>
  <button
    ref="buttonRef"
    :class="buttonClass"
    :type="htmlType"
    :style="buttonStyle"
    :disabled="disabled"
  >
    <template v-if="loading">
      <span>Loading...</span>
    </template>
    <template v-else>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </template>
  </button>
</template>

<script lang="ts" src="./button.ts"></script>
