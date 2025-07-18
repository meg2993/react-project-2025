export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TabButton component function executed');
	return (
		<li>
			<button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
		</li>);
}