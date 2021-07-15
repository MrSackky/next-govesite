import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/LayoutDefault';

import {
  Carousel,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Input,
  Card,
} from 'antd';

const { Text, Title } = Typography;

const { TextArea } = Input;

export default function Register(props) {
  const { user, origin } = props;

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Layout title="Government | Register Page" url={origin} origin={origin}>
      {/* <div className="mx-auto text-black rounded-xl shadow-xl w-96">
        <TextArea
          placeholder="ชื่อ-สกุล"
        />
        <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full h-8 text-white bg-transparent font-bold items-center justify-center hover:bg-white-500 hover:text-white py-2 px-4 border border-white-500 ">
          ขอใบเสนอราคา
        </Button>
      </div> */}
      <div class="mx-auto w-full max-w-sm pt-8 pb-8">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex items-center justify-between mt-2 mr-2 ml-2">
            <p class="">
              <a href="#" class="text-black no-underline hover:text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                กลับหน้าหลัก
              </a>
            </p>
            <p class="">
              มีบัญชีผู้ใช้แล้ว ?
              <a href="#" class="text-black no-underline hover:text-green-500">
                เข้าสู่ระบบ
              </a>
            </p>
          </div>
          <div class="text-left mt-8">
            <p class="text-xl font-bold">สมัครสมาชิก</p>
            <p class="text-gray-400 text-opacity-100">
              สมัครสมาชิกเพื่อใช้งานระบบเว็บไซต์หน่วยงานสำเร็จรูป
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              ชื่อหน่วยงาน
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="ชื่อหน่วยงาน"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              ชื่อผู้ติดต่อ
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="ชื่อผู้ติดต่อ"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              เบอร์โทร
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="เบอร์โทร"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              URL ใช้งาน
            </label>
            <div class="flex items-center justify-between">
              <p class="text-base text-center">government.com/</p>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="#"
                type="text"
                placeholder="ชื่อ url"
              ></input>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              อีเมลล์
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="อีเมลล์"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              รหัสผ่าน
            </label>

            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="รหัสผ่าน"
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="#">
              ยืนยันรหัสผ่าน
            </label>

            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
            ></input>
          </div>
          <div class="text-center">
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
    },
  };
}
