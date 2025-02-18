import type { ExtensionContext } from "vscode"
import { defineExtension } from "reactive-vscode"
import { useAnnotation } from "./annotation"
import { useCompletion } from "./completion"

const { activate, deactivate } = defineExtension(
  (context: ExtensionContext) => {
    useAnnotation(context)
    useCompletion(context)
  }
)
export { activate, deactivate }