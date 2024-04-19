import React from 'react';

const Homepage: React.FC = () => {
  // Dummy data for property photos
  const propertyPhotos: string[] = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    // Add more photo URLs as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Housing Rental Website</h1>
      <p className="text-lg mb-8">Find your perfect home with us!</p>

      <div className="grid grid-cols-2 gap-4">
        {propertyPhotos.map((photo, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img src={photo} alt={`Property ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
