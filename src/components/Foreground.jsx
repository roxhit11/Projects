import { motion } from "framer-motion";
import Card from "./Card";
import React, { useRef, useState } from "react";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Great things happen to those who don't stop believing, trying, learning, and being grateful. ― Roy T. Bennett",
      filesize: ".5md",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      }
    },
    {
      desc: "Find out who you are and do it on purpose. — Dolly Parton.",
      filesize: ".9md",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Pending",
        tagColor: "blue",
      }
    },
    {
      desc: "Fight for the things that you care about, but do it in a way that will lead others to join you.” —Ruth Bader Ginsburg",
      filesize: "",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Uploaded",
        tagColor: "green",
      }
    },
    {
      desc: "",
      filesize: "",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "New",
        tagColor: "green",
      },
    }
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
