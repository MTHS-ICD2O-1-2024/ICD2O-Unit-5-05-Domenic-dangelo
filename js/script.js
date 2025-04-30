// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  const lengthAString = prompt("sideA")
  const lengthBString = prompt("sideB")
  const lengthCString = prompt("sideC")

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // using the cosine law
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  console.log(angleA)
  console.log(angleB)
  console.log(angleC)
  console.log(sumOfAngles)
  // input
  const sideA = document.getElementById("sideA").value
  const sideB = document.getElementById("sideB").value
  const sideC = document.getElementById("sideC").value

  // process
  if (sumOfAngles === 180) {
    if (sideA === sideB === sideC) {
    // output
    document.getElementById("result").innerHTML =
      "<p>Your triangle is an equilateral triangle.</p>"
    }

  else if(sideA === sideB || sideA === sideC || sideB === sideC){
    document.getElementById("result").innerHTML =
      "<p>Your triangle is an isosceles triangle.</p>"
    }

  else if(sideA != sideB || sideA != sideC || sideB != sideC){
    document.getElementById("result").innerHTML =
      "<p>Your triangle is an scalenea triangle.</p>"
    }
  }

    else {
    document.getElementById("result").innerHTML =
      "<p>This is not a triangle.</p>"
  }
}
