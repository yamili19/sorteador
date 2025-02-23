const ImageUploader = ({ setImagenBase64 }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagenBase64(reader.result); // Guardamos la imagen en base64
      };
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;

