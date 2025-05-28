import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function AgregarProducto({ refreshZapato }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [zapato, setZapato] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    idModel: "",
    idBrand: "",
    stock: "",
    gender: "Unisex",
    releaseDate: new Date().toISOString().split("T")[0],
    colors: "",
    img: null,
    sale: "",
  });

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setZapato({ ...zapato, img: file });
      setImagenPreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setZapato((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    for (const key in zapato) {
      if (zapato[key] !== "" && zapato[key] !== null) {
        formData.append(key, zapato[key]);
      }
    }

    try {
      await axios.post("http://localhost:4000/api/shoes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("¡Producto agregado!", "", "success");

      setZapato({
        name: "",
        description: "",
        price: "",
        size: "",
        idModel: "",
        idBrand: "",
        stock: "",
        gender: "Unisex",
        releaseDate: new Date().toISOString().split("T")[0],
        colors: "",
        img: null,
        sale: "",
      });
      setImagenPreview(null);
      if (refreshZapato) refreshZapato();
    } catch (error) {
      Swal.fire("Error", "No se pudo agregar el producto", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVolver = () => navigate("/products");

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4">
      <div className="flex items-center mb-6">
        <button
          onClick={handleVolver}
          className="flex items-center text-gray-600 hover:text-gray-800"
          type="button"
        >
          <ChevronDown className="transform rotate-90" size={20} />
          <span className="ml-1 text-sm">Volver al menú principal</span>
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-medium">Agregar un nuevo producto</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* Imagen */}
        <div
          onClick={handleImageClick}
          className="border-2 border-dashed border-gray-300 rounded w-24 h-24 flex flex-col items-center justify-center cursor-pointer"
        >
          {imagenPreview ? (
            <img src={imagenPreview} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs mt-1 text-center">Suba imagen</span>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <input
          name="name"
          value={zapato.name}
          onChange={handleInputChange}
          placeholder="Nombre"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="description"
          value={zapato.description}
          onChange={handleInputChange}
          placeholder="Descripción"
          className="border p-2 rounded col-span-2"
          required
        />

        <input
          name="colors"
          value={zapato.colors}
          onChange={handleInputChange}
          placeholder="Color"
          className="border p-2 rounded"
          required
        />

        <input
          name="price"
          value={zapato.price}
          onChange={handleInputChange}
          placeholder="Precio"
          type="number"
          className="border p-2 rounded"
          required
        />

        <input
          name="stock"
          value={zapato.stock}
          onChange={handleInputChange}
          placeholder="Stock"
          type="number"
          className="border p-2 rounded"
          required
        />

        <input
          name="idBrand"
          value={zapato.idBrand}
          onChange={handleInputChange}
          placeholder="Marca"
          className="border p-2 rounded"
          required
        />

        <input
          name="sale"
          value={zapato.sale}
          onChange={handleInputChange}
          type="number"
          placeholder="Descuento %"
          className="border p-2 rounded"
        />

        <input
          name="idModel"
          value={zapato.idModel}
          onChange={handleInputChange}
          placeholder="Modelo"
          className="border p-2 rounded"
          required
        />

        <input
          name="size"
          value={zapato.size}
          onChange={handleInputChange}
          placeholder="Tallas disponibles"
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-teal-500 text-white rounded py-2 px-4 col-span-1 hover:bg-teal-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : "Guardar información"}
        </button>
      </form>
    </div>
  );
}
