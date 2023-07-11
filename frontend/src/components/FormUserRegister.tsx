import imgGoogle from '../assets/googleImg.png'

interface RegisterProps {
    verifyAccess: () => void;
}

const FormUserRegister: React.FC<RegisterProps> = ({ verifyAccess }) => {
    return (
        <form className="h-full w-widthFormRegister bg-customBgRegister fixed top-20 right-0 ">
            <h2 className="text-center text-3xl py-12">¡Regístrate!</h2 >
            <div className="flex">
                <div className=" h-auto w-6/12 px-6">
                    <section className="my-4">
                        <label htmlFor="name">Nombre *</label >
                        <input type="text" id="name"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                    <section className="my-4">
                        <label htmlFor="email">Mail *</label >
                        <input type="email" id="email"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                    <section className="my-4">
                        <label htmlFor="pass">Contraseña *</label >
                        <input type="password" id="pass"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                    <section className="my-4">
                        <label htmlFor="address">Dirección</label >
                        <input type="text" id="address"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                </div>
                <div className="h-auto w-6/12 px-6">
                    <section className="my-4">
                        <label htmlFor="lastName">Apellido *</label >
                        <input type="text" id="lastName"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                    <section className="my-4">
                        <label htmlFor="phone">Teléfono</label >
                        <input type="number" id="phone"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                    <section className="my-4">
                        <label htmlFor="pass"> Repetir Contraseña *</label >
                        <input type="password" id="pass"
                            className="w-full rounded-lg bg-white h-7" />
                    </section>
                </div>
            </div>
            <p className="text-center mt-4 mb-7">o</p>
            <div className="bg-white w-56 py-2 rounded-full flex justify-center items-center m-auto hover:cursor-pointer">
                <img src={imgGoogle} alt="imgGoogle" className="mr-2" />
                <p className="text-center">Continuar Con Google</p>
            </div>
            <div className="w-12/12 flex justify-center mt-5">
                <button className="bg-black px-12 py-2 rounded-full hover:bg-gray-700 text-slate-100 font-bold">
                    Registrarse
                </button>
            </div>
            <div>
                <p className="text-xs text-center my-3">¿Ya tienes Cuenta? <span className="text-blue-700 hover:cursor-pointer" onClick={() => verifyAccess()}>Inicia sesión</span></p>
            </div>
        </form >
    );
};

export default FormUserRegister;