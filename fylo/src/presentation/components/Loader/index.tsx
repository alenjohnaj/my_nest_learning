import React, { Suspense, FC, ComponentType } from 'react';
import SuspenseLoader from 'src/presentation/components/SuspenseLoader';

interface LoaderProps {}

const Loader = <P extends object>(
  Component: ComponentType<P>
): FC<P & LoaderProps> => {
  const LoaderComponent: FC<P & LoaderProps> = (props) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

  return LoaderComponent;
};

export default Loader;
