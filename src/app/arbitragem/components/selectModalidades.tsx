import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SelectModalidade(){
    return(
        <div className="w-3/5 p-2 pl-20">
            <Select>
                <SelectTrigger className="rounded-none shadow-lg p-5 h-4/6 text-lg">
                    <SelectValue placeholder="Modalidades"/>
                </SelectTrigger>
            </Select>
        </div>
    )
}