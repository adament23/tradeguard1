import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TradeFilterProps {
  selectedAsset: string;
  onAssetChange: (value: string) => void;
}

export default function TradeFilter({
  selectedAsset,
  onAssetChange,
}: TradeFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">
        Filter by Asset
      </span>

      <Select
        value={selectedAsset}
        onValueChange={(value) => {
          if (value) {
            onAssetChange(value);
          }
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Asset" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="BTC">BTC</SelectItem>
          <SelectItem value="ETH">ETH</SelectItem>
          <SelectItem value="SOL">SOL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}