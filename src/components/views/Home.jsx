import Welcome from "../Welcome"
import LatestRelease from "../LatestRelease"
import React from "react"
import books from "../../data/romance.json"
// import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Welcome></Welcome>
      <LatestRelease books={books}></LatestRelease>
    </>
  )
}
