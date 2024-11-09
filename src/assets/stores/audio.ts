import CocomelonIntroSoundEffect from "@/assets/audios/cocomelon-intro-sound-effect.mp3";

import { reactive } from "vue";

export interface AudioStore {
  isPlaying: boolean;
  audio: HTMLAudioElement;

  play(): void;

  pause(): void;
}

export const audioStore = reactive<AudioStore>({
  isPlaying: false,
  audio: new Audio(new URL(CocomelonIntroSoundEffect, import.meta.url).href),

  play() {
    this.isPlaying = true;

    // play and loop audio
    this.audio.loop = true;
    this.audio.play();
  },

  pause() {
    this.isPlaying = false;

    // pause audio
    this.audio.pause();
  },
});
