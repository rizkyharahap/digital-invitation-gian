export interface IAudioStore {
  readonly isInit: boolean;
  readonly isPlaying: boolean;
  readonly audio: HTMLAudioElement | null;

  init(audioUrl: string): void;
  play(): Promise<void>;
  pause(): void;
}

export class AudioStore implements IAudioStore {
  private _isInit = false;
  private _isPlaying = false;
  private _audio: HTMLAudioElement | null = null;

  get isInit() {
    return this._isInit;
  }
  get isPlaying() {
    return this._isPlaying;
  }
  get audio() {
    return this._audio;
  }

  init(audioUrl: string): void {
    this._audio = new Audio(audioUrl);
    this._isInit = true;
  }

  async play() {
    if (this._audio) {
      this._audio.loop = true;
      await this._audio.play();
      this._isPlaying = true;
    }
  }

  pause() {
    if (this._audio) {
      this._audio.pause();
      this._isPlaying = false;
    }
  }
}

import { reactive } from "vue";

const audioStore = reactive(new AudioStore());

export const useAudioStore = () => audioStore;
