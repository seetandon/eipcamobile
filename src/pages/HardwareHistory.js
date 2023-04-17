import app from "../base";
import React, { useState , useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../Auth";
import Logo from "../images/logo text.png" 
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"
import "../css/magnific-popup.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo2 from "../images/logo pic.png"


const HardwareHistory = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const [data , setData] = useState([]);
    const db = app.firestore();
    const [serial , setSerial]  = useState("");
    const [serialvalue , setSerialNumber]  = useState("");
    const Signout = () => {
      app.auth().signOut();
      history.push("/");
      window.location.reload(true)
    };

    const links = document.querySelectorAll('.profile-info li a');

    const [sidebar, setSidebar] = useState(false);

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = '#3E8E41';
      });
    
      link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '#4CAF50';
      });
    });

    const handleClick = () => {
        console.log(`Serial number entered: ${serial}`);
        setSerial(serialvalue);
    }
    
    const ToggleSideBar = () => {
      setSidebar(!sidebar);
    }
    

    
    useEffect(() => {
      const unsubscribe = db.collection("DATAEKG1").where("serial_id", "==", serial)
    .onSnapshot((querySnapshot) => {
      let dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
        dataArray.sort((lhs, rhs) => {
          if (lhs.status === "Notplotted" && rhs.status !== "Notplotted") {
            return -1;
          } else if (lhs.status !== "Notplotted" && rhs.status === "Notplotted") {
            return 1;
          } else if (lhs.Time !== rhs.Time) {
            return ((lhs.Time < rhs.Time) - 0.5) * 2;
          }
          return 0;
        });        

      });
      setData(dataArray);
      console.log(dataArray)
      console.log(serial)
    });
    return unsubscribe;
  }, [db, serial])

  
  
    return(
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
            <a className= "mx-3" onClick={ToggleSideBar}>
              <img style={{width: "40px", height: "40px"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </li>
        </center>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 
  <div className="font-face-gr">
  <header  className="ex-header bg-gray  " style={{zIndex: "1"}}  >
    <div className="container" >
      <div className="row">
        <div className="col-xl-10 offset-xl-1" >
          
          <center>
          <h1 className="font-face-gm">ประวัติการตรวจวัดค่า กราฟคลื่นไฟฟ้าหัวใจ ด้วยอุปกรณ์</h1>
          {/* <div class="form-group col-sm-8 col-form-label mb-2">
                
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder = "กรอกเลขเครื่อง" aria-describedby="emailHelp" maxlength="4"
                value={serialvalue}
                onChange={event => setSerialNumber(event.target.value)} style = {{marginButtom: "10px"}}></input>
                <button className="btn-solid-lg " style = {{marginTop: "10px"}} onClick={handleClick} >ค้นหา</button>
          </div> */}
          </center>
          
        </div>{" "}

        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
  </div>

  
  
 


  <center>
  

  <div style={{marginBottom: "17%"}}>.</div>
 
  <a className = "sidenav2" style={{marginTop: "25%", marginLeft: "40px", left: sidebar ? "0" : '-20%', transition: "350ms", width: "60%" }} onClick={ToggleSideBar}> 
    <center>
      <p style = {{marginBottom: "30%", color: "green"}}>Openside</p>
    </center>
  
  </a>
          
          {/* <div className="">
            <a className= "mx-3" onClick={ToggleSideBar}>
              <img style={{width: "40px", height: "40px" , marginTop: "", marginLeft: "", left: sidebar ? "0" : '-20%', transition: "350ms"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  />
          </a>
          </div> */}
        


  <div className="sidenav" style={{left: sidebar ? "0" : '-100%', transition: "350ms", width: "60%" }} sidebar={sidebar}>
              
              <center>
              <div class="mx-auto py-4 fs-1  mt-5">
              
              
              
              <img style={{width: "20%", height: "20%"}} src= "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"  /><br></br>
              <h1 className="font-face-gm">EIPCA ยินดีต้อนรับ</h1><br></br>
              <p class=" py-1  fw-bold " style={{fontSize: "80%"}}>{currentUser.displayName}</p>
              <p class=" py-1  " style={{fontSize: "50%"}}>{currentUser.email}</p>
              </div>

              
              
              
             
              <div class="form-group col-sm-8 col-form-label mb-2">
               
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder = "Input serial number" aria-describedby="emailHelp" maxlength="4"
                value={serialvalue}
                onChange={event => setSerialNumber(event.target.value)}></input>
                <div id="emailHelp" class="form-text">รหัสเครื่อง 4 ตัวของท่านอยู่ใต้บรรจุภัณฑ์ </div>
                </div>
              </center>
              <button className="btn-solid-lg " onClick={handleClick} >
                ตรวจผลการวัดค่า
                
                </button>
  </div>
  
  </center>
  
      
   
          <center>
            <ul style={{paddingInline: "20px"}}>
              {data.map((item) => (
              <Frame 
                Results = {item.Result}
                Status = {item.graph_status} 
                Time = {item.Time}
                File = {item.graph_image}
                History = {item.History}
              />
              ))}
             
            </ul>
          
            </center>
            
        </>
      
    );
  };

const Frame = ({ Results, Status, Time, File, History}) => {
  const [isDataShown, setIsDataShown] = useState(false);
  const [Formstatus, setFormstatus] = useState("");
  const db = app.firestore();
  const { currentUser } = useContext(AuthContext);
  let ResultRisk;

  useEffect (() => {
    const documentRef = db.collection('EIPCAFORM').doc(currentUser.uid);
    documentRef.get().then((doc) => {
      if (doc.exists) {
        let formstatusArray = [];
        formstatusArray.push(doc.data());
        const myStringValue = formstatusArray[0].Form_Result;
        setFormstatus(myStringValue);
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  })

  const toggleData = () => {
    setIsDataShown(!isDataShown);
  };
   
  if (Formstatus === "High_Risk" && Results === "Brugada syndrome") {
    ResultRisk = "High";
  } else if (Formstatus === "Medium_Risk" && Results === "Brugada syndrome") {
    ResultRisk = "High";
  } else if (Formstatus === "High_Risk" && Results === "Normal") {
    ResultRisk = "Low";
  } else if (Formstatus === "Medium_Risk" && Results === "Normal") {
    ResultRisk = "Low";
  } else if (Formstatus === "Low_Risk" && Results === "Brugada syndrome") {
    ResultRisk = "Medium";
  } else if (Formstatus === "No_Risk" && Results === "Brugada syndrome") {
    ResultRisk = "Medium";
  } else if (Formstatus === "Low_Risk" && Results === "Normal") {
    ResultRisk = "None";
  } else if (Formstatus === "No_Risk" && Results === "Normal") {
    ResultRisk = "None";
  }

  let ResultInput;
  if (ResultRisk === "High") {
    ResultInput = 
    <div>
    <h5 clasName="my-2" style={{color: "red"}}>คุณมีความเสี่ยงสูงที่จะมีภาวะผิดปกติเกี่ยวกับหัวใจ โปรดอ่านข้อแนะนำ</h5>
     <img
      className="img-fluid img-thumbnail "
      style={{
      borderColor: "Red",
      borderWidth: "2px",
      maxHeight: "40%",
      maxWidth: "100%"
       }}
        src={File}
        alt="Image from data"
        />
      <img className="img-fluid img-thumbnail "  style={{
            maxHeight: "40%",
            maxWidth: "40%"
              }}
            src="https://ecgwaves.com/wp-content/uploads/2017/03/brugada-syndrome-ecg-criteria-characteristics-brugadas-type-1-2-3.jpg"/>
      <br/>
      <br/>
      <a  className="btn-solid-lg page-scroll mx-5 " href="/SuggestionHealthy">
      ข้อแนะนำ
      </a>
      <a  className="btn-solid-lgr page-scroll " href="/SuggestionHospital">
      ค้นหาโรงพยาบาล
      </a>
      </div>
  } else if (ResultRisk === "Medium") {
    ResultInput = 
    <div>
    <h5 clasName="my-2" style={{color: "Darkorange"}}>คุณมีความเสี่ยงปานกลางที่จะมีภาวะผิดปกติเกี่ยวกับหัวใจ โปรดอ่านข้อแนะนำ</h5>
     <img
      className="img-fluid img-thumbnail "
      style={{
      borderColor: "Darkorange",
      borderWidth: "2px",
      maxHeight: "40%",
      maxWidth: "100%"
       }}
        src={File}
        alt="Image from data"
        />
      <img className="img-fluid img-thumbnail "  style={{
            maxHeight: "40%",
            maxWidth: "40%"
              }}
            src="https://ecgwaves.com/wp-content/uploads/2017/03/brugada-syndrome-ecg-criteria-characteristics-brugadas-type-1-2-3.jpg"/>
      <br/>
      <br/>
      <a  className="btn-solid-lg page-scroll mx-5 " href="/SuggestionHealthy">
      ข้อแนะนำ
      </a>
      <a  className="btn-solid-lgr page-scroll " href="/SuggestionHospital">
      ค้นหาโรงพยาบาล
      </a>
      </div>
  } else if (ResultRisk === "Low") {
    ResultInput = 
    <div>
    <h5 clasName="my-2" style={{color: "DarkGreen"}}>คุณมีความเสี่ยงต่ำที่จะมีภาวะผิดปกติเกี่ยวกับหัวใจ โปรดอ่านข้อแนะนำ</h5>
     <img
      className="img-fluid img-thumbnail "
      style={{
      borderColor: "DarkGreen",
      borderWidth: "2px",
      maxHeight: "40%",
      maxWidth: "100%"
       }}
        src={File}
        alt="Image from data"
        />
      <br/>
      <br/>
      <a  className="btn-solid-lg page-scroll mx-5 " href="/SuggestionHealthy">
      ข้อแนะนำ
      </a>
      <a  className="btn-solid-lgr page-scroll " href="/SuggestionHospital">
      ค้นหาโรงพยาบาล
      </a>
      </div>
  } else if (ResultRisk === "None") {
    ResultInput = 
    <div>
            <h5 clasName="my-2" style={{color: "green"}}>คุณไม่มีความเสี่ยงเกี่ยวกับหัวใจ</h5>
        <img
          className="img-fluid img-thumbnail"
          style={{
          borderColor: "green",
          borderWidth: "2px",
          maxHeight: "40%",
          maxWidth: "100%"
        }}
        src={File}
        alt="Image from data"
      />
      <br/>
      <br/>
       <a  className="btn-solid-lg page-scroll " href="/SuggestionHealthy">
      ข้อแนะนำ
      </a>
      </div>
  }
 
    return(
      
    <p>
    {Status === "Notplotted" && (
      <p className="bg-warning py-3 fs-5" >
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <div className="d-flex justify-content-center">
          <div className="spinner-border mr-3 " role="status"></div>
          <span className="fs-5 mx-2"> AI Processing...</span>
        </div>
      </p>
    )}  
    {Status === "Plotted and Predicted" && (
      <p className="bg-light py-3 fs-5" >
        <div className="fw-bold">Date&Time : {Time}</div> <br />
        <div>Status : {Status}</div> <br />
        <button className="btn-solid-lg" onClick={toggleData}>
          {isDataShown ? "Hide Results" : "Show Results"}
        </button>
       
      </p>
    )}


  {isDataShown && Status === "Plotted and Predicted" && (
    <div className="py-3 fs-5" style={{backgroundColor: ""}}>
      <h2 className="font-face-gm">ผลการตรวจสอบ</h2>
        <div>{ResultInput}</div>
    <br/>
    <br/>
   
  </div>
)}
  </p>
);
}

export default withRouter(HardwareHistory);