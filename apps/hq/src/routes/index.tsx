import { Button } from "@repo/ui/components/button";
import { toast } from "@repo/ui/components/toast";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-3">
      <h1 className="text-3xl font-bold">Welcome home!</h1>
      <Button
        onClick={() =>
          toast.add({
            type: "success",
            description: "Toast!",
          })
        }
      >
        Toast!
      </Button>
    </div>
  );
}
