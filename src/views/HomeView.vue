<script setup lang="ts">
import BrideAndGroom from "@/components/BrideAndGroom.vue";
import EventCountdown from "@/components/EventCountdown.vue";
import EventSchedule from "@/components/EventSchedule.vue";
import FloatingAction from "@/components/FloatingAction.vue";
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
  <div class="h-available snap-y snap-mandatory overflow-y-scroll">
    <!-- content -->
    <LandingBanner />

    <main id="main-content" class="section container mx-auto max-w-2xl snap-start">
      <WeddingQuotes />

      <BrideAndGroom />

      <EventSchedule />

      <QRSection />

      <LoveStory />

      <EventCountdown />

      <WeddingGift />

      <FooterSection />

      <FloatingAction />
    </main>
    <!-- end content  -->
  </div>
</template>
