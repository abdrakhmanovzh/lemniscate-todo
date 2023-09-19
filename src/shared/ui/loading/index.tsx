import { LoadingIcon } from '@/assets/loaders';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={LoadingIcon} alt="loading..." width={50} height={50} />
    </div>
  );
};
