import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { people } from "../assets/data";

const Home = () => {
  const [peopleData, setPeopleData] = useState([])
  useEffect(() => {
    setPeopleData(people)
  }, [])
  
  return (
    <>
      <Container className="py-2">
        <Row className="justify-content-center">
          <Col sm="8" className="m-2">
            لديك {peopleData.length} مواعيد اليوم
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8" className="m-2">
            <div className="rectangle p-2">
              {peopleData.length
                ? peopleData.map((item, i) => (
                    <div key={i} className="d-flex mx-3 my-4 border-bottom">
                      <img
                        src={"profile.jpg"}
                        alt="img"
                        className="img-avatar my-2"
                      />
                      <div className="px-3">
                        <p className="d-inline fs-5">{item.name}</p>
                        <p className="fs-6">{item.date}</p>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={()=>{setPeopleData([])}} className="btn p-2">مسح الكل</button>
            <button onClick={()=>{setPeopleData(people)}} className="btn p-2">عرض البيانات</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
