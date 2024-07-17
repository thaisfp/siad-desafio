"use client";
import { Button } from "@/components/ui/button"
import Close from "@/components/ui/icon-close"
 
export function ButtonGhost({ onClick }: { onClick: () => void }) {
    return (
      <Button variant="ghost" onClick={onClick}>
        <Close />
      </Button>
    );
  }