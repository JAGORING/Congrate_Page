import { motion } from "framer-motion";

interface PolaroidProps {
    item: { src: string; text: string;}
    itemIdx: number;
  }
  
  export default function Polaroid({ item, itemIdx }: PolaroidProps) {
    const getRandomRotation = (index: number) => {
        const rotations = [-5, -3, -1, 0, 1, 3, 5];
        return rotations[index % rotations.length];
      };
      
    return (
        <motion.div
        key={item.text}
        className="relative z-10 w-[200px] sm:w-[180px] md:w-[220px] h-[240px] bg-white shadow-xl rounded-md transform origin-top transition-transform duration-300 hover:rotate-1 hover:scale-105"
        style={{
            rotate: `${getRandomRotation(itemIdx + Math.floor(Math.random() * 10) * 5)}deg`,
            marginTop: itemIdx % 2 === 0 ? "10px" : "0",
        }}
        whileHover={{ rotate: 0 }}
      >
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-md" />
        <img
          src={item.src}
          alt={`❤️ ${item.text}`}
          className="w-full h-full object-cover rounded-md border-4 border-white"
        />
      </motion.div>
    );
  }
  
  