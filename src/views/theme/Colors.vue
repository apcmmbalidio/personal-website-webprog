<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Website Feedback</strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitFeedback">
            <div class="mb-3">
              <CFormLabel for="username">Name</CFormLabel>
              <CFormInput v-model="username" id="username" placeholder="Your Name" required />
            </div>
            <div class="mb-3">
              <CFormLabel for="feedback">Your Feedback</CFormLabel>
              <CFormTextarea
                v-model="comment"
                id="feedback"
                rows="3"
                placeholder="Write your feedback here..."
                required
              />
            </div>
            <CButton type="submit" color="primary" :disabled="isSubmitting">
              {{ isSubmitting ? "Submitting..." : "Submit" }}
            </CButton>
          </CForm>

          <hr class="my-4" />

          <h5>Recent Comments</h5>
          <div v-if="feedbacks.length === 0" class="text-body-secondary">
            No comments yet. Be the first to share your thoughts!
          </div>
          <CListGroup flush>
            <CListGroupItem v-for="(feedback, index) in feedbacks" :key="index">
              <strong>{{ feedback.username }}</strong>: {{ feedback.comment }}
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { supabase } from "@/supabase"

const username = ref("")
const comment = ref("")
const feedbacks = ref([])
const isSubmitting = ref(false)

// Fetch existing comments
const fetchComments = async () => {
  let { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching comments:", error.message)
  } else {
    feedbacks.value = data
  }
}

// Submit comment
const submitFeedback = async () => {
  if (!username.value || !comment.value) return
  isSubmitting.value = true

  let { error } = await supabase.from("comments").insert([
    {
      username: username.value,
      comment: comment.value,
    },
  ])

  if (error) {
    console.error("Error submitting comment:", error.message)
  } else {
    username.value = ""
    comment.value = ""
    fetchComments() // Refresh comments after submission
  }

  isSubmitting.value = false
}

// Fetch comments on mount
onMounted(fetchComments)
</script>
