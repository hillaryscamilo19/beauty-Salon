import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

import * as THREE from 'three';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-jewelry-scene',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #canvas class="scene-canvas"></canvas>`,
  styles: [`
    .scene-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  `]
})
export class JewelrySceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private platformId = inject(PLATFORM_ID);
  private scrollService = inject(ScrollService);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private ring!: THREE.Group;
  private animationId!: number;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScene();
      this.createRing();
      this.addLights();
      this.animate();
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  private initScene() {
    const canvas = this.canvasRef.nativeElement;
    
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);
    
    this.camera = new THREE.PerspectiveCamera(
      45, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      100
    );
    this.camera.position.set(0, 0, 5);
    
    this.renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5;
  }

  private createRing() {
    this.ring = new THREE.Group();
    
    // Banda del anillo (torus)
    const bandGeometry = new THREE.TorusGeometry(1, 0.35, 64, 128);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 1,
      roughness: 0.15,
      envMapIntensity: 1,
    });
    
    const band = new THREE.Mesh(bandGeometry, goldMaterial);
    this.ring.add(band);

    // Diamante central
    const diamondGeometry = new THREE.OctahedronGeometry(0.35, 2);
    const diamondMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0,
      transmission: 0.95,
      thickness: 0.5,
      ior: 2.4,
      clearcoat: 1,
    });
    
    const diamond = new THREE.Mesh(diamondGeometry, diamondMaterial);
    diamond.position.set(0, 1.2, 0);
    diamond.scale.set(1, 1.3, 1);
    this.ring.add(diamond);

    // Pequeños diamantes laterales
    const smallDiamondGeo = new THREE.OctahedronGeometry(0.12, 1);
    [-0.5, 0.5].forEach(x => {
      const smallDiamond = new THREE.Mesh(smallDiamondGeo, diamondMaterial);
      smallDiamond.position.set(x, 0.9, 0);
      this.ring.add(smallDiamond);
    });

    this.ring.rotation.x = Math.PI / 2;
    this.scene.add(this.ring);
  }

  private addLights() {
    // Luz ambiental
    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambient);

    // Luz principal
    const mainLight = new THREE.SpotLight(0xffffff, 150);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    this.scene.add(mainLight);

    // Luz de acento dorada
    const accentLight = new THREE.SpotLight(0xd4af37, 80);
    accentLight.position.set(-5, 3, -5);
    this.scene.add(accentLight);

    // Luz de relleno
    const fillLight = new THREE.PointLight(0xffffff, 30);
    fillLight.position.set(0, -5, 5);
    this.scene.add(fillLight);
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    const progress = this.scrollService.scrollProgress();
    
    // Rotación basada en scroll
    this.ring.rotation.y = progress * Math.PI * 4;
    this.ring.rotation.x = Math.PI / 2 + Math.sin(progress * Math.PI) * 0.5;
    
    // Movimiento de cámara
    this.camera.position.z = 5 - progress * 1.5;
    this.camera.position.y = Math.sin(progress * Math.PI) * 1.5;
    this.camera.lookAt(0, 0, 0);
    
    this.renderer.render(this.scene, this.camera);
  }

  private onResize = () => {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationId);
      window.removeEventListener('resize', this.onResize);
      this.renderer?.dispose();
    }
  }
}