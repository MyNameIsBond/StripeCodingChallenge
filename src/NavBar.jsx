import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <h1>Stripe</h1>
              </li>
              <li className="navButtons">
                <button>Products</button>
                <button>Developers</button>
                <button>Company</button>
                <button>Pricing</button>
                <button>Support</button>
                <button>Sign In</button>
              </li>
              <li className="signIn">
                <a>Support</a>
                <a>Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
