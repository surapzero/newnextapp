"use client";
import { useState, useEffect } from "react";

export default function Product() {
  // กำหนด url api
  const url = "https://express-api-zgse.onrender.com/api/product";
  const [data, setData] = useState([]);
  //สร้าง function สำหรับดึงข้อมูล
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  //ใช้ useeffect เพื่อเรียกใช้ function getData
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl my-6 font-bold">product</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
               ชื่อ
              </th>
              <th scope="col" className="px-6 py-3">
                ราคา
              </th>
              <th scope="col" className="px-6 py-3">
                จำนวน
              </th>
              <th scope="col" className="px-6 py-3">
                วันที่สร้าง
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.qty}</td>
                <td className="px-6 py-4">{item.createdate}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
