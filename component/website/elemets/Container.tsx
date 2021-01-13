import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const CustomContainer = (children?: Props) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 1220px;
          width: 100%;
          padding: 0 20px;
          margin-left: auto;
          margin-right: auto;
        }

        @media only screen and (max-width: 599px) {
        }
      `}</style>
    </div>
  );
};
