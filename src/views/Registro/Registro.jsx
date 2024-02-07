import { useState } from 'react';

function RegistrationForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rut, setRut] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
    };

    return (
        <div>
            <section className="" style={{ backgroundColor: '#eee' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center mb-4">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> "ACA ESTAMOS" RENCA</p>
                                            <form className="mx-1 mx-md-4">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Nombre Completo</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Correo</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Contraseña</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setConfirmPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Confirma contraseña</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setPhoneNumber(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c"></label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={fullName} onChange={(e) => setRut(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Rut</label>
                                                    </div>
                                                </div>
                                                {/* Similar input elements for email, password, confirmPassword, phoneNumber, and rut */}
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleRegister}>Registrate como persona Natural</button>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleRegister}>Registrate como empresa</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegistrationForm;