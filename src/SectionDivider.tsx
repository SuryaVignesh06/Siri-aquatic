import { FishCurrent } from './FishCurrent';
export function SectionDivider({ className = '' }: { className?: string }) {
 return <div className={`fish-section-divider ${className}`} aria-hidden="true"><FishCurrent compact /></div>;
}
export default SectionDivider;
