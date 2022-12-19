<template>
  <div class="flex flex-col items-center pt-24">
    <section class="lg:flex-row lg:items-center flex flex-col w-10/12">
      <label for="searchInput" class="lg:w-80 w-full relative px-3">
        <input
          id="searchInput"
          v-model="valueInputSearch"
          type="text"
          placeholder="Buscar"
          class="
            w-full
            rounded-md
            h-10
            pl-5
            bg-[#2D2E4D]/.1
            text-white
            placeholder-white
            hover:border-[#C8DEFF]
          "
          @input="handleSearch"
        />
        <div
          class="
            absolute
            flex
            justify-center
            items-center
            w-7
            h-7
            rounded-md
            bg-gradient-to-r
            from-[#A6CBFF]
            to-[#C8DEFF]
            hover:from-[#A6CBFF] hover:to-[#A6CBFF]
            focus:
            bg-white
            right-4
            top-[6px]
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
              class="fill-[#4087EA]"
            />
          </svg>
        </div>
      </label>
      <app-select
        v-model="filterValue"
        :items="filter"
        class="lg:w-32 w-1/2 mx-3 my-2"
      ></app-select>
    </section>
    <section class="flex flex-col xl:grid xl:grid-flow-col-3 items-center w-10/12 py-6">
      <div
        class="
          lg:flex-row
          lg:flex-wrap
          lg:justify-around
          flex flex-col
          items-center
          w-full
          py-6
        "
      >
        <app-card-blog-single
          v-for="item in blogs"
          :key="item.id"
          :idblog="item.id"
          :category="item.blog_category.name"
          :title="item.title"
          :urlimage="item.autor_image.url"
          :author="item.autor_name"
          :blogcreate="item.blog_created_date"
          :timereading="item.time_reading"
        ></app-card-blog-single>
      </div>
      <app-btn
        v-if="page < maxPage"
        class="
          bg-gradient-to-r
          from-[#87B8FF]
          via-[#4490F9]
          to-[#4490F9]
          hover:from-[#4490F9] hover:via-[#4490F9] hover:to-[#87B8FF]
          text-white
        "
        @click="pagination"
        >Cargar más</app-btn
      >
    </section>
  </div>
</template>
<script>
export default {
  name: 'IndexAllBlog',
  layout: 'NavbarDefault',
  data() {
    return {
      page: 0,
      maxPage: 0,
      blogs: [],
      allBlogs: [],
      blogsSearch: [],
      filterValue: 'Más recientes',
      valueInputSearch: '',
      filter: [
        {
          llave: 'Más recientes',
          attribute: 'Más recientes',
        },
        {
          llave: 'Más antiguos',
          attribute: 'Más antiguos',
        },
      ],
    }
  },
  watch: {
    async page(old, curr) {
      if (old !== curr) {
        await this.getAllBlogsRecent()
      }
    },
    async filterValue(old, curr) {
      if (old !== curr) {
        await this.getAllBlogsRecent()
      }
    },
  },
  created() {
    this.getAllBlogsRecent()
    this.page = this.pageInitial()
  },
  methods: {
    // Get data
    async getAllBlogsRecent() {
      const { data } = await this.$axios.get('blogs')
      this.maxPage = data.length
      // save tbe data
      this.blogs = data
      this.allBlogs = data
      // and organize according the value of select
      if (this.filterValue === 'Más antiguos') {
        this.blogs.sort((a, b) => {
          if (a.blog_created_date > b.blog_created_date) {
            return 1
          }
          if (a.blog_created_date < b.blog_created_date) {
            return -1
          }
          return 0
        })
      } else if (this.filterValue === 'Más recientes') {
        this.blogs.sort((a, b) => {
          if (a.blog_created_date < b.blog_created_date) {
            return 1
          }
          if (a.blog_created_date > b.blog_created_date) {
            return -1
          }
          return 0
        })
      }
      // And set the cant that the user can see
      this.blogs.length = this.page
    },
    // function that change the value of the pagination
    pagination() {
      const difference = this.maxPage - this.page
      /*
        get the difference for I see how much is missing
        for that the page is iqual to the maxPage
      */

      /*
        And depending of value does a validation
      */
      if (difference >= 3) {
        this.page = this.page + 3
        return
      }
      this.page = this.page + difference
    },
    pageInitial() {
      if (process.client) {
        if (window.screen.width >= 1024) {
          return 6
        }
      }
      return 3
    },
    handleSearch() {
      this.blogs = this.allBlogs.filter((e) => {
        return e.title.startsWith(this.valueInputSearch)
      })
    },
  },
}
</script>
