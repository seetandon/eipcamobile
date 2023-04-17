import React, { useState , useContext, useEffect } from "react";
import app from "../base";
import { withRouter, Redirect} from "react-router-dom";
import { AuthContext } from "../Auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/logo text.png" 
import Risk from "../images/risk.png"
import Search from "../images/search.png"
import Logo2 from "../images/logo pic.png" 
import "../App.css"
import "../css/bootstrap.css"
import "../css/styles.css"
import Result from "../images/result.png"

export const Hardware = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [Formstatus, setFormstatus] = useState("");
  const db = app.firestore();
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
        SkipBtn = <p></p>
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  })

  let SkipBtn;
  let Text;
  if (Formstatus == "No_Risk"){
    SkipBtn = 
    <a className=" " style={{marginLeft: "70%"}} href="/Hardware">
       
    </a>
    Text =  "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "Low_Risk") {
    SkipBtn = 
    <a className=" " style={{marginLeft: "70%"}} href="/Hardware">
       
    </a>
    Text = "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "Medium_Risk") {
    SkipBtn = 
    <a className="" style={{marginLeft: "70%"}} href="/Hardware">
       
    </a>
    Text = "หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else if (Formstatus == "High_Risk") {
    SkipBtn = 
    <a className=" " style={{marginLeft: "70%"}} href="/Hardware">
       
    </a>
    Text ="หากท่านทราบผลประเมินภายใน 6 เดือนแล้วให้กดข้ามการทำแบบประเมิน"
  } else {
    SkipBtn = 
    <p></p>
  };
  
  const questions = [
    {
      img: "",
      question: "เปิดเครื่อง",
      answer: "yes",
      page: "1/9"
    },
    {
      img: "",
      question: "รอเชื่อม WIFI ไฟสถานะสีแดง",
      answer: "yes",
      page: "2/9"
    },
    {
      img: "",
      question: "ไฟสถานะสีฟ้า เริ่มวัดครั้งที่ 1",
      answer: "yes",
      page: "3/9"
    },
    {
      img: "",
      question: "วัดครั้งที่ 1 เสร็จสิ้น ไฟสถานะกลับมาเป็นสีเขียว",
      answer: "yes",
      page: "4/9"
    },
    {
      img: "",
      question: "เริ่มวัดครั้งที่ 2",
      answer: "yes",
      page: "5/9"
    },
    {
      img: "",
      question: "วัดครั้งที่ 2 เสร็จสิ้น ไฟสถานะกลับมาเป็นสีเขียว",
      answer: "yes",
      page: "6/9"
    },
    {
      img: "",
      question: "วัดครั้งที่ 3",
      answer: "yes",
      page: "7/9"
    },
    {
      img: "",
      question: "วัดเสร็จสิ้น นั่งนิ่งๆจนกว่าไฟจะกลับมาเป็นสีเขียว",
      answer: "yes",
      page: "8/9"
    },
    {
      img: "",
      question: "เสร็จสิ้น",
      answer: "yes",
      page: "9/9"
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuiz = () => {
    const db = app.firestore();
    const DBref = db.collection("EIPCAFORM").doc(currentUser.uid);
    if (currentQuestion === questions.length) {
      // Quiz completed, show results
      const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].answer
      );
      

      
      return(
      
      <div>
        
        
        <center>
        
        </center>
        <center>
  <div id="jobPanel" className="filter">
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Job */}
            <div className="job-container">
              <a style={{textDecoration: "none"}} href="/HardwareHistory">
              <img
                className="img6"
                src={Result}
              />
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
        
        
        
        
      </div>
      
      
      
      );
        

    } else {
      // Show current question
      const question = questions[currentQuestion];
      return (
        
        
        <div style={{marginTop: "20px",padding: "30px", borderRadius: "10px"}} className="bg-gray">
            <div>
             {SkipBtn}
            </div>
          <h2>{question.page}</h2>
          <img style={{marginBottom: "3%" , borderRadius: "10px" , width: "30%"}} src = {question.img}/>
          <h2>{question.question}</h2>
          <button className="mx-3 btn-solid-lg" onClick={() => handleAnswer("yes")}>ต่อไป</button>
          
        </div>
        
        
        
      );
    }
  };
  



  
  const Signout = () => {
    app.auth().signOut();
    history.push("/");
    window.location.reload(true)
  };

  

// Change file to Field for firestore

  return (
    <>
    <Navbar className="navbar fixed-top navbar-light" expand="lg">
      <Container className="container">
      <Navbar.Brand className="navbar-brand logo-image" href="/">
        <img src= {Logo} />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggler p-0 border-0"
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
  <center>  
   {/* Header */}
  <header className="ex-header bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-xl-10 offset-xl-1 my-3">
          <h1>วิธีการใช้ EIPCA Hardware</h1>
          <h4>โปรดทำตามขั้นตอนอย่างละเอียด และกด "ต่อไป" เมื่อทำเสร็จสิ้น</h4>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </header>{" "}
    <div>
      
    </div>
    <div>{renderQuiz()}</div>
    
    
</center>

<br/>
<br/>
<br/>
<br/>
      
    </>
  );
};

export default withRouter(Hardware);


