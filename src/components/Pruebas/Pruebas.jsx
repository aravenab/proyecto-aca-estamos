import React from 'react'

export default function Pruebas() {
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      // Verificar si existe un token almacenado en el almacenamiento local
      const token = localStorage.getItem('token');
      if (!token) {
        setAuthenticated(false);
        return;
      }
  
      // Hacer una solicitud al servidor para verificar la validez del token
      fetch('/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
          }
        })
        .catch((err) => {
          console.error('Error al verificar autenticación:', err);
          setAuthenticated(false);
        });
    }, []);
  
    return (
      <div>
        {authenticated ? <p>Usuario autenticado</p> : <p>Usuario no autenticado</p>}
      </div>
    );
  }

