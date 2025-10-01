import { useState } from "react";
import Modal from "./Modal";

interface AddBucketListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
}

export default function AddBucketListModal({ isOpen, onClose, onAdd }: AddBucketListModalProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="새로운 버킷리스트 추가🎈"
      footer={
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">취소</button>
          <button onClick={handleSubmit} className="flex-1 py-2 px-4 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition">추가</button>
        </div>
      }
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="린댕이랑 또 뭐하고 싶어~?"
        className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </Modal>
  );
}
