import React from 'react';

function Perfil() {
  return (
    <div className="profile-form-container" style={{ background: 'blue', padding: '20px' }}>
      <form style={{ background: 'white', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Nombre completo</label>
          <input type="text" id="fullname" name="fullname" placeholder="Nombre completo" />
        </div>
        <div className="form-group">
          <label htmlFor="profile-description">Descripción del perfil</label>
          <input type="text" id="profile-description" name="profileDescription" placeholder="Descripción del perfil" />
        </div>
        <div className="form-group">
          <label htmlFor="personal-url">URL página personal</label>
          <input type="text" id="personal-url" name="personalUrl" placeholder="URL página personal" />
        </div>
        <button type="submit" style={{ background: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default Perfil;
