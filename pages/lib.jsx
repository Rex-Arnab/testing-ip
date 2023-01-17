import React, { useEffect, useState } from "react";
import { internalIpV6, internalIpV4 } from "internal-ip";

function lib() {
  const [ip4, setIp4] = useState(null);
  const [ip6, setIp6] = useState(null);
  useEffect(() => {
    internalIpV4().then((ip) => {
      setIp4(ip);
    });
    internalIpV6().then((ip) => {
      setIp6(ip);
    });
  }, []);
  return (
    <div>
      <h1>IPv4: {ip4}</h1>
      <h1>IPv6: {ip6}</h1>
    </div>
  );
}

export default lib;
