export default function LetterEnvelope() {
    return (
      <div className="w-24 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-md shadow-lg relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-pink-300 rounded-b-md" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl">
          💌
        </div>
      </div>
    );
  }
  