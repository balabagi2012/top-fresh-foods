<template>
  <div class="about">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="About Us" tw="企業簡介" intro="創造美食饗宴的專家" img="/images/banner/about.jpg"/>
    <SectionBox1 :firstPart="firstPart"/>
    <SectionBox2 :secondPart="secondPart"/>
    <HopeBox :thirdPart="thirdPart"/>
    <SectionBox3 :fourthPart="fourthPart"/>
    <BrandBox :brand="brand"/>
    <Footer/>
  </div>
</template>
<script>
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/SimpleBanner.vue";
import SectionBox1 from "@/components/Section/SectionBox1.vue";
import SectionBox2 from "@/components/Section/SectionBox2.vue";
import SectionBox3 from "@/components/Section/SectionBox3.vue";
import HopeBox from "@/components/HopeBox.vue";
import BrandBox from "@/components/Brand/BrandBox.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  firestore() {
    return {
      brand: firestore.collection("brand"),
      firstPart: firestore.collection("about").doc("firstPart"),
      secondPart: firestore.collection("about").doc("secondPart"),
      thirdPart: firestore.collection("about").doc("thirdPart"),
      fourthPart: firestore.collection("about").doc("fourthPart")
    };
  },
  components: {
    Navbar,
    Banner,
    Footer,
    SectionBox1,
    SectionBox2,
    SectionBox3,
    HopeBox,
    BrandBox
  }
};
</script>
