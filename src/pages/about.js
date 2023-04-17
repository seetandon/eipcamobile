import React from "react";
import Logo2 from "../images/logo pic.png" 
import { withRouter } from "react-router-dom";
import "../App.css";
import "../css/bootstrap.css"
import "../css/styles.css"
import Logo from "../images/logo text.png" 
import Logo1 from "../images/team.jpg"
import Logo3 from "../images/logo pic.png" 
import Logo12 from "../images/logo12.png"
import app from "../base";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext} from "react";
import { AuthContext } from "../Auth.js";
import Poster12 from "../images/pos13.png"

const About = ({history}) => {
  
  const { currentUser } = useContext(AuthContext);

  const Signout = () => {
    app.auth().signOut();
    history.push("/")
    window.location.reload(true)
    
  };
  


  return (
    
    <>
   

   <Navbar className="navbar fixed-top navbar-light" expand="lg">
      <Container className="container">
      <Navbar.Brand className="navbar-brand logo-image" href="/">
        <img src= {Logo} />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggler p-0 border-0 ml-auto mr-3"
        type="button"
        data-toggle="offcanvas"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
        <center>
          <li className="nav-item">
          <Nav.Link className="nav-link" href="/">
              บริการ <span className="sr-only">(current)</span>
            </Nav.Link>
          </li>
        </center> 
        <center>
          <li className="nav-item">
          <Nav.Link className="nav-link" href="/about">
              เกี่ยวกับเรา
            </Nav.Link>
          </li>
        </center>
        <center>
            <li className="nav-item">
            <Nav.Link class="nav-link" style={{color: "red"}} href="#" onClick={Signout} >ออกจากระบบ</Nav.Link>
            </li>
        </center>
        <center>
          <li className="nav-item">
            <a className= "mx-3" href="/HardwareHistory">
              <img style={{width: "40px", height: "40px"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </li>
        </center>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {/* Header */}
  <br/>
  <br/>
  <br/>
  {/* end of header */}
  {/* <img class="img5" src="https://i.pinimg.com/564x/33/55/7f/33557fe576b6c183abe4b40352951162.jpg" height="2000"  alt="alternative"> */}
  {/* end of header */}
  {/* Details 1 */}
  <div className="basic-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
              Learn About Us
            </h6>
            <h1 className="" font-color="#ffffff">
              {" "}
              EIPCA
            </h1>
            <h5 className="font-weight-medium font-italic mb-4">
              Electrocardiogram Interpretation Pattern for Symptom Predictions
              of Arrythmia.
            </h5>
            <p className="mb-2 font-face-gl">
              EIPCA
              โปรแกรมช่วยคัดกรองภาวะหัวใจวายเฉียบพลันจากภาวะหัวใจเต้นผิดจังหวะ
              จากกราฟคลื่นไฟฟ้าหัวใจด้วยปัญญาประดิษฐ์
              เป็นแอปพลิเคชันที่จะช่วยคัดกรองกลุ่มอาการบรูกันดา
              ย่นระยะเวลาการวินิจฉัยโรค และช่วยแก้ปัญหาการขาดแคลนผู้เชี่ยวชาญ{" "}
            </p>
          </div>{" "}
          {/* end of text-container */}
        </div>{" "}
        {/* end of col */}
        <div className="col-lg-6">
          <div className="image-container">
            <img
              className="img-fluid" style={{borderRadius: "10px"}}
              src={Logo12}
              alt="alternative"
            />
          </div>{" "}
          {/* end of image-container */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of basic-4 */}
  {/* end of details 1 */}
  {/* Details 2 */}
  <div className="basic-5 bg">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6">
          <div className="image-container">
            <img
              className="img-fluid" style={{borderRadius: "10px"}}
              src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/335985216_597842872263809_2330293775049834757_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF5hs-8potZal4hXPfvJ-TctF3GZujnNXC0XcZm6Oc1cAudOT6ovG3LMUHhQHDIBqy4nbRpTsnByPoEiPLgRCno&_nc_ohc=CGc8WO3rTbIAX8YPcy5&_nc_ht=scontent.fbkk12-2.fna&oh=03_AdQ4KMZ_mwbq1tYyWApAanrbOxOc0qTxvMUEdIs9bYdytQ&oe=6464511D"
              alt="alternative"
            />
          </div>{" "}
          {/* end of image-container */}
        </div>{" "}
        {/* end of col */}
        <div className="col-lg-6">
          <div className="text-container">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
              Our Features
            </h6>
            <h1 className="mb-4 font-face-gm">ทำไมต้องเป็นเรา</h1>
            <p className="font-face-gl">
              เพราะ EIPCA
              เป็นเครื่องมือที่พัฒนาขึ้นเพื่อคัดกรองและประเมินความเสี่ยงของผู้ป่วยหัวใจหยุดเต้นเฉียบพลันจากภาวะหัวใจเต้นผิดจังหวะ
              โดยการอ่านและตรวจหาคลื่นไฟฟ้าหัวใจที่ผิดปกติด้วยเทคโนโลยีปัญญาประดิษฐ์และการวิเคราะห์แบบประเมินความเสี่ยงตามเกณฑ์การประเมินมาตรฐาน
              จะช่วยให้แพทย์ นักวิจัย พยาบาลวิชาชีพ โรงพยาบาล
              และหน่วยงานด้านสุขภาพที่เกี่ยวข้อง
              สามารถดำเนินการตรวจและรักษาได้รวดเร็วและแม่นยำยิ่งขึ้น
              นับเป็นส่วนหนึ่งที่จะช่วยลดโอกาสเสียชีวิตจากโรคหัวใจและหลอดเลือด
            </p>
            <div className="row"></div>
          </div>{" "}
          {/* end of text-container */}
        </div>{" "}
        
        {/* end of col */}
      </div>{" "}
      
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
    
  </div>{" "}
  {/* end of basic-5 */}
  {/* end of details 2 */}
  <div className="basic-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
            Our co-opertion
            </h6>
            <h1 className="" font-color="#ffffff">
              {" "}
              ความร่วมมือ
            </h1>
            <h5 className="font-weight-medium font-italic mb-4">
              
            </h5>
            <p className="mb-2 font-face-gl">
            EIPCA ได้ขอความร่วมมือกับทางคณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่ เพื่อนำ EIPCA Hardware ไปทดสอบและเปรียบเทียบกับเครื่องวัดคลื่นไฟฟ้าหัวใจที่โรงพยาบาลมหาราช นครเชียงใหม่
             ซึ่ง EIPCA มีความแม่นยำเมื่อเทียบกับอุปกรณ์ ECG จริงมากถึง 90%
            </p>
          </div>{" "}
          {/* end of text-container */}
        </div>{" "}
        {/* end of col */}
        <div className="col-lg-6">
          <div className="image-container">
            <img
              className="img-fluid" style={{borderRadius: "10px" , MarginRight: "100px"}}
              src={Poster12}
              alt="alternative"
            />
          </div>{" "}
          {/* end of image-container */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of basic-4 */}
  {/* end of details 1 */}

  
  
  
  


  
  <div className="footer bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-col first">
            <h6 className="font-face-gm">เกี่ยวกับ EIPCA</h6>
            <p className="p-small font-face-gl">
              EIPCA ย่อมาจาก Electrocardiogram Interpretation Pattern for
              Symptom Predictions of Arrythmia. หรือ
              โปรแกรมเพื่อช่วยคัดกรองภาวะหัวใจวายเฉียบพลัน
              <br />
              (โรคใหลตาย)
              อันเนื่องมาจากภาวะหัวใจเต้นผิดจังหวะจากกราฟคลื่นไฟฟ้าหัวใจด้วยปัญญาประดิษฐ์
            </p>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col second">
            <h6 className="font-face-gm">ติดต่อเรา</h6>
            <ul className="list-unstyled li-space-lg p-small font-face-gl">
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                EIPCA Team 
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                093-2789556 , 081-2895915 , 065-3595514
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                EIPCA@gmail.com
              </p>
            </ul>
          </div>{" "}
          {/* end of footer-col */}
          <div className="footer-col third">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <p className="p-small">
              We would love to hear from you{" "}
              <a href="">
                <strong>EIPCA@gmail.com</strong>
              </a>
            </p>
          </div>{" "}
          {/* end of footer-col */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of footer */}
  




      
    </>
  );
};

export default withRouter(About);