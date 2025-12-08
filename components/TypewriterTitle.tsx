// components/TypewriterTitle.tsx
"use client"; // บรรทัดนี้สำคัญมาก บอกว่าเป็น Client Component

import { useEffect } from "react";

export const TypewriterTitle = () => {
  useEffect(() => {
    // แก้ไขข้อความที่คุณต้องการตรงนี้
    const text = "Suradit | Portfolio"; 
    let i = 0;
    
    // ตั้ง Title เริ่มต้นให้ว่างไว้ก่อน หรือจะเป็นชื่อ default ก็ได้
    document.title = ""; 

    const typingEffect = setInterval(() => {
      // พิมพ์ทีละตัว + ขีด Cursor (|)
      document.title = text.substring(0, i + 1) + "|";
      i++;

      if (i >= text.length) {
        clearInterval(typingEffect);
        // ลบ Cursor ออกเมื่อพิมพ์เสร็จ
        setTimeout(() => {
          document.title = text;
        }, 500);
      }
    }, 100); // ความเร็วในการพิมพ์ (ms)

    return () => clearInterval(typingEffect);
  }, []);

  return null; // Component นี้ไม่ต้องแสดงผลอะไรบนหน้าจอ
};