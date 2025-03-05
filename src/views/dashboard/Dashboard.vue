<script setup>
import avatar1 from '@/assets/images/avatars/1.jpg'

const userProfile = {
  avatar: avatar1,
  name: 'Maria Sophea M. Balidio',
  username: 'P',
  course: 'Bachelor of Science in Computer Science - Software Systems',
  bio: "Second-year Computer Science student specializing in Software Systems. Passionate about UI/UX design, data management, and software development.",
  skills: ['Vue.js', 'Java', 'Python', 'MySQL', 'Figma'],
  interests: ['Psychological thrillers', 'Horror movies', 'Music', 'Vinyl collecting'],
  goals: ['Graduate', 'Learn how to drive'],
  education: [
    { title: 'Primary Education', subtitle: 'Rancho Imperial De Silang Learning Center' },
    { title: 'Secondary Education', subtitle: 'Tagaytay City Science National High School - ISHS' },
    { title: 'Tertiary Education', subtitle: 'Asia Pacific College' },
  ]
}
</script>

<template>
  <div>
    <CRow>
      <CCol :md="4">
        <CCard class="mb-4 text-center">
          <CCardBody>
            <div class="avatar-container">
              <img :src="userProfile.avatar" alt="Profile Picture" class="avatar-img" />
            </div>
            <h4 class="mt-3">{{ userProfile.name }}</h4>
            <p class="text-body-secondary">@{{ userProfile.username }}</p>
            <p class="small">{{ userProfile.bio }}</p>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol :md="8">
        <CCard class="mb-4">
          <CCardHeader>About Me</CCardHeader>
          <CCardBody>
            <p><strong>Course:</strong> {{ userProfile.course }}</p>
            <p><strong>Interests:</strong> {{ userProfile.interests.join(', ') }}</p>
            <p><strong>Skills:</strong> {{ userProfile.skills.join(', ') }}</p>
            <p><strong>Goals:</strong> {{ userProfile.goals.join(', ') }}</p>
          </CCardBody>
        </CCard>

        <CCard class="mb-4">
          <CCardHeader>Education</CCardHeader>
          <CCardBody>
            <ul>
              <li v-for="edu in userProfile.education" :key="edu.title">
                <strong>{{ edu.title }}</strong>: {{ edu.subtitle }}
              </li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<style scoped>
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  width: 120px;  /* Adjust size as needed */
  height: 120px; /* Make sure width and height are the same */
  border-radius: 50%; /* Makes it a circle */
  object-fit: cover; /* Ensures the image fills the circle without distortion */
  border: 3px solid #ccc; /* Optional: Adds a border for a clean look */
}
</style>
