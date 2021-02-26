<template>
  <div class="container">
    <section class="hero is-success">
      <div class="hero-body">
        <p class="title">
          <slot name="title"></slot>
        </p>
        <p class="subtitle">
          <slot name="subtitle"></slot>
        </p>
      </div>
    </section>
    <section class="section is-medium">
      <slot name="content"><h1>test</h1></slot>
    </section>
    <slot name="footer">
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Vue 3 Presentation Slide</strong> by
            <a href="https://jgthms.com">Muhammad Ammar</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >Touchpoint International</a
            >.
          </p>
        </div>
      </footer>
    </slot>
  </div>
</template>
<script>
export default {
  name: "BaseLayout",
};
</script>
