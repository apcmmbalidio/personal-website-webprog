<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useColorModes } from '@coreui/vue'
import { useThemeStore } from '@/stores/theme.js'
import { supabase } from '@/supabase' // Import Supabase client

const { isColorModeSet, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')
const currentTheme = useThemeStore()

// 📌 Store comments globally
const feedbacks = ref([])

// 📌 Fetch comments from Supabase
const fetchComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error("Error fetching comments:", error.message)
  } else {
    feedbacks.value = data
  }
}

// 📌 Run before component mounts (Theme Handling)
onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  if (theme) {
    setColorMode(theme)
    return
  }

  if (isColorModeSet()) {
    return
  }

  setColorMode(currentTheme.theme)
})

// 📌 Fetch comments when the app loads
onMounted(fetchComments)
</script>

<template>
  <router-view />
</template>

<style lang="scss">
// Import Main styles for this application
@use 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@use 'styles/examples';
</style>
