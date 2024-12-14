export default function InfiniteSlider({ children }) {
    return (
        <div id="logos" className="flex items-center relative">
            <div className="logo-slide flex">{children}</div>
            <div className="logo-slide flex">{children}</div>
        </div>
    );
}
