// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { CompletionItem, CompletionItemKind } from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("哥你来了！");

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "style-class-intellisense-completion.helloWorld",
    async () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      console.log("哥你来了1！");
      const styleFile = await vscode.workspace.findFiles(
        "**/style/*.{css,less,scss}"
      );
      console.log(styleFile);

      vscode.window.showInformationMessage("哥你来了！");
    }
  );

  context.subscriptions.push(disposable);

  let disposableGeGe = vscode.commands.registerCommand(
    "style-class-intellisense-completion.gege",
    () => {
      console.log("我只心疼哥哥");
      vscode.window.showInformationMessage("我只心疼哥哥");
    }
  );
  context.subscriptions.push(disposableGeGe);

  vscode.window.onDidChangeActiveTextEditor((e) => {
    console.log(e?.document.getText());
  });
  const definition = {
    className: "lpzgege",
  };
  vscode.languages.registerCompletionItemProvider("typescript", {
    provideCompletionItems: () => {
      const completionItem = new CompletionItem(
        definition.className,
        CompletionItemKind.Variable
      );
      const completionClassName = `${definition.className}`;

      completionItem.filterText = completionClassName;
      completionItem.insertText = completionClassName;
      return [completionItem];
    },
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
