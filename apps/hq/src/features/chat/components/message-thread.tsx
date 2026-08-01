import type { UIMessage } from "ai";
import type { ComponentProps } from "react";

import {
  MessageScrollerContent,
  MessageScrollerItem,
} from "@repo/ui/components/message-scroller";

import { MessageBubble } from "@/features/chat/components/message-bubble";

interface MessageThreadProps extends ComponentProps<
  typeof MessageScrollerContent
> {
  messages: UIMessage[];
}

export function MessageThread({ messages, ...props }: MessageThreadProps) {
  return (
    <MessageScrollerContent {...props}>
      {messages.map((message) => (
        <MessageScrollerItem
          key={message.id}
          messageId={message.id}
          scrollAnchor={message.role === "user"}
        >
          <MessageBubble message={message}></MessageBubble>
        </MessageScrollerItem>
      ))}
    </MessageScrollerContent>
  );
}
