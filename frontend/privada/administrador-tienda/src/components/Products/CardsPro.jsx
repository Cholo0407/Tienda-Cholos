export default function ShoeCard({ shoe }) {
    return (
      <div className="flex justify-between items-start mb-6">
        <div className="flex">
          <div className="mr-4">
            <img 
              src={shoe.image} 
              alt={shoe.name} 
              className="w-32 h-24 object-contain"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-sm font-medium">{shoe.name}</h3>
            <p className="text-xs text-gray-500">{shoe.color}</p>
            <p className="text-sm font-medium mt-1">$ {shoe.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex space-x-1">
            <button className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Stock: {shoe.stock}</p>
        </div>
      </div>
    );
  }