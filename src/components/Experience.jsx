import { useState, React } from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';

import ca from '../media/big.png';
import zoompic from '../media/ZoomCar.jpeg';
import dashboard from '../media/dashboard4.png';
import tcd from '../media/AJIO.com.png';
import et from '../media/ET.jpg';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faBootstrap,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const Experience = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div data-theme={darkMode ? 'dark' : 'light'}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className='lead' align='center'>
            <b>- Projects -</b>
          </h2>
          <br></br>

          <Zoom>
            <Row>

              <Col lg={6} sm={12}>
                <Card
                  align='center'
                  className='exp'
                  data-theme={darkMode ? 'dark' : 'light'}
                >
                  <br></br>
                  <center>
                    <div class='flip-card'>
                      <div class='flip-card-inner'>
                        <div className='flip-card-front'>
                          <Card.Img
                            variant='top'
                            src={dashboard}
                          />
                          <Card.Body>
                            <Card.Title align='center'>
                              Admin Dashboard
                            </Card.Title>
                            <Card.Text>
                              <p align='center'>
                                Powerful tool designed to streamline and simplify administrative tasks for your business.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className='flip-card-back'>
                          <p>
                            This is an admin dashboard application designed to provide a user-friendly interface for managing various aspects of your business. It offers several pages with different functionalities, including Ecommerce, Calendar, Kanban, Color Picker, Employee Data, Customer Data, and Orders Data. Additionally, it supports features such as pagination, sorting, search, edit, and delete operations. Furthermore, the application offers different theme colors to customize the appearance according to your preferences.
                          </p>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faHtml5}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faCss3Alt}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faJs}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faReact}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href='https://adilrana-admin-dashboard.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href='https://github.com/adilrana03/admin_dashboard'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>


              <Col lg={6} sm={12}>
                <Card
                  align='center'
                  className='exp'
                  data-theme={darkMode ? 'dark' : 'light'}
                >
                  <br></br>
                  <center>
                    <div class='flip-card'>
                      <div class='flip-card-inner'>
                        <div className='flip-card-front'>
                          <Card.Img
                            variant='top'
                            src={et}
                          />
                          <Card.Body>
                            <Card.Title align='center'>
                              Expense Tracker
                            </Card.Title>
                            <Card.Text>
                              <p align='center'>
                                A Web Application where users can track thier income and expenses.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className='flip-card-back'>
                          <p>
                            The Expense Tracker with Speechly Integration is a web application designed to help users manage their finances by tracking their income and expenses. This application utilizes the Speechly API for voice recognition, allowing users to add income and expenses by speaking their inputs. It also provides charts to visualize the income and expenses data for better analysis.
                          </p>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faHtml5}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faCss3Alt}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faReact}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faBootstrap}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href='https://adilrana03-expense-tracker.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href='https://github.com/adilrana03/expense_tracker'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>


            <Row>






              <Col lg={6} sm={12}>
                <Card
                  align='center'
                  className='exp'
                  data-theme={darkMode ? 'dark' : 'light'}
                >
                  <br></br>
                  <center>
                    <div class='flip-card'>
                      <div class='flip-card-inner'>
                        <div className='flip-card-front'>
                          <Card.Img
                            variant='top'
                            src={zoompic}
                          />
                          <Card.Body>
                            <Card.Title align='center'>
                              ZoomCar.com(Clone)
                            </Card.Title>
                            <Card.Text>
                              <p align='center'>
                                India's Largest
                                Online car
                                sharing and
                                renting
                                platform.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className='flip-card-back'>
                          <p>
                            India’s first personal
                            mobility platform, with
                            the introduction of
                            car-sharing services in
                            2012. Zoomcar allows
                            users to rent cars by
                            the hour, day, week, or
                            month. it is currently
                            the market leader in the
                            personal mobility space
                            with over 10,000 cars in
                            its fleet.
                          </p>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faHtml5}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faCss3Alt}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faJs}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faReact}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href='https://zoomcarpro.netlify.app//'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href='https://github.com/abhishekkhanna2710/ZoomCar'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              {/* F   I   R   S   T       C   O   L    U  M    N         C    O    M   P    L    E     T   E  D       H     E      R     E */}
            {/* </Row> */}


              <Col lg={6} sm={12}>
                <Card
                  align='center'
                  className='exp'
                  data-theme={darkMode ? 'dark' : 'light'}
                >
                  <br></br>



                  <center>
                    <div class='flip-card'>
                      <div class='flip-card-inner'>
                        <div className='flip-card-front'>
                          <Card.Img
                            variant='top'
                            src={tcd}
                          />
                          <Card.Body>
                            <Card.Title align='center'>
                              Ajio.com(Clone)
                            </Card.Title>
                            <Card.Text>
                              <p align='center'>
                                Online Fashion
                                Shopping App
                                where user can
                                order online.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className='flip-card-back'>
                          <p>
                            An Online Shopping
                            Website where users can
                            login to the site and
                            add their favorite
                            Fashion items to cart
                            and User can also sort
                            and filter his favorite
                            Fashion item and pay the
                            payment and the items
                            get delivered to their
                            Residentail Home Address
                            provided in the site.
                          </p>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faHtml5}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faCss3Alt}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faJs}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href='https://ajio-clone-masaiproject.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href='https://github.com/adilrana03/Ajio_clone_'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>

                  <br></br>
                </Card>
              </Col>

              <Col lg={6} sm={12}>
                <Card
                  align='center'
                  className='exp'
                  data-theme={darkMode ? 'dark' : 'light'}
                >
                  <br></br>
                  <center>
                    <div class='flip-card'>
                      <div class='flip-card-inner'>
                        <div className='flip-card-front'>
                          <Card.Img
                            variant='top'
                            src={ca}
                          />
                          <Card.Body>
                            <Card.Title align='center'>
                              BigBasket.com(Clone)
                            </Card.Title>
                            <Card.Text>
                              <p align='center'>
                                A Web
                                Application
                                where user can
                                order ther
                                Grocery
                                products.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className='flip-card-back'>
                          <p>
                            This is an Grocery
                            Ordering Web Application
                            where the customers can
                            login and go through all
                            the items i.e
                            vegetables,fruits,staples,cosmetic
                            so on & then they can
                            add the items according
                            to their cart and pay
                            for the above items via
                            card or cash, the items
                            get delivered. Thank You
                            for ordering
                          </p>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faHtml5}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faCss3Alt}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faJs}
                            />
                          </Button>
                          <Button
                            variant={
                              darkMode
                                ? 'outline-light'
                                : 'outline-dark'
                            }
                            className='skills-btn margin5'
                          >
                            <FontAwesomeIcon
                              className='skill'
                              size='2x'
                              icon={faBootstrap}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href='https://bigbasket-cloned-masai.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href='https://github.com/adilrana03/BigBasket_Clone'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <Button
                        variant={
                          darkMode
                            ? 'outline-light'
                            : 'outline-dark'
                        }
                        className='sbtn'
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Experience;
