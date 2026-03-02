"use client";

import { Dialog } from "@headlessui/react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoId,
}: VideoModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      
      {/* Arka plan */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-7xl bg-white rounded-xl shadow-xl">
          
          {/* Kapat butonu */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white text-2xl"
          >
            ✕
          </button>


          {/* Video */}
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>


        </Dialog.Panel>
      </div>
    </Dialog>
  );
}