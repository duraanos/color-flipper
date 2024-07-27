'use strict';

const colors = ['#ffe3e3', '#ff8787', '#f03e3e', '#c92a2a', '#ffdeeb', '#f783ac', '#d6336c', '#a61e4d', '#f3d9fa', '#da77f2', '#ae3ec9', '#862e9c', '#e5dbff', '#9775fa', '#7048e8', '#5f3dc4', '#dbe4ff', '#748ffc', '#4263eb', '#364fc7', '#d0ebff', '#4dabf7', '#1c7ed6', '#1864ab', '#c5f6fa', '#3bc9db', '#1098ad', '#0b7285', '#c3fae8', '#38d9a9', '#0ca678', '#087f5b', '#d3f9d8', '#69db7c', '#37b24d', '#2b8a3e', '#e9fac8', '#a9e34b', '#74b816', '#5c940d', '#fff3bf', '#ffd43b', '#f59f00', '#e67700', '#ffe8cc', '#ffa94d', '#f76707', '#d9480f'];

const body = document.querySelector('body');
const hexCode = document.querySelector('span');
const btnChange = document.querySelector('button');

const generateNumber = function () {
  return Math.trunc(Math.random() * colors.length);
};

const changeBackground = function () {
  const randomNumber = generateNumber();
  body.style.backgroundColor = colors[randomNumber];
  hexCode.textContent = colors[randomNumber];
};

btnChange.addEventListener('click', changeBackground);
