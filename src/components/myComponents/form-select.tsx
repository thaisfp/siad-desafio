import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-label";

export function FormSelectScrollable() {
  return (
    <div>
        <Label>Segmento: </Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione um segmento" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
