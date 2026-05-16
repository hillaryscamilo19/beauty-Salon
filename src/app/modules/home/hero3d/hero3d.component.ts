import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { JewelrySceneComponent } from 'src/app/shared/components/jewelry-scene/jewelry-scene.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero3d',
  standalone: true,
  imports: [CommonModule, JewelrySceneComponent],
  template: `
    <div class="jewelry-landing">
      <!-- Contenido superpuesto -->
      <div class="content-wrapper">
        <!-- Hero -->
        <section class="section hero">
          <div class="section-content center">
            <h1 class="title">UNIQUE</h1>
            <p class="subtitle">JEWELRY COLLECTION</p>
            <div class="scroll-indicator">
              <span>Scroll to explore</span>
              <div class="scroll-line"></div>
            </div>
          </div>
        </section>

        <!-- Craftsmanship -->
        <section class="section">
          <div class="section-content left">
            <span class="label">01 — ARTISTRY</span>
            <h2 class="heading">Craftsmanship</h2>
            <p class="description">
              Each piece is meticulously handcrafted by master artisans with
              decades of experience in fine jewelry making.
            </p>
          </div>
        </section>

        <!-- Materials -->
        <section class="section">
          <div class="section-content right">
            <span class="label">02 — QUALITY</span>
            <h2 class="heading">Premium Materials</h2>
            <p class="description">
              18K gold and ethically sourced diamonds ensure brilliance that
              lasts for generations.
            </p>
          </div>
        </section>

        <!-- Customization -->
        <section class="section">
          <div class="section-content left">
            <span class="label">03 — PERSONAL</span>
            <h2 class="heading">Customization</h2>
            <p class="description">
              Design your perfect ring. Choose the metal, gemstone, and setting
              that speaks to you.
            </p>
          </div>
        </section>

        <!-- CTA -->
        <section class="section">
          <div class="section-content center">
            <h2 class="heading-large">Make It Yours</h2>
            <button class="cta-button">CUSTOMIZE NOW</button>
          </div>
        </section>
      </div>
    </div>

    <!-- Escena 3D de fondo -->
    <app-jewelry-scene />
  `,
  styleUrls: ['./hero3d.component.scss'],
})
export class Hero3dComponent {
  private scrollService = inject(ScrollService);

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);
    this.scrollService.updateProgress(progress);
  }
}
