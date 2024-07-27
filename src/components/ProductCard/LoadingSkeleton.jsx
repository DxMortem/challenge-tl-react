import GradientWhiteToBlack from '../../assets/GradientWhiteToBlack.svg';

const ProductCardLoadingSkeleton = () => {
  return (
    <div className="h-64 w-56 animate-pulse bg-slate-50 rounded-lg shadow-xl">
      <div className="relative w-full h-4/5 rounded-lg bg-slate-50">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={GradientWhiteToBlack}
        />
      </div>
      <div className="p-2 h-1/5 justify-between items-center bg-slate-50" />
    </div>
  );
};

export { ProductCardLoadingSkeleton };
