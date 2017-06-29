import * as grammar from "./java.mode"
import {markLocals} from "./locals"
import {indent} from "./c_indent"

const scopes = ["Block", "FunctionDef", "Lambda"]

class JavaMode extends CodeMirror.GrammarMode {
  constructor(conf) {
    super(grammar)
    this.indentConf = {align: false, tabSize: conf.tabSize, indentUnit: conf.indentUnit}
  }

  token(stream, state) {
    return markLocals(super.token(stream, state), scopes, stream, state)
  }

  indent(state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  }
}

CodeMirror.defineMode("java", conf => new JavaMode(conf))
