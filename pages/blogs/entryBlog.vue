<template>
  <div>
    <h1>
        {{blogText.titleb}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'EntryBlog',
  layout: 'NavbarDefault',
  data() {
    return {
        blogText: {
            title: "lorem",
            paragrah: "ev feo",

        }
    }
  },
  methods: {},
}
</script>
