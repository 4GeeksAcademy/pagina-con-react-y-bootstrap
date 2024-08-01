import React from "react";
import Card from './card';
import Footer from './footer';
import Jumbotron from './jumbotron';
import Navbar from "./navbar";

const Home = () => {
	const cards = [
		{
			image: 'https://content.nationalgeographic.com.es/medio/2024/07/15/istock_b7f2cfb4_2161233085_240715105030_800x800.jpg',
			title: 'Paso de cebra',
			text: 'Los machos de esta especie presentan un patrón de plumas distintivo.',
			url: 'https://www.nationalgeographic.com.es/fotografia/foto-del-dia/paso-cebra_22791'
		},
		{
			image: 'https://content.nationalgeographic.com.es/medio/2024/07/03/holding-on-for-a-ride_5eaf79d5_240703111145_800x800.jpg',
			title: '6 fotos cómicas del mundo animal',
			text: 'Algunas de las candidatas al Comedy Wildlife Photography Award',
			url: 'https://www.nationalgeographic.com.es/mundo-animal/best-entries-far-comedy-wildlife_22693'
		},
		{
			image: 'https://content.nationalgeographic.com.es/medio/2022/10/13/axolotl_f5263389_480x480.jpg',
			title: 'Animales en peligro de extinción',
			text: 'Algunos de los animales más extraños de nuestro planeta caminan en la cuerda floja de la extinción.',
			url: 'https://www.nationalgeographic.com.es/mundo-animal/animales-peligro-extincion_12536'
		},
		{
			image: 'https://content.nationalgeographic.com.es/medio/2024/07/15/1759-4451-juandavidaguirre-colombia-student-home-2024_00000000_240715100508_480x480.jpg',
			title: 'Libertad prometida',
			text: 'Juan David Aguirre tomó estas imágenes en la vecindad de los Andes, en Medellín.',
			url: 'https://www.nationalgeographic.com.es/fotografia/foto-del-dia/libertad-prometida_22788'
		}
	];

	return (
		<div>
            <Navbar />
            <Jumbotron />
            <div className="container px-3">
                <div className="row">
                    {cards.map((card, index) => (
                        <Card key={index} image={card.image} title={card.title} text={card.text} url={card.url} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
