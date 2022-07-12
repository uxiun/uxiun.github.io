
export default function Def(props) {
  const word = props.word
  const dic = props.dic 
  const d = dic[word]
  let lem = ""
  let tree = ""
  if (d) {
    lem = "  "+d["glossjp"]
    tree = "  "+d["nodes_for_anki_jp"]
  }
  return <div>{word}{tree}{lem}</div>
}