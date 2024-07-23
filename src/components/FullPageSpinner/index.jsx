import { Spinner as SpinnerComponent } from 'flowbite-react';

export const FullPageSpinner = () => {
  return (
    <div className="text-center">
      <SpinnerComponent
        className="absolute top-1/2 left-1/2 fill-black"
        size={'xl'}
      />
    </div>
  );
};
