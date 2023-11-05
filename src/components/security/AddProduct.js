import React, { useState, Fragment, useEffect } from 'react';
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/productsAction'; // Asegúrate de importar la acción

const AgregarProducto = () => {
  
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
      nombre: '',
      precio: '',
      descripcion: '',
      vendedor: '',
      stock: '',
      categoryId: '',
      });
    const {nombre, precio, descripcion, vendedor, stock, categoryId } = producto;
    
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
      "images/default_product.jpg"
    );
  
    const alert = useAlert();
    const dispatch = useDispatch();
    const { errores, isAuthenticated }  = useSelector(state => state.security);
    
  const submitHandler = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.set("nombre", producto.nombre);
      formData.set("precio", producto.precio);
      formData.set("descripcion", producto.descripcion);
      formData.set("vendedor", producto.vendedor);
      formData.set("stock", producto.stock);
      formData.set("categoryId", producto.categoryId);
      formData.set("foto", avatar);
      dispatch(addProduct(formData))
      .then(() => {
        navigate("/ecommerce"); // Redirige al usuario al "home"
      })
    }
   
  const onChange = (e) => {
      if (e.target.name === "avatar") {
          const reader = new FileReader();
          reader.onload = () => {
              if (reader.readyState === 2) {
                  setAvatarPreview(reader.result);
                  setAvatar(e.target.files[0]);
              }
          };
  
          reader.readAsDataURL(e.target.files[0]);
      } else {
          setProducto({ ...producto, [e.target.name]: e.target.value });
      }
  }
  
  return (
    <Fragment>
      <MetaData titulo={"Agregar Producto"} />
      <div className="row wrapper">
        <div className="col-12 col-lg-6">
        <form className="shadow-lg" encType="multipart/form-data" onSubmit={submitHandler}>
  <h3 className="mb-3">Agregar Producto</h3>
  <div className="form-group">
    <label>Nombre del Producto:</label>
    <input
      type="text"
      id="nombre"
      className="form-control"
      name="nombre"
      value={nombre}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <label>Precio:</label>
    <input
      type="number"
      id="precio"
      className="form-control"
      name="precio"
      value={precio}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <label>Descripción:</label>
    <input
      type="text"
      id="descripcion"
      className="form-control"
      name="descripcion"
      value={descripcion}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <label>Vendedor:</label>
    <input
      type="text"
      id="vendedor"
      className="form-control"
      name="vendedor"
      value={vendedor}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <label>Stock:</label>
    <input
      type="number"
      id="stock"
      className="form-control"
      name="stock"
      value={stock}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <label>Categoría:</label>
    <input
      type="text"
      id="categoryId"
      className="form-control"
      name="categoryId"
      value={categoryId}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
  <label htmlFor="producto_image">Imagen del Producto</label>
  <div className="d-flex align-items-center">
    <div>
      <figure className="product-image-preview mr-3">
        <img src={avatarPreview} alt="Imagen Previa del Producto" />
      </figure>
    </div>
    <div className="custom-file">
      <input
        type="file"
        name="avatar"
        className="custom-file-input"
        id="customFile"
        accept="images/*"
        onChange={onChange}
      />
      <label className="custom-file-label" htmlFor="customFile">
        Elegir Imagen del Producto
      </label>
    </div>
  </div>
</div>
  <button type="submit" className="btn btn-primary">
    Agregar Producto
  </button>
</form>
        </div>
        <div className="col-12 col-lg-6">
          {/* Vista previa del producto aquí */}
        </div>
        <div className="col-12">
          {/* Selección de imágenes debajo */}
        </div>
      </div>
    </Fragment>
  );
};

export default AgregarProducto;
