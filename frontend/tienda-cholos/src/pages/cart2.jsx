import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import paypal from '../images/Paypal-logo-2022.png'

// Datos de códigos postales por departamento
const codigosPostales = {
  'Ahuachapán': '01101',
  'Cabañas': '01201',
  'Chalatenango': '01301',
  'Cuscatlán': '01401',
  'La Libertad': '01501',
  'La Paz': '01601',
  'La Unión': '01701',
  'Morazán': '01801',
  'San Miguel': '01901',
  'San Salvador': '01101',
  'San Vicente': '02101',
  'Santa Ana': '02201',
  'Sonsonate': '02301',
  'Usulután': '02401'
};

// Valor inicial para los campos del formulario
const initialFormData = {
  direccion: '',
  departamento: 'La Libertad',
  ciudad: '',
  codigoPostal: '01501',
  infoAdicional: ''
};

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  
  // Get cart data from location state or use default values
  const cartData = location.state?.cartData || {
    products: [],
    subtotal: 0,
    serviceCharge: 0,
    shippingFee: 0,
    total: 0
  };

  useEffect(() => {
    // Cargar SweetAlert2 desde CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.7.32/sweetalert2.all.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (formData.departamento && codigosPostales[formData.departamento]) {
      setFormData(prev => ({
        ...prev,
        codigoPostal: codigosPostales[formData.departamento]
      }));
    }
  }, [formData.departamento]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleBackToCart = (e) => {
    e.preventDefault();
    navigate(-1); // Go back to previous page
  };

  const handlePayment = () => {
    // Verificar campos requeridos
    if (!formData.direccion || !formData.ciudad) {
      // Mostrar alerta de error si faltan campos requeridos
      window.Swal && window.Swal.fire({
        title: '¡Error!',
        text: 'Por favor, completa todos los campos requeridos',
        icon: 'error',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#0D9488'
      });
      return;
    }

    // Mostrar alerta de confirmación de pago
    window.Swal && window.Swal.fire({
      title: '¿Confirmar pago?',
      text: `¿Estás seguro de que deseas realizar el pago de $${cartData.total.toFixed(2)}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, pagar ahora',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#0D9488',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario confirmó, procesamos el pago
        
        // Simulación de procesamiento de pago
        window.Swal.fire({
          title: 'Procesando pago...',
          text: 'Por favor espera mientras procesamos tu pago',
          allowOutsideClick: false,
          didOpen: () => {
            window.Swal.showLoading();
          }
        });

        // Simulamos una petición de 2 segundos
        setTimeout(() => {
          // Mostrar alerta de éxito
          window.Swal.fire({
            title: '¡Pago Exitoso!',
            text: 'Tu pago ha sido procesado correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#0D9488'
          }).then((result) => {
            if (result.isConfirmed) {
              // Limpiar formulario cuando el usuario hace clic en "Continuar"
              resetForm();
              // Redirect to home or order confirmation page
              navigate('/');
            }
          });
        }, 2000);
      } else if (result.dismiss === window.Swal.DismissReason.cancel) {
        // El usuario canceló, mostramos mensaje de cancelación
        window.Swal.fire({
          title: 'Pago Cancelado',
          text: 'La operación ha sido cancelada',
          icon: 'info',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#0D9488'
        });
      }
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="mb-8">
          <a href="#" className="text-black flex items-center hover:text-teal-600" onClick={handleBackToCart}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al carrito de compras
          </a>
        </div>

        <div className="flex flex-wrap gap-8">
          {/* Left column - Form */}
          <div className="flex-1 min-w-[320px]">
            <h2 className="text-2xl font-bold mb-6">Datos de envío</h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="direccion" className="block mb-2 text-base">Dirección*</label>
                <input 
                  id="direccion" 
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  value={formData.direccion} 
                  onChange={handleInputChange} 
                />
              </div>

              <div>
                <label htmlFor="departamento" className="block mb-2 text-base">Departamento*</label>
                <div className="relative">
                  <select 
                    id="departamento" 
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none" 
                    value={formData.departamento} 
                    onChange={handleInputChange}
                  >
                    {Object.keys(codigosPostales).map(dep => (
                      <option key={dep} value={dep}>{dep}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="ciudad" className="block mb-2 text-base">Ciudad*</label>
                <input 
                  id="ciudad" 
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  value={formData.ciudad} 
                  onChange={handleInputChange} 
                />
              </div>

              <div>
                <label htmlFor="codigoPostal" className="block mb-2 text-base">Código postal</label>
                <input 
                  id="codigoPostal" 
                  readOnly 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" 
                  value={formData.codigoPostal} 
                />
              </div>

              <div>
                <label htmlFor="infoAdicional" className="block mb-2 text-base">Información adicional</label>
                <textarea 
                  id="infoAdicional" 
                  className="w-full p-3 border border-gray-300 rounded-lg h-32" 
                  value={formData.infoAdicional} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Método de pago</h2>
                <a href="#" className="text-teal-600 font-medium">Añadir nuevo método</a>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg bg-gray-200">
                  <div className="flex items-center">
                    <img src={paypal} alt="PayPal" className="h-6 mr-3" />
                    <span className="font-medium">Visa ending in *32</span>
                  </div>
                  <a className="text-sm font-medium">Editar</a>
                </div>
                
                <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                  <div className="flex items-center">
                    <span className="font-medium">Visa ending in *52</span>
                  </div>
                  <a className="text-sm font-medium text-teal-600">Editar</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Summary */}
          <div className="bg-teal-600 text-white p-8 rounded-lg min-w-[300px] max-w-[360px] self-start">
            <h2 className="text-2xl font-bold mb-6">Resumen</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Productos</span>
                <span>${cartData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tarifa de servicio</span>
                <span>${cartData.serviceCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>${cartData.shippingFee.toFixed(2)}</span>
              </div>
              
              <div className="pt-4 mt-3 border-t border-white border-opacity-30">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>${cartData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handlePayment}
              className="bg-white text-teal-600 w-full py-4 mt-8 rounded-lg font-bold text-lg flex items-center justify-center"
            >
              Continuar a pagar
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-gray-200 text-gray-700 text-sm flex justify-between">
          <div>© 2024 Cholo's Todos los derechos reservados.</div>
          <div className="flex gap-8">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CheckoutForm;