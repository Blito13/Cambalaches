interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};