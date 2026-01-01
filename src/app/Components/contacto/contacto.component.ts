import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 shadow-xl">
            <span class="text-4xl">📞</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <!-- Información de contacto -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p class="text-gray-600">info</p>
          </div>
          
          <div class="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p class="text-gray-600 mb-3">+52 1 55 1234 5678</p>
            <a href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos%20de%20VERABOX" 
               target="_blank"
               class="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contactar por WhatsApp
            </a>
          </div>
          
          <div class="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
            <p class="text-gray-600">Ciudad de México, México</p>
          </div>
        </div>

        <!-- Botón de regreso -->
        <div class="text-center">
          <a 
            [routerLink]="'/home'"
            class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            🏠 Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  `
})
export class ContactoComponent {}
