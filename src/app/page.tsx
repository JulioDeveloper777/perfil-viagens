"use client";

import { GalleryPhotos } from "@/data/gallery";
import Image from "next/image";
import { useState } from "react";
import AirplaneIcon from "../../public/AirplaneTilt.png";
import avatarIcon from "../../public/avatar.png";
import globeIcon from "../../public/Globe.png";
import ImageIcon from "../../public/Image.png";
import { Modal } from "./components/Modal";
import { PhotoItem } from "./components/PhotoItem";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  const openModal = (id: number) => {
    const photo = GalleryPhotos.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#F0EDF2] flex flex-col">
      <div className="bg-[#F0EDF2] bg-cover mx-10">
        <header className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3 justify-between">
            <Image
              src={globeIcon}
              alt="logo"
              className="lg:w-10 lg:h-10 w-7 h-7"
              priority
            />
            <h1 className="text-[#EF5F4C] lg:text-xl text-nowrap text-sm font-bold hidden lg:flex">
              Minhas Melhores Fotos
            </h1>
          </div>
          <div className="text-[#6C6C6C] gap-10 flex items-center lg:text-xl text-sm text-nowrap">
            <a href="">Explorar</a>
            <a href="">Minhas viagens</a>
          </div>
        </header>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center">
              <Image
                src={avatarIcon}
                alt="avatar"
                className="lg:w-64 lg:h-64 w-40 h-40 rounded-full object-cover"
                priority
              />
              <div className="flex flex-col ml-10 gap-10">
                <h1 className="text-2xl lg:text-5xl text-[#313131] font-semibold">
                  Isabela Torres
                </h1>
                <p className="text-[#6C6C6C] lg:w-96 w-36">
                  Amante de viagens, cultura e fotografias. Aqui
                  compartilho as histórias registradas em cada clique,
                  explorando cantinhos fascinantes do nosso planeta a partir da
                  movimentada cidade de São Paulo.
                </p>
              </div>
            </div>
            <div className="text-[#6C6C6C] lg:text-lg text-base text-nowrap flex flex-col mt-10 gap-4 lg:mr-32">
              <div className="flex gap-3">
                <Image 
                  src={AirplaneIcon} 
                  alt="airplane icon" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6" 
                />
                <h4>São Paulo, Brazil</h4>
              </div>
              <div className="flex gap-3">
                <Image
                  src={AirplaneIcon}
                  alt="airplane icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h4>5 países</h4>
              </div>
              <div className="flex gap-3">
                <Image 
                  src={ImageIcon} 
                  alt="image icon" 
                  width={24} 
                  height={24}
                  className="w-6 h-6" 
                />
                <h4>{GalleryPhotos.length} fotos</h4>
              </div>
            </div>
          </div>
        </div>
        <section className="max-w-7xl lg:grid-cols-4 grid grid-cols-2 grid-rows-3 gap-5 mt-24 m-auto">
          {GalleryPhotos.map((item, index) => (
            <PhotoItem
              key={item.id}
              photo={item}
              onClick={() => openModal(item.id)}
              priority={index < 4}
            />
          ))}
        </section>
        {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
        <div className="flex items-center mb-10 mt-10 justify-between text-[#6C6C6C] text-nowrap text-xs lg:flex-row flex-col gap-3 lg:text-base">
          <h6 className="">Minhas Melhores Fotos © 2024</h6>
          <div className="flex gap-10">
            <h6>Termos de uso</h6>
            <h4>Política de privacidade</h4>
          </div>
        </div>
      </div>
    </div>
  );
}