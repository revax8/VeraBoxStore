import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  categoria: string = '';
  productos: Producto[] = [];
  carrito: Producto[] = [];
  mostrarCarrito: boolean = false;
  mostrarImagenModal: boolean = false;
  imagenModalSrc: string = '';
  imagenModalAlt: string = '';
  numeroWhatsApp: string = '4623266568'; // Cambia este número por tu WhatsApp

  // Datos de ejemplo para diferentes categorías
  productosData = {
    juguetes: [
      { id: 1, nombre: 'Marvel spidey', precio: 497.99, imagen: '7887.JPG', descripcion: 'Spidey Amazing friends' },
       { id: 2, nombre: 'Furreal gogo', precio: 796.99, imagen: '23712.JPG', descripcion: 'FurReal' },
     
    ],
    ropa: [
      { id: 5, nombre: 'Camiseta Casual', precio: 19.99, imagen: '7887.JPG', descripcion: 'Camiseta de algodón 100%' },
      { id: 6, nombre: 'Jeans Clásicos', precio: 45.00, imagen: '7887.JPG', descripcion: 'Jeans de corte clásico' },
      { id: 7, nombre: 'Sudadera Con Capucha', precio: 32.50, imagen: '7887.JPG', descripcion: 'Sudadera cómoda para el invierno' },
      { id: 8, nombre: 'Vestido de Verano', precio: 28.99, imagen: '7887.JPG', descripcion: 'Vestido ligero para el verano' }
    ],
   
    hogar: [
      { id: 13, nombre: 'Lámpara LED Inteligente', precio: 39.99, imagen: '7887.JPG', descripcion: 'Lámpara con control por app' },
      { id: 14, nombre: 'Difusor de Aromas', precio: 22.50, imagen: '7887.JPG', descripcion: 'Difusor ultrasónico silencioso' },
      { id: 15, nombre: 'Cojín Decorativo', precio: 18.00, imagen: '7887.JPG', descripcion: 'Cojín de diseño moderno' },
      { id: 16, nombre: 'Espejo de Baño', precio: 65.00, imagen: '7887.JPG', descripcion: 'Espejo con iluminación LED' }
    ],
    deportes: [
      { id: 17, nombre: 'Balón de Fútbol', precio: 24.99, imagen: '7887.JPG', descripcion: 'Balón oficial FIFA' }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  // Listener para cerrar modal con tecla Escape
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.mostrarImagenModal) {
      this.cerrarImagenModal();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['categoria'] || 'todas';
      this.cargarProductos();
    });
  }

  cargarProductos(): void {
    if (this.categoria === 'todas') {
      // Mostrar todos los productos
      this.productos = Object.values(this.productosData).flat();
    } else {
      // Mostrar productos de la categoría específica
      this.productos = this.productosData[this.categoria as keyof typeof this.productosData] || [];
    }
  }

  obtenerTituloCategoria(): string {
    const titulos = {
      juguetes: 'Juguetes',
      ropa: 'Ropa y Moda',
      electronica: 'Electrónicos',
      hogar: 'Hogar y Decoración',
      deportes: 'Deportes y Fitness',
      todas: 'Todos los Productos'
    };
    return titulos[this.categoria as keyof typeof titulos] || 'Catálogo';
  }

  obtenerIconoCategoria(): string {
    const iconos = {
      juguetes: '🧸',
      ropa: '👕',
      electronica: '📱',
      hogar: '🏡',
      deportes: '⚽',
      todas: '🛍️'
    };
    return iconos[this.categoria as keyof typeof iconos] || '📦';
  }

  navegarACategoria(categoria: string): void {
    this.router.navigate(['/catalogo', categoria]);
  }

  trackByProducto(index: number, producto: any): number {
    return producto.id;
  }

  onImageError(event: any): void {
    event.target.src = '7887.JPG';
  }

  // Métodos para el modal de imagen
  abrirImagenModal(imagenSrc: string, imagenAlt: string): void {
    this.imagenModalSrc = imagenSrc;
    this.imagenModalAlt = imagenAlt;
    this.mostrarImagenModal = true;
    document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
  }

  cerrarImagenModal(): void {
    this.mostrarImagenModal = false;
    this.imagenModalSrc = '';
    this.imagenModalAlt = '';
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }

  // Métodos del carrito
  agregarAlCarrito(producto: Producto): void {
    const productoExistente = this.carrito.find(item => item.id === producto.id);
    if (!productoExistente) {
      this.carrito.push(producto);
      this.mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    } else {
      this.mostrarNotificacion(`${producto.nombre} ya está en el carrito`);
    }
  }

  eliminarDelCarrito(producto: Producto): void {
    this.carrito = this.carrito.filter(item => item.id !== producto.id);
  }

  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  obtenerTotalCarrito(): number {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  enviarPorWhatsApp(): void {
    if (this.carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    let mensaje = '🛍️ *VERABOX - Pedido*\n\n';
    mensaje += '📋 *Productos seleccionados:*\n\n';
    
    this.carrito.forEach((producto, index) => {
      mensaje += `${index + 1}. *${producto.nombre}*\n`;
      mensaje += `   💰 Precio: $${producto.precio}\n`;
      mensaje += `   📝 ${producto.descripcion}\n\n`;
    });

    mensaje += `💵 *Total: $${this.obtenerTotalCarrito().toFixed(2)}*\n\n`;
    mensaje += '📞 Por favor, confirma la disponibilidad y el proceso de compra.';

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${this.numeroWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
  }

  vaciarCarrito(): void {
    this.carrito = [];
    this.mostrarCarrito = false;
  }

  estaEnCarrito(producto: Producto): boolean {
    return this.carrito.some(item => item.id === producto.id);
  }

  private mostrarNotificacion(mensaje: string): void {
    // Simple notificación - puedes mejorar esto con una biblioteca de notificaciones
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = mensaje;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  }
}
