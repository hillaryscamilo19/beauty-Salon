import {
  Component,
  ElementRef,
  ViewChild,
  AfterContentInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-hero3d',
  templateUrl: './hero3d.component.html',
  styleUrls: ['./hero3d.component.css'],
})
export class Hero3dComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model?: THREE.Object3D;
  private animationId?: number;

  ngAfterViewInit() {
    this.initThree();
    this.loadModel();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer) this.renderer.dispose();
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();

    // Iluminación
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(5, 10, 7);
    this.scene.add(directional);

    // Cámara
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 1.5, 4);

    // Controles (opcional)
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    // controls.autoRotate = true; // descomenta si quieres rotación automática
  }

  private loadModel() {
    const loader = new GLTFLoader();
    // Reemplaza la ruta por tu modelo
    loader.load(
      '/assets/models/hero-model.glb',
      (gltf) => {
        this.model = gltf.scene;
        // Ajusta escala/posicion si es necesario
        this.model.scale.set(1.2, 1.2, 1.2);
        this.model.position.set(0, -0.1, 0);
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error('Error cargando GLTF:', error);
      }
    );
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    if (this.model) {
      // Rotación sutil para dar vida
      this.model.rotation.y += 0.01;
    }
    this.renderer.render(this.scene, this.camera);
  }
}