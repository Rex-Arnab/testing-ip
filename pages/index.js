import React, { useState, useEffect } from "react";
import axios from "axios";

function IpLocation() {
  const [ipv4, setIpv4] = useState("");
  const [ipv6, setIpv6] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function getIpInfo() {
      // Fetch IPv4 and IPv6 addresses
      const res = await axios("https://api.ipify.org?format=json");
      console.log(res);
      setIpv4(res.data.ip);

      // Fetch IPv6 address
      const res6 = await axios("https://api6.ipify.org?format=json");
      setIpv6(res6.data.ip);

      // Fetch location information
      const locRes = await axios(`http://ip-api.com/json/${res.ip}`);
      console.log(locRes.data)
      setLocation(`${locRes.data.city}, ${locRes.data.regionName}, ${locRes.data.country}`);
    }

    getIpInfo();
  }, []);

  return (
    <div>
      <p>IPv4: {ipv4}</p>
      <p>IPv6: {ipv6}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default IpLocation;
