import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import "../../styles/fuente.css"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Formulario enviado con éxito');
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      asunto: ''
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center px-4, min-h-screen pt-20 px-6 pb-12">
      <h1 className="text-4xl font-bold text-teal-700 mb-4 font-playfair">
        ¡Estamos aquí para ayudarte!
      </h1>

      <p className="text-gray-600 mb-8 font-poppins">
        Completa el formulario a continuación<br />
        y nuestro equipo se pondrá en contacto contigo lo antes posible.
      </p>

      <div className="bg-[#1c2128] rounded-[40px] p-8 mb-8 shadow-lg">
  {['nombre', 'correo', 'telefono', 'asunto'].map((field) => (
    <div className="mb-6 text-left" key={field}>
      <label className="block text-white text-sm mb-2 capitalize font-poppins">
        {field === 'correo' ? 'Correo electrónico' : field.charAt(0).toUpperCase() + field.slice(1)}:
      </label>
      <input
        type={field === 'correo' ? 'email' : field === 'telefono' ? 'tel' : 'text'}
        name={field}
        value={formData[field]}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-white text-black rounded-[30px]"
      />
    </div>
  ))}
</div>

<button
  onClick={handleSubmit}
  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-10 rounded-[20px] mb-10 font-poppins"
>
  Enviar
</button>


      <div className="text-center">
        <h2 className="text-gray-800 font-medium mb-4">Comunícate en nuestros medios oficiales:</h2>
        
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Correo:</span>
            <a href="#" className="text-teal-500 hover:underline flex items-center">
              cholos@gmail.com
              <Mail className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Número:</span>
            <a href="#" className="text-teal-500 hover:underline flex items-center">
              +503 9967-5372
              <Phone className="ml-1 h-4 w-4 text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
