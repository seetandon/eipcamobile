import React from "react";
import app from "../base";
import { useContext} from "react";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"
// import "../css/magnific-popup.css"
import Logo from "../images/logo text.png" 
import Logo2 from "../images/logo pic.png" 
import Risk from "../images/risk.png"
import Search from "../images/search.png"
import Food from "../images/Food.png"
import Sleep from "../images/sleep.png"
import Bru from "../images/Bru.png"
import Cadiac from "../images/cadiac.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo12 from "../images/logo12.png"
import Poster1 from "../images/pos1.png"
import Poster2 from "../images/pos2.png"
import Poster3 from "../images/pos3.png"
import Poster4 from "../images/pos4.png"
import Poster5 from "../images/pos5.png"
import Poster6 from "../images/pos6.png"
import Poster7 from "../images/pos8.png"
import Logo3 from "../images/logo pic.png" 
import Logo8 from "../images/GC logo.png"
import Poster10 from "../images/pos11.png"
import Poster14 from "../images/pos14.png"
import Poster15 from "../images/pos15.png"

const Home = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  var ReactRotatingText = require('react-rotating-text');

  const Signout = () => {
    app.auth().signOut();
    window.location.reload(true)
    
  };

  const Upload = () => {
    history.push("/upload");
    window.location.reload(true)
  }
  const login = () => {
    history.push("/Login");
    window.location.reload(true)
  }

  const btnstyle = {
    backgroundcolor: "black"
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



    
    
    
        
    
      
      
    <header id="header" className="header font-face-gm" backgroundcolor="Green">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          
          {/* end of text-container */}
        </div>{" "}
        {/* end of div */}
        <center>
        <div className="col-lg-6 col-xl-7">
          <div className="image-container img-fluid">
                  <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 img7"
                  src={Poster3}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img7"
                  src={Poster4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img7"
                  src={Poster7}
                  alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* </div> end of image-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        </center>
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  </header>{" "}
  {/* end of header */}
  {/* <img class="img5" src="https://i.pinimg.com/564x/33/55/7f/33557fe576b6c183abe4b40352951162.jpg" height="2000"  alt="alternative"> */}
  {/* end of header */}
  {/* Job Panel */}
  {/* <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */}

  {/* <div id="jobPanel" className="filter">
    <div className="basic-3">
      <div className="section-wrapper bg-gray" />
      <div className="row">
        <div className="">
          <h2 className="h2-heading">บริการของเรา</h2>
          <div className="header4" /> <div className="header5" />
          <br />
          <br />
        </div>{" "} */}
        {/* end of col */}
      {/* </div>{" "} */}
      {/* end of row */}
      {/* <div className="">
        <div className=""> */}
          {/* Filter */}
          {/* <div className="button-group filters-button-group">
            <a className="button" data-filter=".EIPCA">
              <span>EIPCA</span>
            </a>
            <a className="button" data-filter=".OTHERINFO">
              <span>อื่นๆ</span>
            </a>
          </div>{" "} */}
          {/* end of button group */}
          {/* <div className="grid"> */}
            {/* <div className="element-item  g-col-4">
              <a href="/Brugada">
                <img
                  className="img6"
                  src="https://i.pinimg.com/564x/de/14/00/de1400efa4800384ef0b64f490168d99.jpg"
                />
                <h4>
                  <i className="" />
                  Bruganda Syndrom
                </h4>
              </a>
            </div>
            
            <div className="element-item  g-col-4 ">
              <a href="/Hardware">
                <img
                  className="img6"
                  src="https://i.pinimg.com/564x/bb/cb/fa/bbcbfa8c3514be0d7a2f407d1405fd5d.jpg"
                />
                <h4>
                  <i className="" />
                  อุปกรณ์
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/Howtouse">
                <img className="img6" src={Logo2}/>
                <h4>
                  <i className="" />
                  วิธีใช้{" "}
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/ECGs">
                <img className="img6" src={Logo2} />
                <h4>
                  <i className="" />
                  คลื่นไฟฟ้าหัวใจเบื้องต้น
                </h4>
              </a>
            </div>
            <div className="element-item ">
              <a href="/upload">
                <img className="img6" src={Logo2} />
                <h4>
                  <i className="" />
                  อัพโหลด
                </h4>
              </a>
            </div>
             */}
          {/* </div>{" "} */}
          {/* end of grid */}
          {/* end of filter */}
        {/* </div>{" "} */}
        {/* end of col */}
      {/* </div>{" "} */}
      {/* end of row */}
    {/* </div> */}
  {/* // </div>{" "} */}
  {/* end of container */}
  {/* end of filter */}
  {/* end of job panel */}
  {/* Job Listing */}
             <div>
              <center>
             {/* <img
                  className="d-block img9"
                  src={}
                  alt="First slide"
                /> */}
              </center>
             </div>
  {/* card */}

  <div className="basic-5 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="image-container">
            <img
              className="img-fluid" style={{borderRadius: "10px"}}
              src={Poster10}
              alt="alternative"
            />
          </div>{" "}
          {/* end of image-container */}
        </div>{" "}
        {/* end of col */}
        
        <div className="col-lg-6">
          <div className="text-container">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
              
            </h6>
            <h1 className="" font-color="#ffffff" style={{fontSize: "65px"}}>
              {" "}
              EIPCA
            </h1>
            <h3 className="font-weight-high font-italic mb-3 " >
            WORLD'S FIRST
            <h3 className="font-weight-medium font-italic mb-3 " >
            Augmented Unipolar lead for Brugada syndrome detection.

            </h3>
            </h3>
            
            <p className="mb-2 font-face-gl">
             
            </p>
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


  <center>
  <div id="jobPanel" className="filter">
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <h1 className="h2-heading">EIPCA</h1>
            <div className="header6" />  */}
            <br />
            <br />
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Job */}
            <div className="job-container">
              <a style={{textDecoration: "none"}} href="/Form">
              <img
                className="img6"
                src={Risk}
              />
              {/* <h2  className="my-2">
                เริ่มต้นการวัดความเสี่ยง
              </h2>
              <p>
                เข้าไปเพื่อเริ่มทำแบบประเมินความเสี่ยงการเกิดโรคหัวใจ และหลังจากนั้นท่านสามารถเลือกระบบของ EIPCA เพื่อเริ่มตรวจกราฟคลื่นไฟฟ้าหัวใจ{" "}
                
              </p> */}
              </a>
            </div>{" "}
            <div className="job-container " >
              <a style={{textDecoration: "none"}} href="/SuggestionHospital2">
              <img
                className="img6"
                src={Search}
              />
              
              
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            {/* <div className="job-container">
              <a style={{textDecoration: "none"}} href="/Hardware">
              <img
                className="img6"
                src= {Logo2}
              />
              <h2  className="my-2">อุปกรณ์</h2>
              <p>
              อุปกรณ์ประเมินความเสี่ยงการเกิดโรค Brugada
              อุปกรณ์นี้คืออุปกรณ์ตรวจวัดคลื่นไฟฟ้าหัวใจหรือจะเรียกอีกอย่างว่าเครื่อง
              ECG ขนาดพกพา
                
              </p>
              </a>
            </div>{" "} */}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            {/* <div className="job-container">
              <a style={{textDecoration: "none"}} href="/HowtoUse">
              <img
                className="img6"
                src={Logo2}
              />
              
              </a>
            </div>{" "} */}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
           
            
            {/* end of job-container */}
            {/* end of job */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of basic-3 */}
  </div>

  </center>

  <div className="basic-4 bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-container">
            <h6 className="text-secondary text-uppercase font-weight-medium mb-3">
              Learn About Us
            </h6>
            <h1 className="" font-color="#ffffff">
              {" "}
              EIPCA คืออะไร?
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
          <a  className="btn-solid-lg page-scroll mx-3 my-4" href="/about">อ่านเพิ่มเติม</a>
          {/* end of text-container */}
        </div>{" "}
        {/* end of col */}
        <div className="col-lg-6">
          <div className="image-container">
            <img
              className="img-fluid" style={{borderRadius: "10px" }}
              src={Poster15}
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
  

  





  <center>
  <div id="infoPanel" className="filter">
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="h2-heading font-face-gm">ข่าวสารจาก EIPCA</h1>
            
            <br />
            <br />
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Job */}
            <div className="job-container " >
              <a style={{textDecoration: "none"}} href="/Data1">
              <img
                className="img6"
                src={Bru}
                />
              
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data2">
              <img
                className="img6"
                src={Sleep}
              />
              
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data3">
              <img
                className="img6"
                src={Cadiac}
              />
              
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
            {/* Job */}
            <div className="job-container">
            <a style={{textDecoration: "none"}} href="/Data4">
              <img
                className="img6"
                src={Food}
              />
              
              </a>
            </div>{" "}
            {/* end of job-container */}
            {/* end of job */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of basic-3 */}
  </div>
  </center>
  {/* end of job listing */}
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
          <div className="footer-col second font-face-gm">
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
          <div className="footer-col third font-face-gm">
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

export default withRouter(Home);