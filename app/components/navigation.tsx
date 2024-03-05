"use client";
import PocketBase from 'pocketbase';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';

export default function Navigation() {
  const path = usePathname();

  const test = async ()=>{
    const pb = new PocketBase("http://127.0.0.1:8090");
    const items = await pb.collection('posts').getList(1,20,{cache:'no-cache'});

    console.log(items);

  }

  useEffect(()=>{
    test();
  })
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}