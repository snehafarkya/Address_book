
import { useState, useEffect } from 'react';
import {Card} from 'reactstrap'

const Imagetest = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        // style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      
      {imageUrl && selectedImage && (
        <h1 mt={2} textAlign="center">
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height={100} width={100} />
        </h1>
      )}
    </>
  );
};

export default Imagetest;
