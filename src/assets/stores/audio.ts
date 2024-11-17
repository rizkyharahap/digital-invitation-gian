export interface IAudioStore {
  readonly isInit: boolean;
  readonly isPlaying: boolean;
  audio: HTMLAudioElement | null;

  init(): Promise<void>;
  play(): Promise<void>;
  pause(): void;
}

export class AudioStore implements IAudioStore {
  private _isInit = false;
  private _isPlaying = false;
  audio: HTMLAudioElement | null = null;

  get isInit() {
    return this._isInit;
  }
  get isPlaying() {
    return this._isPlaying;
  }

  async init(): Promise<void> {
    const audioURL = await import("@/assets/audios/mancing-mania-remix.mp3");
    this.audio = new Audio(new URL(audioURL.default, import.meta.url).href);
    this._isInit = true;
  }

  async play() {
    if (!this._isInit) await this.init();

    if (this.audio) {
      this.audio.loop = true;
      await this.audio.play();
      this._isPlaying = true;
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this._isPlaying = false;
    }
  }
}

import { reactive } from "vue";

const audioStore = reactive(new AudioStore());

export const useAudioStore = () => audioStore;
