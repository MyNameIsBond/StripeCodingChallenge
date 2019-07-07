import React, { Component } from 'react'
import Menu from '@material-ui/icons/Menu'
import Fiber from '@material-ui/icons/FiberManualRecord'
import Clear from '@material-ui/icons/Clear'
import Arrow from '@material-ui/icons/ArrowForward'

const mobileNav = [
  { title: 'Payments', color: '#6772e5' },
  { title: 'Billing', color: '#24b47e' },
  { title: 'Connect', color: '#3297d3' },
  { title: 'Sigma', color: '#8f6ed5' },
  { title: 'Atlas', color: '#e39f48' },
  { title: 'Radar', color: '#b76ac4' },
  { title: 'Issuing', color: '#6772e5' },
  { title: 'Terminal', color: '#6772e5' }
]
const mobileSubNav = [
  { title: 'Pricing' },
  { title: 'Works with Stripe' },
  { title: 'Partner Program' },
  { title: 'Documentation' },
  { title: 'About Stripe' },
  { title: 'Jobs' },
  { title: 'Newsroom' },
  { title: 'Blog' }
]

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: false
    }
  }
  handleMobileMenu() {
    this.setState({ mobileMenu: !this.state.mobileMenu })
  }
  render() {
    const { mobileMenu } = this.state
    return (
      <header>
        <div>
          <nav>
            <ul>
              <li className="logo">
                <h1>Stripe</h1>
              </li>
              <li className="navButtons">
                <button>Products</button>
                <button>Developers</button>
                <button>Company</button>
                <button>Pricing</button>
              </li>
              <li className="signIn">
                <a>Support</a>
                <a>Sign In</a>
              </li>
            </ul>
            <div onClick={this.handleMobileMenu.bind(this)} className="burgerMenu">
              <Menu />
            </div>
            {mobileMenu ? (
              <div className="mobileNavBar">
                <div className="products">
                  <div className="productsTitle">
                    <p className="productsTitle">PRODUCTS</p>
                    <Clear
                      onClick={() => {
                        this.setState({ mobileMenu: false })
                      }}
                      style={{ color: '#6772e5' }}
                    />
                  </div>
                  {mobileNav.map(item => (
                    <div className="productsLinks">
                      <Fiber style={{ color: `${item.color}` }} />
                      <p
                        style={{
                          color: `${item.color}`
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="secondaryNav">
                  {mobileSubNav.map(item => (
                    <p>{item.title}</p>
                  ))}
                </div>
                <div className="navMobileFooter">
                  <p>Sign in</p>
                  <Arrow />
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </header>
    )
  }
}
