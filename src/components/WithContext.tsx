import { createContext } from "react";

const AppContext = createContext({} as { sendProp: string });
interface PropTypeFromApp {
  maxLevel: number
  propToConsumer: string
}

interface PropType {
  level: number;
  maxLevel: number;
}
const RecursiveComponent = ({ level, maxLevel }: PropType) => {
  const background = `hsl(${Math.random() * 360}, 100%, 75%)`;
  return (
    <div className="component" style={{ background }}>
      <h3>Level {level}</h3>
      {level < maxLevel && (
        <RecursiveComponent
          level={level + 1}
          maxLevel={maxLevel}
        />
      )}
      {level === maxLevel &&
        <AppContext.Consumer>
          {recivedProp => <p>Received prop: {recivedProp.sendProp}</p>}
        </AppContext.Consumer>
      }
    </div>
  );
};

const WithContext = ({ maxLevel, propToConsumer }: PropTypeFromApp) => {
  return (
    <>
      <AppContext.Provider value={{ sendProp: propToConsumer }}>

        <div className="component">
          <h1>Use Context Example</h1>
          <p>Use Context prop "<b>{propToConsumer}</b>"" to level <b>{maxLevel}</b></p>
          {1 <= maxLevel && (<RecursiveComponent
            level={1}
            maxLevel={maxLevel} />)}
        </div>

      </AppContext.Provider >
    </>
  );
}

export default WithContext