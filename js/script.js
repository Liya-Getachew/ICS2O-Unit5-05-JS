// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  })
}

/**
 * This function displays an alert.
 */
function triangleClick() {
  const sideA = parseInt(document.getElementById("sideA").value)
  const sideB = parseInt(document.getElementById("sideB").value)
  const sideC = parseInt(document.getElementById("sideC").value)

  const angleA =
    Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
    (180 / Math.PI)
  const angleB =
    Math.acos((sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)) *
    (180 / Math.PI)
  const angleC =
    Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
    (180 / Math.PI)

  if (angleA + angleB + angleC == 180) {
    document.getElementById("triangle-type").innerHTML = "yes"
  } else {
    document.getElementById("triangle-type").innerHTML = "no"
  }
}
