import React from "react";
import "../../styles/plantilla.css";
import "../../iconos/style.css";
import Personal from "./Personal";

class Contactos extends React.Component {
	constructor() {
		super();
		this.daniel = {
			nombre: "Daniel Sanchez",
			description: (
				<p className="informacion">
					Soy estudiante del SENA en la formacion de ADSI (analisis y desarrollo
					de sistemas de informacion), me encuentro en el 5º trimestre, ademas
					he aprendido herramientas tales como Html, Css y JavaScript,me gusta
					la idea de poder implementar mis pensamientos en una pagina.
				</p>
			),
			imagen: "https://i.ibb.co/M89XLbN/foto-Daniel.jpg",
			github: "https://github.com/Camilosan24",
			linkedin: "https://www.linkedin.com/in/daniel-camilo-9192221a7",
		};

		this.santiago = {
			nombre: "Santiago Guillen",
			description: (
				<p class="informacion">
					Estudiante de ADSI en quinto trimestre, apasasionado por la
					tecnologia, el futuro y crear soluciones, tengo conocimientos basicos
					en html,css, en lenguajes como JavaScript y Java, me gusta ayudar a
					los demas, trabajar en equipo, colaborar al maximo, soy carismatico y
					buena persona, busco nuevas experiencias, nuevos aprendizajes para
					seguir creciendo en mi carrera profesional y en un futuro poder
					compartir mis conocimientos
				</p>
			),
			imagen: "https://i.ibb.co/JF2YxRN/yo.png",
			github: "https://github.com/santiagogui1909",
			linkedin:
				"https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/",
		};

		this.edwin = {
			nombre: "Edwin Casallas",
			description: (
				<p class="informacion">
					Soy Ingeniero Electronico egresado de la universidad de Ibagué con
					conocimientos básicos en automatización usando PLC; redes, lineas y
					antenas; comunicación digital, mediciones e instrumentación.
					Conocimiento en programación con lenguajes como C++, pyton y labView.
					Siempre estoy en constante búsqueda de aprender nuevos conocimientos y
					enfrentarme a nuevos retos que me ayudaran a crecer como persona.
				</p>
			),
			imagen: "https://i.ibb.co/X2Kx3Z8/foto-Edwin.jpg",
			github: "https://github.com/edwincasallas22",
			linkedin:
				"https://www.linkedin.com/in/edwincasallas22/",
		};
	}
	render() {
		return (
			<div className="container">
				<div class="Titulo">
					<h1>
						<span class="diseño">Devel</span>opers
					</h1>
				</div>

				<Personal datos={this.daniel} />
				<Personal datos={this.santiago} />
				<Personal datos={this.edwin} />


				<div class="col-12">
					<div class="preferencias-contenedor">
						<div class="contenido">
							<h1>Eduardo Guarnizo</h1>
							<p class="informacion">
								Soy un desarrollador de software, tengo enfoque en plataformas
								web administrables, diseño web, desarrollo de WebServices;
								desarrolladas con estándares de calidad actuales, utilizando
								diferentes tipos de tecnologías. frondtend(HTML, Css,
								Javascript), frameworks Bootstrap, Jquery, React JS,
								procesadores CSS. En desarrollo de software utilizo backend de
								(ASP.NET, PHP, Visual Basic, Java), aplicando arquitectura de
								datos (Oracle, MySql, SQL Server).
							</p>
						</div>
						<div class="product-image">
							<img src="https://i.ibb.co/51HVT4J/eduardo.jpg" />

							<div class="RedesSociales">
								<div class="github">
									<a
										href="https://github.com/eguarnizo77"
										target="_blank"
										class="icon-git"
									>
										{" "}
										GitHub
									</a>
								</div>

								<div class="linkedin">
									<a
										href="http://eduardoguarnizo.com/"
										target="_blank"
										class="icon-css3"
									>
										{" "}
										Sitio Web
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="social" id="redSocial">
					<div>
						<ul>
							<div class="red">
								<li>
									<a
										href="https://www.youtube.com/channel/UC_0beVFfRmTWl_S4TzCroFw"
										target="_blank"
										class="icon-youtube"
									></a>
								</li>
							</div>
							<div class="red">
								<li>
									<a
										href="https://ibacrea.slack.com/archives/CFXJT4EKG"
										target="_blank"
										class="icon-slack"
									></a>
								</li>
							</div>
							<div class="red">
								<li>
									<a
										href="santiagogui1909@gmail.com"
										target="_blank"
										class="icon-gmail"
									></a>
								</li>
							</div>
						</ul>
					</div>
				</div>

				<div class="form">
					<div class="col-6">
						<form
							action="santiagogui1909@gmail.com"
							method="post"
							enctype="text/plain"
						>
							<img src="https://i.ibb.co/GnvDYxT/logo-terminator.png" />
							<h2>Comentarios</h2>
							<input type="text" name="Nombre" placeholder="Nombre" />
							<input type="text" name="Correo" placeholder="Correo" />
							<input type="text" name="Telefono" placeholder="Telefono" />
							<textarea
								name="comentario"
								placeholder="Escriba aqui su comentario"
							></textarea>
							<input type="button" value="ENVIAR" id="boton" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contactos;
