import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useImageStore = create(
  persist(
    (set) => ({
      images: [],
      setImage: (payload) =>
        set((state) => ({
          images: [...state.images, payload],
        })),
      deleteImage: (id) =>
        set((state) => ({
          images: state.images.filter((image) => image.id !== id),//.filter() loops through all images and keeps only those whose id is NOT equal to the clicked one.As a result, the image with the matching id gets removed.
        })),
    }),
    { name: "image-store" }
  )
);
