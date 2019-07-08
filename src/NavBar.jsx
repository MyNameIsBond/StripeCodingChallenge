import React, { Component } from 'react'
import Menu from '@material-ui/icons/Menu'
import Fiber from '@material-ui/icons/FiberManualRecord'
import Clear from '@material-ui/icons/Clear'
import Arrow from '@material-ui/icons/ArrowForward'
import RightArrow from '@material-ui/icons/KeyboardArrowRight'
import { thisExpression } from '@babel/types'

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
      mobileMenu: false,
      products: false,
      developers: false,
      company: false
    }
  }
  companyCard = () => (
    <div
      className="companyHover"
      onMouseLeave={() => {
        this.setState({ company: false })
      }}
    >
      <div className="arrow" />
      <div className="companyMain">
        <Fiber />
        <p>ABOUT STRIPE</p>
        <Fiber />
        <p>COSTONERS</p>
        <Fiber />
        <p>PARTNER PROGRAM</p>
        <Fiber />
        <p>JOBS</p>
        <Fiber />
        <p>ENVIROMENT</p>
        <Fiber />
        <p>NEWSROOM</p>
      </div>
      <div className="companySub">
        <Fiber />
        <p>FROM THE BLOG</p>
        <div className="companyHoverContent">
          <p className="textHoverContent">A new and improved onboarding flow for E...</p>
          <RightArrow className="iconsHoverContent" />
          <p className="textHoverContent">Sorbet is now open source</p>
          <RightArrow className="iconsHoverContent" />
          <p className="textHoverContent">Stripe Terminal is now generally available i...</p>
          <RightArrow className="iconsHoverContent" />
        </div>
      </div>
    </div>
  )

  developersCard = () => (
    <div
      className="developerHover"
      onMouseLeave={() => {
        this.setState({ developers: false })
      }}
    >
      <div className="developersTitle">
        <Fiber />
      </div>
      <div className="developersMain">s</div>
      <div className="developersFooter">s</div>
    </div>
  )

  handleMobileMenu() {
    this.setState({ mobileMenu: !this.state.mobileMenu })
  }
  render() {
    const { mobileMenu, products, developers, company } = this.state
    return (
      <header>
        <div>
          <nav>
            <ul>
              <li className="logo">
                <h1>Stripe</h1>
              </li>
              <li className="navButtons">
                <button
                  onMouseEnter={() => {
                    this.setState({ products: true, company: false, developers: false })
                  }}
                >
                  Products
                </button>
                <button
                  onMouseEnter={() => {
                    this.setState({ products: false, company: false, developers: true })
                  }}
                >
                  Developers
                </button>
                <button
                  onMouseEnter={() => {
                    this.setState({ products: false, company: true, developers: false })
                  }}
                >
                  Company
                </button>
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
            {products ? (
              <div
                className="productsHover"
                onMouseLeave={() => {
                  this.setState({ products: false })
                }}
              >
                <ul>
                  <li>
                    <h2>Product</h2>
                  </li>
                </ul>
              </div>
            ) : null}
            {developers ? this.developersCard() : null}
            {company ? this.companyCard() : null}
          </nav>
        </div>
      </header>
    )
  }
}
