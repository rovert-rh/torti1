import React, { Component, Fragment} from 'react';
import MetaData from "../layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import './module.css'; 

const Servicioup = () => {
   
    
  return (
    <Fragment>
    <MetaData titulo={"Agregar Servicio"} />
    <div className="container-fluid"> 
        <div className="row">
            <div className="col-10 mx-auto">
                <form >
                    <h4 className="mb-3">Agregar Servicio</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    placeholder='Ingresa Nombre'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Estado:</label>
                                <input
                                    type="text"
                                    className="form-control form_F"
                                    name="estado"
                                    placeholder='Selecciona el estado'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>ID de Colaborador:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="idColaborador"
                                    placeholder='Ingresa el ID colaborador'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <textarea
                            className="form-control"
                            name="descripcion"
                            placeholder='Escribe una pequeña descripcion'
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Fecha de Registro:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fechaRegistro"
                                    placeholder='DD/MM/AAAA'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Fecha de Actualización:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fechaActualizacion"
                                    placeholder='DD/MM/AAAA'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Catálogo:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="catalogo"
                                    placeholder='Selecciona el catálogo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Tipo de Servicio:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tipoServicio"
                                    placeholder='Selecciona el tipo de servicio'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Tipo de Plantilla:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tipoPlantilla"
                                    placeholder='Selecciona la plantilla'
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Imagen:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="imagen"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center"> {/* Centrar el botón */}
                        <button type="submit" className="btn btn-primary btn-lg"> {/* Aplicar clases btn-lg para hacerlo más grande */}
                            Agregar Nuevo Servicio
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Fragment>

  )
}

export default Servicioup