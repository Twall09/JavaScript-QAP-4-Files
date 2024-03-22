// QAP 4 - JavaScript
// Description: Objects and Attributes for a Motel Customer
// Author: Tyler Wall
// Date(s): March 19th - March 21st

const motelCustomer = {
 first: "Sidney",
 last: "Crosby",
 birthDate: "August 7th, 1987",
 gender: "Male",
 roomPref: ["King Bed", "No Smoking", "Drinks", "Nice View"],
 payMethod: "Credit Card",

 mailAddress: {
  mailAddress: "87 Main Street",
  city: "Coolville",
  province: "NS",
  country: "Canada",
  postalCode: "A1L2P4",
 },

 phoneNum: "709-723-8787",

 checkIn: {
  date: "2024-02-14", // Needed to have date formatted like this to prevent NaN in calculations.
  time: "3:00pm",
 },
 checkOut: {
  date: "2024-02-17", // ""
  time: "11:00am",
 },

 getAge: function () {
  const today = new Date();
  const birthyear = new Date(this.birthDate).getFullYear();
  return today.getFullYear() - birthyear;
 },

 getDuration: function () {
  const checkInDate = new Date(this.checkIn.date);
  const checkOutDate = new Date(this.checkOut.date);
  const timePerDay = 1000 * 60 * 60 * 24;
  const calcTime = checkOutDate - checkInDate;
  const duration = Math.ceil(calcTime / timePerDay);
  return duration;
 },

 getParagraph: function () {},
};

// My main object was const motelCustomer.
// I added sub objects mailAddress, checkIn, and checkOut.
// In order to display an aString, you need to call these objects/functions properly.

const aString = `Hello my name is ${motelCustomer.first} ${
 motelCustomer.last
}, I am a ${motelCustomer.gender} and I was born on ${motelCustomer.birthDate}.\
 I am from ${motelCustomer.mailAddress.province},${
 motelCustomer.mailAddress.country
}, and I live on ${motelCustomer.mailAddress.mailAddress} in the city of ${
 motelCustomer.mailAddress.city
}, with a postal code ${motelCustomer.mailAddress.postalCode}.\
 Today is ${motelCustomer.checkIn.date}, it is ${
 motelCustomer.checkIn.time
} and I am looking to check in for ${motelCustomer.getDuration()} days. I will then check out ${
 motelCustomer.checkOut.date
} at ${motelCustomer.checkOut.time}.\
 As I check in to this Motel, I would like to request a ${motelCustomer.roomPref.join(
  ", "
 )}. I will pay using my ${motelCustomer.payMethod}.\
 My phone number is ${
  motelCustomer.phoneNum
 } if there are any problems. Thanks!`;

console.log(aString);
