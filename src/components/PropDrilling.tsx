interface PropTypeFromApp {
  propToDrill: string;
  maxLevel: number
}

interface PropType {
  prop: string;
  level: number;
  maxLevel: number;
}

const RecursiveComponent = ({ prop, level, maxLevel }: PropType) => {
  const background = `hsl(${Math.random() * 360}, 100%, 75%)`;

  return (
    <div className="component" style={{ background }}>
      <h3>Level {level}</h3>
      <p>Received prop: {prop}</p>
      {level < maxLevel && (
        <RecursiveComponent
          prop={prop}
          level={level + 1}
          maxLevel={maxLevel}
        />
      )}
    </div>
  );
};

const PropDrilling = ({ propToDrill, maxLevel }: PropTypeFromApp) => {

  return (
    <div className="component">
      <h1>Prop Drilling Example</h1>
      <p>Drilled down prop "<b>{propToDrill}</b>"" to level <b>{maxLevel}</b></p>
      {1 <= maxLevel && (<RecursiveComponent
        prop={propToDrill}
        level={1}
        maxLevel={maxLevel}
      />)}
    </div>
  );
}

export default PropDrilling;