<script setup lang="ts">
import BrideAndGroom from "@/components/BrideAndGroom.vue";
import EventCountdown from "@/components/EventCountdown.vue";
import EventSchedule from "@/components/EventSchedule.vue";
import FooterSection from "@/components/FooterSection.vue";
import LandingBanner from "@/components/LandingBanner.vue";
import LoveStory from "@/components/LoveStory.vue";
import QRSection from "@/components/QRSection.vue";
import WeddingGift from "@/components/WeddingGift.vue";
import WeddingQuotes from "@/components/WeddingQuotes.vue";

import { onBeforeUnmount, onMounted } from "vue";

let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    const boundingClientRect = target.getBoundingClientRect();

    if (entry.isIntersecting) {
      target.classList.add("fade-in"); // Add fade-in class when visible

      target.classList.remove("fade-out-up"); // Remove fade-out-up class
      target.classList.remove("fade-out-down"); // Remove fade-out-down class
    } else {
      target.classList.remove("fade-in");
      // Remove fade-in class when not visible
      if (boundingClientRect.y <= 0) {
        target.classList.add("fade-out-up"); // Add fade-out-up class
      } else {
        target.classList.add("fade-out-down"); // Add fade-out-down class
      }
    }
  });
};

onMounted(() => {
  // Create the IntersectionObserver
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2, // Trigger when 50% of the element is visible
  });

  document.querySelectorAll(".reveal").forEach((element) => {
    observer?.observe(element);
  });
});

onBeforeUnmount(() => {
  // Clean up the observer when the component is unmounted
  document.querySelectorAll(".reveal").forEach((element) => {
    observer?.unobserve(element);
  });
});
</script>

<template>
  <!-- content -->
  <LandingBanner />

  <main id="main-content" class="container mx-auto max-w-2xl snap-start snap-normal">
    <WeddingQuotes />

    <BrideAndGroom />

    <EventSchedule />

    <QRSection />

    <LoveStory />

    <EventCountdown />

    <WeddingGift />

    <FooterSection />
  </main>
  <!-- end content  -->
</template>

<style lang="css">
.reveal {
  opacity: 0;
  transform: translateY(50px); /* Start from the bottom */
  transition:
    opacity 0.6s ease,
    scale 0.6s ease,
    transform 0.6s ease;
  will-change: transform, opacity, scale;
  scale: 0.97;
}

/* Fade-in effect */
.fade-in {
  scale: 1;
  opacity: 1;
  transform: translateY(0); /* Slide up to original position */
}

.fade-out-up {
  scale: 0.97;
  opacity: 0;
  transform: translateY(-50px); /* Slide down when fading out */
}

.fade-out-down {
  scale: 0.97;
  opacity: 0;
  transform: translateY(50px); /* Slide down when fading out */
}
</style>
