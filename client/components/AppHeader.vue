<template lang="pug">
  header
    nav.navbar.has-shadow(role='navigation' area-label='main navigation')
      .navbar-brand
        a.navbar-item(href='/')
          img(src="~/static/logo.png")
        form.field.navbar-item.is-expanded.p-is-expanded.has-addons
          .control.has-icons-right.p-is-expanded
            input.input(type="text" placeholder="検索キーワードを入力")
            span.icon.is-right
              i.fas.fa-search
          .control
            a.button.is-info 検索
</template>
<style scoped lang="scss">
  .p-is-expanded {
    width: 100%;
  }
</style>
