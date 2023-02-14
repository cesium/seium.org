import React, { useEffect, useState } from "react";

import QRCode from "qrcode";

interface IProps {
  uuid: string;
}

const Canvas = ({ uuid }: IProps) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(`https://seium.org/attendees/${uuid}`).then(setSrc);
  }, [uuid]);

  return <img src={src} alt="qrcode" className="w-full object-contain"></img>;
};

export default Canvas;
