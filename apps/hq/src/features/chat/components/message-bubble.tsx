import type { UIMessage } from "ai";
import type { ComponentProps } from "react";

import { Avatar, AvatarFallback } from "@repo/ui/components/avatar";
import { Bubble, BubbleContent } from "@repo/ui/components/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@repo/ui/components/message";

interface MessageBubbleProps extends Omit<
  ComponentProps<typeof Message>,
  "align"
> {
  message: UIMessage;
}

export function MessageBubble({ message, ...props }: MessageBubbleProps) {
  const isUser = message.role === "user";
  return (
    <Message align={isUser ? "end" : "start"} {...props}>
      {isUser && (
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
      )}
      <MessageContent>
        {message.parts.map((part) => {
          switch (part.type) {
            case "text": {
              return (
                <Bubble key={part.type} variant={isUser ? "default" : "ghost"}>
                  <BubbleContent className="typeset typeset-chat">
                    {part.text}
                  </BubbleContent>
                </Bubble>
              );
            }
            case "reasoning": {
              return (
                <Bubble key={part.type} variant="ghost">
                  <BubbleContent className="typeset typeset-chat">
                    {part.text}
                  </BubbleContent>
                </Bubble>
              );
            }
          }
        })}
      </MessageContent>
    </Message>
  );
}
