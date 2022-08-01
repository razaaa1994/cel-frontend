import { useEffect } from 'react';
import breakPointObserver from '../components/shared/BreakpointObserver';

const BreakPointContext = createContext();
const breakPoints = {
  mobile: '(max-width:659px)',
  tablet: '(min-width:660px) and (max-width:768px)',
  laptop: '(min-width:769px) and (max-width:1023px)',
  desktop: '(min-width:1024px)',
};

//
function BreakPointProviderWrapper(props) {
  const [breakPoint, setBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint);
  }, [breakPoint]);
  //
  return (
    <BreakPointContext.Provider value={''}>
      {props.children}
    </BreakPointContext.Provider>
  );
}

export { BreakPointProviderWrapper, BreakPointContext };
