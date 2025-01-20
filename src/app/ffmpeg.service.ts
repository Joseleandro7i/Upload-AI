import { Injectable } from '@angular/core';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import coreURL from '../ffmpeg/ffmpeg-core.js?url';
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url';
import workerURL from '../ffmpeg/ffmpeg-worker.js?url';

@Injectable({
  providedIn: 'root',
})
export class FFmpegService {
  private ffmpeg: FFmpeg | null = null;

  constructor() {}

  async getFFmpeg(): Promise<FFmpeg> {
    if (this.ffmpeg) {
      return this.ffmpeg;
    }

    this.ffmpeg = new FFmpeg();

    if (!this.ffmpeg.loaded) {
      await this.ffmpeg.load({
        coreURL,
        wasmURL,
        workerURL,
      });
    }

    return this.ffmpeg;
  }
}

