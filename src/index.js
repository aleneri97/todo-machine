import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TODO: Modal Background clickeable para cerrar modal
// TODO: Editar TODOs
// TODO: Avance como barra de progreso con porcentaje
// TODO: Esconder hechos

function AppComponent(props) {
	return (
		<h1>
			¡{props.saludo}, {props.nombre}!
		</h1>
	);
}

function wrappedComponent(WrappedComponent) {
	return function withGreeting(saludo) {
		return function ActualComponent(props) {
			return (
				<React.Fragment>
					<WrappedComponent {...props} saludo={saludo} />
					<p> Esto es una función de verdad </p>
				</React.Fragment>
			);
		};
	};
}

const App = wrappedComponent(AppComponent)('Hola');

ReactDOM.render(<App nombre='Juanita' />, document.getElementById('root'));
