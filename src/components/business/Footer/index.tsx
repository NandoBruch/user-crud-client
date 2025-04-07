import Link from "next/link";
import { memo } from "react";

const Footer = () => (
  <footer className="bg-gray-100">
    <div className="container mx-auto py-10">
      <ul className="flex justify-center flex-wrap text-sm text-slate-600">
        <li className="mx-2">
          <Link
            href="/"
            className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
          >
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href=""
            className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
          >
            About
          </Link>
        </li>
        <li className="mx-2">
          <Link
            href=""
            className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
          >
            Contact
          </Link>
        </li>
      </ul>
      <hr className="my-4" />
      <p className="text-center text-sm text-slate-700">
        &copy; 2022 Footer. All Rights Reserved
      </p>
    </div>
  </footer>
);

export default memo(Footer);
