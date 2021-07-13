import Link from 'next/link';
import { Row, Col } from 'antd';

const System = ({ props }) => {
  return (
    <div>
      <Row>
        <Col>
          <h2>กระดานข่าว คลังเอกสารราชการ</h2>
          <a>ระบบกระดานเว็บบอร์ด สำหรับการสนทนาผ่านเว็บบอร์ และคลังเอกสารสำหรับประชาสัมพันธ์ และให้ประชาชนดาวน์โหลด</a>
        </Col>
        <hr />
        <Col>
          <h2>ประกาศประกวดราคา ข่าวประชาสัมพันธ์</h2>
          <a>ระบบเพิ่มเนื้อหาเว็บ เพื่อให้ประชาชนเข้าถึงข้อมูล ข่าวสารของหน่วยงาน เช่น การประกวดราคา การประชาสัมพันธ์</a>
        </Col>
        <hr />
        <Col>
          <h2>ระบบร้องทุกข์และสำรวจความคิดเห็น</h2>
          <a>ระบบรับข้อมูลต่างๆ จากประชาชนผู้เข้าชมเว็บไซต์ เช่น การร้องทุกข์ ระบบสำรวจความคิดเห็น</a>
        </Col>
        <hr />
      </Row> 
      <Row>PICTURE</Row>
    </div>
  );
};

export default System;
