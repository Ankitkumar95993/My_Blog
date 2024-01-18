import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
// import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import {useLocation} from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text:sm sm:text-xl font-semibold
      dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ankit's
        </span>
        Blogs
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoIosSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoIosSearch />
      </Button>
      
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <IoMoonSharp />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToPink" className="bg-gradient-to-">
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle/>
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path==='/'} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/about'} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path==='/projects'} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>

        </Navbar.Collapse>
    </Navbar>
  );
}
