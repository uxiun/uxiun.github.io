import {useState} from "react"
import Link from "next/link"
import dicyml from 'js-yaml-loader!../../wn-anki-parser/anki.act.n.02.yaml';
// import dicyml from 'js-yaml-loader!../public/wn-dic.yaml';
import WordList from "./WordList"
/*
function loadYamlFile(filename) {
  console.log("loadYamlFile")
  const fs = require('fs');
  const yaml = require('js-yaml');
  const yamlText = fs.readFileSync(filename, 'utf8')
  return yaml.safeLoad(yamlText);
}
*/

export default function Home() {
  const [value, setValue] = useState("")
  console.log("fruit"+ dicyml.fruit)
  return (
    <div>
      <Link href="./E">
        <a>ettt</a>
      </Link>
      <input className="input" onChange={e => setValue(e.target.value)}></input>
      <WordList value={value} dic={dicyml} />
    </div>
  )
}
/*
export async function getStaticProps() {
  const dic = loadYamlFile()
  return {
    props: {
      dic,
    },
  }
}
*/