import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Card de login -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          
          <!-- Header -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 shadow-lg">
              <span class="text-3xl">👤</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              Iniciar Sesión
            </h1>
            <p class="text-gray-600">
              Accede a tu cuenta de VERABOX
            </p>
          </div>

          <!-- Formulario -->
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input 
                type="email" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input 
                type="password" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="••••••••">
            </div>

            <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
              Ingresar
            </button>
          </div>

          <!-- Links adicionales -->
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              ¿No tienes cuenta? 
              <a href="#" class="text-purple-600 hover:text-purple-700 font-medium">Regístrate</a>
            </p>
          </div>
        </div>

        <!-- Botón de regreso -->
        <div class="text-center mt-8">
          <a 
            [routerLink]="'/home'"
            class="inline-block text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {}
