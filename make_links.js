'use strict';

const fs = require('fs');
const url = require('url');

let lines = fs.readFileSync('./links', 'utf-8').split('\n');

lines.forEach(line => {
  if (!line) return;
  console.log(line);

  const parsed = url.parse(line, true);
  // console.log(parsed);

  const hotelID = parsed.query['hotel-id'];
  console.log(hotelID);

  if (hotelID) {
    const base = url.parse('https://track.bttn.io/hotels/PPCHotelDetails');
    base.query = {
      hotelid: hotelID,
      btn_ref: 'org-50f4c427b35dc8e0',
      btn_web_url: line.trim()
    };
    delete base.search;
    console.log(url.format(base));
  }
});
// https://track.bttn.io/hotels/PPCHotelDetails?hotelid=261426&btn_ref=org-50f4c427b35dc8e0&btn_web_url=http%3A%2F%2Fwww.anrdoezrs.net%2Flinks%2F7799179%2Ftype%2Fdlg%2Fsid%2FISTrvlValentinesdayhotelsAH%2520%2Fhttps%3A%2F%2Fwww.hotels.com%2Fhotel%2Fdetails.html%3Fpa%3D2%26tab%3Ddescription%26hotel-id%3D261426%26q-room-0-adults%3D2%26ZSX%3D0%26SYE%3D3%26q-room-0-children%3D0
