const Section = ({ children, title }) => {
	return (
		<div className="form-section">
			<h3>{title}</h3>
			<div className="grid-container">{children}</div>
		</div>
	);
};
