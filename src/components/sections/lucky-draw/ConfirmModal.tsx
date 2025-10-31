import Modal from "@/components/common/Modal";
import { useState } from "react";

interface PasswordConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  correctPassword: string;
}

export default function PasswordConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  correctPassword,
}: PasswordConfirmModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (input === correctPassword) {
      setError("");
      onConfirm();
      setInput("");
      onClose();
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="비밀번호 확인🔒"
      hideCloseButton
      footer={
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-2 px-4 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition"
          >
            확인
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </Modal>
  );
}
