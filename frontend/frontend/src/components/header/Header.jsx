import React, { Component } from "react"

class Header extends Component {
    render(){
        return(
            <>
                <header>
                    <div className="logo">
                        
                    </div>
                    <div className="busca">
                        <input type="text" placeholder="Busca"/>
                    </div>
                </header>
            </>
        )
    }
}

export default Header