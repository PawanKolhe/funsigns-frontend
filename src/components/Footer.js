import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <footer>
        <div id='footer-copyrights' className='py-3 px-2'>
          <p className='mb-2 small text-center'>
            &copy;2020{' '}
            <a href className='text-decoration-none text-white'>
              www.funsigns.com
            </a>{' '}
            All rights Reserved.
          </p>
          <p className='m-0 text-center'>
            Designed and Developed by{' '}
            <strong>
              <a
                href='https://www.linkedin.com/in/kolhepawan/'
                className='text-white'
                target='_blank'
                rel='noreferrer'
              >
                Pawan Kolhe{' '}
              </a>
            </strong>
            and{' '}
            <strong>
              <a
                href='https://www.linkedin.com/in/nitish-devadiga/'
                className='text-white'
                target='_blank'
                rel='noreferrer'
              >
                Nitish Devadiga
              </a>
            </strong>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
