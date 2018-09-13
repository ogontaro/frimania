<template lang="pug">
  .navbar.has-shadow.is-spaced(role="navigation" aria-label="main navigation")
    .nabvar-brand
      | Frimania
      item-search-box
</template>

<script>
import ItemSearchBox from './ItemSearchBox'

export default {
  components: {
    ItemSearchBox
  }
}
</script>
