import React from 'react';
import Navabar from './panels/Navabar';
import Main from './panels/Main'

class App extends React.Component {

	render() {
		return (
			<>
				<Navabar />
				<Main />
			</>
		);
	}
}

export default App;
