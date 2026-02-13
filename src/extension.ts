import * as vscode from "vscode";
import { callOpenAI } from "./openai";

export function activate(context: vscode.ExtensionContext) {
  console.log("ai-chat extension activated");

  const participant = vscode.chat.createChatParticipant(
    "ai-chat",
    async (request, chatContext, stream) => {
      try {
        stream.markdown("🤖 Thinking...\n\n");

        const reply = await callOpenAI(request.prompt);

        stream.markdown(reply);
      } catch (err: any) {
        stream.markdown(`❌ Error: ${err.message}`);
      }
    }
  );

  context.subscriptions.push(participant);
}

export function deactivate() {}
