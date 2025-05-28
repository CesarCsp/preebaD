import { useState } from "react"
import imgBackgroundLogin from "@/assets/alcaldia.jpeg"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isLogin ? "Login" : "Signup", formData)
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Imagen de fondo */}
          <div className="hidden lg:block relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-l-3xl">
            <div className="absolute inset-0 bg-black/20 rounded-l-3xl"></div>
             <img
              src={imgBackgroundLogin}
              alt="Auth Background"
              className="w-full h-full object-cover rounded-l-3xl opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4 animate-pulse">
                  {isLogin ? "¡Bienvenido de vuelta!" : "¡Únete a nosotros!"}
                </h2>
                <p className="text-xl opacity-90">
                  {isLogin ? "Inicia sesión para continuar tu experiencia" : "Crea tu cuenta y comienza tu aventura"}
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-md">
              {/* Toggle de modo */}
              <div className="flex bg-gray-100 rounded-2xl p-1 mb-8 relative">
                <div
                  className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-xl shadow-md transition-transform duration-300 ease-in-out ${
                    isLogin ? "translate-x-0" : "translate-x-full"
                  }`}
                ></div>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-center font-semibold rounded-xl transition-colors duration-300 relative z-10 ${
                    isLogin ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-center font-semibold rounded-xl transition-colors duration-300 relative z-10 ${
                    !isLogin ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  Registrarse
                </button>
              </div>

              {/* Título animado */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 transition-all duration-500 transform">
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </h1>
                <p className="text-gray-600 transition-all duration-500">
                  {isLogin ? "Ingresa tus credenciales para acceder" : "Completa los datos para registrarte"}
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo Nombre (solo en signup) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isLogin ? "max-h-0 opacity-0 overflow-hidden" : "max-h-20 opacity-100"
                  }`}
                >
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nombre completo"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                      required={!isLogin}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Campo Email */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:bg-gray-100"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Campo Contraseña */}
                <div className="relative group">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:bg-gray-100"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Campo Confirmar Contraseña (solo en signup) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isLogin ? "max-h-0 opacity-0 overflow-hidden" : "max-h-20 opacity-100"
                  }`}
                >
                  <div className="relative group">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirmar contraseña"
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:bg-gray-100"
                      required={!isLogin}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 active:scale-95"
                >
                  <span className="flex items-center justify-center">
                    {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                    <svg
                      className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>

              {/* Link para cambiar modo */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                  <button
                    onClick={toggleMode}
                    className="ml-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 hover:underline"
                  >
                    {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
