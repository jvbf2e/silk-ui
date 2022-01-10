<template>
  <div class="card">
    <h1 class="title">基础</h1>
    <div class="body">
      <div class="item">
        <s-button type="primary">Primary</s-button>
        <s-button type="secondary">Secondary</s-button>
        <s-button>Default</s-button>
        <s-button type="text">Text</s-button>
        <s-button type="link">Link</s-button>
      </div>
    </div>
  </div>
  <div class="card">
    <h1 class="title">圆角</h1>
    <div class="body">
      <div class="item">
        <s-button type="primary" :curve="0">Primary</s-button>
        <s-button type="secondary">Secondary</s-button>
        <s-button :curve="8">Default</s-button>
        <s-button type="text" :curve="16">Text</s-button>
        <s-button type="link" :curve="32">Link</s-button>
      </div>
    </div>
  </div>
  <div class="card">
    <h1 class="title">状态</h1>
    <div class="body">
      <div class="item">
        <s-button type="primary" state="success">success</s-button>
        <s-button type="primary" state="warning">warning</s-button>
        <s-button type="primary" state="danger">danger</s-button>
      </div>
      <div class="item">
        <s-button type="secondary" state="success">success</s-button>
        <s-button type="secondary" state="warning">warning</s-button>
        <s-button type="secondary" state="danger">danger</s-button>
      </div>
      <div class="item">
        <s-button state="success">success</s-button>
        <s-button state="warning">warning</s-button>
        <s-button state="danger">danger</s-button>
      </div>
      <div class="item">
        <s-button type="text" state="success">success</s-button>
        <s-button type="text" state="warning">warning</s-button>
        <s-button type="text" state="danger">danger</s-button>
      </div>
      <div class="item">
        <s-button type="link" state="success">success</s-button>
        <s-button type="link" state="warning">warning</s-button>
        <s-button type="link" state="danger">danger</s-button>
      </div>
    </div>
  </div>
  <div class="card">
    <h1 class="title">加载中</h1>
    <div class="body">
      <div class="item">
        <s-button type="primary" loading>Primary</s-button>
        <s-button type="secondary" loading>Secondary</s-button>
        <s-button loading>Default</s-button>
        <s-button type="text" loading>Text</s-button>
        <s-button type="link" loading>Link</s-button>
      </div>
    </div>
  </div>
  <div class="card">
    <h1 class="title">禁用</h1>
    <div class="body">
      <div class="item">
        <s-button type="primary" disabled>Primary</s-button>
        <s-button type="secondary" disabled>Secondary</s-button>
        <s-button disabled>Default</s-button>
        <s-button type="text" disabled>Text</s-button>
        <s-button type="link" disabled>Link</s-button>
      </div>
      <div class="item">
        <s-button type="primary" state="success" disabled>success</s-button>
        <s-button type="primary" state="warning" disabled>warning</s-button>
        <s-button type="primary" state="danger" disabled>danger</s-button>
      </div>
      <div class="item">
        <s-button type="secondary" state="success" disabled>success</s-button>
        <s-button type="secondary" state="warning" disabled>warning</s-button>
        <s-button type="secondary" state="danger" disabled>danger</s-button>
      </div>
      <div class="item">
        <s-button state="success" disabled>success</s-button>
        <s-button state="warning" disabled>warning</s-button>
        <s-button state="danger" disabled>danger</s-button>
      </div>
      <div class="item">
        <s-button type="text" state="success" disabled>success</s-button>
        <s-button type="text" state="warning" disabled>warning</s-button>
        <s-button type="text" state="danger" disabled>danger</s-button>
      </div>
      <div class="item">
        <s-button type="link" state="success" disabled>success</s-button>
        <s-button type="link" state="warning" disabled>warning</s-button>
        <s-button type="link" state="danger" disabled>danger</s-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  padding: 10px;
}

.card + .card {
  margin-top: 10px;
}

.card .title {
  margin-bottom: 4px;
  font-size: 16px;
  color: #333;
}

.card .body {
  position: relative;
}

.card .body .item + .item {
  position: relative;
  margin-top: 8px;
}
</style>
