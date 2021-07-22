// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { CompletionItem, CompletionItemKind } from "vscode";
import { readFileSync } from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  /* vscode.window.onDidChangeActiveTextEditor((e) => {
    console.log(e?.document.getText());
  }); */
  const definition = {
    className: "lpzgege",
  };
  vscode.languages.registerCompletionItemProvider(
    "typescript",
    {
      provideCompletionItems: async (doc, position, token, ctx) => {
        // const lessFile = readFileSync(doc.uri)
        console.log("fs----", doc.uri.fsPath);
        console.log(
          "vscode.workspace.workspaceFolders",
          vscode.workspace.workspaceFolders
        );

        const file = await vscode.workspace.findFiles(
          "/Users/xiaoxin/Desktop/styleDemo/",
          "**​/node_modules/**"
        );
        // console.log(file);

        const completionItem = new CompletionItem(
          definition.className,
          CompletionItemKind.Text
        );
        const completionClassName = `${definition.className}`;

        completionItem.filterText = completionClassName;
        completionItem.insertText = completionClassName;
        return [
          completionItem,
          new CompletionItem("djdj", CompletionItemKind.Text),
        ];
      },
    },
    ""
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
