import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../images/freedom.svg'
import { Link } from 'react-router-dom'

function Home () {

  const quoteStyle = {}
  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
  }
  const paragraphStyle = {
    fontSize: '1.5rem',
  }
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <Container className="p-4 mt-4">
          <Row>
            <Col sm={12} md={12} lg={12} xl={5}>
              <h1 style={titleStyle}>Freedom Board</h1>
              <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Illo
                obcaecati quas quisquam. Aliquid architecto autem delectus
                expedita
                minima modi, non, quaerat sequi sunt suscipit vero.</p>
              <p style={quoteStyle}>Lorem ipsum dolor sit amet.</p>

              <div style={{
                display: 'flex',
                gap: '20px',
              }}>
                <Link to="/create">
                  <Button variant="primary">Create Message</Button>
                </Link>
                <Link to="/read">
                  <Button variant="warning">Read Board</Button>
                </Link>
              </div>

            </Col>
            <Col sm={12} md lg>
              <Image src={logo} width="100%"></Image>
            </Col>
          </Row>
        </Container>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: 'auto',
          backgroundColor: 'grey',
          padding: '1rem',
        }}>
          This is an open source project. The author of this project is not
          responsible for any content on this site. <br/> Please use with
          moderation.
          Copyright ©
        </div>
      </div>
    </div>
  )
}

export default Home
