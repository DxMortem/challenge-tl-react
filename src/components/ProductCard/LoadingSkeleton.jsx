import GradientWhiteToBlack from '../../assets/GradientWhiteToBlack.svg';

const ProductCardLoadingSkeleton = () => {
  return (
    <div className="relative h-full w-full animate-pulse bg-slate-50 rounded-lg shadow-xl shadow-black/30 overflow-auto">
      <div className="relative w-full h-4/5 rounded-lg bg-slate-50">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={GradientWhiteToBlack}
        />
      </div>
      <div className="relative p-2 h-1/5 justify-between items-center bg-slate-50" />
    </div>
  );
};

export { ProductCardLoadingSkeleton };
