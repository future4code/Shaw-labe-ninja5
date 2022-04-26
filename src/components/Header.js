import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div>

                <h2 onClick={this.props.goToHome}>
                    <img src=''/>
                    LabeNinjas
                </h2>

                <button onClick={this.props.goToCart}>
                    Carrinho
                </button>
            </div>
        )
    }
}