export default function StatusBadge({ status }: { status: "original" | "updated" }) {
  return (
    <span className={`inline-block px-2 py-1 text-xs rounded ${status==="updated"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`}>
      {status === "updated" ? "Updated" : "Original"}
    </span>
  );
}