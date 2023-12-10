import Image from 'next/image'
"use client";
import React, { Component } from 'react'
import { Login } from './Login/Login'
export class page extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Login/>
        </div>
      </div>
    )
  }
}

export default page