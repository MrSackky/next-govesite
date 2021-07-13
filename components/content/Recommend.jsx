import Link from 'next/link';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const Recommend = ({ props }) => {
  return (
    <div>
      <Row>
        <Col>
          <h1>ระบบเว็บไซต์หน่วยงานสำเร็จรูป</h1>
        </Col>
        <Col>
          <h3>สร้างไซต์หน่วยงานท่านได้ตัวเอง ง่าย เร็ว สวยงาม</h3>
          <h3>MANAGE YOUR ORGANIZATION , EASY , FAST , BEAUTIFUL</h3>
        </Col>
        <Col><Button>ทดลองใช้งาน</Button></Col>
      </Row>
      <Row>PICTURE</Row>
    </div>
  );
};

export default Recommend;
