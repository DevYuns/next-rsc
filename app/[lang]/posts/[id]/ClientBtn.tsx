'use client';

import 'client-only';

import {useRouter} from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function ClientButton({children}: Props): React.ReactElement {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mt-8 border-[1px] border-solid p-2 rounded"
      onClick={() => {
        router.back();
      }}
    >
      {children}
    </button>
  );
}
