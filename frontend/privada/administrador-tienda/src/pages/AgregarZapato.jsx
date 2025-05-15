import { useState } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '',
    price: '',
    stock: '',
    brand: 'Nike',
    discount: '',
    model: '',
    sizes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Datos del producto:', formData);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <Header />
      <h1 className="text-xl font-semibold my-4">Agregar un nuevo producto</h1>
      <div className="space-y-6">
        <ImageUploader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField
            label="Nombre"
            name="name"
            placeholder="Introduce el nombre del producto"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="lg:col-span-2">
            <TextAreaField
              label="Descripción"
              name="description"
              placeholder="Introduce la descripción del producto"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <InputField
            label="Color"
            name="color"
            placeholder="Introduce el color del producto"
            value={formData.color}
            onChange={handleChange}
          />
          <InputField
            label="Precio"
            name="price"
            placeholder="*****"
            value={formData.price}
            onChange={handleChange}
          />
          <InputField
            label="Stock"
            name="stock"
            placeholder="Introduce el stock del producto"
            value={formData.stock}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <BrandSelector
              label="Marca"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
            <DiscountField
              label="Descuento"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
            />
          </div>
          <ModelSelector
            label="Modelo"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
          <InputField
            label="Tallas disponibles"
            name="sizes"
            placeholder="Introduce la tallas del producto"
            value={formData.sizes}
            onChange={handleChange}
          />
        </div>
        <SaveButton onClick={handleSubmit} />
      </div>
    </div>
  );
};

// Componentes individuales agrupados por funcionalidad
const Header = () => (
  <div className="flex items-center text-gray-600 mb-2">
    <ArrowLeft size={20} className="mr-2" />
    <span>Volver al menu principal</span>
  </div>
);

const ImageUploader = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center">
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-2 border-black rounded-md flex items-center justify-center mb-2">
        <Upload />
      </div>
      <span className="text-sm text-gray-500">Sube las imágenes aquí</span>
    </div>
  </div>
);

const InputField = ({ label, name, placeholder, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
);

const TextAreaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="flex flex-col h-full">
    <label htmlFor={name} className="text-sm font-medium mb-1">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
);

const BrandSelector = ({ label, name, value, onChange }) => (
  <div className="flex flex-col flex-1">
    <label htmlFor={name} className="text-sm font-medium mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <option value="Nike">Nike</option>
      <option value="Adidas">Adidas</option>
      <option value="Puma">Puma</option>
      <option value="Reebok">Reebok</option>
    </select>
  </div>
);

const DiscountField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col w-24">
    <label htmlFor={name} className="text-sm font-medium mb-1">
      {label}
    </label>
    <div className="relative">
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md pl-2 pr-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <span className="absolute right-3 top-2">%</span>
    </div>
  </div>
);

const ModelSelector = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm font-medium mb-1">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      <option value="">Modelo del zapato</option>
      <option value="Deportivo">Deportivo</option>
      <option value="Casual">Casual</option>
      <option value="Formal">Formal</option>
    </select>
  </div>
);

const SaveButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-200 w-full sm:w-52"
  >
    Guardar información
  </button>
);

export default ProductForm;