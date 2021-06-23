import React, { useState } from 'React';
import ReactDOM from 'react-dom';

const width = 960;
const height = 700;
const circleRadius = 20;
const initialMousePosition = {x: width/2, y:height/2};

const handleMouseMove = (event) => {
	const {clientX  , clientY } = event;
	console.log({clientX, clientY});
};
const App = () = > {
   
    const [MousePosition,setMousePosition]=useState(initialMousePosition);
    const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  }, [setMousePosition]);
  

	return(
	<svg width = {width} height= {height} onMouseMove={handleMouseMove}>
	<circle
	cx={circleX}
	cy={circleY}
    r={circleRadius}
    />
    </svg>
   );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);