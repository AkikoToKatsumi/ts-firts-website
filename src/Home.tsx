import React from "react";

interface HomeProps {
    userName: string;
}

const Home: React.FC<HomeProps>= ({userName})=>{
    return (
        <div>
            <h2>Inicio</h2>
            <p>Bienvenido, {userName}. Aqui haciendo paginas con el profe xd</p>

        </div>
    );
};

export default Home;