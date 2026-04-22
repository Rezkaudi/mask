import React from "react";
import Image from "next/image";

interface IImageUploadProps {
  label: string;
  images: (string | null)[];
  setImages: (images: (string | null)[], index: number) => void;
  productIndex: number;
}

const ImageUpload = ({
  label,
  setImages,
  images,
  productIndex,
}: IImageUploadProps) => {
  const compressImage = (
    file: File,
    maxWidth: number,
    maxHeight: number,
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      const canvas = document.createElement("canvas");
      const reader = new FileReader();

      reader.onload = (event) => {
        img.src = event.target?.result as string;
        img.onload = async () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          let quality = 0.7;
          let base64 = "";
          do {
            base64 = canvas.toDataURL("image/jpeg", quality);
            quality -= 0.05;
          } while (base64.length > 50 * 1024 && quality > 0.1);

          resolve(base64);
        };
      };

      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    imageIndex: number,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64Image = await compressImage(file, 800, 800);
        const updatedImages = [...images];
        updatedImages[imageIndex] = base64Image;
        setImages(updatedImages, productIndex);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const handleDelete = (imageIndex: number) => {
    const updatedImages = [...images];
    updatedImages[imageIndex] = null;
    setImages(updatedImages, productIndex);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {images.map((image, imageIndex) => (
          <div key={imageIndex} className="flex items-center gap-1">
            <div className="w-[225px] h-[140px] flex-1 border border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
              {!!image ? (
                <Image
                  src={image}
                  alt="Uploaded"
                  width={300}
                  height={150}
                  className="w-full h-full object-contain"
                />
              ) : (
                <label
                  htmlFor={`file-input-${productIndex}-${imageIndex}`}
                  className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
                >
                  <Image
                    src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/Image-Icon.svg"
                    alt="Upload Icon"
                    width={40}
                    height={40}
                  />
                </label>
              )}
            </div>

            {/* Input is now correctly referenced with an ID */}
            <input
              id={`file-input-${productIndex}-${imageIndex}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleImageChange(event, imageIndex)}
            />

            <div className="flex flex-col self-end gap-2">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById(`file-input-${productIndex}-${imageIndex}`)
                    ?.click()
                }
                className="w-[24px] h-[24px] border border-[#DCDCDC] bg-white rounded-full flex items-center justify-center"
                aria-label="Edit image"
              >
                <Image
                  src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/edit.svg"
                  alt="Edit"
                  width={11}
                  height={11}
                />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(imageIndex)}
                className="w-[24px] h-[24px] border border-[#DCDCDC] bg-white rounded-full flex items-center justify-center"
                aria-label="Delete image"
              >
                <Image
                  src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/trash.svg"
                  alt="Delete"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
