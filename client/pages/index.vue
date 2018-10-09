<template lang="pug">
  .container
    main
      article
        h1 アイテム
        section
          .card(v-for="item in items")
            .card-content
              .media
                | {{ item.name }}
              .content
                div {{ item.id }}
                div {{ item.price }}
</template>

<script>
  export default {
    computed: {
      items() {
        return this.$store.state.items
      }
    }
  }
</script>
