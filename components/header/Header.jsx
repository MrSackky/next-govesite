import Link from 'next/link';
import { Row, Col } from 'antd';
import { Button } from 'antd';

const Header = ({ props }) => {
  return (
    <navbar className="navbar">
      <Row>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </Row>
      <Row>
        <Link href="#Details">
          <a>คุณสมบัติ</a>
        </Link>
        <Link href="#Package">
          <a>แพคเพจ</a>
        </Link>
        <Link href="#Contact">
          <a>ติดต่อเรา</a>
        </Link>
      </Row>
      <Row>
        <Link href="/">
          <a>เข้าสู่ระบบ</a>
        </Link>
        |<Button type="primary">สมัครใช้งาน</Button>
      </Row>
    </navbar>
  );
};

export default Header;
