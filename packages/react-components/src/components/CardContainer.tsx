type CardContainerProps = React.PropsWithChildren<{}>;

export const CardContainer = (props: CardContainerProps) => {
  return (
    <div className="w-card-container-width rounded-[19px] bg-black-700">
      {props.children}
    </div>
  );
};
