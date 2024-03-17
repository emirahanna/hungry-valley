import React, { Component } from "react";

class Header extends Component {
	render() {

        const headerStyle ={  
            backgroundColor: "#282c34",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"};
		return html`
			<div style = {headerStyle}>
				<h1>Hungry Valley</h1>
                <button>Sign in here pls</button>
			</div>
		`;
	}
}
export default Header;
