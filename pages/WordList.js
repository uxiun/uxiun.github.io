import Def from "./Def"
export default function WordList(props) {
  return (
  <div className="list">
    {props.value.split(" ").map(word => <Def word={word} dic={props.dic} />)}
  </div>
  );
}