/***
 * @author Gurtej Singh
 * @description this explains type for passing react component of JSX as children
 *
 */
type ChildrenRenderingProps = {
    children :React.ReactNode
  };
  export const ChildrenRendering = (props: ChildrenRenderingProps) => {
   
    return (
      <div>
    {props.children}
      </div>
    );
  };
  