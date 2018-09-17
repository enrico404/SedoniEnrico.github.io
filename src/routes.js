import Home from './components/home.vue'
import Blog from './components/blog.vue'
import Contacts from './components/contacts.vue'
import SinglePost from './components/singlePost.vue'
export default[

  {path: '/', component:Home },
  {path: '/blog', component: Blog},
  {path: '/contacts', component:Contacts},
  {path: '/blog/:titolo', component:SinglePost}



]

