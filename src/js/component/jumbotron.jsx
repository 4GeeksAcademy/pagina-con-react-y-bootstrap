import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-light py-4 px-3 jumbotron-background">
            <div className="container pt-5 pb-5 ps-5 bg-gray-300">
                <h1 className="display-4 text-navy">10 impresionantes fotografías publicadas en National Geographic España en julio de 2024</h1>
                <p className="lead text-black">
                    Esta fascinante selección de imágenes define de forma visual algunas de las historias que se han publicado en nuestra web este mes de julio. 
                </p>
                <a className="btn btn-warning btn-lg" href="https://www.nationalgeographic.com.es/fotografia/10-impresionantes-fotografias-publicadas-national-geographic-espana-este-julio-2024_22933" role="button">No te las pierdas!</a>
            </div>
        </div>
    );
};

export default Jumbotron;
