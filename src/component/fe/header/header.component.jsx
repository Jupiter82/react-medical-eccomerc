import logo from "../../../assets/images/logoimage/logo.svg";
import profile_icon from "../../../assets/images/topicons/profile_icon.svg";
import upload_rx from "../../../assets/images/topicons/upload_rx.svg";
import cart_icon from "../../../assets/images/topicons/cart_icon.svg";
import beauty from "../../../assets/images/topicons/boticons/beauty.svg";
import diagnostics from "../../../assets/images/topicons/boticons/diagnostics.svg";
import healthlibrary from "../../../assets/images/topicons/boticons/health-library.svg";
import medicine from "../../../assets/images/topicons/boticons/medicine.svg";
import wellness from "../../../assets/images/topicons/boticons/wellness.svg";
import { Container, Row, Col, Image, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const FeHeader = () => {
  return (
    <>
      <div style={{ backgroundColor: "#32aeb1" }}>
        <Container className="part1-hd" style={{}}>
          <Row className="pt-2">
            <Col lg={8} md={8} sm={12}>
              <Row>
                <Col lg={4} md={4} sm={6}>
                  <div className="img-logo pt-4">
                    <a class="navbar-brand" href="#">
                      <Image src={logo}></Image>
                    </a>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={6}>
                  <div className="pt-4">
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search for Medicine & Wellness products.."
                        className="me-2"
                        aria-label="Search"
                      />
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div
                className="nav-part-right d-flex pt-4 "
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className="part-1-nav-ri d-flex"
                  style={{ alignItems: "flex-start" }}
                >
                  <Image src={upload_rx}></Image>
                  <p className="text-white">Upload</p>
                </div>
                <div
                  className="part-1-nav-ri d-flex"
                  style={{ alignItems: "flex-start" }}
                >
                  <Image src={cart_icon}></Image>
                  <p className="text-white">Cart</p>
                </div>
                <div
                  className="part-1-nav-ri d-flex"
                  style={{ alignItems: "flex-start" }}
                >
                  <Image src={profile_icon}></Image>
                  <p className="text-white">Sign in / Sign out</p>
                </div>
              </div>
            </Col>
          </Row>
          <br></br>
          <div className="d-flex" style={{ justifyContent: "space-between",flexWrap:"wrap" }}>
            <NavLink
              to=""
              className="part2-hd-a d-flex pt-2"
              style={{ textDecoration: "none" }}
            >
              <Image src={medicine} alt="" srcset=""></Image>
              <span class=" text-white p-2">Medicine</span>
            </NavLink>
            <NavLink
              to="/wellness"
              className="part2-hd-a d-flex pt-2"
              style={{ textDecoration: "none" }}
            >
              <Image src={wellness} alt="" srcset=""></Image>
              <span class=" text-white p-2">Wellness</span>
            </NavLink>
            <NavLink
              to=""
              className="part2-hd-a d-flex pt-2"
              style={{ textDecoration: "none" }}
            >
              <Image src={diagnostics} alt="" srcset=""></Image>
              <span class=" text-white p-2">Lab Test</span>
            </NavLink>
            <NavLink
              to=""
              className="part2-hd-a d-flex pt-2"
              style={{ textDecoration: "none" }}
            >
              <Image src={beauty} alt="" srcset=""></Image>
              <span class=" text-white p-2">Beauty</span>
            </NavLink>
            <NavLink
              to=""
              className="part2-hd-a d-flex pt-2"
              style={{ textDecoration: "none" }}
            >
              <Image src={healthlibrary} alt="" srcset=""></Image>
              <span class=" text-white p-2">Health Corner</span>
            </NavLink>
          </div>
          <br></br>
        </Container>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={"text-black nav-link"} to="/home">COVID Essentials</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Diabetes</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Eyewear</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Ayush</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Ayurvedic</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Homeopathy</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Fitness</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Mom & Baby</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Devices</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Surgicals</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Sexual Wellness</NavLink>
              <NavLink className={"text-black nav-link"} to="/link">Treatments</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default FeHeader;
