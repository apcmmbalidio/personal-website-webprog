<template>
  <CRow>
    <CCol>
      <CCard class="mb-4">
        <CCardHeader> My Vinyl Collection </CCardHeader>
        <CCardBody>
          <p>A showcase of my favorite vinyl records.</p>
          <CCarousel controls indicators>
            <CCarouselItem v-for="(vinyl, index) in vinyls" :key="index">
              <img class="d-block w-100" :src="vinyl.src" :alt="vinyl.alt" />
              <CCarouselCaption class="d-none d-md-block">
                <h5>{{ vinyl.caption }}</h5>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { ref } from "vue";

const vinyls = ref([
  { 
    src: "https://th.bing.com/th/id/OIP.x9HvJ8XIatkBhrPVc2TY2AHaHa?rs=1&pid=ImgDetMain", 
    alt: "Pablo Honey - Radiohead", 
    caption: "San Pablo Honey - Radiohead" 
  },
  { 
    src: "https://th.bing.com/th/id/OIP.3mabzJP1IIltde2YCHIsJgHaHa?rs=1&pid=ImgDetMain", 
    alt: "Minus - Ed Sheeran", 
    caption: "Minus (-) - Ed Sheeran" 
  },
  { 
    src: "https://img.discogs.com/oyDXa-LOTnDmrhBrOV4vXESjxHg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2304264-1365451791-9303.jpeg.jpg", 
    alt: "Greatest Hits - Kenny Rogers", 
    caption: "Greatest Hits - Kenny Rogers" 
  },
  { 
    src: "https://th.bing.com/th/id/OIP.TdFuQDMrNFPkkmjMxrBalgHaHa?rs=1&pid=ImgDetMain", 
    alt: "Talking Book - Stevie Wonder", 
    caption: "Songs in the Key of Life - Stevie Wonder" 
  }
]);
</script>

<style scoped>
.img-fluid {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
