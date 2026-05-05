import { Injectable,signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollProgress = signal(0);

    updateProgress(progress: number) {
    this.scrollProgress.set(progress);
  }
  constructor() { }
}
