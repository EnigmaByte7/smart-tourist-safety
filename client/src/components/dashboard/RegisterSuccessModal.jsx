import React from "react";

const RegisterSuccessModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 text-white rounded-lg p-6 w-[350px] shadow-lg">
        
        <h2 className="text-lg font-bold mb-4 text-center text-green-400">
          Tourist Successfully Registered
        </h2>

        <div className="space-y-2 text-sm">
          <p><span className="font-semibold">Name:</span> {data.tourist.name}</p>
          <p><span className="font-semibold">Tourist ID:</span> {data.tourist.touristId}</p>
          <p><span className="font-semibold">Passport ID:</span> {data.tourist.passportId}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;