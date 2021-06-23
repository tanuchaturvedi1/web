(function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 700;
  const circleRadius = 20;
  const initialMousePosition = { x: width / 2, y: height / 2 };

  const App = () => {
    const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
    
    const handleMouseMove = React.useCallback(event => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    }, [setMousePosition]);
    
    return (
      React__default.createElement( 'svg', { width: width, height: height, onMouseMove: handleMouseMove },
        React__default.createElement( 'circle', {
          cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })
      )
    );
  };
  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

}(React, ReactDOM));