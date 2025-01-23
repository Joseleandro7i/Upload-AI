declare module '@ffmpeg/util' {
    export function fetchFile(file: string | Blob): Promise<ArrayBuffer>;
    // Add other exports when i needed
  }
  