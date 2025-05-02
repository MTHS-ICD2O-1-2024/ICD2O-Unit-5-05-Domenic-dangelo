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
  const lengthA = parseFloat(document.getElementById("sideA").value)
  const lengthB = parseFloat(document.getElementById("sideB").value)
  const lengthC = parseFloat(document.getElementById("sideC").value)

  // using the cosine law
  const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)
  const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)
  const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  console.log(angleA)
  console.log(angleB)
  console.log(angleC)
  console.log(sumOfAngles)

  if (sumOfAngles == 180) {
    if ((angleA == angleB) && (angleA == angleC)) {
      document.getElementById("result").innerHTML =
      'This is an equilateral  triangle!'
    } 
    else if ((angleA == angleB) || (angleA == angleC) || (angleB == angleC)) {
      document.getElementById("result").innerHTML =
      'This is an isosceles triangle!'
    } 
    else {
      document.getElementById("result").innerHTML =
      'This is a scalene triangle!'
    }
  } 
  else {
    document.getElementById("result").innerHTML =
    'This is not a triangle!'
  }
}
