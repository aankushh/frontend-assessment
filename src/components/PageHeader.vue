<template>
  <header class="header">
    <div class="header-left">
      <img src="@/assets/images/send_a_message.svg" alt="Logo" class="logo" />
    </div>
    <div class="header-right">
      <h1>Welcome, Ankush</h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
}

.logo {
  height: 40px;
}

.header-right h1 {
  font-size: 24px;
  font-weight: 600;
}

@media (min-width: 768px) {
  .header-right h1 {
    font-size: 36px;
  }
}
</style>
