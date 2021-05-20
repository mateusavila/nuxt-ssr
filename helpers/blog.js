import Paginate from 'vuejs-paginate/src/components/Paginate.vue'
export default {
  components: {
    Paginate
  },
  methods: {
    paginate (page) {
      if (page === 1) return this.$router.push({path: '/blog'})
      this.$router.push({path: '/blog/page/'+page})
      this.$store.commit('page/updateLoaded', false) 
    },
    paginateCategory (page) {
      if (page === 1) return this.$router.push({path: '/category/'+this.$route.params.category})
      this.$router.push({path: '/category/'+this.$route.params.category.toLowerCase()+'/page/'+page})
      this.$store.commit('page/updateLoaded', false) 
    },
    paginateTag (page) {
      if (page === 1) return this.$router.push({path: '/tag/'+this.$route.params.tag})
      this.$router.push({path: '/tag/'+this.$route.params.tag.toLowerCase()+'/page/'+page})
      this.$store.commit('page/updateLoaded', false) 
    },
    paginateSearch (page) {
      if (page === 1) return this.$router.push({path: '/search/'+this.$route.params.search})
      this.$router.push({path: '/search/'+this.$route.params.search.toLowerCase()+'/page/'+page})
      this.$store.commit('page/updateLoaded', false) 
    },
    paginateOrder (page) {
      if (page === 1) return this.$router.push({path: '/orderby/'+this.$route.params.orderby+'/'+this.$route.params.order})
      this.$router.push({path: '/orderby/'+this.$route.params.orderby.toLowerCase()+'/'+this.$route.params.order.toLowerCase()+'/page/'+page})
      this.$store.commit('page/updateLoaded', false) 
    },
    search (search) {
      if (search.length === 0) return
      this.$router.push({path: '/search/'+search.toLowerCase() })
      this.$store.commit('search/updateSearch', search)
      this.$store.commit('page/updateLoaded', false) 
    }
  }
}