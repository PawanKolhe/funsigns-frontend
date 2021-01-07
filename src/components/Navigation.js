import React, { Component } from 'react'
import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, getLoggedInUser } from '../actions'
import logo from '../images/logo.png'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      dropdownShow: false,
      showLogoutModal: false,
    }
  }

  componentDidMount() {
    this.updateUser()
  }

  updateUser = () => {
    if (this.props.auth.isLoggedIn) {
      this.props.getLoggedInUser()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      //window.scrollTo(0, 0)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    // if (this.props.auth.userType) {
    //   if (
    //     this.props.auth.userType !== 'faculty' &&
    //     this.props.location.pathname === '/faculty/dashboard'
    //   ) {
    //     this.props.history.push('/')
    //   } else if (
    //     this.props.auth.userType !== 'student' &&
    //     this.props.location.pathname === '/student/dashboard'
    //   ) {
    //     this.props.history.push('/')
    //   }
    // }
  }

  renderDashboardLink = () => {
    if (this.props.auth.userType === 'student') {
      return (
        <Link
          to='/student/dashboard'
          className={`nav-link hvr-grow ${
            this.props.location.pathname === '/student/dashboard'
              ? 'active'
              : ''
          }`}
          onClick={() => {
            this.setState({ expanded: false, dropdownShow: false })
          }}
        >
          Dashboard
        </Link>
      )
    } else if (this.props.auth.userType === 'faculty') {
      return (
        <Link
          to='/faculty/dashboard'
          className={`nav-link hvr-grow ${
            this.props.location.pathname === '/faculty/dashboard'
              ? 'active'
              : ''
          }`}
          onClick={() => {
            this.setState({ expanded: false, dropdownShow: false })
          }}
        >
          Dashboard
        </Link>
      )
    }
  }

  renderNav = () => {
    return (
      <Container>
        <Link
          to='/'
          className='navbar-brand w-25 hvr-grow'
          onClick={() => {
            this.setState({ expanded: false, dropdownShow: false })
          }}
        >
          <img
            id='brand-logo'
            alt='Logo'
            src={logo}
            className='align-top mr-3'
          />
          <span id='brand-name'>Funsigns</span>
        </Link>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => {
            this.setState({ expanded: !this.state.expanded })
          }}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100 justify-content-between'>
            {
              <Link
                to='/'
                className={`nav-link hvr-grow ${
                  this.props.location.pathname === '/' ? 'active' : ''
                }`}
                onClick={() => {
                  this.setState({ expanded: false, dropdownShow: false })
                }}
              >
                Home
              </Link>
            }
            <Link
              to='/about'
              className={`nav-link hvr-grow ${
                this.props.location.pathname === '/about' ? 'active' : ''
              }`}
              onClick={() => {
                this.setState({ expanded: false, dropdownShow: false })
              }}
            >
              About
            </Link>

            <Link
              to='/contact-us'
              className={`nav-link hvr-grow ${
                this.props.location.pathname === '/contact-us' ? 'active' : ''
              }`}
              onClick={() => {
                this.setState({ expanded: false, dropdownShow: false })
              }}
            >
              Contact Us
            </Link>

            <Link
              to='/login'
              className={`nav-link hvr-grow ${
                this.props.location.pathname === '/login' ? 'active' : ''
              }`}
              onClick={() => {
                this.setState({ expanded: false, dropdownShow: false })
              }}
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    )
  }

  renderAuthNav = () => {
    return (
      <Container>
        <Link
          to='/'
          className='navbar-brand w-25 hvr-grow'
          onClick={() => {
            this.setState({ expanded: false, dropdownShow: false })
          }}
        >
          <img
            id='brand-logo'
            alt='Logo'
            src={logo}
            className='align-top mr-3'
          />
          <span id='brand-name'>Funsigns</span>
        </Link>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => {
            this.setState({ expanded: !this.state.expanded })
          }}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100 justify-content-between'>
            {this.renderDashboardLink()}
            <Link
              to='/about'
              className={`nav-link hvr-grow ${
                this.props.location.pathname === '/about' ? 'active' : ''
              }`}
              onClick={() => {
                this.setState({ expanded: false, dropdownShow: false })
              }}
            >
              About
            </Link>

            <Link
              to='/contact-us'
              className={`nav-link hvr-grow ${
                this.props.location.pathname === '/contact-us' ? 'active' : ''
              }`}
              onClick={() => {
                this.setState({ expanded: false, dropdownShow: false })
              }}
            >
              Contact Us
            </Link>

            <a
              className={`nav-link hvr-grow clickable`}
              href
              onClick={() => {
                this.setState({
                  showLogoutModal: true,
                  expanded: false,
                  dropdownShow: false,
                })
              }}
            >
              Logout
            </a>
            {this.renderLogoutModal()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    )
  }

  renderLogoutModal = () => {
    return (
      <Modal
        show={this.state.showLogoutModal}
        onHide={() => {
          this.setState({ showLogoutModal: false })
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => {
              this.props.logout()
              this.setState({ showLogoutModal: false })
              this.props.history.push('/')
            }}
          >
            Yes
          </Button>
          <Button
            variant='secondary'
            onClick={() => {
              this.setState({ showLogoutModal: false })
            }}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        variant='dark'
        expand='lg'
        className='shadow'
        expanded={this.state.expanded}
      >
        {this.props.auth.isLoggedIn ? this.renderAuthNav() : this.renderNav()}
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth, user: state.currentUser }
}

export default connect(mapStateToProps, { logout, getLoggedInUser })(
  withRouter((props) => <Navigation {...props} />)
)
