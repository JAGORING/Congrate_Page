import Modal from "./Modal";

interface ViewBucketListModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { id: number; text: string } | null;
}

export default function ViewBucketListModal({ isOpen, onClose, item }: ViewBucketListModalProps) {
  if (!item) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="린댕이랑 준댕이가 해야할 것💌"
      footer={
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition"
        >
          닫기
        </button>
      }
    >
      <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
        <p className="text-gray-800 text-center">{item.text}</p>
      </div>
    </Modal>
  );
}

